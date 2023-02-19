import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className='max-w-screen-2xl m-auto bg-white text-grey-dark'>
        {/* NAVBAR */}
        <nav className='bg-white p-2 flex justify-between'>
          <a href="" className='font-bold text-grey-700 text-2xl'>
            LettuceBe
          </a>
          <div className='flex'>
            <button className='bg-green-800 text-white border p-1 px-4 rounded mr-3'>Sign Up</button>
            <button className='border p-1 px-4 rounded '>Sign In</button>
          </div>
        </nav>
        {/* NAVBAR */}
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
        </main>
      </main>
    </main>
  )
}
