import Link from "next/link";

export default function IngredientCard() {
  return (

    <div className="w-64 h-72 m-3 ronded overflow-hidden border cursor-pointer">
      <Link href="/ingredient/bananas">
      <img src="https://www.verywellfit.com/thmb/3Rzuxt_7NSnZsqMPUF8Xjz07xhs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bananas-5c6a36a346e0fb0001f0e4a3.jpg"
        alt="bananas"
        className='w-full h-36' />
      <div className="p-1">
        <h3 className='font-bold text-2xl mb-2 text-center'>Bananas - Fresh</h3>
        <button className="bg-green-600 px-9 py-2 text-white rounded text-center">Add to Vault</button>
      </div>
    </Link >
    </div>
  )
}