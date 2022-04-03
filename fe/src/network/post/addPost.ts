import { CreatePostReq } from '../../../shared/http/post';
import { request } from '../request';

export async function addPost(data: CreatePostReq) {
  const res = await request({
    method: "POST",
    data,
    url: "/post",
  });

  // 转化为布尔值
  return !!res.data;
}
