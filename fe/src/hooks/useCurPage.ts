import { ref } from 'vue';

import { curPageType } from '../models/curPage';

// 防止刷新页面后，页面组件和侧栏被选中的item不对应的bug
const curLocation = window.location.href.split('/').at(-1) as string;
const curType = (
  curLocation.length <= 6
    ? curLocation !== ''
      ? curLocation
      : 'home'
    : 'home'
) as curPageType;

export const currentPage = ref<curPageType>(curType);
