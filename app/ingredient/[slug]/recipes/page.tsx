import { PrismaClient } from "@prisma/client";
import IngredientNavBar from "../components/IngredientNavBar";
import RecipeCard from "../components/RecipeCard";

const prisma = new PrismaClient();

const fetchIngredientRecipe = async (slug: string) => {
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      slug,
    },
    select: {
      recipes: true,
    },
  });

  if (!ingredient) {
    throw new Error();
  }

  return ingredient.recipes;
};

export default async function IngredientRecipe({
  params,
}: {
  params: { slug: string };
}) {
  const recipes = await fetchIngredientRecipe(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <IngredientNavBar slug={params.slug} />
        <h1 className="text-5xl">Recipes for {params.slug} </h1>
        {/*RECIPECARD */}
        <div className="bg-blue-300 m-4 shadow rounded w-[75px]">Recipe Cards Here</div>
      </div>
    </>
  );
}