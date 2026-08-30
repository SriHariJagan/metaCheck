import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Solutions from '@/pages/Solutions'
import Careers from '@/pages/Careers'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import { PrivacyPolicy } from '@/pages/legal/PrivacyPolicy'
import { TermsOfService } from '@/pages/legal/TermsOfService'
import { Cancellation } from '@/pages/legal/Cancellation'
import { Security } from '@/pages/legal/Security'
import { Compliance } from '@/pages/legal/Compliance'
import { Sitemap } from '@/pages/legal/Sitemap'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal">
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cancellation" element={<Cancellation />} />
          <Route path="cancellation-and-refund" element={<Cancellation />} />
          <Route path="refund" element={<Cancellation />} />
          <Route path="security" element={<Security />} />
          <Route path="compliance" element={<Compliance />} />
        </Route>
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
