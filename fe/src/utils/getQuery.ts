import { useRoute } from 'vue-router'

export default function getQuery() {
  const route = useRoute()
  return route.query
}
