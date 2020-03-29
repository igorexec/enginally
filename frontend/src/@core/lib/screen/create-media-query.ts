export const createMediaQuery = ({
  minWidth = 0,
  maxWidth,
}: {
  minWidth?: number;
  maxWidth?: number;
}) => {
  let mediaQuery = `(min-width: ${minWidth}px)`
  if (maxWidth) {
    mediaQuery += ` and (max-width: ${maxWidth - 1}px)`
  }
  return mediaQuery
}
