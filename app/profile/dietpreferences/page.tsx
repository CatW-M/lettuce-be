"use client"
import Link from 'next/link';
import { useContext } from 'react';
import { AuthenticationContext } from "../../context/AuthContext";

export default function dietaryPreferences() {
  const { loading, data, error } = useContext(AuthenticationContext);
  return (
    <main className="bg-white">
      <div className="ml-5 grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ..."><h1 className="text-5xl">{data?.firstName} Dietary Preferences</h1></div>
        <div className="col-span-2 ...">
        </div>
        <div className="row-span-2 col-span-2 ...">Update your dietary preferences</div>
      </div>
      <div className="bg-grey-800 m-10 flex flex-wrap">
        <button className="border p-3 m-3">Vegetarian</button>
        <button className="border p-3 m-3">Vegan</button>
        <button className="border p-3 m-3">Gluten-Free</button>
        <button className="border p-3 m-3">Kosher</button>
        <button className="border p-3 m-3">Pescatarian</button>
        <button className="border p-3 m-3">Keto</button>
        <button className="border p-3 m-3">Dairy-Free</button>
        <button className="border p-3 m-3">Hallal</button>
        <button className="border p-3 m-3">Flexitarian</button>
        <button className="border p-3 m-3">Paleo</button>
        <button className="border p-3 m-3">Nut-free</button>
        <button className="border p-3 m-3">Other</button>
      </div>
      <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
        <div>
          <input
            type="text"
            className="border m-2 p-3 rounded text-2xl text-black text-center w-[75%]"
            placeholder="Other"
            // value={inputs.dietary_pref}
            // onChange={handleChangeInput}
            name="dietary_pref"
          />
          <button className='border p-3 m-3'>Submit</button>
        </div>
        <Link href="/profile">
          <h2 className="border m-2 p-3 rounded text-2xl bg-blue-300 text-black text-center">
            Return to Profile
          </h2>
        </Link>
      </div>
    </main >
  )
}