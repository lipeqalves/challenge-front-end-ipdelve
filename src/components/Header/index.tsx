import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import logoHeader from '../../assets/logo_header.svg'
import { spectral400 } from '../../styles/fonts'

import { List, X, Smiley, Video, Planet } from '@phosphor-icons/react'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <header className={`w-full bg-gray-rm-300 ${spectral400.className}`}>
      <nav className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                src={logoHeader}
                width={48}
                height={48}
                className="text-white cursor-pointer shadow-rm rounded-full p-1"
                alt={''}
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                {isNavOpen ? (
                  <X size={32} className="w-6 h-6 text-green-rm-500"></X>
                ) : (
                  <List size={32} className="w-6 h-6 text-green-rm-500"></List>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1  justify-self-center  pb-3  mt-8 md:block md:pb-0 md:mt-0 ${isNavOpen ? 'block' : 'hidden'
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0  text-gray-rm-100">
              <Link href="/characters">
                <li className="w-1/5 md:w-full flex gap-1 items-center justify-start border-b-2 border-solid border-transparent hover:border-green-rm-500 transition duration-300 ease-in-out p-1">
                  <Smiley size={28} />
                  Characters
                </li>
              </Link>
              <Link href="/location">
                <li className="w-1/5 md:w-full  flex gap-1 items-center justify-start border-b-2 border-solid border-transparent hover:border-green-rm-500 transition duration-300 ease-in-out p-1">
                  <Planet size={28} />
                  Location
                </li>
              </Link>
              <Link href="/episode">
                <li className="w-1/5 md:w-full flex gap-1 items-center justify-start border-b-2 border-solid border-transparent hover:border-green-rm-500 transition duration-300 ease-in-out p-1">
                  <Video size={28} />
                  Episode
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
