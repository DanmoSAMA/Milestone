import { ref } from 'vue'

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

export const currentPage = ref<curPageType>('home');