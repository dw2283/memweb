<template>
  <section class="max-w-7xl mx-auto px-4 py-10 space-y-10">
    <!-- Header -->
    <div class="text-center space-y-3">
      <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        MemVerse Demo
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Experience three types of memory: multimodal memory, short/long-term memory, and parametric memory. This is a complete memory system demonstration.
      </p>
    </div>

    <!-- Multimodal Memory Card -->
    <el-card shadow="hover" class="transition-all">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <el-icon class="text-blue-500"><i-ep-picture /></el-icon>
            <span class="font-semibold text-lg">Multimodal Memory: Image Understanding</span>
          </div>
          <el-tag type="info" size="small">Mock Demo</el-tag>
        </div>
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <UploadImage @analyze="analyzeImage" />
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-gray-700 flex items-center gap-2">
            <el-icon><i-ep-document /></el-icon>
            Analysis Result
          </h3>
          <div
            v-if="imageCaption"
            class="rounded-lg border-2 border-blue-100 p-4 bg-gradient-to-br from-blue-50 to-white text-gray-700 min-h-[8rem] flex items-center"
          >
            <div class="space-y-2 w-full">
              <div class="flex items-start gap-2">
                <el-icon class="text-blue-500 mt-0.5"><i-ep-chat-line-round /></el-icon>
                <p class="flex-1 leading-relaxed">{{ imageCaption }}</p>
              </div>
              <div v-if="imageAnalysis" class="mt-3 pt-3 border-t border-blue-100">
                <div class="text-xs text-gray-500 mb-1">Details:</div>
                <div class="text-sm text-gray-600">{{ imageAnalysis }}</div>
              </div>
            </div>
          </div>
          <div v-else-if="analyzing" class="rounded-lg border p-4 bg-gray-50 min-h-[8rem] flex items-center justify-center">
            <LoadingSpinner text="Analyzing image..." />
          </div>
          <div v-else class="rounded-lg border-2 border-dashed border-gray-200 p-4 bg-gray-50 min-h-[8rem] flex items-center justify-center">
            <div class="text-center text-gray-400">
              <el-icon class="text-3xl mb-2"><i-ep-upload /></el-icon>
              <p>Upload an image to generate a description</p>
            </div>
          </div>
          <div class="text-xs text-gray-500 bg-blue-50 p-2 rounded">
            <el-icon class="mr-1"><i-ep-info-filled /></el-icon>
            This simulates a vision model output. In production, integrate your backend vision API here.
          </div>
        </div>
      </div>
    </el-card>

    <!-- Short/Long Term Memory Card -->
    <el-card shadow="hover" class="transition-all">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <el-icon class="text-purple-500"><i-ep-collection /></el-icon>
            <span class="font-semibold text-lg">Memory Management: Short vs Long Term</span>
          </div>
          <div class="flex items-center gap-2">
            <el-tag type="success" size="small">Short: {{ memory.shortTermMemories.length }}</el-tag>
            <el-tag type="warning" size="small">Long: {{ memory.longTermMemories.length }}</el-tag>
          </div>
        </div>
      </template>
      <div class="space-y-6">
        <!-- Input Section -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
            <div class="flex items-center gap-2 text-purple-700 font-medium">
              <el-icon><i-ep-lightning /></el-icon>
              <span>Short-term Memory</span>
            </div>
            <el-input
              v-model="shortInput"
              placeholder="Enter short-term memory (valid during session)..."
              clearable
              @keyup.enter="addShortNote"
            >
              <template #prefix>
                <el-icon><i-ep-edit /></el-icon>
              </template>
            </el-input>
            <div class="flex gap-2">
              <BaseButton type="primary" @click="addShortNote" :disabled="!shortInput.trim()">
                <el-icon class="mr-1"><i-ep-plus /></el-icon>
                Add Short
              </BaseButton>
              <BaseButton @click="clearShortMem" :disabled="memory.shortTermMemories.length === 0">
                <el-icon class="mr-1"><i-ep-delete /></el-icon>
                Clear
              </BaseButton>
            </div>
            <div class="text-xs text-gray-600">
              <el-icon class="mr-1"><i-ep-info-filled /></el-icon>
              Short-term memory is only valid during the current session and will be cleared on page refresh.
            </div>
          </div>
          <div class="space-y-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <div class="flex items-center gap-2 text-amber-700 font-medium">
              <el-icon><i-ep-folder-opened /></el-icon>
              <span>Long-term Memory</span>
            </div>
            <el-input
              v-model="longInput"
              placeholder="Enter long-term memory (persisted storage)..."
              clearable
              @keyup.enter="addLongNote"
            >
              <template #prefix>
                <el-icon><i-ep-edit /></el-icon>
              </template>
            </el-input>
            <div class="flex gap-2">
              <BaseButton type="primary" @click="addLongNote" :disabled="!longInput.trim()">
                <el-icon class="mr-1"><i-ep-plus /></el-icon>
                Add Long
              </BaseButton>
              <BaseButton @click="clearLongMem" :disabled="memory.longTermMemories.length === 0">
                <el-icon class="mr-1"><i-ep-delete /></el-icon>
                Clear
              </BaseButton>
            </div>
            <div class="text-xs text-gray-600">
              <el-icon class="mr-1"><i-ep-info-filled /></el-icon>
              Long-term memory is saved in local storage and persists after page refresh.
            </div>
          </div>
        </div>

        <!-- Memory List Section -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="font-semibold text-gray-700 flex items-center gap-2">
              <el-icon><i-ep-list /></el-icon>
              All Memories
            </h3>
            <div class="flex items-center gap-2">
              <el-input
                v-model="memorySearch"
                placeholder="Search memories..."
                clearable
                size="small"
                style="width: 200px"
              >
                <template #prefix>
                  <el-icon><i-ep-search /></el-icon>
                </template>
              </el-input>
              <el-select v-model="memoryFilter" size="small" style="width: 120px" clearable>
                <el-option label="All" value="" />
                <el-option label="Short" value="short" />
                <el-option label="Long" value="long" />
              </el-select>
            </div>
          </div>
          <div class="rounded-lg border bg-white max-h-96 overflow-auto">
            <div v-if="filteredMemories.length === 0" class="p-8 text-center text-gray-400">
              <el-icon class="text-4xl mb-2"><i-ep-document-delete /></el-icon>
              <p>No memory records</p>
            </div>
            <ul v-else class="divide-y">
              <li
                v-for="m in filteredMemories"
                :key="m.id"
                class="p-4 hover:bg-gray-50 transition-colors"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 space-y-2">
                    <div class="flex items-center gap-2">
                      <el-tag
                        :type="m.type === 'short' ? 'success' : 'warning'"
                        size="small"
                        effect="plain"
                      >
                        {{ m.type === 'short' ? 'Short' : 'Long' }}
                      </el-tag>
                      <span class="text-gray-800 font-medium">{{ m.content }}</span>
                    </div>
                    <div class="flex items-center gap-3 text-xs text-gray-400">
                      <span class="flex items-center gap-1">
                        <el-icon><i-ep-time /></el-icon>
                        {{ formatTime(m.createdAt) }}
                      </span>
                      <span v-if="m.tags && m.tags.length > 0" class="flex items-center gap-1">
                        <el-icon><i-ep-collection-tag /></el-icon>
                        {{ m.tags.join(', ') }}
                      </span>
                    </div>
                  </div>
                  <BaseButton size="small" type="danger" plain @click="remove(m.id)">
                    <el-icon><i-ep-delete /></el-icon>
                  </BaseButton>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-card>

    <!-- Parametric Memory Card -->
    <el-card shadow="hover" class="transition-all">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <el-icon class="text-green-500"><i-ep-chat-line-round /></el-icon>
            <span class="font-semibold text-lg">Parametric Memory: Knowledge Q&A</span>
          </div>
          <el-tag type="info" size="small">Mock Demo</el-tag>
        </div>
      </template>
      <div class="space-y-4">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-1 space-y-3">
            <el-input
              v-model="q"
              placeholder="Enter a question (e.g., 'What is Vue 3?')"
              clearable
              @keyup.enter="ask"
            >
              <template #prefix>
                <el-icon><i-ep-question-filled /></el-icon>
              </template>
            </el-input>
            <BaseButton type="primary" @click="ask" :disabled="!q.trim() || asking" :loading="asking" block>
              <el-icon v-if="!asking" class="mr-1"><i-ep-search /></el-icon>
              <span v-if="!asking">Ask</span>
              <span v-else>Thinking...</span>
            </BaseButton>
            <div class="text-xs text-gray-500 bg-green-50 p-2 rounded">
              <el-icon class="mr-1"><i-ep-info-filled /></el-icon>
              Parametric memory refers to knowledge encoded in model weights. This simulates responses. In production, connect to a real LLM.
            </div>
          </div>
          <div class="md:col-span-2">
            <div class="rounded-lg border bg-gradient-to-br from-green-50 to-white min-h-[12rem] p-4">
              <div v-if="conversationHistory.length === 0" class="text-center text-gray-400 h-full flex items-center justify-center">
                <div>
                  <el-icon class="text-4xl mb-2"><i-ep-chat-dot-round /></el-icon>
                  <p>Enter a question to start a conversation</p>
                </div>
              </div>
              <div v-else class="space-y-4">
                <div
                  v-for="(item, idx) in conversationHistory"
                  :key="idx"
                  class="space-y-2"
                >
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <el-icon class="text-green-600"><i-ep-user /></el-icon>
                    </div>
                    <div class="flex-1 bg-white rounded-lg p-3 border border-gray-200">
                      <p class="text-gray-800">{{ item.question }}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <el-icon class="text-blue-600"><i-ep-robot /></el-icon>
                    </div>
                    <div class="flex-1 bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <p class="text-gray-700 leading-relaxed">{{ item.answer }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="conversationHistory.length > 0" class="mt-3 text-right">
              <BaseButton size="small" @click="clearConversation">
                <el-icon class="mr-1"><i-ep-delete /></el-icon>
                Clear History
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <!-- Info Section -->
    <el-card shadow="never" class="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
      <div class="text-center space-y-2">
        <h3 class="font-semibold text-gray-700">About the Memory System</h3>
        <p class="text-sm text-gray-600 max-w-3xl mx-auto">
          MemVerse implements three types of memory systems: <strong>multimodal memory</strong> for understanding non-text content like images,
          <strong>short/long-term memory</strong> for managing context information, and <strong>parametric memory</strong> for storing model knowledge.
          These memory types together form a complete AI memory system.
        </p>
      </div>
    </el-card>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import UploadImage from '@/components/base/UploadImage.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import LoadingSpinner from '@/components/base/LoadingSpinner.vue'
