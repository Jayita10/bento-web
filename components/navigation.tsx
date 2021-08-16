import { useRouter } from 'next/router';
import { Disclosure} from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion, Variants } from "framer-motion"
import Link from 'next/link'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ');
};

const animation: Variants = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 0.1
      }
  },
}

const animationItem: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  }
}

export default function Example() {
    const { asPath } = useRouter();
    const navigation = [
        { name: 'About', href: '/about', current: asPath == '/about' ? true : false },
        { name: 'Setup', href: '/setup', current: asPath == '/setup' ? true : false },
        { name: 'Commands', href: '/commands', current: asPath == '/commands' ? true : false },
        { name: 'Leaderboard', href: '/leaderboard', current: asPath == '/leaderboard' ? true : false },
      ];
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <Link href="/" passHref>
                    <motion.p className="text-yellow-400 cursor-pointer hover:bg-yellow-400 hover:text-black hover:animate-pulse px-3 py-2 rounded-md text-sm font-medium" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>🍱 Bento</motion.p>
                </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-yellow-400 text-black' : 'text-gray-300 hover:bg-yellow-400 hover:text-black',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <motion.div className="px-2 pt-2 pb-3 space-y-1" initial='hidden' animate='show' variants={animation}>
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-yellow-400 text-black' : 'text-gray-300 hover:bg-yellow-400 hover:text-black',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        variants={animationItem}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
  );
}