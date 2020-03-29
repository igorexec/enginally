export const createMediaQuery = ({
  minWidth = 0,
  maxWidth,
  minHeight = 0,
  maxHeight,
}: {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}) => {
  let mediaQuery = `(min-width: ${minWidth}px) and (min-height: ${minHeight}px)`
  if (maxWidth) {
    mediaQuery += ` and (max-width: ${maxWidth - 1}px)`
  }
  if (maxHeight) {
    mediaQuery += ` and (max-height: ${maxHeight - 1}px)`
  }
  return mediaQuery
}
