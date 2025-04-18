import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./MainHeader";
import Footer from "../component/Footer";

//main page layout
function MainLayout () {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>

  );
}
  

export default MainLayout;