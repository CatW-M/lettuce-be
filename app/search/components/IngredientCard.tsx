import Link from "next/link"
export default function IngredientCard() {
  return (
    <div className="border-b flex pb-5 ml-4">
      <img src="https://m.media-amazon.com/images/I/61fZ+YAYGaL.jpg" alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">Bananas</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            Hold Times
          </div>
          <p className="ml-2 text-sm">Recommended: Shelf 7days</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            Disposal
            <p className="mr-4 capitalize">Banana Facts</p>
            <p className="mr-4 capitalize">How to Choose Bananas</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/bananas`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  )
  }