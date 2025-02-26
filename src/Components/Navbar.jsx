import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from ".././assets/ais-logo.png";
import Button from '../Components/Button';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="absolute w-full top-0 z-1">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 mt-10 ">
        <div className="relative flex h-16 items-center justify-between">
         
          <div className="flex  items-center justify-center sm:items-stretch sm:justify-start ">
            <div className="flex shrink-0 items-center ">
              <img
                alt="Your Company"
                src={logo}
                className="h-28 w-auto brightness-[20.5]"
              />
            </div>
            
          </div>
          <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

         

          <div className=" flex items-center justify-end sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

         <Button mybtn=
         {"Let's Talk"} className="hidden" />

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
