import { defineStore } from 'pinia'
import { getPostDetail } from '../network/post/getPostDetail'
import { GetPostDetailResData } from '../../shared/http/post'

const usePost = defineStore('post', {
  state: () => {
    return {
      title: '',
      content: '',
      id: '',
      tags: <string[]>[],
      isEdited: false
    }
  },
  actions: {
    async setPost(id: string) {
      const data: GetPostDetailResData | null = await getPostDetail(id)
      if (data) {
        this.title = data.title
        this.content = data.content
        this.id = id
        this.tags = data.tags
        return true
      }
      return false
    },
    setIsEdited(val: boolean) {
      this.isEdited = val
    }
  }
})

export const postStore = usePost()
