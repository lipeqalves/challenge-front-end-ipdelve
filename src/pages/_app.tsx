import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top'
          }}
          maxSnack={3}
          autoHideDuration={3500}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </QueryClientProvider>
    </div>
  )
}
