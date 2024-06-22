// If TypeScript didn't explode with more than 5 union types this Hex type would have been way better
type Hex = `#${string}`

export type Technology = {
  name: string,
  color: Hex
}

export type Project = {
  id: number,
  name: string,
  featured: boolean,
  short_description: string,
  description: string,
  url: string,
  from: string,
  to: string,
  technologies: Technology[]
}
