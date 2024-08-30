import React from "react";
import logo from "./img/logo.png";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function Header () {

    const navigation = [
        { name: 'About us', href: '/About', current: false },
        { name: 'Service', href: 'Service', current: false },
        { name: 'Contact us', href: '/Contact', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <Disclosure as="nav" className="mx-2">
            {({open}) => (
                <>
                <div className="mx-0 w-full  bg-white-700 mt-2 px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between ">
                        <div className="absolute inset-y-0 flex right-0 items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="relative inline-flex items-center justify-end rounded-md p-2 text-black-900 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-9 w-9" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex w-full items-center justify-start sm:items-stretch sm:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                            <a href="/Home" className="h-16 w-auto"><img 
                                className="h-16 w-auto"
                                src={logo}
                                alt="Your Company"
                            />
                            </a>
                            </div>


                            <form className="form flex items-center mlg:hidden">   
                                <label for="voice-search" class="sr-only">Search</label>
                                <div class="relative w-80">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-6 h-6 text-white-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"/>
                                        </svg>

                                    </div>
                                    <input type="text" id="voice-search" class="bg-white-50 border border-black-500/100 text-black-900 text-sm rounded-lg outline-none focus:ring-clack-500 focus:border-gray-500 block w-full ps-10 p-2.5 shadow-lg dark:bg-black-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500" placeholder="Search Components....." required />
                                </div>
                                <button type="submit" class="inline-flex items-center py-2.5 px-2 ms-2 text-sm font-medium text-black bg-white hover:bg--800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg--600 dark:hover:bg--700 dark:focus:ring--800">
                                    <svg class="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </button>
                            </form>

                            <div className="hidden mt-3 sm:ml-6 lg:block">
                                <div className="flex space-x-10">
                                    {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-black-700 hover:ease-out',
                                            'rounded-md px-3 py-2 text-lg font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className=" bg-gray-900 rounded-lg mt-2 lg:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-black-900 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    )
}

export default Header;