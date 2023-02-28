import { PlaylistAddOutlined } from "@mui/icons-material";
import { PrismaClient } from "@prisma/client";

async function getUser(user.id: string) {
  const res = await fetch(`http://localhost:3000/api/auth/me`);
  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function Inventory(params: any) {
  return (
    <div className="flex flex-col">
      <h1 className="mt-4 text-center">Pantry</h1>
      
    </div>
  )
}