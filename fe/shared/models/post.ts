// 此处无需_id，_id是mongodb自动加的，发送请求时不带id
export type Post = {
  title: string,
  tags: string[],
  content: string,
}

// 为了在 Posts.vue 中初始化post，需要提供一个初始值
// 理论上这里需要_id，但其实没必要，因为根本不会把这个默认post渲染出来
export const DEFAULT_POST: Post = {
  title: "",
  tags: [],
  content: "",
};