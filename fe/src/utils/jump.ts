import { kw } from '../hooks/useKw';
import { curPageNum } from '../hooks/usePage';
import { Query } from '../models/query';
import router from '../router';

export default function jump(path: string, query?: Query) {
  if (query) {
    router.push({ path, query });
    if (query.page) {
      curPageNum.value = parseInt(query.page);
    }
  } else {
    router.push({ path });
  }
}
