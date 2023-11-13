/* eslint-disable react/react-in-jsx-scope */
import { MagnifyingGlass } from '@phosphor-icons/react'

interface SearchProps {
  children: React.ReactNode
}
export default function Search({ children }: Readonly<SearchProps>) {
  return (
    <form className=" absolute -top-20 w-1/2">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlass
            size={32}
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          />
        </div>
        {children}
      </div>
    </form>
  )
}
