// 此处无需_id，_id是mongodb自动加的，发送请求时不带id
export type Post = {
  title: string
  tags: string[]
  content: string
}

export type PostsCnt = number
