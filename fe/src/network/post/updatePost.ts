import { UpdatePostReq } from '../../../shared/http/post';
import { request } from '../request';

export async function updatePost(data: UpdatePostReq, id: string) {
  const res = await request({
    method: "PUT",
    data,
    url: `/post/${id}`,
  });

  return !!res.data;
}