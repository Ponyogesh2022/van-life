import { CircleUser } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-20 bg-[#FDF5E9] flex justify-between px-10 items-center">
      <div className="text-lg font-bold">
        <NavLink to="/">VANLIFE</NavLink>
      </div>
      <div className="flex gap-5 font-medium">
        <NavLink
          className={({ isActive }) => ` pb-2 ${isActive ? " border-b" : ""}`}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => ` pb-2 ${isActive ? " border-b" : ""}`}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => ` pb-2 ${isActive ? " border-b" : ""}`}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => ` pb-2 ${isActive ? " border-b" : ""}`}
          to="/login"
        >
          <CircleUser />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
