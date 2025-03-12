/* eslint-disable react-refresh/only-export-components */
import { Van } from "../../../../server";
import { Link, useLoaderData, useSearchParams } from "react-router";
import { fetchVans } from "../../../service/api";

export async function loader() {
  return await fetchVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("type");

  function handleFilterChange(key: string, val: string | null) {
    setSearchParams((prev) => {
      if (val === null) prev.delete(key);
      else prev.set(key, val);
      return prev;
    });
  }

  const vansData = useLoaderData();
  // console.log(data.vans);

  // const isOffline = !navigator.onLine;

  //we can use this also Array.isArray check vansData?.vans is a array if its array it will go to filter.

  // const filteredVansData = Array.isArray(vansData?.vans)
  //   ? params
  //     ? vansData.vans.filter((van) => van.type === params)
  //     : vansData.vans
  //   : [];

  // we can use this way to filter

  // const filteredVansData = vansData?.vans
  //   ? params
  //     ? vansData.vans.filter((van) => van.type === params)
  //     : vansData.vans
  //   : [];

  const filteredVansData = params
    ? vansData?.vans?.filter((vans: Van) => vans.type === params)
    : vansData?.vans;

  return (
    <>
      <p className="text-2xl md:text-3xl md:py-5 md:pl-20 pl-5 mt-3">
        Explore our van options
      </p>
      <div className="flex gap-5 my-3 justify-start ml-5">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`w-fit h-fit p-1 px-2 rounded-sm  border border-[#ee9f3e] hover:text-white hover:bg-[#E17654] ${
            params === "simple" ? "bg-[#E17654] text-white" : "bg-[#FFF7ED]"
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`w-fit h-fit p-1 px-2 rounded-sm  border border-[#161616] hover:text-white hover:bg-[#161616] ${
            params === "luxury" ? "bg-[#161616] text-white" : "bg-[#FFF7ED]"
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`w-fit h-fit p-1 px-2 rounded-sm border border-[#115E59] hover:text-white hover:bg-[#115E59] ${
            params === "rugged" ? "bg-[#115E59] text-white" : "bg-[#FFF7ED]"
          }`}
        >
          Rugged
        </button>
        {params && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="underline"
          >
            Clear Filters
          </button>
        )}
      </div>
      {/* {isLoading && (
        <div
          className="w-[100vw] h-[50vh] flex justify-center items-center"
          aria-live="polite"
        >
          <Loading />
        </div>
      )}

      {isOffline ||
        (isError && (
          <div className="w-[100vw] h-[50vh] flex justify-center items-center">
            {error.message}
          </div>
        ))} */}

      <div className="grid grid-cols-2 w-[90%] m-auto gap-5 md:gap-10">
        {filteredVansData?.map((van: Van) => (
          <Link
            to={van.id}
            className="h-[280px] my-4 md:my-0 md:h-fit"
            // onClick={() => navigate(van.id)}
            state={{ search: searchParams.toString(), type: params }}
            key={van.id}
          >
            <div className="h-[80%] md:h-[100%] md:w-full">
              <img
                src={van.imageUrl}
                alt=""
                className="h-full rounded-md md:w-full"
              />
            </div>
            <div className="flex justify-between">
              <h1 className="text-[17px] font-medium">{van.name}</h1>
              <div className="">
                <h1 className="text-md font-bold">${van.price}</h1>
                <p className="text-md">/day</p>
              </div>
            </div>
            <button
              className={`w-fit h-fit p-2 text-white font-semibold rounded-md ${
                van.type === "rugged"
                  ? "bg-[#115E59]"
                  : van.type === "luxury"
                  ? "bg-[#161616]"
                  : "bg-[#E17654]"
              }`}
            >
              {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Vans;
