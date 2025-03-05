import { Outlet } from "react-router";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh] bg-[#FFF7ED]">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
