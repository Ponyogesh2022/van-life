import { useEffect, useState } from "react";
import { Van } from "../../../../server";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

const HostVansDetails = () => {
  const { id } = useParams();
  const [hostVan, setHostVan] = useState<Van>();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setHostVan(data.vans));
  }, [id]);
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
          <img src={hostVan?.imageUrl} alt="Van" className="rounded-lg" />
        </div>

        <div>
          <button
            className={`w-fit h-fit p-1 px-2 text-white font-semibold rounded-md ${
              hostVan?.type === "rugged"
                ? "bg-[#115E59]"
                : hostVan?.type === "luxury"
                ? "bg-[#161616]"
                : "bg-[#E17654]"
            }`}
          >
            {hostVan?.type
              ? hostVan?.type.charAt(0).toUpperCase() + hostVan.type.slice(1)
              : ""}
          </button>
          <h3 className="font-semibold text-xl">{hostVan?.name}</h3>
          <p>${hostVan?.price} / day</p>
        </div>
      </div>
    </div>
  );
};

export default HostVansDetails;
