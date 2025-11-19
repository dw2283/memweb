<template>
  <div class="min-h-screen bg-white">
    <!-- Blog Header -->
    <section class="bg-white border-b">
      <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <router-link to="/" class="hover:text-gray-900 transition-colors">Home</router-link>
            <span>/</span>
            <router-link to="/research" class="hover:text-gray-900 transition-colors">Research</router-link>
            <span>/</span>
            <span class="text-gray-900 font-medium">{{ currentBlog.title }}</span>
          </nav>

          <!-- Category Badge -->
          <div class="mb-4">
            <span class="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-semibold">
              {{ currentBlog.category }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {{ currentBlog.title }}
          </h1>

          <!-- Meta Info -->
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div class="flex items-center gap-2">
              <span class="font-medium">Published at</span>
              <span>{{ currentBlog.date }}</span>
            </div>
            <span>•</span>
            <span>{{ currentBlog.readTime }}</span>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-8">
            <span 
              v-for="tag in currentBlog.tags" 
              :key="tag"
              class="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div v-if="currentBlog.arxiv" class="flex flex-wrap gap-3">
            <a 
              :href="currentBlog.arxiv" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <el-icon><i-ep-document /></el-icon>
              View on arXiv
            </a>
            <BaseButton size="default" @click="goBack" class="border border-gray-300">
              <el-icon class="mr-2"><i-ep-arrow-left /></el-icon>
              Back to Research
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <article class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <!-- Featured Image -->
        <div v-if="currentBlog.image" class="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            :src="currentBlog.image" 
            :alt="currentBlog.title"
            class="w-full h-auto"
            @error="handleImageError"
          />
        </div>

        <!-- Blog Content Sections -->
        <div class="space-y-12">
          <!-- Project Overview -->
          <section class="bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">🌟 Project Overview</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                MemVerse is a <strong>model-agnostic, plug-and-play memory framework</strong> designed to equip AI agents with lifelong multimodal learning capabilities. 
                By bridging fast parametric recall and hierarchical retrieval-based memory, it solves core limitations of current AI systems—catastrophic forgetting, 
                poor long-horizon reasoning, and disconnected multimodal understanding.
              </p>
              <p>
                Unlike stateless models or rigid memory solutions, MemVerse enables agents to accumulate, organize, and adaptively use knowledge from text, images, 
                audio, and video, supporting coherent interaction in real-world environments.
              </p>
            </div>
          </section>

          <!-- Core Challenges -->
          <section class="bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">🎯 Core Challenges Addressed</h2>
            <p class="text-lg sm:text-xl text-gray-600 mb-8">
              Current AI memory systems face three critical bottlenecks that MemVerse overcomes.
            </p>

            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white rounded-xl border p-6 shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <el-icon class="text-red-600 text-2xl"><i-ep-info-filled /></el-icon>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Parameter Dependency</h3>
                <p class="text-gray-700 leading-relaxed">
                  Memory tied to model weights limits scalability and causes catastrophic forgetting.
                </p>
              </div>

              <div class="bg-white rounded-xl border p-6 shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <el-icon class="text-orange-600 text-2xl"><i-ep-folder-opened /></el-icon>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Unstructured Storage</h3>
                <p class="text-gray-700 leading-relaxed">
                  Raw data logs in RAG-style systems lead to inefficient retrieval and redundancy.
                </p>
              </div>

              <div class="bg-white rounded-xl border p-6 shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                  <el-icon class="text-yellow-600 text-2xl"><i-ep-picture /></el-icon>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Modality Silos</h3>
                <p class="text-gray-700 leading-relaxed">
                  Text-centric memory fails to align visual, auditory, and linguistic information.
                </p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6">
              <p class="text-gray-700 leading-relaxed text-center">
                <strong>MemVerse overcomes these by unifying complementary memory mechanisms, mirroring the "fast and slow thinking" of human cognition.</strong>
              </p>
            </div>
          </section>

          <!-- Technical Architecture -->
          <section class="bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">🔧 Technical Architecture</h2>
            <p class="text-lg sm:text-xl text-gray-600 mb-8">
              MemVerse's design integrates three core memory components, coordinated by a central orchestrator.
            </p>

            <!-- Architecture Image -->
            <div class="bg-white rounded-xl border p-6 shadow-sm mb-8">
              <img 
                src="https://dw2283.github.io/memweb/research/architecture.png" 
                alt="MemVerse Architecture" 
                class="w-full h-auto rounded-lg"
                @error="handleImageError"
              />
              <p class="text-sm text-gray-600 mt-4 text-center italic">
                Figure 2: MemVerse's unified memory framework (from paper)
              </p>
            </div>

            <div class="space-y-6">
              <!-- Hierarchical Retrieval-Based Memory -->
              <div class="bg-white rounded-xl border p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <el-icon class="text-blue-600 text-2xl"><i-ep-collection /></el-icon>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Hierarchical Retrieval-Based Memory</h3>
                </div>
                <div class="space-y-4 text-gray-700">
                  <div>
                    <strong class="text-gray-900">Short-Term Memory (STM):</strong>
                    <p class="mt-1">Caches recent conversational context (sliding window) to avoid redundant long-term storage updates.</p>
                  </div>
                  <div>
                    <strong class="text-gray-900">Long-Term Memory (LTM):</strong>
                    <p class="mt-1">Structures multimodal experiences into three specialized knowledge graphs:</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Core Memory:</strong> User-specific facts and preferences</li>
                      <li><strong>Episodic Memory:</strong> Time-ordered event logs</li>
                      <li><strong>Semantic Memory:</strong> Generalizable concepts and entity relationships</li>
                    </ul>
                  </div>
                  <div>
                    <strong class="text-gray-900">Multimodal Processing:</strong>
                    <p class="mt-1">Converts images, audio, and video into aligned textual representations, linking symbolic knowledge back to original sensory data.</p>
                  </div>
                </div>
              </div>

              <!-- Parametric Memory -->
              <div class="bg-white rounded-xl border p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <el-icon class="text-purple-600 text-2xl"><i-ep-monitor /></el-icon>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Parametric Memory</h3>
                </div>
                <p class="text-gray-700 leading-relaxed mb-4">
                  A lightweight neural model (7B-scale transformer) that:
                </p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <el-icon class="text-green-600 mt-1"><i-ep-circle-check /></el-icon>
                    <span>Periodically distills essential knowledge from LTM via supervised fine-tuning</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <el-icon class="text-green-600 mt-1"><i-ep-circle-check /></el-icon>
                    <span>Enables fast, differentiable recall (89% faster than RAG) while preserving accuracy</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <el-icon class="text-green-600 mt-1"><i-ep-circle-check /></el-icon>
                    <span>Dynamically expands with new knowledge without full model retraining</span>
                  </li>
                </ul>
              </div>

              <!-- Memory Orchestrator -->
              <div class="bg-white rounded-xl border p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <el-icon class="text-green-600 text-2xl"><i-ep-connection /></el-icon>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Memory Orchestrator</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  A rule-based controller that manages storage, retrieval, and integration across STM, LTM, and parametric memory—no additional trainable parameters required.
                </p>
              </div>
            </div>
          </section>

          <!-- Key Results -->
          <section class="bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">📊 Key Results</h2>
            <p class="text-lg sm:text-xl text-gray-600 mb-8">
              MemVerse outperforms state-of-the-art models across diverse multimodal benchmarks.
            </p>

            <!-- Benchmark Results Table -->
            <div class="bg-white rounded-xl border overflow-hidden shadow-sm mb-8">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Benchmark</th>
                      <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Key Metric</th>
                      <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">MemVerse Performance</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 text-sm font-medium text-gray-900">ScienceQA</td>
                      <td class="px-6 py-4 text-sm text-gray-700">Average Accuracy</td>
                      <td class="px-6 py-4 text-sm font-semibold text-green-600">85.48% (SOTA)</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-6 py-4 text-sm font-medium text-gray-900">LoCoMo</td>
                      <td class="px-6 py-4 text-sm text-gray-700">Overall F1</td>
                      <td class="px-6 py-4 text-sm font-semibold text-green-600">24.7 (Top 1)</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 text-sm font-medium text-gray-900">ScienceQA</td>
                      <td class="px-6 py-4 text-sm text-gray-700">Query Time</td>
                      <td class="px-6 py-4 text-sm font-semibold text-blue-600">2.28s (89% faster than RAG)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Detailed Results -->
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-8">
                <h3 class="text-lg font-bold text-gray-900 mb-3">ScienceQA (Multimodal Reasoning)</h3>
                <div class="text-4xl font-bold text-green-700 mb-2">85.48%</div>
                <p class="text-gray-700 text-sm mb-2">Average accuracy (GPT-4o-mini + MemVerse)</p>
                <ul class="text-sm text-gray-600 space-y-1 mt-4">
                  <li>• Natural science: 85.26%</li>
                  <li>• Social science: 81.55%</li>
                  <li>• Language tasks: 89.09%</li>
                </ul>
                <p class="text-sm text-gray-600 mt-4">2.28s average query time—89% faster than traditional RAG (20.17s)</p>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-8">
                <h3 class="text-lg font-bold text-gray-900 mb-3">LoCoMo (Long-Term Conversation)</h3>
                <div class="text-4xl font-bold text-blue-700 mb-2">24.7</div>
                <p class="text-gray-700 text-sm mb-2">Overall F1 score</p>
                <p class="text-sm text-gray-600 mt-4">
                  Outperforming Zep (23.22) and other memory-augmented baselines. STM excels in coherent dialogue reasoning, while LTM handles cross-session knowledge.
                </p>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-8">
                <h3 class="text-lg font-bold text-gray-900 mb-3">MSR-VTT (Video-Text Alignment)</h3>
                <div class="text-4xl font-bold text-purple-700 mb-2">Strong</div>
                <p class="text-gray-700 text-sm mb-2">Cross-modal retrieval performance</p>
                <p class="text-sm text-gray-600 mt-4">
                  Demonstrating effective alignment of dynamic visual content and natural language (full results in Appendix C).
                </p>
              </div>
            </div>
          </section>

          <!-- Core Contributions -->
          <section class="bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">🚀 Core Contributions</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <el-icon class="text-white text-xl"><i-ep-link /></el-icon>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Unified Memory Interface</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Plug-and-play design works with any LLM/VLM, no model retraining required.
                </p>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                    <el-icon class="text-white text-xl"><i-ep-collection /></el-icon>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Structured Multimodal Knowledge</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Hierarchical knowledge graphs transform raw data into actionable, interpretable memory.
                </p>
              </div>

              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <el-icon class="text-white text-xl"><i-ep-lightning /></el-icon>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Efficient Dual-Path Recall</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Periodic distillation balances fast parametric access and deep retrieval-based reasoning.
                </p>
              </div>

              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center">
                    <el-icon class="text-white text-xl"><i-ep-refresh /></el-icon>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Lifelong Learning Support</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Adaptive forgetting and bounded growth prevent redundancy and catastrophic forgetting.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>

    <!-- Back Button -->
    <section class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 bg-white border-t">
      <div class="max-w-4xl mx-auto">
        <BaseButton size="large" @click="goBack" class="border border-gray-300">
          <el-icon class="mr-2"><i-ep-arrow-left /></el-icon>
          Back to Research
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const route = useRoute()

interface Blog {
  title: string
  summary: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image?: string
  arxiv?: string
}

const blogs = [
  {
    title: 'MemVerse: Multimodal Memory for Lifelong Learning Agents',
    summary: 'A model-agnostic, plug-and-play memory framework that equips AI agents with lifelong multimodal learning capabilities.',
    date: '2024',
    readTime: '15 min read',
    category: 'Research Paper',
    tags: ['Memory Systems', 'Multimodal AI', 'Lifelong Learning'],
    image: 'https://dw2283.github.io/memweb/research/architecture.png',
    arxiv: 'https://arxiv.org/abs/XXXX.XXXXX'
  },
  {
    title: 'Hierarchical Memory Architecture for AI Agents',
    summary: 'Exploring the design principles behind MemVerse\'s three-tier memory system.',
    date: '2024',
    readTime: '10 min read',
    category: 'Technical Deep Dive',
    tags: ['Architecture', 'Memory Systems', 'Design'],
    image: undefined
  },
  {
    title: 'Benchmark Results: MemVerse vs Traditional RAG',
    summary: 'Comprehensive evaluation results showing MemVerse\'s performance across benchmarks.',
    date: '2024',
    readTime: '12 min read',
    category: 'Benchmarks',
    tags: ['Performance', 'Benchmarks', 'Evaluation'],
    image: undefined
  }
]

const blogId = computed(() => {
  const id = route.params.id
  return id ? parseInt(id as string) : 0
})

const currentBlog = computed(() => {
  return blogs[blogId.value] || blogs[0]
})

function goBack() {
  router.push('/research')
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

