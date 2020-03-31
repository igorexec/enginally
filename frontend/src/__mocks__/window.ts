const originalWidth = window.innerWidth
const originalHeight = window.innerHeight

export const mockWindowSize = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width })
  Object.defineProperty(window, 'innerHeight', { value: height })
  window.dispatchEvent(new Event('resize'))
}

export const mockMatchMedia = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((media) => {
      const minWidth = /min-width: (.+?)px/.exec(media)
      const maxWidth = /max-width: (.+?)px/.exec(media)
      const minWidthMatches = minWidth ? minWidth[1] && window.innerWidth >= +minWidth[1] + 1 : true
      const maxWidthMatches = maxWidth ? maxWidth[1] && window.innerWidth <= +maxWidth[1] + 1 : true
      return {
        matches: minWidthMatches && maxWidthMatches,
      }
    }),
  })
}

export const restoreWindowSize = () => {
  mockWindowSize(originalWidth, originalHeight)
}
