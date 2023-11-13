/* eslint-disable react/react-in-jsx-scope */

import { Planet } from '@phosphor-icons/react'

import { spectral700, creepster } from '../../styles/fonts'

interface CardCharacterProps {
  id: number
  name: string
  type: string
  dimension: string
  numberOfResidents: number
}
export default function CardLocation(props: Readonly<CardCharacterProps>) {
  return (
    <section
      className={` relative w-56 h-46 p-1 bg-gray-rm-300 rounded-t-lg ${spectral700.className}`}
    >
      <Planet size={26} className="absolute -top-4" />
      <section
        className={`${creepster.className} text-green-rm-300 flex flex-col ml-4 mt-4 items-cente justify-center`}
      >
        <strong>{props.type}</strong>
        <strong>{props.name}</strong>
        <strong>{props.dimension}</strong>
      </section>
      <strong className={`${creepster.className} text-green-rm-300`}>
        <span className={`${spectral700.className} text-gray-rm-100`}>
          Number Of Residents :{' '}
        </span>{' '}
        {props.numberOfResidents}
      </strong>
    </section>
  )
}
