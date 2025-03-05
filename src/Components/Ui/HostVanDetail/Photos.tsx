import { useOutletContext } from "react-router";
import { Van } from "../../../../server";

const Photos = () => {
  const vans = useOutletContext<Van | undefined>();
  return (
    <div className="p-5">
      <img src={vans?.imageUrl} alt="" className="size-20" />
    </div>
  );
};

export default Photos;
