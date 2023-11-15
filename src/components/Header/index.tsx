/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../assets/logo.svg'
import smiley from '../../assets/Smiley.svg'
import play from '../../assets/Play.png'
import local from '../../assets/Planet.svg'

import { spectral400 } from '../../styles/fonts'
export default function Header() {
  return (
    <header
      className={`flex justify-around items-center p-4 bg-gray-rm-300 ${spectral400.className} text-xl relative`}
    >
      <Link href="/">
        <Image
          src={logo}
          className="text-white cursor-pointer shadow-rm rounded-full p-1"
          alt={''}
        />
      </Link>
      <nav>
        <ul className="flex gap-6 text-gray-rm-100">
          <Link href="/characters">
            <li className="flex gap-1 items-center justify-center border-b-2 border-solid border-transparent hover:border-green-rm-500 transition duration-300 ease-in-out p-1">
              <Image src={smiley} alt={''} />
              Characters
            </li>
          </Link>
          <Link href="/location">
            <li className="flex gap-1 items-center justify-center border-b-2 border-solid border-transparent hover:border-green-rm-500 transition duration-300 ease-in-out p-1">
              <Image src={local} alt={''} />
              Location
            </li>
          </Link>
          <Link href="/episode">
            <li className="flex gap-1 items-center justify-center border-b-2 border-solid border-transparent hover:border-green-rm-500 transition duration-300 ease-in-out p-1">
              <Image src={play} alt={''} />
              Episode
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
