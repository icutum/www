import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import RootLayout from '@/layouts/root-layout'
import { HomePage, ErrorPage } from '@/views'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<HomePage />} handle={{ name: 'Home' }} />
      <Route path="*" element={<ErrorPage />} handle={{ name: 'Error' }} />
    </Route>,
  ),
)
