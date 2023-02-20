"use client"
import { useRouter } from "next/navigation" 
import { useState } from "react"


export default function Header () {
  const router = useRouter()
  const [ search, setSearch ] = useState("")
  return (
    <div className="h-64 bg-gradient-to-r from-[#2e5b18] to-[#6c8a5d] p-2">
    <div className='text-center mt-10'>
      <h1 className='text-white text-5xl font-bold mb-2 p-2'>Search for Ingredients</h1>
      {/* SEARCH BAR */}
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input type="text" 
        className="rounded text-lg mr-3 p-2 w-[450px]" 
        placeholder="Ingredient name? ex: banana"
        value={ search }
        onChange={(e) => setSearch(e.target.value)}/>
        <button className="bg-red-600 px-9 py-2 text-white rounded" 
        onClick={() => {
        if (search === "jack") return;
        router.push("/search");
        }} 
        >
          Search</button>
      </div>
      {/* SEARCH BAR */}
      {/* HEADER */}
    </div>
  </div>
  )

} 