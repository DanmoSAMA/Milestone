import { GetPostsReq, GetPostsCtnResData } from '../../../shared/http'
import { request } from '../request'

export async function getPostsCnt(query?: GetPostsReq) {
  const res = await request<GetPostsCtnResData>({
    method: 'GET',
    url: '/post/cnt'
  })

  return res.data || 0
}
