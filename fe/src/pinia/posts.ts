import { defineStore } from 'pinia';
import { getAllPosts } from '../network/post/getAllPosts';
import { GetPostsResData } from '../../shared/http/post';

export const usePosts = defineStore('posts', {
  state: () => {
    return {
      posts: [] as GetPostsResData,
      tags: [] as string[],
    };
  },
  actions: {
    async setPosts() {
      const newPosts = await getAllPosts();
      if (newPosts && newPosts.length) {
        this.posts = newPosts;
        this.setTags();
      }
    },
    setTags() {
      this.posts.forEach((post) => {
        post.tags.forEach((tag) => {
          // 如果是tags数组里没有的tag，则加入
          if (!this.tags.find((item) => tag === item)) {
            this.tags.push(tag);
          }
        });
      });
      console.log(this.tags);
    },
  },
});
