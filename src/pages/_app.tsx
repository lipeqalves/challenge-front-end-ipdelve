/* eslint-disable react/react-in-jsx-scope */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
    </div>
  )
}
