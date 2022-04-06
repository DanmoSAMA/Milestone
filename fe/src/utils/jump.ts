import { Query } from '../models/query'
import router from '../router'

export default function jump(path: string, query?: Query) {
  if (query) {
    router.push({ path, query })
  } else {
    router.push({ path })
  }
}
