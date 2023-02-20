

import { Inter } from '@next/font/google'
import Header from './components/Header'
import IngredientCard from './components/IngredientCard'
import SearchSideBar from './components/SearchSideBar'

const inter = Inter({ subsets: ['latin'] })

export default function Search() {

  return (
    <>
      <Header />
      <div className="py-4 px-36 m-auto w-2/3 justify-between flex items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <IngredientCard />
        </div>
      </div>
    </>
  )
}