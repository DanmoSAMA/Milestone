import { ref } from 'vue';

type curPageType = 'home' | 'tags' | 'search' | 'resume' | 'album' | 'edit';

// export const useCurPage = () => {
//   const currentPage = ref<curPageType>('home');

//   function changeCurPage(name: curPageType) {
//     currentPage.value = name;
//   }

//   return {
//     currentPage,
//     changeCurPage,
//   }
// }

// 防止刷新页面后，页面组件和侧栏被选中的item不对应的bug
const curLocation = window.location.href.split('/').at(-1) as string;
const curType = (
  curLocation.length <= 6 ? curLocation : curLocation.substring(0, 4)
) as curPageType;

export const currentPage = ref<curPageType>(curType);
