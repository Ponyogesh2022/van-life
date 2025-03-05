import { Link, Outlet, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useGetHostVanDetails_API } from "../../../service/queries";
import HostVanLayout from "../../Layout/HostVanLayout";

const HostVansDetails = () => {
  const { id } = useParams();
  const { data: hostVanDetail } = useGetHostVanDetails_API(id ? id : "");
  return (
    <div>
      <Link to=".." relative="path" className="flex gap-5 mt-3 pl-3">
        <ArrowLeft />
        <span>Back to all vans</span>
      </Link>
      <div className="w-[90%] p-3 m-auto  bg-white mt-5">
        <div>
          <div className=" grid grid-cols-[100px_1fr] gap-5 content-center">
            <div>
              <img
                src={hostVanDetail?.vans?.imageUrl}
                alt="Van"
                className="rounded-lg"
              />
            </div>
            <div>
              <button
                className={`w-fit h-fit p-1 px-2 text-white font-semibold rounded-md ${
                  hostVanDetail?.vans?.type === "rugged"
                    ? "bg-[#115E59]"
                    : hostVanDetail?.vans?.type === "luxury"
                    ? "bg-[#161616]"
                    : "bg-[#E17654]"
                }`}
              >
                {hostVanDetail?.vans?.type
                  ? hostVanDetail?.vans?.type.charAt(0).toUpperCase() +
                    hostVanDetail?.vans?.type.slice(1)
                  : ""}
              </button>
              <h3 className="font-semibold text-xl">
                {hostVanDetail?.vans?.name}
              </h3>
              <p>${hostVanDetail?.vans?.price} / day</p>
            </div>
          </div>

          <div>
            <HostVanLayout />
            <Outlet context={hostVanDetail?.vans} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostVansDetails;
