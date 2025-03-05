import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useGetHostVanDetails_API } from "../../../service/queries";

const HostVansDetails = () => {
  const { id } = useParams();
  const { data: hostVanDetail } = useGetHostVanDetails_API(id ? id : "");
  console.log(hostVanDetail.vans);

  const navigate = useNavigate();

  return (
    <div>
      <div
        className="flex gap-5 mt-3 pl-3"
        onClick={() => navigate("/host/vans")}
      >
        <ArrowLeft />
        <span>Back to Host Vans</span>
      </div>
      <div className="w-[90%] p-3 m-auto h-[140px] grid grid-cols-[100px_1fr] gap-5 content-center bg-white mt-5">
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
          <h3 className="font-semibold text-xl">{hostVanDetail?.vans?.name}</h3>
          <p>${hostVanDetail?.vans?.price} / day</p>
        </div>
      </div>
    </div>
  );
};

export default HostVansDetails;
