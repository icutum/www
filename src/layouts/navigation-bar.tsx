import { NavLink } from 'react-router-dom'
import { ModeToggle } from '@/components/mode-toggle'

export default function NavigationBar() {
  const { VITE_APP_NAME } = import.meta.env

  return (
    <nav className="z-10 select-none py-3">
      <div className="flex justify-between lg:w-[55rem] lg:container lg:px-0 px-4">
        <NavLink to="/" className="flex items-center">
          <h1 className="text-lg font-bold">{VITE_APP_NAME}</h1>
        </NavLink>
        <div className="flex gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
