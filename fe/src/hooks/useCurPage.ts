// 当前页面的类型，用于控制侧栏选中item的样式
import { ref } from 'vue'
import { curPageType } from '../models/curPage'

// 防止刷新页面后，页面组件和侧栏被选中的item不对应
const curLocation = window.location.href.split('/').at(-1) as string
const curType = (
  curLocation.length <= 6
    ? curLocation !== ''
      ? curLocation
      : 'posts'
    : 'posts'
) as curPageType

export const currentPage = ref<curPageType>(curType)
