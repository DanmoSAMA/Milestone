import { ref } from 'vue';

export const isEdited = ref(false);

export function setIsEdited(val: boolean) {
  isEdited.value = val;
}
