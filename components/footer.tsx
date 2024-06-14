'use client'

import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const options = [
  { href: '/home', Icon: HomeIcon, text: 'Inicio' },
  { href: '/events', Icon: EventIcon, text: 'Eventos' },
  { href: '/account', Icon: ManageAccountsIcon, text: 'Cuenta' }
]

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="w-full bg-gray-900 fixed bottom-0 right-0 left-0 grid grid-cols-3 text-white select-none">
      {options.map(({ href, Icon, text }) => (
        <Link
          key={href}
          href={href}
          className={`hover:bg-white/5 py-4 cursor-pointer flex flex-col text-sm gap-1 text-center items-center justify-center ${pathname === href && 'text-blue-200'}`}
        >
          <Icon />
          <span>{text}</span>
        </Link>
      ))}
    </footer>
  )
}
