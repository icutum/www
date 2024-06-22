import { Button } from '@/components/ui/button'
import { ReactElement } from 'react'

type Props = {
  to: string,
  children: ReactElement
}

export default function IconLink({ to, children }: Readonly<Props>) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon" className="transition-all duration-300 hover:-translate-y-1">
        { children }
      </Button>
    </a>
  )
}
