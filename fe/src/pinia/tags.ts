import { defineStore } from 'pinia'

import { getAllTags } from '../network/tag/getAllTags'
import { Tag } from '../../shared/models/tag'

export const useTags = defineStore('tags', {
  state: () => {
    return {
      tags: <Tag[]>[]
    }
  },
  actions: {
    async setTags() {
      this.tags = await getAllTags()
    }
  }
})
