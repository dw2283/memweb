<template>
  <!-- Hero Section - Apple Style -->
  <section class="relative bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Subtle background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
    </div>
    <div class="relative w-full h-screen px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
      <div class="max-w-5xl mx-auto w-full space-y-6">
        <div class="text-center space-y-4">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
            Your AI isn't intelligent<br>
            <span class="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">until it remembers</span>
          </h1>
          <div class="text-sm sm:text-base max-w-4xl mx-auto leading-relaxed space-y-2">
            <p class="text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              Plug MemVerse to your AI agent, unlock memory-powered intelligence.
            </p>
            <p class="text-xs sm:text-sm text-gray-400">
              One-line install. Works with any LLM. No complex setup.
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-3">
          <a 
            href="https://github.com/dw2283/memweb" 
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs font-medium min-w-[160px]"
          >
            GitHub
          </a>
          <button 
            @click="goToResearch"
            class="inline-flex items-center justify-center px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-900 rounded-full hover:border-gray-300 hover:shadow-md hover:scale-105 transition-all duration-200 text-xs font-medium min-w-[160px]"
          >
            Explore Research
          </button>
        </div>

        <!-- Video Container -->
        <div class="relative w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <div class="aspect-video w-full max-h-[400px]">
            <iframe
              v-if="videoUrl"
              :src="videoUrl"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div class="text-center">
                <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-inner">
                  <el-icon class="text-gray-600 text-2xl"><i-ep-video-play /></el-icon>
                </div>
                <p class="text-gray-500 text-xs">Video Demo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why MemVerse -->
  <section class="bg-white py-20 sm:py-24 md:py-32">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Why MemVerse?
          </h2>
          <p class="text-base text-gray-500 max-w-2xl mx-auto mb-8">
            Memory infrastructure that adapts to every use-case.
          </p>
          <p class="text-lg sm:text-xl text-gray-900 font-light">
            Works with every model. Faster. Better. Cheaper.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <!-- Fast Integration -->
          <div class="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
            <div class="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <el-icon class="text-blue-600 text-2xl"><i-ep-lightning /></el-icon>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Fast Integration</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              One-line install. Works with any LLM framework. No complex setup required.
            </p>
          </div>

          <!-- Multimodal Support -->
          <div class="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
            <div class="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
              <el-icon class="text-purple-600 text-2xl"><i-ep-connection /></el-icon>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Multimodal Support</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Remember text, images, audio, and video. Process and retrieve across all modalities.
            </p>
          </div>

          <!-- Cost Efficient -->
          <div class="text-center sm:col-span-2 md:col-span-1 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
            <div class="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
              <el-icon class="text-green-600 text-2xl"><i-ep-data-line /></el-icon>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Cost Efficient</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              <span class="font-medium text-gray-900">90% token savings.</span> 91% lower latency. Scale without breaking the bank.
            </p>
          </div>
        </div>

        <!-- Performance Metrics -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
            <div class="text-5xl sm:text-6xl font-light bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">10×</div>
            <h3 class="text-base font-semibold text-gray-900 mb-3">Faster Recall</h3>
            <p class="text-sm text-gray-600 leading-relaxed">MemVerse retrieves memories in milliseconds — up to 10× faster than traditional RAG systems.</p>
          </div>

          <div class="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
            <div class="text-5xl sm:text-6xl font-light bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-4">89%</div>
            <h3 class="text-base font-semibold text-gray-900 mb-3">Token Savings</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Reduce token costs by 89% while maintaining accuracy with efficient memory compression.</p>
          </div>

          <div class="text-center sm:col-span-2 md:col-span-1 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
            <div class="text-5xl sm:text-6xl font-light bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-4">70%</div>
            <h3 class="text-base font-semibold text-gray-900 mb-3">Lower Cost</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Enterprise-grade memory at 70% lower cost than bloated infrastructure solutions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Intelligence without memory is just randomness.
        </h2>
        <p class="text-base text-gray-500 mb-10">
          Start building with MemVerse today.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://github.com/dw2283/memweb" 
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-medium min-w-[180px]"
          >
            GitHub
          </a>
          <button 
            @click="goToResearch"
            class="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-full hover:border-gray-300 hover:shadow-md hover:scale-105 transition-all duration-200 text-sm font-medium min-w-[180px]"
          >
            Explore Research
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="bg-white py-16 sm:py-20 md:py-24">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-base text-gray-500">
            Everything you need to know about MemVerse
          </p>
        </div>

        <div class="space-y-1">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-4 py-6 text-left flex items-center justify-between focus:outline-none rounded-lg"
            >
              <h3 class="text-sm font-medium text-gray-900 pr-8">
                {{ faq.question }}
              </h3>
              <el-icon 
                class="text-gray-400 flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': faq.open }"
              >
                <i-ep-arrow-down />
              </el-icon>
            </button>
            <div 
              v-show="faq.open"
              class="px-4 pb-6 text-gray-600 leading-relaxed"
            >
              <p class="text-sm">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="bg-gray-50 py-16 sm:py-20">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-2xl mx-auto text-center">
        <h3 class="text-xl font-semibold text-gray-900 mb-6">Stay Updated</h3>
        <el-form :model="form" class="grid sm:grid-cols-[1fr_auto] gap-3">
          <el-input 
            v-model="form.email" 
            placeholder="Enter your email for updates" 
            size="large"
          />
          <BaseButton type="primary" :loading="loading" @click="subscribe" size="large" class="w-full sm:w-auto">
            Notify Me
          </BaseButton>
    </el-form>
        <p class="text-xs text-gray-500 mt-4">
      By subscribing you agree to our privacy policy.
    </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import { useNotification } from '@/composables/useNotification'
