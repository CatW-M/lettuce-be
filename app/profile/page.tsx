"use client"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

export default function Profile() {
  return (
    <main className="bg-white">
      <div className="ml-5 grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ..."><h1 className="text-5xl">Your Profile</h1></div>
        <div className="col-span-2 ...">
          <img className="float-right ... h-10 w-10 rounded-full" src="../public/Green Simple Clean Modern Healthy Food Circle Logo.png" />
          <img src="../../public/Green Simple Clean Modern Healthy Food Circle Logo.png" alt="" />
        </div>
        <div className="row-span-2 col-span-2 ...">Your name and basic info here</div>
      </div>
      <div className="bg-grey-800 m-10 flex flex-col">
        <Link href="/profile/dietpreferences" className="font-bold text-gray-700 text-2xl">
          <div className="ml-15 p-3 rounded border-2">
            <h3>Dietary Preferences <span className='float-right'><ArrowForwardIosIcon /></span></h3>
            {/*Dietary Preferences*/}
          </div>
        </Link>
        <Link href="/profile/pantry" className="font-bold text-gray-700 text-2xl">
          <div className="ml-15 p-3 rounded border-2">
            <h3>My Pantry <span className='float-right'><ArrowForwardIosIcon /></span></h3>
            {/*My Pantry*/}
          </div>
        </Link>
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          <div className="ml-15 p-3 rounded border-2">
            <h3>Account Settings <span className='float-right'><ArrowForwardIosIcon /></span></h3>
            {/*Account Settings*/}
          </div>
        </Link>
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          <div className="ml-15 p-3 rounded border-2">
            <h3>Notifications <span className='float-right'><ArrowForwardIosIcon /></span></h3>
            {/*Notifications*/}
          </div>
        </Link>
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          <div className="ml-15 p-3 rounded border-2">
            <h3>Support <span className='float-right'><ArrowForwardIosIcon /></span></h3>
            {/*Support*/}
          </div>
        </Link>
      </div>


    </main>
  )
}