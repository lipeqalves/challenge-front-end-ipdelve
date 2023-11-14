/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import { creepster } from '../../styles/fonts'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className={`text-center text-xs bg-gray-rm-300 ${creepster.className} p-1`}
    >
      <p className="text-gray-rm-100">
        Challenge Font-End <span className="text-green-rm-300">IPDelve</span>
      </p>
      <p className="text-gray-rm-100">
        Coded by{' '}
        <Link href="https://github.com/lipeqalves">
          <span className="text-green-rm-300">Filipe Alves</span>
        </Link>{' '}
        &#169; {currentYear}
      </p>
    </footer>
  )
}
