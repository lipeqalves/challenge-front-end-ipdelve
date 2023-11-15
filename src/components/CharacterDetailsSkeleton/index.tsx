/* eslint-disable react/react-in-jsx-scope */
import Skeleton from 'react-loading-skeleton'
import {
  GenderIntersex,
  Alien,
  Pulse,
  Video,
  Planet,
  MapPin
} from '@phosphor-icons/react'

export default function CharacterDetailsSkeleton() {
  return (
    <section
      className={` flex-wrap flex justify-between items-center h-full max-w-5xl my-0 mx-auto text-center`}
    >
      <div className="w-1/2 h-auto">
        {/* Usando Skeleton para a imagem */}
        <Skeleton
          height={420}
          width={320}
          className="object-cover rounded-2xl shadow-img"
        />
      </div>
      <div className="w-1/2 h-auto border border-solid border-green-rm-300 shadow-img">
        {/* Usando Skeleton para o conteudo */}
        <Skeleton
          height={420}
          width={320}
          className="w-1/2 h-auto border border-solid border-green-rm-300 shadow-img"
        />
        <h1 className={`mt-6 text-2xl`}>
          {/* Usando Skeleton para o título */}
          <Skeleton />
        </h1>
        <p className="flex justify-center gap-4 my-4">
          <Video className="text-green-rm-500" size={24} /> Participou de{' '}
          {/* Usando Skeleton para o texto */}
          <Skeleton width={100} />
        </p>
        <div className="flex justify-around my-4">
          {/* Usando Skeleton para a lista */}
          <ul className="flex flex-col gap-2 justify-center items-start ml-4 my-2">
            <li className="flex gap-2">
              <Pulse className="text-green-rm-500" size={24} />{' '}
              {/* Usando Skeleton para o ícone */}
              <Skeleton width={80} />
            </li>
            <li className="flex gap-2">
              <Alien className="text-green-rm-500" size={24} />{' '}
              {/* Usando Skeleton para o ícone */}
              <Skeleton width={80} />
            </li>
            <li className="flex gap-2">
              <GenderIntersex className="text-green-rm-500" size={24} />{' '}
              {/* Usando Skeleton para o ícone */}
              <Skeleton width={80} />
            </li>
          </ul>
          <div className="flex flex-col items-center justify-evenly bg-gray-rm-300 w-40 h-40 rounded-2xl">
            <Planet className="text-green-rm-500" size={24} />{' '}
            {/* Usando Skeleton para o ícone */}
            <Skeleton width={80} />
            <MapPin className="text-green-rm-500" size={24} />{' '}
            {/* Usando Skeleton para o ícone */}
            <Skeleton width={80} />
          </div>{' '}
        </div>
      </div>
    </section>
  )
}
