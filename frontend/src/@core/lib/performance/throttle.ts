export const throttle = (fn: Function, delay: number): Function => {
  let timeout: any | null = null
  return () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(null)
        timeout = null
      }, delay)
    }
  }
}
