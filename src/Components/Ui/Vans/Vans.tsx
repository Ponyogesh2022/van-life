import { Van } from "../../../../server";
import { useNavigate } from "react-router";
import { useGettVans_API } from "../../../service/queries";

const Vans = () => {
  const { data: vansData } = useGettVans_API();
  const navigate = useNavigate();
  return (
    <>
      <p className="text-2xl md:text-3xl md:py-5 md:pl-20 pl-5 mt-3">
        Explore our van options
      </p>
      <div className="grid grid-cols-2 w-[90%] m-auto gap-5 md:gap-10">
        {vansData?.vans?.map((van: Van) => (
          <div
            className="h-[280px] my-4 md:my-0 md:h-fit"
            onClick={() => navigate(`/vans/${van.id}`)}
            key={van.id}
          >
            <div className="h-[80%] md:h-[100%] md:w-full">
              <img
                src={van.imageUrl}
                alt=""
                className="h-full rounded-md md:w-full"
              />
            </div>
            <div className="flex justify-between">
              <h1 className="text-[17px] font-medium">{van.name}</h1>
              <div className="">
                <h1 className="text-md font-bold">${van.price}</h1>
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
    </>
  );
};

export default Vans;
