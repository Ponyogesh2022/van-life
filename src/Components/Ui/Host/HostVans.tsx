import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Van } from "../../../../server";

const HostVans = () => {
  const [hostVans, setHostVans] = useState<Van[]>([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold m-2">Your Listed Vans</h2>
      <div>
        {hostVans?.map((hostvan) => (
          <Link
            key={hostvan?.id}
            to={`${hostvan?.id}`}
            className=" w-[90%] p-3 m-auto h-[80px] grid grid-cols-[50px_1fr] gap-5 content-center bg-white my-2"
          >
            <div>
              <img src={hostvan?.imageUrl} alt="Van" className="rounded-lg" />
            </div>
            <div>
              <h3 className="font-semibold">{hostvan?.name}</h3>
              <p>${hostvan?.price} / day</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HostVans;
