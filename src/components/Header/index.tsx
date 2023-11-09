import Image from 'next/image';
import Link from 'next/link'
import { Spectral } from 'next/font/google'

import logo from '../../assets/logo.svg';


import { spectral400 } from '../../styles/fonts'
export default function Header() {
  return(
    <header className={`flex justify-around items-center p-4 bg-green-ip-500 ${spectral400.className} bold text-xl`}>
      <Link href="/">
        <Image src={logo} className="text-white cursor-pointer"/>
      </Link>


      <nav >
        <ul className="flex gap-6 text-gray-ip-300" >
          <Link href="/personagens">
          <li>Personagens</li>
          </Link>
          <Link href="/localizacao">
          <li>Localização</li>
          </Link>
          <Link href="/episodios">
          <li>Episódios</li>
          </Link>

        </ul>
      </nav>
    </header>

    )

}
