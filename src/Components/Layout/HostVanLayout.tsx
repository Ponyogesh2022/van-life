import { NavLink } from "react-router";

function HostVanLayout() {
  return (
    <div className="flex gap-5 text-md mt-3">
      <NavLink
        to="."
        end
        className={({ isActive }) => `pb-1 ${isActive ? "border-b" : ""}`}
      >
        Detail
      </NavLink>
      <NavLink
        to="pricing"
        className={({ isActive }) => `pb-1 ${isActive ? "border-b" : ""}`}
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        className={({ isActive }) => `pb-1 ${isActive ? "border-b" : ""}`}
      >
        Photos
      </NavLink>
    </div>
  );
}

export default HostVanLayout;
