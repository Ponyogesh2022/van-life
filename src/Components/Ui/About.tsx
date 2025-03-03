import { Link } from "react-router";
import AboutPic from "../../assets/aboutPic.png";

const About = () => {
  return (
    <div>
      <div>
        <img src={AboutPic} alt="" className="h-60" />
      </div>
      <div className="p-4">
        <h1 className="text-3xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mt-5">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
      </div>
      <div className="bg-[#FFCC8D] p-10">
        <h1>Your destination is waiting. Your van is ready.</h1>
        <Link to="#">
          <div className="w-[85%] h-16 bg-black text-white text-lg flex justify-center items-center mt-5">
            Explore our Vans
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
