import router from '../router';
import { Query } from '../models/query'

export default function jump(path: string, query?: Query) {
  if (query) {
    router.push({ path, query });
  }
  else {
    router.push({ path })
  }
}