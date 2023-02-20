import Link from "next/link"

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
    <Link href="/" className='font-bold text-grey-700 text-2xl'>
      LettuceBe
    </Link>
    <div className='flex'>
      <button className='bg-green-800 text-white border p-1 px-4 rounded mr-3'>Sign Up</button>
      <button className='border p-1 px-4 rounded '>Sign In</button>
    </div>
  </nav>
  )
}