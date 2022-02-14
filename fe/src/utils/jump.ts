import router from '../router';

export default function jump(path: string, query?: object) {
  if (query) {
    router.push({ path, query });
  }
  else {
    router.push({ path })
  }
}