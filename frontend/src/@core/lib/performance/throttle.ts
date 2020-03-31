export const throttle = (fn: Function, delay: number) => {
  let timeout: number | null = null
  return () => {
    if (!timeout) {
      timeout = window.setTimeout(() => {
        fn.apply(null)
        timeout = null
      }, delay)
    }
  }
}
