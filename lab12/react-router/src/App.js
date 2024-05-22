import React from "react";
import Semyon from "./layout/Nav"
import { Route, Routes} from "react-router-dom";
import Services from "./pages/Services"
import Products from "./pages/Products" 
import About_us from "./pages/About_us" 
import Portfolio from "./pages/Portfolio" 
import FAQ from "./pages/FAQ" 
import Contacts from "./pages/Contacts" 
function App() {
  return (
    <div>
      <Semyon/>
      <Routes>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/About_us" element={<About_us />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/FAQ" element={<FAQ />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
      </Routes>
    </div>);
}
export default App;