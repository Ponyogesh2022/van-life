import { useEffect, useState } from "react";
import { Van } from "../../../server";
import { useNavigate } from "react-router";

const Vans = () => {
  const [vans, setVans] = useState<Van[]>();
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 w-[90%] m-auto gap-5">
      {vans?.map((van) => (
        <div
          className="h-[280px] my-4"
          onClick={() => navigate(`/vans/${van.id}`)}
        >
          <div className="h-[80%]">
            <img src={van.imageUrl} alt="" className="h-full rounded-md" />
          </div>
          <div className="flex justify-between">
            <h1 className="text-[18px] font-light">{van.name}</h1>
            <div>
              <h1 className="text-md">${van.price}</h1>
              <p className="text-md">/day</p>
            </div>
          </div>
          <button
            className={`w-fit h-fit p-2 text-white font-semibold rounded-md ${
              van.type === "rugged"
                ? "bg-[#115E59]"
                : van.type === "luxury"
                ? "bg-[#161616]"
                : "bg-[#E17654]"
            }`}
          >
            {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Vans;
