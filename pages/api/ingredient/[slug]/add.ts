import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import { stringify } from "querystring";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { slug, storage_method, exp_date } = req.query as {slug: string; storage_method: string; exp_date: string}
  if (req.method === "POST") {
    const errors: string[] = [];
    const { user, password } = req.body;
    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }
}
return res.status(404).json("Unknown endpoint");
}

//Need to confirm data received which should be user_id (from token), ingredient_id (from req.params) exp_date (input)if any 
//Double check with schema for User-Ingredient
//const newItem = await prisma.user-ingredient.create


// id             Int            @id @default(autoincrement())
//   user_id        Int
//   user           User           @relation(fields: [user_id], references: [id])
//   ingredient_id  Int
//   ingredient     Ingredient     @relation(fields: [ingredient_id], references: [id])
//   storage_method STORAGE_METHOD
//   exp_date       DateTime
//   created_at     DateTime       @default(now())
//   updated_at     DateTime       @updatedAt
