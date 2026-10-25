import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
