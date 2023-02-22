import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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