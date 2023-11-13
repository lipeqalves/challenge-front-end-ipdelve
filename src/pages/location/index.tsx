/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from '@tanstack/react-query'
import CardLocation from '../../components/CardLocation'
import Search from '../../components/Search'
import { useState } from 'react'
export default function Location() {
  const [search, setSearch] = useState('')
  const { isLoading, error, data } = useQuery({
    queryKey: ['location'],
    queryFn: () =>
      fetch(`https://rickandmortyapi.com/api/location/?page=${1}`).then((res) =>
        res.json()
      )
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  const searchLocations = data?.results?.filter((location: { name: string }) =>
    location.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <main className="flex flex-wrap gap-8 w-10/12 items-center justify-center mt-28 mb-12 mx-auto relative">
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
      {searchLocations.map(
        (location: {
          id: number
          name: string
          type: string
          dimension: string
          residents: string | []
        }) => (
          <CardLocation
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            numberOfResidents={location.residents.length}
            id={location.id}
          />
        )
      )}
    </main>
  )
}
