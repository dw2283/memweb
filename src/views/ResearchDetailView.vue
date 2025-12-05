<template>
  <div class="min-h-screen bg-white">
    <!-- Blog Header -->
    <section class="bg-white border-b">
      <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8">
        <div class="max-w-3xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <router-link to="/" class="hover:text-gray-900 transition-colors">Home</router-link>
            <span>/</span>
            <router-link to="/research" class="hover:text-gray-900 transition-colors">Research</router-link>
            <span>/</span>
            <span class="text-gray-900">{{ currentBlog.title }}</span>
          </nav>

          <!-- Title -->
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {{ currentBlog.title }}
          </h1>

          <!-- Meta Info -->
          <div class="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
            <span>{{ currentBlog.date }}</span>
            <span>•</span>
            <span>{{ currentBlog.readTime }}</span>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tag in currentBlog.tags" 
              :key="tag"
              class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-2">
            <a 
              v-if="currentBlog.arxiv"
              :href="currentBlog.arxiv" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
            >
              View on arXiv
            </a>
            <a 
              v-if="currentBlog.github"
              :href="currentBlog.github" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-2 py-1 bg-gray-900 text-white rounded text-xs hover:bg-gray-800 transition-colors"
            >
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <article class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 bg-white">
      <div class="max-w-4xl mx-auto">
        <!-- MemVerse Content -->
        <template v-if="blogId === 0">
          <!-- Overview Image -->
          <div class="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://p3-flow-imagex-sign.byteimg.com/ocean-cloud-tos/pdf/1be3d956a64a0d2a3297e44f03c007f8_0_1200.jpg~tplv-a9rns2rl98-resize-crop:84:346:842:704:758:358.jpeg?rk3s=1567c5c4&x-expires=1796349419&x-signature=j5oLY%2Fg8%2BAOU6Ifoi2ldzFtdcMQ%3D"
              alt="MemVerse Overview"
              class="w-full h-auto"
              @error="handleImageError"
            />
          </div>

          <!-- Introduction -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Introduction: The Memory Gap in Modern AI</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Despite the remarkable capabilities of today's large language models (LLMs) and vision-language models (VLMs), AI agents still face a fundamental limitation: <strong class="text-gray-900">they cannot truly remember</strong>. Unlike humans who accumulate and refine knowledge from multimodal experiences over time, current AI systems operate in a largely stateless manner—treating each task as an isolated event rather than part of a continuous learning journey.
              </p>
              <p>
                This memory deficit becomes particularly problematic in:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base">
                <li>Visual reasoning and scene understanding</li>
                <li>Long-horizon conversational interactions</li>
                <li>Robotic manipulation and real-world navigation</li>
                <li>Multimodal tasks combining text, images, audio, and video</li>
              </ul>
              <p>
                Existing memory solutions fall short:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base">
                <li><strong class="text-gray-900">Parametric memory</strong> (encoded in model weights) suffers from catastrophic forgetting and rigid capacity limits</li>
                <li><strong class="text-gray-900">Retrieval-based memory</strong> (external databases) lacks structure, leading to inefficiency and noisy results at scale</li>
              </ul>
              <p>
                MemVerse addresses these flaws with a unified, model-agnostic framework that bridges fast parametric recall with structured, hierarchical long-term memory—enabling AI agents to learn continuously across multimodal experiences.
              </p>
            </div>
          </section>

          <!-- Core Design -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Core Design: How MGA Works</h2>
            
            <!-- Architecture Image -->
            <div class="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://p9-flow-imagex-sign.byteimg.com/ocean-cloud-tos/pdf/1be3d956a64a0d2a3297e44f03c007f8_3_1200.jpg~tplv-a9rns2rl98-resize-crop:83:124:841:439:758:315.jpeg?rk3s=1567c5c4&x-expires=1796349418&x-signature=sf1eXj3tmQK%2FBTW1eEQ2KqO%2Bvj8%3D"
                alt="MemVerse Architecture"
                class="w-full h-auto"
                @error="handleImageError"
              />
            </div>

            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-8">
              MemVerse's dual-path architecture draws inspiration from human cognition—combining "fast thinking" (parametric memory) and "slow thinking" (retrieval-based memory) into a cohesive system managed by a central memory orchestrator.
            </p>

            <!-- Hierarchical Retrieval-Based Memory -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Hierarchical Retrieval-Based Memory</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                This component handles long-term knowledge storage with three specialized memory types, all organized as multimodal knowledge graphs:
              </p>
              
              <!-- Memory Types Table -->
              <div class="overflow-x-auto mb-6">
                <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Memory Type</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Key Features</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900"><strong>Core Memory</strong></td>
                      <td class="px-4 py-3 text-gray-700">User-specific facts & preferences</td>
                      <td class="px-4 py-3 text-gray-700">Persistent, personalized knowledge</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-3 font-medium text-gray-900"><strong>Episodic Memory</strong></td>
                      <td class="px-4 py-3 text-gray-700">Time-ordered experiences</td>
                      <td class="px-4 py-3 text-gray-700">Detailed event logs with temporal context</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900"><strong>Semantic Memory</strong></td>
                      <td class="px-4 py-3 text-gray-700">Generalizable concepts</td>
                      <td class="px-4 py-3 text-gray-700">Structured entity-relation knowledge</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg mb-6">
                <h4 class="text-base font-semibold text-gray-900 mb-2">Multimodal Processing Pipeline</h4>
                <p class="text-sm text-gray-700 mb-2">
                  Raw multimodal inputs (images, audio, video) are converted to structured representations through:
                </p>
                <ol class="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                  <li>Modality-specific feature extraction</li>
                  <li>Cross-modal alignment</li>
                  <li>Textual token generation (enabling symbolic processing)</li>
                  <li>Entity/relation extraction for MMKG construction</li>
                </ol>
                <p class="text-sm text-gray-700 mt-2">
                  Each node and relation in the knowledge graph maintains links to original multimodal data, ensuring full traceability and grounding.
                </p>
              </div>
            </div>

            <!-- Parametric Memory -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. Parametric Memory</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                A lightweight neural model that provides fast, differentiable recall by distilling essential knowledge from the long-term memory. Key characteristics:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Initialized from pretrained LLM/VLM weights (e.g., Qwen2.5-7B)</li>
                <li>Updated via periodic supervised fine-tuning on (question, retrieved context) pairs</li>
                <li>Enables <strong class="text-gray-900">89% faster access</strong> than traditional RAG systems (2.28s vs. 20.17s per query)</li>
                <li>Maintains comparable accuracy to full retrieval while reducing computational overhead</li>
              </ul>
            </div>

            <!-- Short-Term Memory -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. Short-Term Memory</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                A sliding-window cache for recent conversational context (e.g., last K dialogue turns) that:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Reduces redundant long-term memory updates</li>
                <li>Ensures local consistency during ongoing interactions</li>
                <li>Triggers consolidation only when sufficient new knowledge accumulates</li>
              </ul>
            </div>

            <!-- Memory Orchestrator -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Memory Orchestrator</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                The central control unit that:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Manages all memory operations (add, update, delete, retrieve)</li>
                <li>Implements adaptive forgetting to bound memory growth</li>
                <li>Optimizes retrieval paths (STM → parametric → LTM) based on context</li>
                <li>Operates with rule-based logic (no additional trainable parameters)</li>
              </ul>
            </div>
          </section>

          <!-- Key Innovations -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Key Innovations</h2>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-500 pl-4 py-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">1. Model-Agnostic Plug-and-Play Design</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Works with any LLM/VLM (GPT-4o-mini, Qwen2.5, etc.) without modifying the base model architecture.
                </p>
              </div>
              <div class="border-l-4 border-purple-500 pl-4 py-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2. Structured Multimodal Knowledge Graphs</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Transforms unstructured raw data into organized, interpretable knowledge—eliminating redundancy and enabling efficient multi-hop reasoning.
                </p>
              </div>
              <div class="border-l-4 border-green-500 pl-4 py-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3. Periodic Distillation Mechanism</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Balances fast parametric access with the richness of long-term memory by periodically compressing essential knowledge into the lightweight model.
                </p>
              </div>
              <div class="border-l-4 border-orange-500 pl-4 py-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">4. Adaptive Forgetting</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Prevents unbounded memory growth by pruning irrelevant or outdated information while preserving critical knowledge.
                </p>
              </div>
            </div>
          </section>

          <!-- Experimental Results -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Experimental Results</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              MemVerse was evaluated across three diverse multimodal benchmarks, demonstrating significant improvements over state-of-the-art models:
            </p>

            <!-- ScienceQA Table -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">ScienceQA (Multimodal Reasoning)</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Model</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Average Accuracy</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Natural Science</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Social Science</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Language</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">GPT-4o-mini (base)</td>
                      <td class="px-4 py-3 text-gray-700">76.82%</td>
                      <td class="px-4 py-3 text-gray-700">77.31%</td>
                      <td class="px-4 py-3 text-gray-700">73.45%</td>
                      <td class="px-4 py-3 text-gray-700">86.91%</td>
                    </tr>
                    <tr class="bg-blue-50">
                      <td class="px-4 py-3 font-medium text-gray-900">GPT-4o-mini + MemVerse</td>
                      <td class="px-4 py-3 font-semibold text-blue-600"><strong>85.48%</strong></td>
                      <td class="px-4 py-3 font-semibold text-blue-600"><strong>85.26%</strong></td>
                      <td class="px-4 py-3 font-semibold text-blue-600"><strong>81.55%</strong></td>
                      <td class="px-4 py-3 font-semibold text-blue-600"><strong>89.09%</strong></td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">Qwen2.5-72B (base)</td>
                      <td class="px-4 py-3 text-gray-700">78.37%</td>
                      <td class="px-4 py-3 text-gray-700">79.64%</td>
                      <td class="px-4 py-3 text-gray-700">67.10%</td>
                      <td class="px-4 py-3 text-gray-700">84.90%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">Qwen2.5-72B + MemVerse</td>
                      <td class="px-4 py-3 text-gray-700">80.25%</td>
                      <td class="px-4 py-3 text-gray-700">77.53%</td>
                      <td class="px-4 py-3 text-gray-700">68.95%</td>
                      <td class="px-4 py-3 text-gray-700">85.36%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- MSR-VTT Table -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">MSR-VTT (Video-Text Retrieval)</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                MemVerse achieves dramatic improvements over CLIP and other state-of-the-art methods:
              </p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Method</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Text-to-Video R@1</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Video-to-Text R@1</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">CLIP (baseline)</td>
                      <td class="px-4 py-3 text-gray-700">29.7%</td>
                      <td class="px-4 py-3 text-gray-700">21.4%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">InternVideo</td>
                      <td class="px-4 py-3 text-gray-700">55.2%</td>
                      <td class="px-4 py-3 text-gray-700">57.9%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">ExCae</td>
                      <td class="px-4 py-3 text-gray-700">67.7%</td>
                      <td class="px-4 py-3 text-gray-700">69.3%</td>
                    </tr>
                    <tr class="bg-green-50">
                      <td class="px-4 py-3 font-medium text-gray-900">MemVerse</td>
                      <td class="px-4 py-3 font-semibold text-green-600"><strong>90.4%</strong></td>
                      <td class="px-4 py-3 font-semibold text-green-600"><strong>89.2%</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Performance Insights -->
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 pl-4 py-4 rounded-r-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Performance Insights</h3>
              <ul class="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                <li><strong class="text-gray-900">Speed vs. Accuracy Tradeoff:</strong> Parametric memory maintains retrieval-level accuracy while reducing latency by 72-89%</li>
                <li><strong class="text-gray-900">Multimodal Advantage:</strong> Significant gains in image-caption and video-text tasks demonstrate effective cross-modal knowledge integration</li>
                <li><strong class="text-gray-900">Model Compatibility:</strong> GPT-based models show greater benefit from MemVerse due to stronger knowledge integration capabilities</li>
              </ul>
            </div>
          </section>

          <!-- Use Cases -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Use Cases & Applications</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              MemVerse unlocks new possibilities for AI agents in:
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">1. Long-Term Conversational Agents</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Maintains personalized knowledge across extended dialogues (600+ turns)</li>
                  <li>Avoids repetition and context loss in multi-session interactions</li>
                  <li>Adapts to user preferences over time</li>
                </ul>
              </div>
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-purple-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">2. Multimodal Content Understanding</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Enhances video-text retrieval and cross-modal matching</li>
                  <li>Enables reasoning across text, images, audio, and video</li>
                  <li>Supports complex scene understanding in perception-rich environments</li>
                </ul>
              </div>
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-green-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">3. Lifelong Learning Systems</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Continuously integrates new knowledge without catastrophic forgetting</li>
                  <li>Scales memory capacity independently of model size</li>
                  <li>Adapts to new tasks while preserving existing expertise</li>
                </ul>
              </div>
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-orange-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">4. Robotics & Autonomous Systems</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Retains experiences from past interactions for improved decision-making</li>
                  <li>Supports long-horizon planning in dynamic environments</li>
                  <li>Integrates sensory data (vision, audio, tactile) into structured memory</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Future Directions -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Future Directions</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              The MemVerse team plans to expand the framework with:
            </p>
            <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
              <li>More adaptive memory-control strategies</li>
              <li>Deployment in open-world environments across diverse domains</li>
              <li>Advanced multimodal fusion for real-time sensory data</li>
              <li>Reinforcement learning optimization for memory management</li>
            </ul>
          </section>

          <!-- Conclusion -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Conclusion</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                MemVerse represents a critical step toward AI agents that can truly learn and adapt over time. By unifying fast parametric recall with structured, hierarchical long-term memory, it addresses the fundamental memory gap in modern AI systems—enabling scalable, multimodal lifelong learning without unbounded memory growth.
              </p>
              <p>
                The framework's model-agnostic design and plug-and-play architecture make it easy to integrate with existing LLMs and VLMs, while its experimental results demonstrate significant improvements in reasoning accuracy, efficiency, and long-horizon coherence.
              </p>
              <p class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg font-medium text-gray-900">
                As AI shifts from single-task inference to continuous real-world interaction, MemVerse proves that <strong>scalable memory, not just larger models, is the missing ingredient for capable, adaptive AI agents</strong>.
              </p>
            </div>
          </section>

          <!-- Footer Note -->
          <div class="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 italic">
            <p>
              MemVerse is open-source and available on <a href="https://github.com/KnowledgeXLab/MemVerse" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 underline">GitHub</a>. For more details, refer to the original paper: <a href="https://arxiv.org/pdf/2512.03627" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 underline">MemVerse: Multimodal Memory for Lifelong Learning Agents</a>.
            </p>
          </div>
        </template>

        <!-- MGA Content -->
        <template v-else-if="blogId === 1">
          <!-- Overview Image -->
          <div class="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img 
              :src="mgaImage1"
              alt="MGA Framework Overview"
              class="w-full h-auto"
              @error="handleImageError"
            />
            <p class="text-xs text-gray-500 italic mt-2 text-center">
              Figure 1: The core architecture of MGA, featuring four interdependent modules that enable the "observe–then–decide" paradigm for GUI interaction.
            </p>
          </div>

          <!-- Introduction -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Introduction: The Limitations of Modern GUI Agents</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Graphical User Interface (GUI) agents are transforming how we interact with digital systems—from desktop applications to web platforms—by automating tasks that once required manual mouse clicks, form entries, and navigation. However, current state-of-the-art agents face two critical bottlenecks:
              </p>
              <ol class="list-decimal pl-6 space-y-2 text-sm sm:text-base">
                <li><strong class="text-gray-900">Trajectory Dependence</strong>: Most agents rely on long chains of historical actions to make decisions, leading to error propagation and redundant loops when early steps go off-track.</li>
                <li><strong class="text-gray-900">Local Exploration Bias</strong>: The "decision-first, observation-later" approach causes agents to overlook critical interface cues, prioritizing task goals over full environmental understanding.</li>
              </ol>
              <p>
                These flaws become particularly problematic in complex scenarios: long-horizon tasks spanning multiple applications, dynamic interfaces with pop-ups or loading states, and cross-platform workflows. Enter <strong class="text-gray-900">MGA (Memory-Driven GUI Agent)</strong>—a framework that flips the script with an "observe first, then decide" philosophy, decoupling decisions from fragile trajectories while grounding interactions in comprehensive interface understanding.
              </p>
            </div>
          </section>

          <!-- Core Design -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Core Design: How MGA Works</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              MGA models each GUI interaction step as an independent, context-rich environment state—eliminating the need to replay entire action histories. Its architecture combines four specialized modules, as visualized in Figure 1:
            </p>

            <!-- Detailed Workflow Image -->
            <div class="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                :src="mgaImage2"
                alt="MGA Detailed Workflow"
                class="w-full h-auto"
                @error="handleImageError"
              />
              <p class="text-xs text-gray-500 italic mt-2 text-center">
                Figure 2: Step-by-step data flow in MGA, showing how observation, memory, planning, and grounding work in tandem for a flight-booking task.
              </p>
            </div>

            <!-- Task-Agnostic Spatial–Semantic Observer -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Task-Agnostic Spatial–Semantic Observer</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                The Observer module lays the foundation for MGA's observation-centric approach by extracting <strong class="text-gray-900">task-independent, semantically rich interface information</strong> from screenshots. Unlike task-driven observers that focus only on relevant elements, it captures four critical components:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li><strong class="text-gray-900">Spatial Layout</strong>: Complete mapping of element positions and their relative relationships (no blind spots).</li>
                <li><strong class="text-gray-900">Semantic Roles</strong>: Functional labels for all elements (e.g., "button," "input field," "calendar widget") to enable flexible task adaptation.</li>
                <li><strong class="text-gray-900">Interactive Elements Inventory</strong>: Comprehensive list of all actionable components (buttons, menus, hotkeys) to avoid missed options.</li>
                <li><strong class="text-gray-900">Context & State</strong>: Details like pop-ups, loading bars, or highlighted items that determine action success.</li>
              </ul>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
                This structured output ensures the agent has a full "blueprint" of the interface before making any decisions.
              </p>
            </div>

            <!-- Abstract Memory Agent -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. Abstract Memory Agent</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                To retain temporal context without relying on raw action chains, MGA's Memory Agent distills historical interactions into a <strong class="text-gray-900">dynamic, structured memory</strong>. Unlike traditional trajectory logs, this memory captures five high-level dimensions:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li><strong class="text-gray-900">Interface State Evolution</strong>: How windows, files, or UI elements have changed over steps.</li>
                <li><strong class="text-gray-900">Operation Effect Analysis</strong>: Whether actions produced intended results and their side effects.</li>
                <li><strong class="text-gray-900">Behavioral Pattern Recognition</strong>: Recurring loops or efficient action sequences.</li>
                <li><strong class="text-gray-900">Issue Identification</strong>: Flagged errors, redundancies, or state inconsistencies.</li>
                <li><strong class="text-gray-900">State Consistency Verification</strong>: Ensuring logical flow between past actions and current state.</li>
              </ul>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
                Crucially, this memory does not dictate the next action—it provides a de-biased, redundancy-free context to inform decision-making.
              </p>
            </div>

            <!-- Planning Agent -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. Planning Agent</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                The Planner converts user instructions into actionable steps by leveraging the current screenshot, Observer's spatial–semantic data, and Memory Agent's structured summary. It operates in two stages:
              </p>
              <ol class="list-decimal pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li><strong class="text-gray-900">High-Level Reasoning</strong>: Infers the logical next step (e.g., "VLC is open—load a video by accessing the Media menu").</li>
                <li><strong class="text-gray-900">Action Specification</strong>: Outputs concrete natural-language actions (e.g., "Click the Media button in the top menu bar").</li>
              </ol>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
                By focusing on the current state + distilled memory (not full trajectory replay), the Planner avoids the inertia of erroneous past actions.
              </p>
            </div>

            <!-- GUI Grounding Agent -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. GUI Grounding Agent</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                The Grounding Agent translates the Planner's natural-language actions into executable code (e.g., mouse clicks, keystrokes) by:
              </p>
              <ol class="list-decimal pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Parsing the intended operation (e.g., "click" vs. "type").</li>
                <li>Localizing the target element using the Observer's spatial–semantic data.</li>
                <li>Binding to precise screen coordinates or element IDs (e.g., <code class="bg-gray-100 px-1 rounded">pyautogui.click(676, 377, button='left')</code>).</li>
              </ol>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
                This module closes the loop by updating the environment state post-execution, feeding back into the next observation cycle.
              </p>
            </div>
          </section>

          <!-- Key Innovations -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Key Innovations of MGA</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              MGA's breakthrough performance stems from three game-changing design choices:
            </p>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-500 pl-4 py-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">1. Observation-Centric Workflow</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  By prioritizing "observe first, then decide," MGA aligns visual interface cues with task requirements bidirectionally—eliminating the "front-loaded mismatch" of decision-first agents.
                </p>
              </div>
              <div class="border-l-4 border-purple-500 pl-4 py-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2. Decoupled Decision-Making</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Each step is treated as an independent environment state, powered by the Memory Triad. This decouples current decisions from historical trajectory inertia, reducing error propagation.
                </p>
              </div>
              <div class="border-l-4 border-green-500 pl-4 py-2">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3. Task-Agnostic Grounding</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The Observer's task-independent output enables MGA to generalize across diverse applications (Chrome, VSCode, VLC, GIMP) without retraining—critical for real-world usability.
                </p>
              </div>
            </div>
          </section>

          <!-- Experimental Results -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Experimental Results</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              MGA was evaluated on the <strong class="text-gray-900">OSWorld benchmark</strong>—a rigorous testbed with 300+ tasks across desktop/web apps, file management, and cross-application workflows—plus real-world tools like Chrome, VSCode, and VLC. Here's how it performed against state-of-the-art baselines:
            </p>

            <!-- Overall Performance Table -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Overall Performance</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Agent Model</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Overall Accuracy</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">GTA1 (SOTA Baseline)</td>
                      <td class="px-4 py-3 text-gray-700">48.6%</td>
                    </tr>
                    <tr class="bg-blue-50">
                      <td class="px-4 py-3 font-medium text-gray-900">MGA</td>
                      <td class="px-4 py-3 font-semibold text-blue-600"><strong>54.6%</strong></td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">CoACT-1 (Hybrid Code+GUI)</td>
                      <td class="px-4 py-3 text-gray-700">56.4%*</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-500 italic mt-2">
                *Note: CoACT-1 uses code execution (not just GUI simulation) for an unfair advantage in Office/OS tasks. MGA outperforms it in human-like GUI-only interaction.
              </p>
            </div>

            <!-- Long-Horizon Task Superiority -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Long-Horizon Task Superiority</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                MGA's memory-driven design shines in complex, multi-step tasks. When given a 50-step budget (vs. 15 steps), its performance gap widens significantly:
              </p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Agent</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">15-Step Budget</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">50-Step Budget</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">GTA1</td>
                      <td class="px-4 py-3 text-gray-700">37.1%</td>
                      <td class="px-4 py-3 text-gray-700">48.6%</td>
                    </tr>
                    <tr class="bg-green-50">
                      <td class="px-4 py-3 font-medium text-gray-900">MGA</td>
                      <td class="px-4 py-3 text-gray-700">38.4%</td>
                      <td class="px-4 py-3 font-semibold text-green-600"><strong>54.6%</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
                This demonstrates MGA's ability to maintain consistency across long reasoning chains—critical for real-world tasks like video editing, code debugging, or flight booking.
              </p>
            </div>

            <!-- Ablation Study -->
            <div class="mb-8">
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Ablation Study: Critical Modules</h3>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                Removing MGA's core components highlights their complementary value:
              </p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Model Variant</th>
                      <th class="px-4 py-3 text-left font-semibold text-gray-900">Overall Accuracy</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr class="bg-blue-50">
                      <td class="px-4 py-3 font-medium text-gray-900">MGA (Full)</td>
                      <td class="px-4 py-3 font-semibold text-blue-600"><strong>54.6%</strong></td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">MGA w/o Memory</td>
                      <td class="px-4 py-3 text-gray-700">49.8%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 font-medium text-gray-900">MGA w/o Spatial–Semantic Observation</td>
                      <td class="px-4 py-3 text-gray-700">49.3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
                Both modules are essential: memory stabilizes long action chains, while spatial–semantic observation prevents local exploration bias.
              </p>
            </div>
          </section>

          <!-- Real-World Use Cases -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Real-World Use Cases</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              MGA's robustness and generalization make it ideal for:
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">1. Desktop Automation</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Automate repetitive tasks in VSCode (code formatting, file navigation) or GIMP (image editing workflows).</li>
                  <li>Handle dynamic interfaces with pop-ups, loading states, or context menus—common pain points for traditional agents.</li>
                </ul>
              </div>
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-purple-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">2. Web Interaction</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Complete multi-step web tasks (flight booking, form submission, data scraping) with resistance to UI changes.</li>
                  <li>Recover from errors (e.g., closed modals, incorrect inputs) using structured memory of past attempts.</li>
                </ul>
              </div>
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-green-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">3. Cross-Application Workflows</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Seamlessly switch between Chrome (research), Thunderbird (email), and LibreOffice (document creation) without retraining.</li>
                  <li>Maintain state consistency across apps using the Memory Agent's cross-step summaries.</li>
                </ul>
              </div>
              <div class="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-orange-200 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">4. Accessibility Tools</h3>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Enable voice-driven GUI interaction for users with motor impairments by grounding speech instructions in comprehensive interface observation.</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Future Directions -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Future Directions</h2>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              While MGA already outperforms state-of-the-art GUI agents in human-like interaction, the team plans to expand it with:
            </p>
            <ul class="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
              <li><strong class="text-gray-900">Hybrid Execution</strong>: Integrate code-level execution (e.g., Python/Bash scripts) for system-level tasks while retaining GUI simulation for user-facing interactions.</li>
              <li><strong class="text-gray-900">Adaptive Memory Pruning</strong>: Dynamically prioritize critical memory entries to optimize performance for ultra-long-horizon tasks.</li>
              <li><strong class="text-gray-900">Multimodal Input Support</strong>: Extend observation to include speech and text inputs for more natural user-agent collaboration.</li>
            </ul>
          </section>

          <!-- Conclusion -->
          <section class="mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">Conclusion</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                MGA redefines GUI agent design by putting observation and structured memory at the core. Its "observe first, then decide" paradigm eliminates trajectory dependence and local exploration bias—two longstanding limitations of modern agents. By modeling each step as an independent, context-rich state (powered by the Memory Triad), MGA achieves superior robustness, generalization, and efficiency across real-world applications and long-horizon tasks.
              </p>
              <p class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg font-medium text-gray-900">
                As GUI agents become integral to productivity, accessibility, and automation, MGA proves that <strong>comprehensive observation + distilled memory</strong>—not just larger models or longer trajectories—is the key to human-like digital interaction.
              </p>
            </div>
          </section>

          <!-- Footer Note -->
          <div class="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 italic">
            <p>
              MGA is open-source and available at <a href="https://github.com/MintyCo0kie/MGA4OSWorld" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 underline">anonymous.4open.science/r/MGA-3571</a>. For full details, refer to the original paper: <a href="https://arxiv.org/pdf/2510.24168" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 underline">MGA: Memory-Driven GUI Agent for Observation-Centric Interaction</a>.
            </p>
          </div>
        </template>
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
  videoUrl?: string
  resultsImage?: string
  github?: string
}

