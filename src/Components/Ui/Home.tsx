import { Link } from "react-router";
import HomePic from "../../assets/homePic.png";
const Home = () => {
  return (
    <div className="">
      <div className="relative w-full">
        <img src={HomePic} alt="" className="h-[100vh] w-full" />
      </div>
      <div className="absolute top-52 p-3 text-white md:left-[20%] ">
        <p className="text-3xl">
          You got the travel plans, we got the travel vans.
        </p>
        <p className="mt-5 text-lg">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="#">
          <div className="w-full h-16 bg-[#FF8C38] text-white text-lg flex justify-center items-center mt-36">
            Find Your Van
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
