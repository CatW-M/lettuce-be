import SearchBar from "./SearchBar"

export default function Header () {
  return (
    <div className="h-64 bg-gradient-to-r from-[#2e5b18] to-[#6c8a5d] p-2">
    <div className='text-center mt-10'>
      <h1 className='text-white text-5xl font-bold mb-2 p-2'>Search for Ingredients</h1>
      <SearchBar />
    </div>
  </div>
  )

} 