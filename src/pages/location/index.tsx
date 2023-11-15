/* eslint-disable react/react-in-jsx-scope */
//import { useQuery } from '@tanstack/react-query'
import CardLocation from '../../components/CardLocation'
import Search from '../../components/Search'
import { SetStateAction, useState } from 'react'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useRickAndMortyApi } from '@/service/api'
import BackToButton from '@/components/BackToButton'

export default function Location() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const router = useRouter()
  const dataLocation = useRickAndMortyApi('location', page)

  if (dataLocation?.isLoading) return 'Loading...'
  if (dataLocation?.error)
    return 'An error has occurred: ' + dataLocation?.error.message

  const searchLocations = dataLocation?.locations?.filter(
    (location: { name: string }) =>
      location.name.toLowerCase().includes(search.toLowerCase())
  )

  function handlePaginationChange(
    e: React.SyntheticEvent<EventTarget>,
    value: SetStateAction<number>
  ) {
    setPage(value)
    router.push(`location/?page=${value}`, undefined, { shallow: true })
  }
  return (
    <main className="flex flex-wrap gap-8 w-10/12 items-center justify-center mt-28 mb-12 mx-auto relative">
      <BackToButton name={'Back to home'} page={'/'} />
      <Search>
        <input
          type="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-rm-300"
          placeholder="Search"
        />
      </Search>
      {searchLocations?.map((location) => (
        <CardLocation
          key={location.id}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          numberOfResidents={location.residents}
          id={location.id}
        />
      ))}
      <Pagination
        count={dataLocation?.numberPages}
        color="primary"
        page={page}
        onChange={handlePaginationChange}
      />
    </main>
  )
}
