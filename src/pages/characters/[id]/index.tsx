/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image'

import { spectral400, creepster } from '../../../styles/fonts'
import {
  GenderIntersex,
  Alien,
  Pulse,
  Video,
  Planet,
  MapPin
} from '@phosphor-icons/react'

import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

export interface CharacterDetailsProps {
  characterDetails: {
    id: number
    name: string
    species: string
    gender: string
    image: string
    status: string
    origin: string
    location: string
    episode: number
  }
}
export default function CharacterDetails(
  character: Readonly<CharacterDetailsProps>
) {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div
        className={`${spectral400.className}  flex justify-between items-center h-full max-w-5xl my-2 mx-auto text-center `}
      >
        Loading...
      </div>
    )
  }

  return (
    <section
      className={`${spectral400.className}  flex justify-between items-center h-full max-w-5xl my-2 mx-auto text-center `}
    >
      <div className="w-1/2 h-3/4 ">
        <Image
          src={character.characterDetails.image}
          width={520}
          height={520}
          className="object-cover rounded-2xl shadow-img"
          alt={character.characterDetails.name}
        />
      </div>

      <div className="w-1/2 h-3/4 ">
        <h1 className={`${creepster.className} mt-6 text-2xl`}>
          {character.characterDetails.name}
        </h1>
        <p className="flex justify-center gap-4 my-4">
          {' '}
          <Video size={24} /> Participou de {character.characterDetails.episode}{' '}
          episódios
        </p>
        <ul className="flex flex-col gap-2 justify-center items-start ml-8 my-2">
          <li className="flex gap-2">
            {' '}
            <Pulse size={24} /> {character.characterDetails.status}
          </li>
          <li className="flex gap-2">
            <Alien size={24} /> {character.characterDetails.species}
          </li>
          <li className="flex gap-2">
            {' '}
            <GenderIntersex size={24} /> {character.characterDetails.gender}
          </li>
        </ul>
        <div className="flex w-full justify-evenly items-center gap-2">
          <div className="flex flex-col items-center justify-around bg-gray-rm-300 w-36 h-40 rounded-2xl">
            <Planet size={32} />
            <p>Planet</p>
            <p>{character.characterDetails.origin}</p>
          </div>
          <div className="flex flex-col items-center justify-around bg-gray-rm-300 w-36 h-40 rounded-2xl">
            <MapPin size={32} />
            <p className="w-1/2">{character.characterDetails.location}</p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`)
  const data = await res.json()

  const paths = data.results.map((data: { id: number }) => ({
    params: { id: data.id.toString() }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}
interface IParams extends ParsedUrlQuery {
  id: string
}
export async function getStaticProps(context: { params: IParams }) {
  const { id } = context.params
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.json()

  return {
    props: {
      characterDetails: {
        id: data.id,
        name: data.name,
        species: data.species,
        gender: data.gender,
        image: data.image,
        status: data.status,
        origin: data.origin.name,
        location: data.location.name,
        episode: data.episode.length
      }
    },
    revalidate: 120
  }
}