import { useMemoryStore } from '@/stores/memory'
import { useNotification } from '@/composables/useNotification'
import { useLoading } from '@/composables/useLoading'

const { success } = useNotification()

// Multimodal (mock)
const imageCaption = ref<string>('')
const imageAnalysis = ref<string>('')
const { loading: analyzing, start: startAnalyzing, stop: stopAnalyzing } = useLoading()

async function analyzeImage(file: File) {
  startAnalyzing('Analyzing image...')
  imageCaption.value = ''
  imageAnalysis.value = ''
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  const name = file.name.replace(/\.[^.]+$/, '')
  imageCaption.value = `Analysis result for image "${name}": This is a high-quality multimodal memory example demonstrating how the system understands and describes visual content.`
  imageAnalysis.value = `File size: ${(file.size / 1024).toFixed(2)} KB | Type: ${file.type} | The image has been successfully processed and converted to a text description for subsequent memory retrieval and context understanding.`
  
  stopAnalyzing()
  success('Image analysis completed (mock)')
}

// Memory store
const memory = useMemoryStore()
const shortInput = ref<string>('')
const longInput = ref<string>('')
const memorySearch = ref<string>('')
const memoryFilter = ref<'short' | 'long' | ''>('')

const filteredMemories = computed(() => {
  let result = memory.allMemories
  
  if (memoryFilter.value) {
    result = result.filter(m => m.type === memoryFilter.value)
  }
  
  if (memorySearch.value.trim()) {
    const search = memorySearch.value.toLowerCase()
    result = result.filter(m => 
      m.content.toLowerCase().includes(search) ||
      m.tags?.some(tag => tag.toLowerCase().includes(search))
    )
  }
  
  return result.sort((a, b) => b.createdAt - a.createdAt)
})

