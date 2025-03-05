import { NavLink, Outlet } from "react-router";

const HostLayout = () => {
  return (
    <>
      <div className="flex gap-5 text-lg p-2 pl-5">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            ` pb-2 ${isActive ? " border-b border-red-500 text-red-500" : ""}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            ` pb-2 ${isActive ? " border-b border-red-500 text-red-500" : ""}`
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            ` pb-2 ${isActive ? " border-b border-red-500 text-red-500" : ""}`
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            ` pb-2 ${isActive ? " border-b border-red-500 text-red-500" : ""}`
          }
        >
          Reviews
        </NavLink>
      </div>
      <div className="pl-3">
        <Outlet />
      </div>
    </>
  );
};

export default HostLayout;
