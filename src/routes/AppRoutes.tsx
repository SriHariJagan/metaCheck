import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Solutions from '@/pages/Solutions'
import Careers from '@/pages/Careers'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
