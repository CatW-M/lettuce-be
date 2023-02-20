import NavBar from "../../../components/NavBar";
import Link from "next/link";

export default function IngredientRecipes() {
    <div className="h-96 overflow-hidden">
      <div
        className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center"
      >
        <h1 className="text-7xl text-white captitalize text-shadow text-center">
          Bananas
        </h1>
      </div>
    </div>
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* INGREDIENTS NAVBAR */}
        <nav className="flex text-reg border-b pb-2">
          <Link href="/ingredients" className="mr-7"> Overview </Link>
          <a href="" className="mr-7"> Recipes </a>
        </nav>
        {/* INGREDIENTS NAVBAR */} {/* RECIPES */}
        <main className="bg-white mt-5">
          <div>
            <div className="mt-4 pb-1 mb-1">
              <h1 className="font-bold text-4xl">Recipes</h1>
            </div>
            <div className="flex flex-wrap justify-between">
              {/* RECIPE CARD */}
              <div className=" border rounded p-3 w-[49%] mb-3">
                <h3 className="font-bold text-lg">Banana Bread</h3>
                <p className="font-light mt-1 text-sm">
                  A great recipe to use bananas that are almost past their prime...
                </p>
                <p className="mt-7">3 Bananas</p>
              </div>
              {/* RECIPE CARD */}
            </div>
          </div>
        </main>
        {/* RECIPES */}
      </div>
    </div>
    {/* DESCRIPTION PORTION */}
}