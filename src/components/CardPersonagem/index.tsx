/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image'
import Link from 'next/link'
import { Info } from '@phosphor-icons/react'

import { spectral700, spectral400, creepster } from '../../styles/fonts'

interface CardPersonagemProps {
  id: number
  name: string
  species: string
  image: string
}
export default function CardPersonagem(props: Readonly<CardPersonagemProps>) {
  return (
    <section
      className={`w-64 h-80 bg-gray-rm-300 rounded-t-lg ${spectral700.className}`}
    >
      <Image
        src={props.image}
        width={256}
        height={192}
        className="h-48 rounded-t-lg object-cover"
        alt={props.name}
      />
      <footer className="flex flex-col ml-4 mt-4">
        <strong className={`${creepster.className}`}>{props.name}</strong>
        <span className={`${spectral400.className}`}>{props.species}</span>
      </footer>
      <Link
        href={`/personagens/${props.id}`}
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
