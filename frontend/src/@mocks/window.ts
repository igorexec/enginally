const originalWidth = window.innerWidth
const originalHeight = window.innerHeight

export const mockWindowSize = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width })
  Object.defineProperty(window, 'innerHeight', { value: height })
  window.dispatchEvent(new Event('resize'))
}

export const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => {
      return {
        matches,
      }
    }),
  })
}

export const restoreWindowSize = () => {
  mockWindowSize(originalWidth, originalHeight)
}
