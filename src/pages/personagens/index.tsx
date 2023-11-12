import { SetStateAction, useEffect, useState } from 'react'
import CardPersonagem from '../../components/CardPersonagem'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

/* eslint-disable react/react-in-jsx-scope */

export default function Personagens() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['repoData', page],
    queryFn: () =>
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
        (res) => res.json()
      )
  })

  const searchCharacters = data?.results?.filter(
    (character: { name: string }) =>
      character.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page))
    }
  }, [router.query.page])

  function handlePaginationChange(e: any, value: SetStateAction<number>) {
    setPage(value)
    router.push(`personagens/?page=${value}`, undefined, { shallow: true })
  }

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
      {searchCharacters.map(
        (character: {
          id: number
          name: string
          species: string
          image: string
        }) => (
          <CardPersonagem
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
          />
        )
      )}
      <Pagination
        count={data?.info.pages}
        color="primary"
        page={page}
        onChange={handlePaginationChange}
      />
    </main>
  )
}
