import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import IngredientCard from "./components/IngredientCard";

const prisma = new PrismaClient();

const fetchIngredientsByName = async (ingredient: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    slug: true,
  }

  if(!ingredient) return prisma.ingredient.findMany({ select });
  return prisma.ingredient.findMany({
    where: {
      name: {
        equals: ingredient.toLowerCase(), 
      }
    },
    select,
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: {ingredient: string};
}) {
  const ingredients = await fetchIngredientsByName(searchParams.ingredient);
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDEBAR */}
        <div className="w-5/6">
        {ingredients.length ? (
            <>
              {ingredients.map((ingredient) => (
                <IngredientCard ingredient={ingredient} key={ingredient.id} />
              ))}
            </>
          ) : (
            <p>Sorry, we found no ingredients by that name</p>
          )}
        </div>
      </div>
    </>
  )

}