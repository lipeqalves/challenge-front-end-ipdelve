import { useQuery } from '@tanstack/react-query'

interface ApiResponse {
  results: []
  info: {
    pages: number
  }
  error: Error | null
  isLoading: boolean
}
export interface Character {
  id: number
  name: string
  species: string
  image: string
}
export interface Episode {
  id: number
  name: string
  air_date: string
  characters: []
  episode: string
}
export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: []
}
export function useRickAndMortyApi(resource: string, page: number) {
  const { data, error, isLoading } = useQuery<ApiResponse>({
    queryKey: ['rickAndMortyApi', page],
    queryFn: () =>
      fetch(`https://rickandmortyapi.com/api/${resource}/?page=${page}`).then(
        (res) => res.json()
      )
  })
  if (resource === 'character') {
    const characters = data?.results.map((character: Character) => {
      return {
        id: character.id,
        name: character.name,
        species: character.species,
        image: character.image
      }
    })
    const numberPages = data?.info.pages
    return { characters, error, isLoading, numberPages }
  } else if (resource === 'episode') {
    const episodes = data?.results.map((episode: Episode) => {
      return {
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        characters: episode.characters.length,
        episode: episode.episode
      }
    })
    const numberPages = data?.info.pages
    return { episodes, error, isLoading, numberPages }
  } else if (resource === 'location') {
    const locations = data?.results.map((location: Location) => {
      return {
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
        residents: location.residents.length
      }
    })
    const numberPages = data?.info.pages
    return { locations, error, isLoading, numberPages }
  }
}
