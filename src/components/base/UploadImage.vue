<template>
  <div class="space-y-3">
    <el-upload
      class="w-full"
      drag
      :limit="1"
      :auto-upload="false"
      :on-change="onFileChange"
      accept="image/*"
    >
      <i class="el-icon--upload"></i>
      <div class="el-upload__text">Drop image here or <em>click to upload</em></div>
      <template #tip>
        <div class="el-upload__tip">PNG/JPG, up to 5MB.</div>
      </template>
    </el-upload>

    <div v-if="preview" class="rounded-lg border p-3 bg-white">
      <img :src="preview" alt="preview" class="max-h-64 object-contain mx-auto" />
      <div class="text-right mt-2">
        <BaseButton type="primary" @click="emitAnalyze" :disabled="!file">Analyze Image</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const emit = defineEmits<{ (e: 'analyze', file: File): void }>()

const file = ref<File | null>(null)
const preview = ref<string | null>(null)

function onFileChange(uploadFile: any) {
  const f = uploadFile?.raw as File
  file.value = f || null
  if (f) {
    const reader = new FileReader()
    reader.onload = () => {
      preview.value = reader.result as string
    }
    reader.readAsDataURL(f)
  } else {
    preview.value = null
  }
}

function emitAnalyze() {
  if (file.value) emit('analyze', file.value)
}
</script>


