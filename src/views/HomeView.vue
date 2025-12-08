<template>
  <!-- Hero Section - Apple Style -->
  <section class="relative bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Subtle background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
    </div>
    <div class="relative w-full h-screen px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
      <div class="max-w-6xl mx-auto w-full space-y-8">
        <div class="text-center space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-[-0.02em]">
            Memory turns AI into Intelligence.
        </h1>
          <div class="max-w-4xl mx-auto leading-relaxed space-y-3">
            <p class="text-base sm:text-lg md:text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              Plug MemVerse to your agent and unlock memory-driven reasoning
            </p>
            <p class="text-sm sm:text-base text-gray-500">
              One-line install. Works with any LLM. No complex setup.
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://github.com/Wings-Of-Disaster/MemVerse" 
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

        <!-- Video Container -->
        <div class="relative w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <div class="w-full aspect-video max-h-[600px] relative">
            <!-- 视频加载中的占位符 -->
            <div 
              v-if="demoVideoPath && !videoLoaded" 
              class="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-inner animate-pulse">
                  <el-icon class="text-gray-600 text-3xl"><i-ep-video-play /></el-icon>
                </div>
                <p class="text-gray-600 text-sm font-medium">正在加载视频...</p>
                <p class="text-gray-400 text-xs mt-2">请稍候</p>
              </div>
            </div>
            <!-- 播放 public 目录下的视频 -->
            <video
              v-if="demoVideoPath"
              :src="demoVideoPath"
              controls
              autoplay
              muted
              playsinline
              loop
              class="w-full h-full object-cover transition-opacity duration-500"
              :class="{ 'opacity-0 absolute': !videoLoaded, 'opacity-100': videoLoaded }"
              preload="auto"
              @error="handleVideoError"
              @loadedmetadata="handleVideoLoaded"
              @loadstart="handleVideoLoadStart"
            >
              您的浏览器不支持视频播放。
            </video>
            <!-- 如果没有视频，显示占位符 -->
            <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div class="text-center">
                <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-inner">
                  <el-icon class="text-gray-600 text-2xl"><i-ep-video-play /></el-icon>
                </div>
                <p class="text-gray-500 text-xs">Video Demo Coming Soon</p>
                <p class="text-gray-400 text-xs mt-2">请将视频文件放置在 public 目录下</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why MemVerse -->
  <section class="relative bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 md:py-32 overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-5 leading-tight tracking-tight">
            Why MemVerse?
          </h2>
          <p class="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Memory infrastructure that adapts to every use-case.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <!-- Fast Integration -->
          <div class="group text-center p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <el-icon class="text-white text-2xl"><i-ep-lightning /></el-icon>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3 leading-tight">Fast Integration</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              One-line install. Works with any LLM framework. No complex setup required.
            </p>
          </div>

          <!-- Multimodal Support -->
          <div class="group text-center p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
              <el-icon class="text-white text-2xl"><i-ep-connection /></el-icon>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Multimodal Support</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Remember text, images, audio, and video. Process and retrieve across all modalities.
            </p>
          </div>

          <!-- Cost Efficient -->
          <div class="group text-center sm:col-span-2 md:col-span-1 p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
              <el-icon class="text-white text-2xl"><i-ep-data-line /></el-icon>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Cost Efficient</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              <span class="font-medium text-gray-900">90% token savings.</span> Scale without breaking the bank.
            </p>
          </div>
        </div>

        <!-- Performance Metrics -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1">
            <div class="text-5xl sm:text-6xl font-light bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">10×</div>
            <h3 class="text-base font-semibold text-gray-900 mb-3 leading-tight">Faster Recall</h3>
            <p class="text-sm text-gray-600 leading-relaxed">MemVerse retrieves memories in milliseconds — up to 10× faster than other memory systems.</p>
          </div>

          <div class="group text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1">
            <div class="text-5xl sm:text-6xl font-light bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">4</div>
            <h3 class="text-base font-semibold text-gray-900 mb-3">Modalities</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Built-in memory for text, images, audio, and video — with unified processing and cross-modal retrieval.</p>
          </div>

          <div class="group text-center sm:col-span-2 md:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1">
            <div class="text-5xl sm:text-6xl font-light bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">90%</div>
            <h3 class="text-base font-semibold text-gray-900 mb-3">Token Savings</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Reduce token costs by 90% while maintaining accuracy with efficient memory compression.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Research Section -->
  <section class="bg-white py-20 sm:py-24 md:py-32">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-6xl mx-auto">
        <!-- Blog Badge -->
        <!-- <div class="text-center mb-6">
          <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg border border-gray-200">
            Blog
          </span>
        </div> -->

        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center leading-tight tracking-tight">
          Latest from the MemVerse Blog
        </h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <!-- Blog Card 1: MemVerse -->
          <article 
            class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group"
            @click="viewBlogDetail(0)"
          >
            <!-- Content -->
            <div class="p-4 sm:p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>2025</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                How Memverse Enhances Your AI Agents
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                A model-agnostic, plug-and-play memory framework that equips AI agents with lifelong multimodal learning capabilities.
              </p>

              <!-- Footer -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                  Read Article
                </span>
                <el-icon class="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">
                  <i-ep-arrow-right />
                </el-icon>
              </div>
            </div>
          </article>

          <!-- Blog Card 2: MGA -->
          <article 
            class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300 cursor-pointer group"
            @click="viewBlogDetail(1)"
          >
            <!-- Content -->
            <div class="p-4 sm:p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>2025</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors leading-tight">
                Application: How Memverse Enhances GUI Agent
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                A memory-driven GUI agent framework that enables observation-centric interaction with graphical user interfaces.
              </p>

              <!-- Footer -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xs font-medium text-gray-600 group-hover:text-purple-600 transition-colors">
                  Read Article
                </span>
                <el-icon class="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all text-sm">
                  <i-ep-arrow-right />
                </el-icon>
              </div>
            </div>
          </article>

          <!-- Blog Card 3: Placeholder for future -->
          <article 
            class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer group sm:col-span-2 md:col-span-1"
            @click="goToResearch"
          >
            <!-- Content -->
            <div class="p-4 sm:p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>2024</span>
                <span>•</span>
                <span>Coming Soon</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                More Research Coming Soon
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                Explore all our research papers and technical insights.
              </p>
              
              <!-- Footer -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                  View All
                </span>
                <el-icon class="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">
                  <i-ep-arrow-right />
                </el-icon>
              </div>
            </div>
          </article>
        </div>
        </div>
      </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24 md:py-32">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
          Intelligence begins with memory.
        </h2>
        <p class="text-base sm:text-lg text-gray-500 mb-10 leading-relaxed">
          Build the future with MemVerse today.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://github.com/Wings-Of-Disaster/MemVerse" 
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
  <section class="bg-white py-20 sm:py-24 md:py-32">
    <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-5 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-base sm:text-lg text-gray-500 leading-relaxed">
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
              <h3 class="text-sm sm:text-base font-medium text-gray-900 pr-8 leading-relaxed">
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
              <p class="text-sm sm:text-base leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
    </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

