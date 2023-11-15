import { SetStateAction, useEffect, useState } from 'react'
import CardCharacter from '../../components/CardCharacter'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import Search from '@/components/Search'
import { useRickAndMortyApi } from '@/service/api'
import BackToButton from '@/components/BackToButton'

/* eslint-disable react/react-in-jsx-scope */

export default function Character() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const router = useRouter()

  const characterData = useRickAndMortyApi('character', page)

  const searchCharacters = characterData?.characters?.filter(
    (character: { name: string }) =>
      character.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page))
    }
  }, [router.query.page])

  function handlePaginationChange(
    e: React.SyntheticEvent<EventTarget>,
    value: SetStateAction<number>
  ) {
    setPage(value)
    router.push(`characters/?page=${value}`, undefined, { shallow: true })
  }

  if (characterData?.isLoading) return 'Loading...'
  if (characterData?.error)
    return 'An error has occurred: ' + characterData.error.message
  return (
    <main className="flex flex-wrap gap-8 w-10/12 items-center justify-center mt-28 mb-12 mx-auto relative">
      <BackToButton name={'Back to home'} page={'/'} />
      <Search>
        {' '}
        <input
          type="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-rm-300"
          placeholder="Search"
        />
      </Search>
      {searchCharacters?.map((character) => (
        <CardCharacter
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
      <Pagination
        count={characterData?.numberPages}
        color="primary"
        page={page}
        onChange={handlePaginationChange}
      />
    </main>
  )
}
