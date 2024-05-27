import React from "react";
import { Outlet } from "react-router-dom";
import Header2 from "../Header2";
import Footer2 from "../Footer2";


function TemplateB () {
  return (
    <>
    <Header2 />
    <Outlet />
    <Footer2 />
    </>
  );
}

export default TemplateB;