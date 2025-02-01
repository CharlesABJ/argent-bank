import { Outlet } from "react-router-dom";

// Import of components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout() {
  // Datas of Header
  const dataHeader = {
    title: "Argent Bank",
    subtitle: "Your bank, your money, your way",
  };

  // Datas of Footer
  const dataFooter = {
    title: "Copyright 2020 Argent Bank",
  };

  return (
    <>
      <Header dataHeader={dataHeader} />
      <Outlet />
      <Footer dataFooter={dataFooter} />
    </>
  );
}

export default Layout;
