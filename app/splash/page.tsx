import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import Image from "next/image";
import Generic from '../public/assets/lettuce_be_generic.jpeg'

type Props = {};
const Splash = (props: Props) => {
  return (
    <div className="flex flex-col justify-center bg-blue-700 h-screen">
        <div className='mt-72'>
            <h1>Four The People</h1>
            <h3>The Food app for the anti-planner</h3>
        </div>
        <div>
          <h1>Hi</h1>
        </div>
    </div>
  )};
export default Splash;
