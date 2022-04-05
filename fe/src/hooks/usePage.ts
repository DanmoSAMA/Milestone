import { ref, Ref } from 'vue'

import getQueryInHook from '../utils/getQueryInHook'
import jump from '../utils/jump'

const curPageNum = ref(Number.MAX_VALUE)
const eachPagePostNum = 8
const totalPageNum = ref(0)

export { curPageNum, eachPagePostNum, totalPageNum }
