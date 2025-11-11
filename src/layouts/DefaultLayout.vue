<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <router-link class="flex items-center gap-2 font-semibold text-gray-900" to="/">
          <img class="h-7 w-7" :src="base + 'favicon.svg'" alt="logo" />
          <span>memverse</span>
        </router-link>
        <nav class="flex items-center gap-4">
          <router-link class="text-gray-600 hover:text-gray-900" to="/demo">Demo</router-link>
          <router-link class="text-gray-600 hover:text-gray-900" to="/pricing">Pricing</router-link>
          <router-link class="text-gray-600 hover:text-gray-900" to="/docs">Docs</router-link>
          <BaseButton type="primary" @click="goStart">Get Started</BaseButton>
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t text-sm text-gray-500">
      <div class="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <span>© 2025 memverse.</span>
        <div class="flex gap-4">
          <router-link to="/privacy">Privacy</router-link>
          <router-link to="/status">Status</router-link>
        </div>
      </div>
    </footer>
  </div>
  </template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
const router = useRouter()
const base = import.meta.env.BASE_URL
function goStart() {
  router.push('/')
}
</script>


