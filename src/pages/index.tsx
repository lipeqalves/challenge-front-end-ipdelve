import { Spectral, Creepster } from 'next/font/google'
const spectral = Spectral({subsets: ['latin'], weight:'400'})
const creepster = Creepster({subsets: ['latin'],weight:'400'})
export default function Home() {
  return (
   <h1 className={`${spectral.className}`}>Challenge FRONT-END IPDelve
   </h1>
  )
}
