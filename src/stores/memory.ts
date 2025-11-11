import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

/**
 * Memory store
 * - shortTermMemories: ephemeral session context (clears on reload)
 * - longTermMemories: persisted context (localStorage)
 * This simulates long/short-term memory behavior for demo purposes.
 */
export interface MemoryItem {
  id: string
  type: 'short' | 'long'
  content: string
  createdAt: number
  tags?: string[]
}

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

export const useMemoryStore = defineStore('memory', () => {
  const shortTermMemories = ref<MemoryItem[]>([])
  const longTermMemories = ref<MemoryItem[]>(loadLTM())

  function loadLTM(): MemoryItem[] {
    try {
      const raw = localStorage.getItem('memverse_ltm')
      return raw ? (JSON.parse(raw) as MemoryItem[]) : []
    } catch {
      return []
    }
  }

  watch(
    longTermMemories,
    (v) => {
      localStorage.setItem('memverse_ltm', JSON.stringify(v))
    },
    { deep: true }
  )

  function addShort(content: string, tags?: string[]) {
    const item: MemoryItem = { id: uid(), type: 'short', content, createdAt: Date.now(), tags }
    shortTermMemories.value.unshift(item)
    return item.id
  }

  function addLong(content: string, tags?: string[]) {
    const item: MemoryItem = { id: uid(), type: 'long', content, createdAt: Date.now(), tags }
    longTermMemories.value.unshift(item)
    return item.id
  }

  function remove(id: string) {
    shortTermMemories.value = shortTermMemories.value.filter((m) => m.id !== id)
    longTermMemories.value = longTermMemories.value.filter((m) => m.id !== id)
  }

  function clearShort() {
    shortTermMemories.value = []
  }

  function clearLong() {
    longTermMemories.value = []
  }

  const allMemories = computed(() => [...shortTermMemories.value, ...longTermMemories.value])

  return {
    shortTermMemories,
    longTermMemories,
    allMemories,
    addShort,
    addLong,
    remove,
    clearShort,
    clearLong
  }
})


