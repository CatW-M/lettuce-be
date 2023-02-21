import Link from "next/link";

interface Ingredient {
  id: number;
  name: string;
  main_image: string;
  slug: string;

}

export default function IngredientCard({
  ingredient,
}: {
  ingredient: Ingredient;
}) {
  
  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={ingredient.main_image} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{ingredient.name}</h2>
        <div className="flex items-start">
          <p className="ml-2 text-sm">YUM!</p>
        </div>
        <div className="text-red-600">
          <Link href={`/ingredient/${ingredient.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}