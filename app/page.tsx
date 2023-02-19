
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className='max-w-screen-2xl m-auto bg-white text-grey-dark'>
        {/* NAVBAR */}
      <nav className='bg-white p-2 flex text-gray-700 justify-between'>
        <a href="" className='font-bold text-2xl'>
          LettuceBe
        </a>
        <div className='flex'>
          <button className='bg-gray-400 text-white border p-2 rounded mr-3'>Sign Up</button>
          <button className='border p-1 px-4 rounded '>Sign In</button>
        </div>  
      </nav>
        {/* NAVBAR */}
        </main>
    </main>
  )
}
