

import { Inter } from '@next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavBar from './components/NavBar'
import IngredientCard from './components/IngredientCard'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap">
          <IngredientCard />
          </div>
        </main>
  )
}

//Supabase: RUy&fFsL4Qju