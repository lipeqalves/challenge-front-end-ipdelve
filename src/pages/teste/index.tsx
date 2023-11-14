import CardCharacter from '@/components/CardCharacter'
import { useRickAndMortyApi } from '@/service/api'
/* eslint-disable react/react-in-jsx-scope */
export default function Teste() {
  const dataCharacter = useRickAndMortyApi('character', 3)
  //const dataEpisode = useRickAndMortyApi('episode', 1)
  //const dataLocation = useRickAndMortyApi('location', 1)
  //console.log(dataLocation?.locations)
  return (
    <div>
      {dataCharacter?.characters?.map((character) => (
        <CardCharacter
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </div>
  )
}
