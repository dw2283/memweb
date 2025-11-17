<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="hero-gradient border-b">
      <div class="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div class="text-center space-y-6 max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Use Cases
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            Discover how MemVerse transforms AI applications across industries with persistent, multimodal memory.
          </p>
        </div>
      </div>
    </section>

    <!-- Use Cases Grid -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Use Case 1: Intelligent Personal Assistant -->
        <div class="bg-white rounded-xl border-2 border-blue-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
            <el-icon class="text-blue-600 text-3xl"><i-ep-robot /></el-icon>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Intelligent Personal Assistant</h3>
          <p class="text-gray-600 mb-6 leading-relaxed text-lg">
            Build AI assistants that remember your preferences, habits, and personal information across all interactions. 
            From scheduling to recommendations, your assistant learns and adapts to serve you better over time.
          </p>
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Remember personal preferences and habits</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Track conversation history across sessions</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Learn from multimodal inputs (text, images, voice)</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Provide context-aware recommendations</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Maintain privacy with persistent memory</span>
            </div>
          </div>
        </div>

        <!-- Use Case 2: Healthcare -->
        <div class="bg-white rounded-xl border-2 border-red-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 rounded-lg bg-red-100 flex items-center justify-center mb-6">
            <el-icon class="text-red-600 text-3xl"><i-ep-medicine /></el-icon>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
          <p class="text-gray-600 mb-6 leading-relaxed text-lg">
            Enable AI healthcare assistants to remember patient medical history, medication schedules, and treatment plans. 
            Support multimodal inputs like medical images, voice notes, and lab results for comprehensive patient care.
          </p>
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Track complete medical history</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Remember medication schedules and dosages</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Analyze medical images and documents</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Maintain treatment plan continuity</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Support voice-based health notes</span>
            </div>
          </div>
        </div>

        <!-- Use Case 3: GUI Agent -->
        <div class="bg-white rounded-xl border-2 border-purple-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
            <el-icon class="text-purple-600 text-3xl"><i-ep-monitor /></el-icon>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">GUI Agent</h3>
          <p class="text-gray-600 mb-6 leading-relaxed text-lg">
            Create AI agents that can interact with graphical user interfaces, remember UI patterns, and learn from user interactions. 
            Enable agents to navigate applications, fill forms, and automate tasks across different software platforms.
          </p>
          <div class="space-y-3">
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Remember UI patterns and layouts</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Learn from user interaction history</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Automate repetitive GUI tasks</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Navigate across different applications</span>
            </div>
            <div class="flex items-center gap-3 text-base text-gray-700">
              <el-icon class="text-green-600 text-lg"><i-ep-check /></el-icon>
              <span>Maintain context across sessions</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="bg-gray-50 border-y">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why MemVerse for Your Use Case?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            MemVerse's universal memory framework adapts to any application, providing consistent benefits across industries.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl border p-6 text-center">
            <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <el-icon class="text-blue-600 text-3xl"><i-ep-lightning /></el-icon>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Fast Integration</h3>
            <p class="text-gray-600 text-sm">
              One-line install. Works with any LLM framework. No complex setup required.
            </p>
          </div>

          <div class="bg-white rounded-xl border p-6 text-center">
            <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <el-icon class="text-purple-600 text-3xl"><i-ep-connection /></el-icon>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Multimodal Support</h3>
            <p class="text-gray-600 text-sm">
              Remember text, images, audio, and video. Process and retrieve across all modalities.
            </p>
          </div>

          <div class="bg-white rounded-xl border p-6 text-center">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <el-icon class="text-green-600 text-3xl"><i-ep-data-line /></el-icon>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Cost Efficient</h3>
            <p class="text-gray-600 text-sm">
              90% token savings. 91% lower latency. Scale without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl p-12 text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your AI Application?</h2>
        <p class="text-xl mb-8 opacity-90">Start building with MemVerse today.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <BaseButton size="large" class="bg-white text-brand-600 hover:bg-gray-100" @click="goDemo">
            Try Demo
          </BaseButton>
          <BaseButton size="large" class="bg-transparent border-2 border-white text-white hover:bg-white/10" @click="goDocs">
            Read Documentation
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()

function goDemo() {
  router.push('/demo')
}

function goDocs() {
  router.push('/docs')
}
</script>

