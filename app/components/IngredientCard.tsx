import Link from "next/link";
import { IngredientCardType } from "../page";

interface Props {
  ingredient: IngredientCardType;
}

export default function IngredientCard({ingredient}: Props) {
  return (
    <div className="w-64 h-72 m-3 ronded overflow-hidden border cursor-pointer">
      <Link href={`/ingredient/${ingredient.slug}`}>
      <img src={ingredient.main_image}
        className='w-full h-36' />
      <div className="p-1">
        <h3 className='font-bold text-2xl mb-2 text-center'>{ingredient.name}</h3>
        <div className="flex text-reg font-light capitalize">
          <p className="mr-3">{ingredient.category.name}</p>
        </div>
        <button className="bg-green-600 px-9 py-2 text-white rounded text-center">Add to Vault</button>
      </div>
    </Link >
    </div>
  )
}