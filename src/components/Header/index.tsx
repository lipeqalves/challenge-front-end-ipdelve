import Image from 'next/image';
import Link from 'next/link'
import { Spectral } from 'next/font/google'

import logo from '../../assets/logo.svg';
import smiley from '../../assets/Smiley.svg'
import play from '../../assets/Play.png'
import local from '../../assets/Planet.svg'

import { spectral400 } from '../../styles/fonts'
export default function Header() {
  return(
    <header className={`flex justify-around items-center p-4 bg-gray-rm-300 ${spectral400.className} bold text-xl`}>
      <Link href="/">
        <Image src={logo} className="text-white cursor-pointer shadow-rm rounded-full p-1"/>
      </Link>
      <nav >
        <ul className="flex gap-6 text-gray-rm-100" >
          <Link href="/personagens">
          <li className="flex gap-1 items-center justify-center border-b-2 border-solid border-transparent hover:border-green-rm-500  p-1"><Image src={smiley}/>Personagens</li>
          </Link>
          <Link href="/localizacao">
          <li className="flex gap-1 items-center justify-center border-b-2 border-solid border-transparent hover:border-green-rm-500  p-1"><Image src={local}/>Localização</li>
          </Link>
          <Link href="/episodios">
          <li className="flex gap-1 items-center justify-center border-b-2 border-solid border-transparent hover:border-green-rm-500  p-1"><Image src={play}/>Episódios</li>
          </Link>

        </ul>
      </nav>
    </header>

    )

}
