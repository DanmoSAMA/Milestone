import { ref } from 'vue';

export const showContent = ref(false);

export function setShowContent(time: number) {
  setTimeout(() => {
    showContent.value = true;
  }, time);
}
