import Link from "next/link";

export default function IngredientNavBar({ slug }: { slug: string }) {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/ingredient/${slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/ingredient/${slug}/recipes`} className="mr-7">
        Recipes
      </Link>
    </nav>
  );
}