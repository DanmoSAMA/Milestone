import { defineStore } from 'pinia'
import { Post } from '../../shared/models/post'
import { getAllPosts } from '../network/post/getAllPosts'
import { getPostsCnt } from '../network/post/getPostsCnt'

const usePosts = defineStore('posts', {
  state: () => {
    return {
      posts: <Post[]>[],
      cnt: 0,
      filteredCnt: 0
    }
  },
  actions: {
    async setPosts(page: number, kw?: string) {
      const data = await getAllPosts({ page, kw })
      if (data) {
        this.posts = data.posts
        this.filteredCnt = data.filteredCnt
      }
    },
    async setCnt() {
      this.cnt = await getPostsCnt()
    }
  }
})

export const postsStore = usePosts()
