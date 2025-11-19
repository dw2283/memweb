<template>
  <!-- Hero Section with Dark Theme -->
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border-b border-gray-800">
    <!-- Animated Background Particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div class="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4 animate-fade-in">
            Personalize your AI app with long-term memory
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 animate-fade-in-up">
            <span class="text-white">Your AI isn't intelligent</span><br class="hidden sm:block">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">until it remembers</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up" style="animation-delay: 0.2s;">
            Delight your users with blazing fast and scalable memory for your AI application. 
            Interoperable between models and modalities.
          </p>
          <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 animate-fade-in-up" style="animation-delay: 0.4s;">
            <BaseButton type="primary" size="large" @click="goDemo" class="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 shadow-lg shadow-blue-500/50">
              Try Demo →
            </BaseButton>
            <BaseButton size="large" @click="goDocs" class="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white hover:bg-gray-700/50">
              Explore Docs
            </BaseButton>
          </div>
        </div>

        <!-- Simple Integration Flow -->
        <div class="mt-8 sm:mt-12 md:mt-16 max-w-5xl mx-auto animate-fade-in-up" style="animation-delay: 0.6s;">
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-6 sm:p-8 md:p-10 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
            <p class="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold animate-gradient">Plug MemVerse</span>
              <span class="text-gray-300"> to your AI agent, </span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold animate-gradient">unlock memory-powered intelligence.</span>
            </p>
            <p class="text-center text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm px-2">
              One-line install. Works with any LLM. No complex setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why MemVerse -->
  <section class="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Why MemVerse?
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4 mb-4">
            Memory infrastructure that adapts to every use-case.
          </p>
          <p class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 px-4">
            Works with every model.<br class="hidden sm:block">Faster. Better. Cheaper.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          <!-- Fast Integration -->
          <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all group">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <el-icon class="text-blue-400 text-2xl"><i-ep-lightning /></el-icon>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-3">Fast Integration</h3>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
              One-line install. Works with any LLM framework. No complex setup required.
            </p>
          </div>

          <!-- Multimodal Support -->
          <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-purple-500/50 transition-all group">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <el-icon class="text-purple-400 text-2xl"><i-ep-connection /></el-icon>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-3">Multimodal Support</h3>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
              Remember text, images, audio, and video. Process and retrieve across all modalities.
            </p>
          </div>

          <!-- Cost Efficient -->
          <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-green-500/50 transition-all sm:col-span-2 md:col-span-1 group">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <el-icon class="text-green-400 text-2xl"><i-ep-data-line /></el-icon>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-3">Cost Efficient</h3>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
              <span class="font-semibold text-blue-400">90% token savings.</span> 91% lower latency. Scale without breaking the bank.
            </p>
          </div>
        </div>

        <!-- Performance Metrics -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div class="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl sm:rounded-2xl border border-blue-500/30 p-6 sm:p-8 shadow-lg hover:shadow-blue-500/20 transition-all group">
            <div class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">10×</div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Faster Recall</h3>
            <p class="text-gray-400 text-sm sm:text-base">MemVerse retrieves memories in milliseconds — up to 10× faster than traditional RAG systems.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl sm:rounded-2xl border border-purple-500/30 p-6 sm:p-8 shadow-lg hover:shadow-purple-500/20 transition-all group">
            <div class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">89%</div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Token Savings</h3>
            <p class="text-gray-400 text-sm sm:text-base">Reduce token costs by 89% while maintaining accuracy with efficient memory compression.</p>
          </div>

          <div class="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl sm:rounded-2xl border border-green-500/30 p-6 sm:p-8 shadow-lg hover:shadow-green-500/20 transition-all sm:col-span-2 md:col-span-1 group">
            <div class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">70%</div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Lower Cost</h3>
            <p class="text-gray-400 text-sm sm:text-base">Enterprise-grade memory at 70% lower cost than bloated infrastructure solutions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
    <!-- Animated Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-bg"></div>
    
    <div class="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
          Intelligence without memory is just randomness.
        </h2>
        <p class="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
          Start building with MemVerse today.
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <BaseButton size="large" class="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl">
            Try Demo →
          </BaseButton>
          <BaseButton size="large" class="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm">
            Read Documentation
          </BaseButton>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
            Frequently Asked Questions
          </h2>
          <p class="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Everything you need to know about MemVerse
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 sm:px-8 sm:py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            >
              <h3 class="text-sm sm:text-base font-semibold text-white pr-4">
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
              class="px-6 py-4 sm:px-8 sm:py-5 pt-0 border-t border-gray-700"
            >
              <p class="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 bg-black">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 p-6 sm:p-8 shadow-xl">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Stay Updated</h3>
        <el-form :model="form" class="grid sm:grid-cols-[1fr_auto] gap-3">
          <el-input 
            v-model="form.email" 
            placeholder="Enter your email for updates" 
            size="large"
            class="dark-input"
          />
          <BaseButton type="primary" :loading="loading" @click="subscribe" size="large" class="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0">
            Notify Me
          </BaseButton>
        </el-form>
        <p class="text-xs text-gray-500 mt-3 text-center">
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

<style scoped>
/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-bg {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animate-gradient-bg {
  background-size: 200% 200%;
  animation: gradient-bg 5s ease infinite;
}

/* Dark theme input styling */
:deep(.dark-input .el-input__wrapper) {
  background-color: rgba(31, 41, 55, 0.5);
  border-color: rgba(75, 85, 99, 0.5);
  box-shadow: none;
}

:deep(.dark-input .el-input__wrapper:hover) {
  border-color: rgba(96, 165, 250, 0.5);
}

:deep(.dark-input .el-input__inner) {
  color: white;
}

:deep(.dark-input .el-input__inner::placeholder) {
  color: rgba(156, 163, 175, 0.7);
}
</style>
