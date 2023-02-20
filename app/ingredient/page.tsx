import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Ingredient() {
  return (
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#2e5b18] to-[#6c8a5d] p-2">
            <div className='text-center mt-10'>
              <h1 className='text-white text-5xl font-bold mb-2 p-2'>Search for Ingredients</h1>
              {/* SEARCH BAR */}
              <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input type="text" className="rounded text-lg mr-3 p-2 w-[450px]" />
                <button className="bg-red-600 px-9 py-2 text-white rounded">Search</button>
              </div>
              {/* SEARCH BAR */}
              {/* HEADER */}
            </div>
          </div>
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/* CARD Eventually will iterate over, but creating one card in the following div as example */}
            <div className="w-64 h-72 m-3 ronded overflow-hidden border cursor-pointer">
              <img
                src="https://www.verywellfit.com/thmb/3Rzuxt_7NSnZsqMPUF8Xjz07xhs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bananas-5c6a36a346e0fb0001f0e4a3.jpg"
                alt="bananas"
                className='w-full h-36' />
              <div className="p-1">
                <h3 className='font-bold text-2xl mb-2 text-center'>Bananas - Fresh</h3>
                <button className="bg-green-600 px-9 py-2 text-white rounded text-center">Add to Vault</button>
              </div>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
  )
}
