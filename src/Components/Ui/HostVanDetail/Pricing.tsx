import { useOutletContext } from "react-router";
import { Van } from "../../../../server";

const Pricing = () => {
  const vans = useOutletContext<Van | undefined>();
  return <div className="p-4 font-bold text-xl">${vans?.price}/day</div>;
};

export default Pricing;
