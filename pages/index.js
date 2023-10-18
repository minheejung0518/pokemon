import Image from 'next/image'
import { Inter } from 'next/font/google'


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PokemonList from '@/components/PokemonList'

const inter = Inter({ subsets: ['latin'] })

// Create a client
const queryClient = new QueryClient()

export default function Home() {
  //Provider I can use data in anywhere
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList/>
    </QueryClientProvider>

  )
}
