import { ref } from 'vue'

export const useShowDropdown = () => {
  let showDropdown = ref(false)

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
