<template>
  <section class="max-w-7xl mx-auto px-4 py-6">
    <!-- Header -->
    <div class="text-center space-y-2 mb-6">
      <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        MemVerse Demo
      </h1>
      <p class="text-gray-600 text-sm">
        Have a conversation with MemVerse. Everything you share will be remembered and displayed as Memory Cards.
      </p>
    </div>

    <!-- Main Layout: Conversation + Memory Cards -->
    <div class="grid lg:grid-cols-[1fr_400px] gap-6 h-[calc(100vh-200px)]">
      <!-- Left: Conversation Panel -->
      <div class="bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden">
        <!-- Conversation Header -->
        <div class="border-b p-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <el-icon class="text-blue-600"><i-ep-chat-line-round /></el-icon>
              <span class="font-semibold text-gray-800">Conversation</span>
            </div>
            <BaseButton size="small" @click="clearConversation" :disabled="conversationHistory.length === 0">
              <el-icon class="mr-1"><i-ep-delete /></el-icon>
              Clear
            </BaseButton>
          </div>
        </div>

        <!-- Messages Area -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          <div v-if="conversationHistory.length === 0" class="h-full flex items-center justify-center">
            <div class="text-center text-gray-400">
              <el-icon class="text-4xl mb-2"><i-ep-chat-dot-round /></el-icon>
              <p>Start a conversation with MemVerse</p>
              <p class="text-xs mt-2">Share information, ask questions, or attach files</p>
            </div>
          </div>

          <!-- Messages -->
          <div
            v-for="(message, index) in conversationHistory"
            :key="index"
            class="space-y-2"
          >
            <!-- User Message -->
            <div class="flex items-start gap-3 justify-end">
              <div class="flex-1 max-w-[80%]">
                <div class="bg-blue-500 text-white rounded-lg p-3 shadow-sm">
                  <p class="text-sm leading-relaxed whitespace-pre-wrap">{{ message.userMessage }}</p>
                  <!-- Attached Files in Message -->
                  <div v-if="message.files && message.files.length > 0" class="mt-2 pt-2 border-t border-blue-400">
                    <div class="flex flex-wrap gap-1">
                      <div
                        v-for="(file, fileIndex) in message.files"
                        :key="fileIndex"
                        class="flex items-center gap-1 px-2 py-1 bg-blue-400/30 rounded text-xs"
                      >
                        <el-icon><i-ep-document /></el-icon>
                        <span class="max-w-[100px] truncate">{{ file.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="text-xs text-gray-500 mt-1 block text-right">{{ formatTime(message.timestamp) }}</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <el-icon class="text-blue-600"><i-ep-user /></el-icon>
              </div>
            </div>

            <!-- AI Response -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <el-icon class="text-purple-600"><i-ep-robot /></el-icon>
              </div>
              <div class="flex-1 max-w-[80%]">
                <div class="bg-white border rounded-lg p-3 shadow-sm">
                  <p class="text-sm text-gray-700 leading-relaxed">{{ message.aiResponse }}</p>
                </div>
                <span class="text-xs text-gray-500 mt-1 block">{{ formatTime(message.timestamp) }}</span>
              </div>
            </div>
          </div>

          <!-- Loading Indicator -->
          <div v-if="isThinking" class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <el-icon class="text-purple-600"><i-ep-robot /></el-icon>
            </div>
            <div class="bg-white border rounded-lg p-3">
              <div class="flex items-center gap-2 text-gray-500">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                <span class="text-xs ml-2">MemVerse is thinking...</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="border-t p-4 bg-white">
          <div class="space-y-2">
            <!-- Attached Files Preview -->
            <div v-if="attachedFiles.length > 0" class="flex flex-wrap gap-2 pb-2">
              <div
                v-for="(file, index) in attachedFiles"
                :key="index"
                class="flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded text-xs text-gray-700"
              >
                <el-icon class="text-blue-600"><i-ep-document /></el-icon>
                <span class="max-w-[120px] truncate">{{ file.name }}</span>
                <el-icon 
                  class="text-red-500 cursor-pointer hover:text-red-700 ml-1" 
                  @click="removeFile(index)"
                >
                  <i-ep-close />
                </el-icon>
              </div>
            </div>

            <!-- Input and Buttons -->
            <div class="flex gap-2">
              <div class="flex-1 relative">
                <el-input
                  v-model="userInput"
                  type="textarea"
                  :rows="2"
                  placeholder="Type your message... (e.g., I'm allergic to peanuts, love hiking in the Rockies, and my dog's name is Luna)"
                  clearable
                  @keyup.ctrl.enter="sendMessage"
                  @keyup.meta.enter="sendMessage"
                />
              </div>
              <div class="flex flex-col gap-2">
                <!-- Attach Button -->
                <el-upload
                  :auto-upload="false"
                  :on-change="handleFileChange"
                  :show-file-list="false"
                  multiple
                  accept="*/*"
                >
                  <template #trigger>
                    <BaseButton size="default" type="default" title="Attach files">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </BaseButton>
                  </template>
                </el-upload>
                <BaseButton 
                  type="primary" 
                  @click="sendMessage"
                  :disabled="!canSend"
                  :loading="isThinking"
                >
                  <el-icon class="mr-1"><i-ep-position /></el-icon>
                  Send
                </BaseButton>
              </div>
            </div>
            <p class="text-xs text-gray-400 text-center">Press Ctrl+Enter or Cmd+Enter to send</p>
          </div>
        </div>
      </div>

      <!-- Right: Memory Cards Panel -->
      <div class="bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden">
        <!-- Memory Cards Header -->
        <div class="border-b p-4 bg-gradient-to-r from-purple-50 to-blue-50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <el-icon class="text-purple-600"><i-ep-collection /></el-icon>
              <span class="font-semibold text-gray-800">Memory Cards</span>
            </div>
            <el-tag type="success" size="small">{{ memoryCards.length }}</el-tag>
          </div>
        </div>

        <!-- Memory Cards List -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          <div v-if="memoryCards.length === 0" class="h-full flex items-center justify-center">
            <div class="text-center text-gray-400">
              <el-icon class="text-4xl mb-2"><i-ep-collection /></el-icon>
              <p class="text-sm">No memories yet</p>
              <p class="text-xs mt-1">Start a conversation to create memory cards</p>
            </div>
          </div>

          <!-- Memory Card Items -->
          <div
            v-for="(card, index) in memoryCards"
            :key="card.id"
            class="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg border-2 border-purple-300 p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="space-y-3">
              <!-- Card Header -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <el-icon class="text-purple-600"><i-ep-collection /></el-icon>
                  <span class="text-xs font-semibold text-gray-700">Memory #{{ memoryCards.length - index }}</span>
                </div>
                <span class="text-xs text-gray-500">{{ formatTime(card.timestamp) }}</span>
              </div>

              <!-- Card Content -->
              <div class="bg-white rounded-lg p-3 border border-purple-200">
                <p class="text-sm text-gray-700 leading-relaxed">{{ card.content }}</p>
              </div>

              <!-- Attached Files -->
              <div v-if="card.files && card.files.length > 0" class="space-y-2">
                <div class="flex items-center gap-1 text-xs font-medium text-gray-600">
                  <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span>Files ({{ card.files.length }})</span>
                </div>
                <div class="bg-white rounded p-2 border border-blue-200">
                  <div class="space-y-1">
                    <div
                      v-for="(file, fileIndex) in card.files"
                      :key="fileIndex"
                      class="flex items-center gap-1 text-xs text-gray-600"
                    >
                      <el-icon class="text-blue-500"><i-ep-document /></el-icon>
                      <span class="flex-1 truncate">{{ file.name }}</span>
                      <span class="text-gray-400">({{ formatFileSize(file.size) }})</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1">
                <el-tag type="success" size="small">Long-Term</el-tag>
                <el-tag v-if="card.files && card.files.length > 0" type="warning" size="small">
                  {{ card.files.length }} File(s)
                </el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useMemoryStore } from '@/stores/memory'
import { useNotification } from '@/composables/useNotification'
import { useLoading } from '@/composables/useLoading'

const { success } = useNotification()
const memory = useMemoryStore()

// Conversation
const userInput = ref<string>('')
const attachedFiles = ref<Array<{ name: string; size: number; type: string; file: File }>>([])
const conversationHistory = ref<Array<{
  userMessage: string
  aiResponse: string
  timestamp: number
  files?: Array<{ name: string; size: number; type: string }>
}>>([])
const messagesContainer = ref<HTMLElement | null>(null)
const { loading: isThinking, start: startThinking, stop: stopThinking } = useLoading()

// Memory Cards
const memoryCards = ref<Array<{
  id: string
  content: string
  timestamp: number
  files?: Array<{ name: string; size: number; type: string }>
}>>([])

const canSend = computed(() => {
  return userInput.value.trim().length > 0 || attachedFiles.value.length > 0
})

function handleFileChange(uploadFile: any) {
  const file = uploadFile.raw as File
  if (file) {
    attachedFiles.value.push({
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    })
  }
}

function removeFile(index: number) {
  attachedFiles.value.splice(index, 1)
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

function generateAIResponse(userMessage: string, hasFiles: boolean): string {
  const lowerMessage = userMessage.toLowerCase()
  
  // Acknowledge the information
  if (lowerMessage.includes('allerg') || lowerMessage.includes('peanut')) {
    return "Got it! I've noted that you're allergic to peanuts. I'll make sure to avoid recommending anything with peanuts in the future."
  }
  
  if (lowerMessage.includes('dog') || lowerMessage.includes('luna') || lowerMessage.includes('pet')) {
    return "That's wonderful! I've saved the information about your dog Luna. I'll remember this for our future conversations."
  }
  
  if (lowerMessage.includes('hiking') || lowerMessage.includes('rockies') || lowerMessage.includes('hobby')) {
    return "Great! I've noted that you love hiking in the Rockies. I can help you with hiking-related recommendations in the future."
  }
  
  if (hasFiles) {
    return "Thank you for sharing! I've saved the files you attached along with your message. I'll remember this information."
  }
  
  // Generic acknowledgment
  return "I've saved that information to my memory. I'll remember it for our future conversations. Is there anything else you'd like to share?"
}

async function sendMessage() {
  if (!canSend.value) return
  
  const message = userInput.value.trim()
  const files = attachedFiles.value.map(f => ({
    name: f.name,
    size: f.size,
    type: f.type
  }))
  
  const timestamp = Date.now()
  
  // Add user message to conversation
  conversationHistory.value.push({
    userMessage: message || '[Files attached]',
    aiResponse: '',
    timestamp,
    files: files.length > 0 ? files : undefined
  })
  
  // Create memory card
  if (message || files.length > 0) {
    const cardId = `memory-${timestamp}`
    memoryCards.value.unshift({
      id: cardId,
      content: message || 'Files attached',
      timestamp,
      files: files.length > 0 ? files : undefined
    })
    
    // Save to long-term memory store
    const memoryContent = message + (files.length > 0 ? ` [Attached ${files.length} file(s)]` : '')
    if (memoryContent.trim()) {
      memory.addLong(memoryContent.trim(), ['long-term-memory'])
    }
  }
  
  // Clear input
  userInput.value = ''
  attachedFiles.value = []
  
  // Scroll to bottom
  await nextTick()
  scrollToBottom()
  
  // Generate AI response
  startThinking('Thinking...')
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const aiResponse = generateAIResponse(message, files.length > 0)
  conversationHistory.value[conversationHistory.value.length - 1].aiResponse = aiResponse
  
  stopThinking()
  
  // Scroll to bottom again
  await nextTick()
  scrollToBottom()
  
  success('Message sent and saved to memory!')
}

function scrollToBottom() {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

function clearConversation() {
  conversationHistory.value = []
  success('Conversation cleared')
}

// Auto-scroll when new messages are added
watch(conversationHistory, () => {
  nextTick(() => {
    scrollToBottom()
  })
}, { deep: true })
</script>
