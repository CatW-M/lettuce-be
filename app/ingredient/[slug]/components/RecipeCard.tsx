import { Recipe } from "@prisma/client";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="border rounded p-3 w-[49%] mb-3">
      <h3 className="font-bold text-lg">{recipe.name}</h3>
      <p className="font-light mt-1 text-small">Ingredients Here</p>
      <p className="mt-7">{recipe.description}</p>
    </div>
  );
}