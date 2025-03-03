import { useEffect } from "react";
import { useGetVans } from "../../service/queries";

const Vans = () => {
  const { data } = useGetVans();
  console.log(data);

  return <div>Vans</div>;
};

export default Vans;
