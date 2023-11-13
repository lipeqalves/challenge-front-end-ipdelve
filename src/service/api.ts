interface GetDataApiProps {
  resource: string
  page: number
}
import { useQuery } from '@tanstack/react-query'
export function getDataApi(resource: string, page: number) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData', page],
    queryFn: () =>
      fetch(`https://rickandmortyapi.com/api/${resource}/?page=${page}`).then(
        (res) => res.json()
      )
  })
  return { data, isLoading, error }
}
