/* eslint-disable react/react-in-jsx-scope */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </div>
  )
}
