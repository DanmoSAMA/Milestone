// 控制编辑页面dropdown的显示

import { ref } from 'vue'

export const useShowDropdown = () => {
  const showDropdown = ref(false)

  function setShowDropdown(val: boolean) {
    showDropdown.value = val
  }

  function closeDropdown() {
    if (!showDropdown.value) return
    showDropdown.value = false
  }

  document.addEventListener('click', closeDropdown)

  return {
    showDropdown,
    setShowDropdown
  }
}
