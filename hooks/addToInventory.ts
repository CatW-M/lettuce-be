"use client";

import axios from "axios";
import { AuthenticationContext } from "../app/context/AuthContext";

const addtoInventory = () => {

const add = async (
  {
    user_id,
    ingredient_id,
    storage_method,
    exp_date
  }: {
    user_id: number;
    ingredient_id: number,
    storage_method: string,
    exp_date: string
  }
) => {
  try {
    const response = await axios.post(
     "http://localhost:3000/api/ingredient/[slug]/add" 
    )

  } catch () {

  }
}
}