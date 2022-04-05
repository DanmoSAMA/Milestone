import { defineStore } from 'pinia'
import { GetPostsResData } from '../../shared/http/post'
import { getAllPosts } from '../network/post/getAllPosts'
import { getPostsCnt } from '../network/post/getPostsCnt'

const usePosts = defineStore('posts', {
  state: () => {
    return {
      posts: <GetPostsResData>[],
      cnt: 0
    }
  },
  actions: {
    async setPosts() {
      const newPosts = await getAllPosts()
      if (newPosts && newPosts.length) {
        this.posts = newPosts
      }
    },
    async setCnt() {
      this.cnt = await getPostsCnt()
    }
  }
})

export const postsStore = usePosts()
