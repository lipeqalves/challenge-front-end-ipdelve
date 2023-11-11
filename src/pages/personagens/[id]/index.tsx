/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image'
import personagem from '../../../assets/image_2.png'

import { spectral400, creepster } from '../../../styles/fonts'
import {
  GenderIntersex,
  Alien,
  Pulse,
  Video,
  Planet,
  Info,
  MapPin
} from '@phosphor-icons/react'
import Link from 'next/link'
//import { useRouter } from 'next/router'

export default function DetalhePersonagem() {
  return (
    <section
      className={`${spectral400.className}  flex justify-between items-center h-full max-w-5xl my-2 mx-auto text-center `}
    >
      <div className="w-1/2 h-3/4 ">
        <Image
          src={personagem}
          className="h-full w-full object-cover rounded-2xl shadow-img"
          alt={''}
        />
      </div>

      <div className="w-1/2 h-3/4 ">
        <h1 className={`${creepster.className} mt-6 text-2xl`}>Rick Sanchez</h1>
        <p className="flex justify-center gap-4 my-4">
          {' '}
          <Video size={24} /> Participou de 51 episódios
        </p>
        <ul className="flex flex-col gap-2 justify-center items-start ml-8 my-2">
          <li className="flex gap-2">
            {' '}
            <Pulse size={24} /> Vivo
          </li>
          <li className="flex gap-2">
            <Alien size={24} /> Humano
          </li>
          <li className="flex gap-2">
            {' '}
            <GenderIntersex size={24} /> Homem
          </li>
        </ul>
        <div className="flex w-full justify-evenly items-center gap-2">
          <div className="flex flex-col items-center justify-around bg-gray-rm-300 w-36 h-40 rounded-2xl">
            <Planet size={32} />
            <p>Planet</p>
            <p>Earth (C-137)</p>
            <Link
              href={'/personagens/personagem'}
              className="flex w-full items-center justify-center p-1"
            >
              <button
                className={`w-4/5 bg-green-rm-300 hover:bg-green-rm-500 rounded-lg flex items-center  justify-between p-1`}
              >
                <Info size={22} /> Saiba mais
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-around bg-gray-rm-300 w-36 h-40 rounded-2xl">
            <MapPin size={32} />
            <p className="w-1/2">Citadel of Ricks</p>
            <p></p>
            <Link
              href={'/personagens/personagem'}
              className="flex w-full items-center justify-center p-1"
            >
              <button
                className={`w-4/5 bg-green-rm-300 hover:bg-green-rm-500 rounded-lg flex items-center  justify-between p-1`}
              >
                <Info size={22} /> Saiba mais
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
