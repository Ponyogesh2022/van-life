import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Van } from "../../../../server";
import { ArrowLeft } from "lucide-react";
const VansDetailPage = () => {
  const { id } = useParams();
  const [van, setVan] = useState<Van>();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);
  console.log(van);

  return (
    <div className="w-[90%] m-auto">
      <Link to="/vans" className="flex gap-5 ml-3 mt-4 ">
        <ArrowLeft />
        <span>Back to all vans</span>
      </Link>
      {van ? (
        <>
          <div className=" mt-5 md:w-full">
            <img
              src={van?.imageUrl}
              alt=""
              className="md:w-full md:h-[600px]"
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
            {van?.type
              ? van.type.charAt(0).toUpperCase() + van.type.slice(1)
              : ""}
          </button>
          <h1 className="text-2xl font-bold mt-3"> {van?.name}</h1>
          <h1 className="text-2xl font-bold mt-3">
            ${van?.price}
            <span className="font-normal">/day</span>
          </h1>
          <p className="font-medium mt-5">{van?.description}</p>
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
