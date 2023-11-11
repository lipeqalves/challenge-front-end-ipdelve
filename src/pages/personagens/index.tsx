import CardPersonagem from '../../components/CardPersonagem'

/* eslint-disable react/react-in-jsx-scope */
export interface CharacterProps {
  characters: {
    id: number
    name: string
    species: string
    image: string
  }[]
}
export default function Personagens({ characters }: CharacterProps) {
  return (
    <main className="flex flex-wrap gap-8 w-10/12 items-center justify-center my-10 mx-auto ">
      {characters.map((character) => (
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
    }
  }
}
