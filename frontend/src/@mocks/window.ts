const originalWidth = window.innerWidth
const originalHeight = window.innerHeight

export const mockWindowSize = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width })
  Object.defineProperty(window, 'innerHeight', { value: height })
  window.dispatchEvent(new Event('resize'))
}

export const restoreWindowSize = () => {
  Object.defineProperty(window, 'innerWidth', { value: originalWidth })
  Object.defineProperty(window, 'innerHeight', { value: originalHeight })
}
