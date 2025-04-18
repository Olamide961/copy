import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/media/Product";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import Iframe from "./component/SideScroll";
import TechRoute from "./routes/TechRoute";
import MediaRoute from "./routes/MediaRoue";
import CulinaryRoute from "./routes/CulinaryRoute";


function App () {
  return (
    <>
    <Router>
      <Routes>
        {/* homepage navlinks header & footer */}
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/product" element={<Product />} />
        {/* include other home navlinks */}
        </Route>


        {/* tech route */}
        {TechRoute()}

        {/* tech route */}
        {MediaRoute()}

        {/* tech route */}
        {CulinaryRoute()}

        

        <Route path="/iframe" element={<Iframe />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;