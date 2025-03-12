import { Link } from "react-router";
import { Van } from "../../../../server";
import { useGetHostVans_API } from "../../../service/queries";

const HostVans = () => {
  const { data: hostVans } = useGetHostVans_API();

  return (
    <div>
      <h2 className="text-2xl font-semibold">Your Listed Vans</h2>
      <div>
        {hostVans?.map((hostvan: Van) => (
          <Link
            key={hostvan?.id}
            to={hostvan?.id}
            className=" w-[90%] md:w-[98%] p-3 m-auto h-[80px] mx-3 pl-4 grid grid-cols-[50px_1fr] gap-5 content-center bg-white my-2"
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
