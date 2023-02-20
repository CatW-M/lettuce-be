"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
  const router = useRouter
  const [ingredient, setIngredient] = useState("")
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input className="rounded mr-3 p-2 w-[450px]"
      type="text"
      placeholder="Search for Ingredient - Example: Bananas"
      value="ingredient"
      onChange={(e) => setIngredient(e.target.value)}
      />
      <button className="rounded bg-red-600 px-9 py-2 text-white"
      onClick={() => {
        if (ingredient === "") return;
        // router.push(`/search?ingredient=${ingredient}`);
        setIngredient("");
      }}
      >
        Get Ingredient!
      </button>
    </div>
  )
}