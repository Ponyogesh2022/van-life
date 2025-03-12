import { Link, useLocation, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useGetVanDetails_API } from "../../../service/queries";
const VansDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data: van } = useGetVanDetails_API(id ? id : "");
  const vansType = location.state.type || "all";

  return (
    <div className="w-[90%] m-auto">
      <Link
        to={`..?${location.state.search}`}
        relative="path"
        className="flex gap-5 ml-3 mt-4 "
      >
        <ArrowLeft />
        <span>Back to {vansType} Vans</span>
      </Link>
      {van ? (
        <>
          <div className=" mt-5 md:w-full">
            <img
              src={van?.vans?.imageUrl}
              alt=""
              className="md:w-full md:h-fit"
            />
          </div>
          <button
            className={`w-fit h-fit p-2 mt-4 text-white font-semibold rounded-md ${
              van?.type === "rugged"
                ? "bg-[#115E59]"
                : van?.type === "luxury"
                ? "bg-[#161616]"
                : "bg-[#E17654]"
            }`}
          >
            {van?.vans?.type
              ? van?.vans.type.charAt(0).toUpperCase() + van?.vans.type.slice(1)
              : ""}
          </button>
          <h1 className="text-2xl font-bold mt-3"> {van?.vans?.name}</h1>
          <h1 className="text-2xl font-bold mt-3">
            ${van?.vans?.price}
            <span className="font-normal">/day</span>
          </h1>
          <p className="font-medium mt-5">{van?.vans?.description}</p>
          <button className="w-full h-fit py-3 bg-[#E17654] text-white font-semibold mt-4">
            Rent this van
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VansDetailPage;
