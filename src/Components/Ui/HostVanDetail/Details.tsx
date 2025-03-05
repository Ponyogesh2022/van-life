import { useOutletContext } from "react-router";
import { Van } from "../../../../server";

const Details = () => {
  const vans = useOutletContext<Van | undefined>();

  return (
    <div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex gap-3">
          <h1 className="font-semibold">Name :</h1>
          <span>{vans?.name}</span>
        </div>
        <div className="flex gap-3">
          <h1 className="font-semibold">Category :</h1>
          <span>
            {vans?.type
              ? vans?.type.charAt(0).toUpperCase() + vans?.type.slice(1)
              : ""}
          </span>
        </div>
        <div className="flex gap-3">
          <h1 className="font-semibold">
            Description :{" "}
            <span className="font-normal">{vans?.description}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