const blogs = [
  {
    title: 'MemVerse: Revolutionizing Lifelong Learning for Multimodal AI Agents',
    summary: 'A model-agnostic, plug-and-play memory framework that equips AI agents with lifelong multimodal learning capabilities.',
    date: '2025',
    readTime: '15 min read',
    category: 'Research Paper',
    tags: ['Memory Systems', 'Multimodal AI', 'Lifelong Learning'],
    image: 'https://p3-flow-imagex-sign.byteimg.com/ocean-cloud-tos/pdf/1be3d956a64a0d2a3297e44f03c007f8_0_1200.jpg~tplv-a9rns2rl98-resize-crop:84:346:842:704:758:358.jpeg?rk3s=1567c5c4&x-expires=1796349419&x-signature=j5oLY%2Fg8%2BAOU6Ifoi2ldzFtdcMQ%3D',
    arxiv: 'https://arxiv.org/pdf/2512.03627',
    github: 'https://github.com/KnowledgeXLab/MemVerse',
    videoUrl: undefined,
    resultsImage: undefined
  },
  {
    title: 'Application: How Memory Enhances GUI Agent',
    summary: 'A memory-driven GUI agent framework that enables observation-centric interaction with graphical user interfaces. MGA leverages persistent memory to remember UI patterns, user preferences, and interaction history for efficient task automation.',
    date: '2025',
    readTime: '12 min read',
    category: 'Research Paper',
    tags: ['GUI Agent', 'Memory Systems', 'Automation'],
    image: undefined,
    arxiv: 'https://arxiv.org/pdf/2510.24168',
    github: 'https://github.com/MintyCo0kie/MGA4OSWorld',
    resultsImage: '/mga-res.PNG'
  }
]

const blogId = computed(() => {
  const id = route.params.id
  return id ? parseInt(id as string) : 0
})

const currentBlog = computed(() => {
  return blogs[blogId.value] || blogs[0]
})

// MGA blog images
const mgaImage1 = '/images/research2/img1.png'
const mgaImage2 = '/images/research2/img2.PNG'

function goBack() {
  router.push('/research')
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

