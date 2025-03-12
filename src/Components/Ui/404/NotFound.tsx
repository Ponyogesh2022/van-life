import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-32 h-full mt-20   justify-center items-center">
      <div className="text-3xl font-bold text-center ">
        Sorry the page you were looking for was not found
      </div>
      <Link
        to=".."
        relative="path"
        className="w-[80%] m-auto p-3 h-fit bg-black text-white text-center"
      >
        Return to home
      </Link>
    </div>
  );
};

export default NotFound;
