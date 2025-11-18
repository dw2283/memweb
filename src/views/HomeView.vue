<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
      <div class="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4">
          Personalize your AI app with long-term memory
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
          <span class="text-gray-900">Your AI isn't intelligent</span><br class="hidden sm:block">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">until it remembers</span>
        </h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Delight your users with blazing fast and scalable memory for your AI application. 
          Interoperable between models and modalities.
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4">
          <BaseButton type="primary" size="large" @click="goDemo" class="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            Try Demo →
          </BaseButton>
          <BaseButton size="large" @click="goDocs" class="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            Explore Docs
          </BaseButton>
        </div>
      </div>

      <!-- Simple Integration Flow -->
      <div class="mt-8 sm:mt-12 md:mt-16 max-w-4xl mx-auto px-4">
        <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 p-6 sm:p-8 md:p-10 shadow-xl">
          <p class="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">Plug MemVerse</span>
            <span class="text-gray-700"> to your AI agent, </span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">achieve intelligence</span>
          </p>
          <p class="text-center text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm px-2">
            One-line install. Works with any LLM. No complex setup.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Trusted By Section -->
  <section class="bg-gray-50 border-b py-6 sm:py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <p class="text-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">Trusted by developers and enterprises</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8 flex-wrap opacity-60">
        <div class="text-xl sm:text-2xl font-bold text-gray-400">MemVerse</div>
        <div class="text-base sm:text-lg text-gray-400">makes your AI agent</div>
        <div class="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Unforgettable</div>
      </div>
    </div>
  </section>

  <!-- Why MemVerse -->
  <section class="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          Why MemVerse for Your Use Case?
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          MemVerse's universal memory framework adapts to any application, providing consistent benefits across industries.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
        <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-blue-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
          <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-lightning /></el-icon>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Fast Integration</h3>
          <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">One-line install. Works with any LLM framework. No complex setup required.</p>
        </div>
        <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-purple-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
          <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-connection /></el-icon>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Multimodal Support</h3>
          <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Remember text, images, audio, and video. Process and retrieve across all modalities.</p>
        </div>
        <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-green-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center sm:col-span-2 md:col-span-1">
          <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-data-line /></el-icon>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Cost Efficient</h3>
          <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">90% token savings. 91% lower latency. Scale without breaking the bank.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features -->
  <section class="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          Memory infrastructure that adapts to every use-case
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Powered by scalable infrastructure. MemVerse scales to millions of tokens per user 
          and handles billions of tokens daily for global enterprises.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
        <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-blue-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 sm:mb-6">
            <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-connection /></el-icon>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Model-Agnostic</h3>
          <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Works with any LLM or VLM. No model retraining required. Interoperable between models and modalities.
          </p>
        </div>

        <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-purple-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 sm:mb-6">
            <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-lightning /></el-icon>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Plug-and-Play</h3>
          <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            One-line install. Universal memory framework for any application. Setup in 5 minutes.
          </p>
        </div>

        <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-green-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 md:col-span-1">
          <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 sm:mb-6">
            <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-picture /></el-icon>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Multimodal</h3>
          <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Remember text, images, audio, and video. Process and retrieve across all modalities.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Use Cases Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white">
    <div class="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Use Cases</h2>
      <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        MemVerse powers AI applications across industries with persistent, multimodal memory.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
      <!-- Use Case 1: Intelligent Personal Assistant -->
      <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl border-2 border-blue-200 p-6 sm:p-8 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 active:scale-95" @click="goToUseCases">
        <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-blue-600 flex items-center justify-center mb-4 sm:mb-6">
          <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-robot /></el-icon>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Intelligent Personal Assistant</h3>
        <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          AI assistants that remember your preferences, habits, and personal information across all interactions.
        </p>
        <div class="flex items-center text-blue-600 font-semibold text-sm sm:text-base">
          <span>Learn more</span>
          <el-icon class="ml-2"><i-ep-arrow-right /></el-icon>
        </div>
      </div>

      <!-- Use Case 2: Healthcare -->
      <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl sm:rounded-2xl border-2 border-red-200 p-6 sm:p-8 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 active:scale-95" @click="goToUseCases">
        <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-red-600 flex items-center justify-center mb-4 sm:mb-6">
          <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-medicine /></el-icon>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Healthcare</h3>
        <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Remember patient medical history, medication schedules, and treatment plans with multimodal support.
        </p>
        <div class="flex items-center text-red-600 font-semibold text-sm sm:text-base">
          <span>Learn more</span>
          <el-icon class="ml-2"><i-ep-arrow-right /></el-icon>
        </div>
      </div>

      <!-- Use Case 3: GUI Agent -->
      <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl border-2 border-purple-200 p-6 sm:p-8 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 active:scale-95 sm:col-span-2 md:col-span-1" @click="goToUseCases">
        <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-purple-600 flex items-center justify-center mb-4 sm:mb-6">
          <el-icon class="text-white text-2xl sm:text-3xl"><i-ep-monitor /></el-icon>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">GUI Agent</h3>
        <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          AI agents that interact with graphical interfaces and automate tasks across software platforms.
        </p>
        <div class="flex items-center text-purple-600 font-semibold text-sm sm:text-base">
          <span>Learn more</span>
          <el-icon class="ml-2"><i-ep-arrow-right /></el-icon>
        </div>
      </div>
    </div>

    <div class="text-center">
      <BaseButton type="primary" size="large" @click="goToUseCases" class="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
        View All Use Cases →
      </BaseButton>
    </div>
  </section>

  <!-- Performance Section -->
  <section class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
          Works with every model.<br class="hidden sm:block">Faster. Better. Cheaper.
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div class="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl border border-white/20 p-6 sm:p-8">
          <div class="text-4xl sm:text-5xl font-bold text-blue-400 mb-3 sm:mb-4">10×</div>
          <h3 class="text-lg sm:text-xl font-bold mb-2">Faster Recall</h3>
          <p class="text-gray-300 text-sm sm:text-base">MemVerse retrieves memories in milliseconds — up to 10× faster than traditional RAG systems.</p>
        </div>

        <div class="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl border border-white/20 p-6 sm:p-8">
          <div class="text-4xl sm:text-5xl font-bold text-purple-400 mb-3 sm:mb-4">89%</div>
          <h3 class="text-lg sm:text-xl font-bold mb-2">Token Savings</h3>
          <p class="text-gray-300 text-sm sm:text-base">Reduce token costs by 89% while maintaining accuracy with efficient memory compression.</p>
        </div>

        <div class="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl border border-white/20 p-6 sm:p-8 sm:col-span-2 md:col-span-1">
          <div class="text-4xl sm:text-5xl font-bold text-green-400 mb-3 sm:mb-4">70%</div>
          <h3 class="text-lg sm:text-xl font-bold mb-2">Lower Cost</h3>
          <p class="text-gray-300 text-sm sm:text-base">Enterprise-grade memory at 70% lower cost than bloated infrastructure solutions.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Research Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gray-50">
    <div class="text-center mb-8 sm:mb-12">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Research & Analysis</h2>
      <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        Explore our research findings and methodology for building production-ready AI agents with scalable long-term memory.
      </p>
    </div>
    
    <!-- Research Image Display -->
    <div v-if="researchImages.length > 0" class="mb-8 sm:mb-12">
      <div class="max-w-6xl mx-auto">
        <div
          v-for="(image, index) in researchImages"
          :key="index"
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl"
        >
          <div class="w-full flex items-center justify-center bg-gray-50">
            <img
              :src="image.url"
              :alt="image.alt || `Research image ${index + 1}`"
              class="w-full h-auto object-contain"
            />
          </div>
          <div v-if="image.title || image.description" class="p-4 sm:p-6 md:p-8">
            <h3 v-if="image.title" class="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{{ image.title }}</h3>
            <p v-if="image.description" class="text-gray-600 text-sm sm:text-base md:text-lg">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Learn More Button -->
    <div class="text-center">
      <BaseButton type="primary" size="large" @click="goToResearch" class="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
        Learn More About Our Research →
      </BaseButton>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 sm:py-16 md:py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
        Intelligence without memory is just randomness.
      </h2>
      <p class="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
        Start building with MemVerse today.
      </p>
      <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
        <BaseButton size="large" class="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" @click="goDemo">
          Try Demo →
        </BaseButton>
        <BaseButton size="large" class="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" @click="goDocs">
          Read Documentation
        </BaseButton>
      </div>
    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <div class="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-lg">
      <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Stay Updated</h3>
      <el-form :model="form" class="grid sm:grid-cols-[1fr_auto] gap-3">
        <el-input v-model="form.email" placeholder="Enter your email for updates" size="large" />
        <BaseButton type="primary" :loading="loading" @click="subscribe" size="large" class="w-full sm:w-auto">Notify Me</BaseButton>
    </el-form>
      <p class="text-xs text-gray-500 mt-3 text-center">
      By subscribing you agree to our privacy policy.
    </p>
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

// Research images configuration
const researchImages = ref<Array<{ url: string; alt?: string; title?: string; description?: string }>>([
  { 
    url: '/images/research/intro.PNG', 
    alt: 'Research Introduction', 
    title: 'Introduction', 
    description: 'Overview of our research methodology and findings' 
  },
])

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

