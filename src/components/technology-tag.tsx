import { Badge } from '@/components/ui/badge'
import type { Technology } from '@/types'

type Props = {
  technology?: Technology,
  children?: React.ReactNode
}

export default function TechnologyTag({ technology, children }: Readonly<Props>) {
  return (
    <Badge style={{borderColor: technology?.color}} className="font-bold border-2 border-primary text-light bg-transparent hover:bg-transparent">
      {technology?.name ?? children}
    </Badge>
  )
}
