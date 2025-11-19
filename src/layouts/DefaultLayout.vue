<template>
  <div class="min-h-screen flex flex-col" :class="{ 'bg-black': isHomePage }">
    <header 
      class="border-b transition-colors duration-300"
      :class="isHomePage ? 'bg-gray-900/80 backdrop-blur-sm border-gray-800' : 'bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50'"
    >
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <router-link 
          class="flex items-center gap-2 font-semibold transition-colors" 
          :class="isHomePage ? 'text-white' : 'text-gray-900'"
          to="/"
        >
          <img class="h-7 w-7" :src="base + 'favicon.svg'" alt="logo" />
          <span>MemVerse</span>
        </router-link>
        <nav class="flex items-center gap-4">
          <router-link 
            class="transition-colors"
            :class="isHomePage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'"
            to="/demo"
          >
            Demo
          </router-link>
          <router-link 
            class="transition-colors"
            :class="isHomePage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'"
            to="/use-cases"
          >
            Use Cases
          </router-link>
          <router-link 
            class="transition-colors"
            :class="isHomePage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'"
            to="/research"
          >
            Research
          </router-link>
          <a 
            href="https://github.com/dw2283/memweb" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 transition-colors"
            :class="isHomePage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'"
            title="GitHub Repository"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            <span class="hidden md:inline">GitHub</span>
          </a>
          <BaseButton 
            type="primary" 
            @click="goStart"
            :class="isHomePage ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0' : ''"
          >
            Get Started
          </BaseButton>
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer 
      class="border-t text-sm transition-colors duration-300"
      :class="isHomePage ? 'border-gray-800 text-gray-400 bg-gray-900' : 'text-gray-500'"
    >
      <div class="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <span>© 2025 MemVerse.</span>
        <div class="flex gap-4">
          <router-link 
            :class="isHomePage ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'"
            to="/privacy"
          >
            Privacy
          </router-link>
          <router-link 
            :class="isHomePage ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'"
            to="/status"
          >
            Status
          </router-link>
        </div>
      </div>
    </footer>
  </div>
  </template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const route = useRoute()
const base = import.meta.env.BASE_URL

const isHomePage = computed(() => route.path === '/')

function goStart() {
  router.push('/')
}
</script>


