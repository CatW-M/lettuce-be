

import { Inter } from '@next/font/google'
import IngredientCard from './components/IngredientCard'
import Header from './components/Header'
import { PrismaClient, Category } from '@prisma/client'

export interface IngredientCardType {
  id: number;
  name: string;
  main_image: string;
  category: Category;
  slug: string;
}

const inter = Inter({ subsets: ['latin'] })
const prisma = new PrismaClient();

const fetchIngredients = async(): Promise<IngredientCardType[]> => {
  const ingredients = await prisma.ingredient.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      category: true,
      slug: true
    }
  });

  return ingredients
}

export default async function Home() {
  const ingredients = await fetchIngredients();
  return (
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap">
          {ingredients.map(ingredient => (
            <IngredientCard ingredient={ ingredient } key={ingredient.id}/>
          ))}
          </div>
        </main>
  )
}
