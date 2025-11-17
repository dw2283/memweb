<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="hero-gradient border-b">
      <div class="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div class="text-center space-y-6 max-w-4xl mx-auto">
          <div class="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            CVPR 2026 Submission #1238 | Anonymous
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            MemVerse: Multimodal Memory for Lifelong Learning Agents
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            A <strong class="text-brand-600">model-agnostic, plug-and-play memory framework</strong> that equips AI agents with lifelong multimodal learning capabilities. 
            By bridging fast parametric recall and hierarchical retrieval-based memory, it solves catastrophic forgetting, poor long-horizon reasoning, and disconnected multimodal understanding.
          </p>
          <div class="flex flex-wrap justify-center gap-4 pt-4">
            <BaseButton type="primary" size="large" @click="scrollToPaper">
              <el-icon class="mr-2"><i-ep-document /></el-icon>
              Read the Paper
            </BaseButton>
            <BaseButton size="large" @click="scrollToCode">
              <el-icon class="mr-2"><i-ep-link /></el-icon>
              View Code
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Overview -->
    <section ref="summaryRef" class="max-w-7xl mx-auto px-4 py-16">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900">🌟 Project Overview</h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-relaxed">
            MemVerse is a <strong>model-agnostic, plug-and-play memory framework</strong> designed to equip AI agents with lifelong multimodal learning capabilities. 
            By bridging fast parametric recall and hierarchical retrieval-based memory, it solves core limitations of current AI systems—catastrophic forgetting, 
            poor long-horizon reasoning, and disconnected multimodal understanding.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Unlike stateless models or rigid memory solutions, MemVerse enables agents to accumulate, organize, and adaptively use knowledge from text, images, 
            audio, and video, supporting coherent interaction in real-world environments.
          </p>
        </div>
      </div>
    </section>

    <!-- Core Challenges -->
    <section class="bg-gray-50 border-y">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">🎯 Core Challenges Addressed</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Current AI memory systems face three critical bottlenecks that MemVerse overcomes.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mt-12">
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

          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mt-8">
            <p class="text-gray-700 leading-relaxed text-center">
              <strong>MemVerse overcomes these by unifying complementary memory mechanisms, mirroring the "fast and slow thinking" of human cognition.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Architecture -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">🔧 Technical Architecture</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            MemVerse's design integrates three core memory components, coordinated by a central orchestrator.
          </p>
        </div>

        <!-- Architecture Image -->
        <div class="bg-white rounded-xl border p-6 shadow-sm">
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

        <div class="grid md:grid-cols-3 gap-8 mt-12">
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
      </div>
    </section>

    <!-- Key Results -->
    <section ref="resultsRef" class="bg-gray-50 border-y">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="space-y-12">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">📊 Key Results</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              MemVerse outperforms state-of-the-art models across diverse multimodal benchmarks.
            </p>
          </div>

          <!-- Benchmark Results Table -->
          <div class="bg-white rounded-xl border overflow-hidden shadow-sm">
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
        </div>
      </div>
    </section>

    <!-- Ablation Insights -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">📈 Ablation Insights</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl border p-6 shadow-sm">
            <div class="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <el-icon class="text-indigo-600 text-2xl"><i-ep-picture /></el-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Modality Impact</h3>
            <p class="text-gray-700 leading-relaxed">
              Multimodal knowledge graphs improve reasoning accuracy by <strong class="text-indigo-600">7-12%</strong> compared to text-only memory.
            </p>
          </div>

          <div class="bg-white rounded-xl border p-6 shadow-sm">
            <div class="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
              <el-icon class="text-pink-600 text-2xl"><i-ep-connection /></el-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Memory Synergy</h3>
            <p class="text-gray-700 leading-relaxed">
              Orchestrating STM, LTM, and parametric memory outperforms single-component systems across context lengths (4k-16k tokens).
            </p>
          </div>

          <div class="bg-white rounded-xl border p-6 shadow-sm">
            <div class="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                <el-icon class="text-teal-600 text-2xl"><i-ep-rank /></el-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Scalability</h3>
            <p class="text-gray-700 leading-relaxed">
              Works with models from <strong class="text-teal-600">1.5B to 72B parameters</strong>, with consistent gains regardless of base model size.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Showcase -->
    <section class="bg-gray-50 border-y">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">🎨 Demo Showcase</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Multimodal Memory in Action: MemVerse integrates diverse memory types to generate accurate, context-aware responses.
            </p>
          </div>

          <!-- Multimodal Examples Image -->
          <div class="bg-white rounded-xl border p-6 shadow-sm">
            <img 
              src="https://dw2283.github.io/memweb/research/multimodal_examples.png" 
              alt="Multimodal Memory Examples" 
              class="w-full h-auto rounded-lg"
              @error="handleImageError"
            />
            <p class="text-sm text-gray-600 mt-4 text-center italic">
              Figure 1: MemVerse's multimodal memory integration (from paper)
            </p>
          </div>

          <!-- Comparison Table -->
          <div class="bg-white rounded-xl border overflow-hidden shadow-sm">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Memory Type</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Example Input</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-green-700">With MemVerse (Accurate)</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-red-700">Without Memory (Hallucinated)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Text + Image</td>
                    <td class="px-6 py-4 text-sm text-gray-700">"Who owns the British Shorthair kitten with glasses?"</td>
                    <td class="px-6 py-4 text-sm text-gray-700">
                      "Mia is the proud owner of the fluffy gray British Shorthair. She adopted him from a pet shop on a rainy afternoon, and he wears round glasses while lounging on her desk."
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-700">
                      "The kitten you're referring to is likely Truffles, owned by an optician named Danielle Crull."
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Audio + Text</td>
                    <td class="px-6 py-4 text-sm text-gray-700">"What's a classic adventurous quote from Pirates of the Caribbean?"</td>
                    <td class="px-6 py-4 text-sm text-gray-700">
                      "One of Jack Sparrow's most famous lines: 'Not all treasure is silver and gold, mate.' It captures the film's spirit of valuing experiences over material gain."
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-700">
                      "A common quote is 'Yo ho, yo ho, a pirate's life for me'—though it's more of a theme song lyric."
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Video + Text</td>
                    <td class="px-6 py-4 text-sm text-gray-700">"Describe the calm beach video in the album."</td>
                    <td class="px-6 py-4 text-sm text-gray-700">
                      "The video shows a calm beach with waves gently lapping at the shore, soft sand, and a clear blue sky—capturing a peaceful coastal moment."
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-700">
                      "The beach video features large waves crashing against rocks with stormy clouds overhead."
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Contributions -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">🚀 Core Contributions</h2>
        </div>

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
      </div>
    </section>

    <!-- Paper & Resources -->
    <section class="bg-gray-50 border-y">
      <div class="max-w-4xl mx-auto px-4 py-16">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 text-center">📋 Paper & Resources</h2>
          <div class="bg-white rounded-xl border p-8 shadow-sm space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Paper</h3>
              <a 
                href="https://dw2283.github.io/memweb/research/paper.pdf" 
                target="_blank"
                class="text-blue-600 hover:text-blue-800 underline flex items-center gap-2"
              >
                <el-icon><i-ep-document /></el-icon>
                CVPR 2026 Submission #1238 (Confidential Review Copy)
              </a>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Code</h3>
              <p class="text-gray-700">Will be publicly available upon paper acceptance.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Appendices</h3>
              <a 
                href="https://dw2283.github.io/memweb/research/appendices.pdf" 
                target="_blank"
                class="text-blue-600 hover:text-blue-800 underline flex items-center gap-2"
              >
                <el-icon><i-ep-document /></el-icon>
                Full Results & Ablations (ScienceQA, LoCoMo, MSR-VTT details)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="max-w-4xl mx-auto px-4 py-16">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900 text-center">📌 Contact</h2>
        <div class="bg-white rounded-xl border p-8 shadow-sm text-center">
          <p class="text-gray-700 leading-relaxed mb-4">
            For questions about the project, please reach out via the 
            <a 
              href="https://github.com/dw2283/memweb" 
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline"
            >
              GitHub repository
            </a> 
            (updates post-acceptance) or reference <strong>CVPR 2026 Submission #1238</strong> in communications.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl p-12 text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Give your AI a memory and personality.</h2>
        <p class="text-xl mb-8 opacity-90">Instant memory for LLMs—better, cheaper, personal.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <BaseButton size="large" class="bg-white text-brand-600 hover:bg-gray-100" @click="goHome">
            Get Started
          </BaseButton>
          <BaseButton size="large" class="bg-transparent border-2 border-white text-white hover:bg-white/10" @click="goPricing">
            View Pricing
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const summaryRef = ref<HTMLElement | null>(null)
const resultsRef = ref<HTMLElement | null>(null)

function scrollToPaper() {
  summaryRef.value?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToCode() {
  resultsRef.value?.scrollIntoView({ behavior: 'smooth' })
}

function goHome() {
  router.push('/')
}

function goPricing() {
  router.push('/pricing')
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>
