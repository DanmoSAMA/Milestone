import { Post } from '../models/post'
import { PostsCnt } from '../models/post'
import { HttpRes } from './'

export type GetPostsResData = { posts: Post[]; filteredCnt: number }
export type GetPostsRes = HttpRes<GetPostsResData>
export type GetPostsReq = {
  page: number
  kw?: string
}

export type GetPostDetailResData = Post
export type GetPostDetailRes = HttpRes<GetPostDetailResData>

export type GetPostsCntResData = PostsCnt
export type GetPostsCntRes = HttpRes<GetPostsCntResData>

export type CreatePostReq = Pick<Post, 'tags' | 'title' | 'content'>

export type UpdatePostReq = CreatePostReq
