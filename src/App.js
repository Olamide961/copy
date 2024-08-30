import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateA from "./component/Template/TemplateA";
import Home from "./component/pages/Home";
import Tech from "./component/pages/Tech";
import TemplateB from "./component/Template/TemplateB"
import About from "./component/pages/About";
import Service from "./component/pages/Service";
import Product from "./component/pages/Product";
import Contact from "./component/pages/Contact";
import Media from "./component/pages/Media";
import Culinary from "./component/pages/Culinay";
import ServiceDetails from "./component/pages/service-details";
import Sitemap from "./component/pages/Sitemap";
import Iframe from "./component/internalComp/SideScroll";


function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<TemplateA />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact /> } />
        </Route>

        <Route element={<TemplateB />} >
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ServiceDetails" element={<ServiceDetails /> } />
          <Route path="/Media" element={<Media /> } />
          <Route path="/Culinary" element={<Culinary /> } />
          <Route path="/Sitemap" element={<Sitemap />} />
        </Route>  

        <Route path="/Iframe" element={<Iframe />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;