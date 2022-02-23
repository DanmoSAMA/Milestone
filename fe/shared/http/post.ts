import { Post } from "../models/post";
import { HttpRes } from "./";

export type CreatePostReq = Pick<Post, "tags" | "title" | "content">