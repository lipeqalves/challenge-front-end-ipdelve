/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image'
import Link from 'next/link'
import { Info } from '@phosphor-icons/react'

import { spectral700, spectral400, creepster } from '../../styles/fonts'
import img from '../../assets/image_2.png'

export default function CardPersonagem() {
  return (
    <section
      className={`w-64 h-80 bg-gray-rm-300 rounded-t-lg ${spectral700.className}`}
    >
      <Image src={img} className="w-64 h-48 my-4 rounded-t-lg" />
      <footer className="flex flex-col ml-4 ">
        <stron className={`${creepster.className}`}>Rick Sanchez</stron>
        <span className={`${spectral400.className}`}>Humano</span>
      </footer>
      <Link
        href={'/personagens/personagem'}
        className="flex items-center justify-center p-4"
      >
        <button
          className={`w-3/5 bg-green-rm-300 hover:bg-green-rm-500 rounded-lg flex items-center  justify-center gap-1 `}
        >
          <Info size={26} /> Saiba mais
        </button>
      </Link>
    </section>
  )
}
