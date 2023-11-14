/* eslint-disable react/react-in-jsx-scope */
import Footer from '../Footer'
import Header from '../Header'

interface SearchProps {
  children: React.ReactNode
}
export default function Layout({ children }: Readonly<SearchProps>) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
