import React from "react";
import { Outlet } from "react-router-dom";
import SecondaryHeader from "./SecondaryHeader";
import Footer2 from "../component/Footer2";

// Secondary Layout with generic structure
function SecondaryLayout ({basePath}) {
    
  return (
        <>
          <SecondaryHeader  basePath={basePath}/>
            <Outlet />
          <Footer2 />
        </>
      );
}

export default SecondaryLayout;