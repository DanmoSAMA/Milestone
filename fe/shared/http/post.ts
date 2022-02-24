import { Post } from "../models/post";
import { HttpRes } from "./";

export type GetPostsResData = Post[];
export type GetPostsRes = HttpRes<GetPostsResData>;
export type GetPostsReq = {
  // from?: number;
  // to?: number;
  // limit: number;
  // kw?: string;
};
export type CreatePostReq = Pick<Post, "tags" | "title" | "content">