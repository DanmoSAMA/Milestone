import { GetPostsReq, GetPostsResData } from "../../../shared/http";
import { request } from "../request";

export async function getAllPosts(query?: GetPostsReq) {
  const res = await request<GetPostsResData>({
    url: "/post",
    method: "GET",
    params: query,
  });

  return res.data || [];
}