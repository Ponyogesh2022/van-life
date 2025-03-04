import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Van } from "../../../server";

const VansDetailPage = () => {
  const { id } = useParams();
  const [vans, setVans] = useState<Van>();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, [id, vans]);

  return <div></div>;
};

export default VansDetailPage;
