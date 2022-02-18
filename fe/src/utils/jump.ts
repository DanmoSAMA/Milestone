import router from '../router';

type Query =  {
  [key: string]: string
}

export default function jump(path: string, query?: Query) {
  if (query) {
    router.push({ path, query });
  }
  else {
    router.push({ path })
  }
}