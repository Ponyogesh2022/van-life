import { NavLink, useSearchParams } from "react-router";

function HostVanLayout() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  return (
    <div className="flex gap-5 text-md mt-3">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          `pb-1 ${isActive ? "border-b font-semibold" : ""}`
        }
      >
        Detail
      </NavLink>
      <NavLink
        to="pricing"
        className={({ isActive }) =>
          `pb-1 ${isActive ? "border-b font-semibold" : ""}`
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        className={({ isActive }) =>
          `pb-1 ${isActive ? "border-b font-semibold" : ""}`
        }
      >
        Photos
      </NavLink>
    </div>
  );
}

export default HostVanLayout;