import { useLoading } from '@/composables/useLoading'
import { subscribeEmail } from '@/services/site'

const router = useRouter()
const { success, error } = useNotification()
const { loading, start, stop } = useLoading(false, 'Submitting...')

const form = ref({ email: '' })

// Video demo URL - Replace with your actual video URL (YouTube, Vimeo, etc.)
// Example: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
// Or: 'https://player.vimeo.com/video/YOUR_VIDEO_ID'
const videoUrl = ref<string>('')

// FAQ data
const faqs = ref([
  {
    question: 'What is MemVerse?',
    answer: 'MemVerse is a model-agnostic, plug-and-play memory framework that equips AI agents with lifelong multimodal learning capabilities. It bridges fast parametric recall and hierarchical retrieval-based memory to solve catastrophic forgetting, poor long-horizon reasoning, and disconnected multimodal understanding.',
    open: false
  },
  {
    question: 'How does MemVerse work?',
    answer: 'MemVerse integrates three core memory components: Hierarchical Retrieval-Based Memory (short-term and long-term), Parametric Memory (a lightweight neural model), and a Memory Orchestrator that manages storage, retrieval, and integration across all memory types.',
    open: false
  },
  {
    question: 'Which models does MemVerse support?',
    answer: 'MemVerse is model-agnostic and works with any LLM or VLM, including GPT-4, Claude, Gemini, and open-source models. No model retraining is required—simply plug it into your existing AI application.',
    open: false
  },
  {
    question: 'What types of data can MemVerse remember?',
    answer: 'MemVerse supports multimodal memory, meaning it can remember and retrieve text, images, audio, and video. It converts all modalities into aligned textual representations while maintaining links to the original sensory data.',
    open: false
  },
  {
    question: 'How fast is MemVerse compared to traditional RAG?',
    answer: 'MemVerse retrieves memories in milliseconds—up to 10× faster than traditional RAG systems. It achieves 89% faster query times while maintaining comparable accuracy.',
    open: false
  },
  {
    question: 'What are the cost benefits of using MemVerse?',
    answer: 'MemVerse reduces token costs by 89% through efficient memory compression, achieves 91% lower latency, and provides enterprise-grade memory at 70% lower cost than traditional infrastructure solutions.',
    open: false
  },
  {
    question: 'How do I get started with MemVerse?',
    answer: 'Getting started is simple—just one line of code. MemVerse is designed for plug-and-play integration with any LLM framework. Setup takes less than 5 minutes. Check out our demo or documentation to get started.',
    open: false
  }
])

// Research images configuration
const researchImages = ref<Array<{ url: string; alt?: string; title?: string; description?: string }>>([
  { 
    url: '/images/research/intro.PNG', 
    alt: 'Research Introduction', 
    title: 'Introduction', 
    description: 'Overview of our research methodology and findings' 
  },
])

function toggleFaq(index: number) {
  faqs.value[index].open = !faqs.value[index].open
}

function goDocs() {
  router.push('/docs')
}

function goDemo() {
  router.push('/demo')
}

function goToResearch() {
  router.push('/research')
}

function goToUseCases() {
  router.push('/use-cases')
}

async function subscribe() {
  if (!form.value.email) {
    error('Please enter email.')
    return
  }
  try {
    start()
    await subscribeEmail(form.value.email)
    success('Thanks! We will be in touch.')
    form.value.email = ''
  } catch (e: any) {
    error(e?.message || 'Subscribe failed')
  } finally {
    stop()
  }
}
</script>
