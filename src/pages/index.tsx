import { spectral700, spectral400 } from '../styles/fonts'
import Image from 'next/image'

import logoHome from '../assets/Logo-home.png'
export default function Home() {
  return (
    <section
      className={` my-0 mx-auto max-w-5xl h-96 flex flex-col justify-around items-center `}
    >
      <div className="w-80 flex items-center justify-center">
        <Image
          src={logoHome}
          width={160}
          className="object-cover"
          alt={'logo: Rick and Morty'}
        />
      </div>

      <p
        className={`text-5xl w-96 text-center md:text-start h-28 ${spectral700.className}`}
      >
        Saiba tudo em um só <span className="text-green-rm-300">lugar</span>.
      </p>
      <p className={`${spectral400.className} text-center md:text-start w-96`}>
        Personagens, localizações, episódios e muito mais.
      </p>
    </section>
  )
}
