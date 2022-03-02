import { ref, Ref } from 'vue';
import getQueryInHook from '../utils/getQueryInHook';

const curPageNum = ref(parseInt(getQueryInHook('page') as string));
const eachPagePostNum = 8;
const totalPageNum = ref(0);

export { curPageNum, eachPagePostNum, totalPageNum };
