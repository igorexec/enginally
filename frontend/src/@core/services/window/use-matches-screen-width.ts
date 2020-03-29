import { useState } from 'react'

export const useMatchesScreenWidth = () => {
  const [matches, setMatches] = useState(false)

  return matches
}
