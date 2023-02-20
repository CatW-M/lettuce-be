import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Tracker () {
  return (
      <main>
       <Header />
       <h1 className='font-bold text-2xl mb-2 text-center'>Track Your Ingredients</h1>
        {/* CARDS */}
        <div className="py-3 px-36 mt-10 flex flex-wrap">
          {/* CARD Eventually will iterate over, but creating one card in the following div as example */}
          <div className="w-64 h-72 m-3 ronded overflow-hidden border cursor-pointer">
            <img
              src="https://www.verywellfit.com/thmb/3Rzuxt_7NSnZsqMPUF8Xjz07xhs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bananas-5c6a36a346e0fb0001f0e4a3.jpg"
              alt="bananas"
              className='w-full h-36' />
            <div className="p-1">
              <h3 className='font-bold text-2xl mb-2 text-center'>Bananas - Fresh</h3>
              <button className="bg-green-600 px-9 py-2 text-white rounded text-center">Add to Vault</button>
            </div>
          </div>
          {/* CARD */}
        </div>
        {/* CARDS */}
      </main>
)
}