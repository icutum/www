import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import useRoute from '@/hooks/use-route'
import NavigationBar from '@/layouts/navigation-bar'
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout() {
  const location = useLocation()
  const route = useRoute()

  useEffect(() => {
    if (!route) return

    document.title = `${route.name} - ${import.meta.env.VITE_APP_NAME}`
  }, [location])

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NavigationBar />
      <main className="flex flex-col p-4 lg:container lg:w-[55rem] lg:px-0 lg:py-8 space-y-10 font-light">
        <Outlet />
      </main>
    </ThemeProvider>
  )
}