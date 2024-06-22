import { useMatches } from 'react-router-dom'

export default function useRoute() {
  const matches = useMatches()
  const route = matches.at(-1)

  return route?.handle as { [key: string]: any }
}
