import Link from 'next/link';
import {
  Home,
  Calendar,
  ShoppingCart,
  Settings,
  HelpCircle,
  GitCompare,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
  },
  {
    title: 'Events',
    icon: Calendar,
    href: '/events',
  },
  {
    title: 'Orders',
    icon: ShoppingCart,
    href: '/orders',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

const bottomNavItems = [
  {
    title: 'Support',
    icon: HelpCircle,
    href: '/support',
  },
  {
    title: 'Changelog',
    icon: GitCompare,
    href: '/changelog',
  },
];

export function MainNav() {
  return (
    <div className='flex h-screen w-[240px] flex-col border-r bg-gray-50'>
      <div className='p-6'>
        <h2 className='flex items-center text-lg font-semibold'>
          <span className='bg-primary mr-2 h-6 w-6 rounded-lg' />
          Catalyst
        </h2>
      </div>
      <div className='flex flex-1 flex-col gap-2 px-4'>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
              item.href === '/' && 'bg-white text-gray-900'
            )}
          >
            <item.icon className='h-5 w-5' />
            {item.title}
          </Link>
        ))}
      </div>
      <div className='mt-auto px-4 pb-4'>
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900'
          >
            <item.icon className='h-5 w-5' />
            {item.title}
          </Link>
        ))}
        <div className='mt-4 flex items-center gap-3 rounded-lg px-3 py-2'>
          <div className='h-8 w-8 rounded-full bg-gray-200' />
          <div className='flex flex-col'>
            <span className='text-sm font-medium'>Erica</span>
            <span className='text-xs text-gray-500'>erica@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
