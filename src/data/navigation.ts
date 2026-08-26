import type { NavLinkItem } from '@/types'

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_LINKS: { heading: string; links: NavLinkItem[] }[] = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Verification', to: '/solutions' },
      { label: 'Digital Platforms', to: '/solutions' },
      { label: 'Intelligence', to: '/solutions' },
      { label: 'Security', to: '/solutions' },
      { label: 'Social Impact', to: '/solutions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', to: '/' },
      { label: 'X', to: '/' },
      { label: 'Instagram', to: '/' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/' },
      { label: 'Terms', to: '/' },
    ],
  },
]