function addShortNote() {
  if (!shortInput.value.trim()) return
  memory.addShort(shortInput.value.trim())
  shortInput.value = ''
  success('Added short-term memory')
}

function addLongNote() {
  if (!longInput.value.trim()) return
  memory.addLong(longInput.value.trim())
  longInput.value = ''
  success('Added long-term memory')
}

function clearShortMem() {
  memory.clearShort()
  success('Cleared short-term memories')
}

function clearLongMem() {
  memory.clearLong()
  success('Cleared long-term memories')
}

const remove = memory.remove

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`
  return date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

// Parametric (mock Q&A)
const q = ref<string>('')
const conversationHistory = ref<Array<{ question: string; answer: string }>>([])
const { loading: asking, start: startAsking, stop: stopAsking } = useLoading()

async function ask() {
  const text = q.value.trim()
  if (!text) return
  
  startAsking('Thinking...')
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const question = text
  let answer = ''
  
  const lowerText = text.toLowerCase()
  if (lowerText.includes('vue')) {
    answer = 'Vue 3 is a progressive framework for building user interfaces. It uses a reactive component model and provides Composition API, better TypeScript support, smaller bundle size, and improved performance. Core features include reactivity system, component-based development, and virtual DOM.'
  } else if (lowerText.includes('pinia')) {
    answer = 'Pinia is the officially recommended state management library for Vue, serving as the successor to Vuex. Pinia is lightweight, modular, and TypeScript-friendly. It provides a simpler API, supports Composition API, and doesn\'t require module registration.'
  } else if (lowerText.includes('memory')) {
    answer = 'Memory systems are core components in AI applications. MemVerse implements three types of memory: 1) Multimodal memory - processes non-text content like images and audio; 2) Short/long-term memory - manages context information, with short-term valid during sessions and long-term persisted; 3) Parametric memory - knowledge stored in model weights.'
  } else if (lowerText.includes('ai') || lowerText.includes('artificial intelligence')) {
    answer = 'Artificial Intelligence (AI) is a branch of computer science that aims to create systems capable of performing tasks that typically require human intelligence. Modern AI includes machine learning, deep learning, natural language processing, and more. AI applications are widespread, including image recognition, voice assistants, autonomous vehicles, and recommendation systems.'
  } else {
    answer = 'This is a mocked parametric memory response. In production, the system would retrieve answers from knowledge encoded in model weights. Try asking about Vue, Pinia, memory systems, or AI-related topics.'
  }
  
  conversationHistory.value.push({ question, answer })
  q.value = ''
  stopAsking()
}

function clearConversation() {
  conversationHistory.value = []
  success('Cleared conversation history')
}
</script>


