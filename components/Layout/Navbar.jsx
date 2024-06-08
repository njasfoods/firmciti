'use client'
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  ComputerDesktopIcon,
  NewspaperIcon,
  SunIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCloseMenu = (href) => {
    setMobileMenuOpen(false);
    router.push(href);
  };
  

  return (
    <header className="bg-primary fixed top-0 w-full z-50 tracking-wide">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-white tracking-wider">
            <span className="font-bold text-xl"><span className='text-accent-orange'>Trex</span>iti</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
        {/* <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-accent-orange">
            Services
          </Link> */}

          <Link href="portfolio" className="text-sm font-semibold leading-6 text-white hover:text-accent-orange">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-accent-orange">
            About
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-accent-orange">
            Contact
          </Link>
         
        </PopoverGroup>
     
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">trexiti</span>
             <UserIcon/>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
             
                <button
                  type='button'
                  onClick={() => handleCloseMenu('/portfolio')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portfolio
                </button>
                <button
                  type='button'
                  onClick={() => handleCloseMenu('/about')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </button>
                <button
                type='button'
                onClick={() => handleCloseMenu('/contact')}
                
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </button>
              </div>
             
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
