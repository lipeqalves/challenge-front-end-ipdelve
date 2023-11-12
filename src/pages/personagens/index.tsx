import { useState } from 'react'
import CardPersonagem from '../../components/CardPersonagem'
import { MagnifyingGlass } from '@phosphor-icons/react'

/* eslint-disable react/react-in-jsx-scope */
export interface CharacterProps {
  characters: {
    id: number
    name: string
    species: string
    image: string
  }[]
}
export default function Personagens({ characters }: Readonly<CharacterProps>) {
  const [search, setSearch] = useState('')
  const searchCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="flex flex-wrap gap-8 w-10/12 items-center justify-center mt-28 mb-12 mx-auto relative">
      <form className=" absolute -top-20 w-1/2">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlass
              size={32}
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            />
          </div>
          <input
            type="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-rm-300"
            placeholder="Search"
          />
        </div>
      </form>

      {searchCharacters.map((character) => (
        <CardPersonagem
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()

  return {
    props: {
      characters: data.results
    },
    revalidate: 60
  }
}