// Demo 视频路径 - 视频文件应放在 public 目录下
// 使用 import.meta.env.BASE_URL 确保在 GitHub Pages 等部署环境中路径正确
const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL 
  : `${import.meta.env.BASE_URL}/`
const demoVideoPath = ref<string>(`${baseUrl}demo.mp4`)
const videoLoaded = ref<boolean>(false)

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
    answer: 'MemVerse retrieves memories in milliseconds—up to 10× faster than traditional RAG systems. It achieves faster query times while maintaining comparable accuracy.',
    open: false
  },
  {
    question: 'What are the cost benefits of using MemVerse?',
    answer: 'MemVerse reduces token costs by 90% through efficient memory compression and provides enterprise-grade memory at lower cost than traditional infrastructure solutions.',
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

function viewBlogDetail(index: number) {
  // Navigate to detail page for both cards
  router.push(`/research/${index}`)
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}

function handleVideoError(event: Event) {
  const video = event.target as HTMLVideoElement
  const error = video.error
  let errorMessage = '视频加载失败'
  
  if (error) {
    switch (error.code) {
      case error.MEDIA_ERR_ABORTED:
        errorMessage = '视频加载被中止'
        break
      case error.MEDIA_ERR_NETWORK:
        errorMessage = '网络错误，请检查网络连接'
        break
      case error.MEDIA_ERR_DECODE:
        errorMessage = '视频解码失败，请检查视频格式'
        break
      case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
        errorMessage = '视频格式不支持或文件路径错误'
        break
      default:
        errorMessage = '视频加载失败'
    }
  }
  
  console.error('视频加载失败:', {
    error: error,
    errorCode: error?.code,
    src: video.src,
    networkState: video.networkState,
    readyState: video.readyState,
    baseURL: import.meta.env.BASE_URL
  })
  
  ElMessage.error(`${errorMessage}。路径: ${video.src}`)
}

function handleVideoLoadStart(event: Event) {
  videoLoaded.value = false
}

function handleVideoLoaded(event: Event) {
  const video = event.target as HTMLVideoElement
  videoLoaded.value = true
  console.log('视频加载成功:', {
    duration: video.duration,
    videoWidth: video.videoWidth,
    videoHeight: video.videoHeight,
    src: video.src
  })
}
</script>
