import { spectral700, spectral400} from '../styles/fonts'
import Image from 'next/image'

import logoHome from '../assets/Logo-home.png'
export default function Home() {
  return (
   <main className={` my-0 mx-auto  h-96 flex flex-col justify-around items-start ${spectral700.className}`}>
    <div className="w-80 flex items-center justify-center">
    <Image src={logoHome} width={160} className="object-cover" />
    </div>

    <p className="text-5xl w-96 h-28">Saiba tudo em um só <span className="text-green-rm-300">lugar</span>.</p>
   <p className={`${spectral400.className} `}>Personagens, localizações, episódios e muito mais.</p>
   </main>
  )
}
