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
import CharacterDetailsSkeleton from '@/components/CharacterDetailsSkeleton'
import BackToButton from '@/components/BackToButton'

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
    return <CharacterDetailsSkeleton />
  }

  return (
    <section
      className={`${spectral400.className} flex-wrap flex justify-between items-center h-full max-w-5xl my-0 mx-auto text-center `}
    >
      <BackToButton name={'Back to Characters'} page={'/characters'} />
      <div className="w-1/2 h-auto ">
        <Image
          src={character.characterDetails.image}
          width={320}
          height={420}
          className="object-cover rounded-2xl shadow-img"
          alt={character.characterDetails.name}
        />
      </div>

      <div className="w-1/2 h-auto border border-solid border-green-rm-300 shadow-img">
        <h1 className={`${creepster.className} mt-6 text-2xl`}>
          {character.characterDetails.name}
        </h1>
        <p className="flex justify-center gap-4 my-4">
          {' '}
          <Video className="text-green-rm-500" size={24} /> Participou de{' '}
          {character.characterDetails.episode} episódios
        </p>
        <div className="flex justify-around my-4">
          <ul className="flex flex-col gap-2 justify-center items-start ml-4 my-2">
            <li className="flex gap-2">
              {' '}
              <Pulse className="text-green-rm-500" size={24} />{' '}
              {character.characterDetails.status}
            </li>
            <li className="flex gap-2">
              <Alien className="text-green-rm-500" size={24} />{' '}
              {character.characterDetails.species}
            </li>
            <li className="flex gap-2">
              {' '}
              <GenderIntersex className="text-green-rm-500" size={24} />{' '}
              {character.characterDetails.gender}
            </li>
          </ul>
          <div className="flex flex-col items-center justify-evenly bg-gray-rm-300 w-40 h-40 rounded-2xl">
            <Planet className="text-green-rm-500" size={24} />
            <p>{character.characterDetails.origin}</p>
            <MapPin className="text-green-rm-500" size={24} />
            <p>{character.characterDetails.location}</p>
          </div>{' '}
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
