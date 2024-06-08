import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from "./component/Template/TemplateA";
import Home from "./component/pages/Home";
import Tech from "./component/pages/Tech";
import TemplateB from "./component/Template/TemplateB"
import About from "./component/pages/About";
import Service from "./component/pages/Service";
import Product from "./component/pages/Product";
import Contact from "./component/pages/Contact";


function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact /> } />
        </Route>

        <Route element={<TemplateB />} >
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Product" element={<Product />} />
        </Route>  
      </Routes>
    </Router>
    </>
  );
}

export default App;