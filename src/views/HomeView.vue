<template>
  <section class="hero-gradient border-b">
    <div class="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          AI agents forget. <span class="text-brand-600">memverse remembers.</span>
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          A universal, self‑improving memory layer for your LLM application.
          Reduce token costs and elevate user delight.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <BaseButton type="primary" size="large" @click="scrollToFeatures">Get Started</BaseButton>
          <BaseButton size="large" @click="goDocs">Read Docs</BaseButton>
        </div>
      </div>
      <div class="rounded-xl border bg-white p-6 shadow-sm">
        <h3 class="font-semibold mb-3">Live Memory Compression</h3>
        <div class="h-48 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
          <span>Demo chart via ECharts (placeholder)</span>
        </div>
        <p class="mt-3 text-sm text-gray-500">Track token savings, TTL and memory size in real time.</p>
      </div>
    </div>
  </section>

  <section ref="featuresRef" class="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
    <div class="p-6 rounded-xl border bg-white">
      <h3 class="font-semibold text-gray-900">Zero Friction</h3>
      <p class="text-gray-600 mt-2">One-line install. No boilerplate.</p>
    </div>
    <div class="p-6 rounded-xl border bg-white">
      <h3 class="font-semibold text-gray-900">Framework Agnostic</h3>
      <p class="text-gray-600 mt-2">Works with OpenAI, LangGraph, CrewAI and more.</p>
    </div>
    <div class="p-6 rounded-xl border bg-white">
      <h3 class="font-semibold text-gray-900">Observability</h3>
      <p class="text-gray-600 mt-2">Traceable by default. Versioned memories.</p>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research & Analysis</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Explore our research findings and methodology for building production-ready AI agents with scalable long-term memory.
      </p>
    </div>
    
    <!-- Research Image Display -->
    <div v-if="researchImages.length > 0" class="mb-12">
      <div class="max-w-6xl mx-auto">
        <div
          v-for="(image, index) in researchImages"
          :key="index"
          class="bg-white rounded-xl border overflow-hidden shadow-lg"
        >
          <div class="w-full flex items-center justify-center bg-gray-50">
            <img
              :src="image.url"
              :alt="image.alt || `Research image ${index + 1}`"
              class="w-full h-auto object-contain"
            />
          </div>
          <div v-if="image.title || image.description" class="p-6">
            <h3 v-if="image.title" class="text-xl font-semibold text-gray-900 mb-2">{{ image.title }}</h3>
            <p v-if="image.description" class="text-gray-600">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Learn More Button -->
    <div class="text-center">
      <BaseButton type="primary" size="large" @click="goToResearch">
        <el-icon class="mr-2"><i-ep-arrow-right /></el-icon>
        Learn More About Our Research
      </BaseButton>
    </div>
  </section>

  <section class="max-w-3xl mx-auto px-4 pb-20">
    <el-form :model="form" class="grid md:grid-cols-[1fr_auto] gap-3">
      <el-input v-model="form.email" placeholder="Enter your email for updates" />
      <BaseButton type="primary" :loading="loading" @click="subscribe">Notify Me</BaseButton>
    </el-form>
    <p class="text-xs text-gray-500 mt-3">
      By subscribing you agree to our privacy policy.
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import { useNotification } from '@/composables/useNotification'
import { useLoading } from '@/composables/useLoading'
import { subscribeEmail } from '@/services/site'

const featuresRef = ref<HTMLElement | null>(null)
const router = useRouter()
const { success, error } = useNotification()
const { loading, start, stop } = useLoading(false, 'Submitting...')

const form = ref({ email: '' })

// Research images configuration
// Add your images to public/images/research/ folder and update this array
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
function scrollToFeatures() {
  featuresRef.value?.scrollIntoView({ behavior: 'smooth' })
}
function goToResearch() {
  router.push('/research')
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


