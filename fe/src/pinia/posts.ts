import { defineStore } from 'pinia'
import { GetPostsResData } from '../../shared/http/post'
import { getAllPosts } from '../network/post/getAllPosts'

const usePosts = defineStore('posts', {
  state: () => {
    return {
      posts: <GetPostsResData>[]
    }
  },
  actions: {
    async setPosts() {
      const newPosts = await getAllPosts()
      if (newPosts && newPosts.length) {
        this.posts = newPosts
      }
    }
  }
})

export const postsStore = usePosts()
