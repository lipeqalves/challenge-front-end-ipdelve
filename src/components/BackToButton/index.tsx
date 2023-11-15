/* eslint-disable react/react-in-jsx-scope */
import { spectral400 } from '@/styles/fonts'
import { CaretLeft } from '@phosphor-icons/react'
import Link from 'next/link'

interface BackToButtonProps {
  name: string
  page: string
}

export default function BackToButton(props: Readonly<BackToButtonProps>) {
  return (
    <Link
      href={props.page}
      className={`fixed  top-16 left-1 flex items-center gap-1 px-2 py-1 backdrop-blur-sm bg-white/30 text-gray-rm-200 text-xs ${spectral400.className} rounded-md hover:bg-green-rm-300 transition duration-300 ease-in-out shadow-button`}
    >
      <CaretLeft size={16} />
      {props.name}
    </Link>
  )
}
