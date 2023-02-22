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

export default async function IngredientMenu({
  params,
}: {
  params: { slug: string };
}) {
  const recipes = await fetchIngredientRecipe(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <IngredientNavBar slug={params.slug} />
      </div>
    </>
  );
}