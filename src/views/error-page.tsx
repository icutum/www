import { Link } from 'react-router-dom'
import { CornerUpLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function ErrorPage() {
  return (
    <header className="py-10">
      <section>
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl italic">- Page not found</p>
      </section>
      <section>
        <p className="py-5">The resource you were looking for has been moved or replaced. Sorry for that.</p>
        <Link to="/" >
          <Button variant="outline" className="flex gap-3 items-center transition-all duration-300 hover:-translate-y-1">
            <CornerUpLeft />
            Go back to home
          </Button>
        </Link>
      </section>
    </header>
  )
}
