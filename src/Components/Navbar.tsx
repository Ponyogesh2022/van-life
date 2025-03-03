import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="h-20 bg-[#FDF5E9] flex justify-between px-10 items-center">
      <div className="text-lg font-bold">
        <Link to="/">VANLIFE</Link>
      </div>
      <div className="flex gap-5 font-medium">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </div>
  );
};

export default Navbar;
