import router from '../router';
import { Query } from '../models/query';
import { curPageNum } from '../hooks/usePage';
import { kw } from '../hooks/useKw';

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
