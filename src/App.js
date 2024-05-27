import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from "./component/Template/TemplateA";
import Home from "./component/pages/Home";
import Tech from "./component/pages/Tech";
import TemplateB from "./component/Template/TemplateB"


function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<TemplateB />} >
          <Route path="/Tech" element={<Tech />} />
        </Route>  
      </Routes>
    </Router>
    </>
  );
}

export default App;