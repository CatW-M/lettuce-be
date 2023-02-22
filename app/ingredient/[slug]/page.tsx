import { PrismaClient, Recipe } from "@prisma/client";
import { notFound } from "next/navigation";
import AddToVault from "./components/AddToVault";
import Description from "./components/Description";
import Images from "./components/Images";
import IngredientNavBar from "./components/IngredientNavBar";
import Title from "./components/Title";

const prisma = new PrismaClient();

interface Ingredient {
  id: number;
  name: string;
  images: string[];
  description: string;
  room_temp_time: number | null;
  refrigerated_time: number | null;
  frozen_time: number | null;
  slug: string;
}

const fetchIngredientBySlug = async (slug: string): Promise<Ingredient> => {
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      images: true,
      description: true,
      slug: true,
      room_temp_time: true,
      refrigerated_time: true,
      frozen_time: true
    },
  });

  if (!ingredient) {
    notFound()
  }

  return ingredient;
};

export default async function IngredientDetails({
  params,
}: {
  params: { slug: string };
}) {
  const ingredient = await fetchIngredientBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <IngredientNavBar slug={ingredient.slug} />
        <Title name={ingredient.name} />
        <Description description={ingredient.description} />
        <div className="mt-2 bg-grey-100 flex flex-row text-red-600">
          <h3 className="text-bold">Can be stored...</h3>
        <div className="px-2">
            In the Fridge: {ingredient.refrigerated_time} Days
          </div>
          <div className="px-2">
            In the Freezer: {ingredient.frozen_time} Days
          </div>
          <div className="px-2">
            At room temperature: {ingredient.room_temp_time} Days
          </div>

        </div>
        <Images images={ingredient.images} />
        <AddToVault />
      </div>
      <div className="w-[27%] relative text-reg">
       {/* SAVETOVAULT */}
      </div>
    </>
  );
}