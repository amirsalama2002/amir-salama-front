import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./../Home/Home";
import About from "./../About/About";
import Server from "./../Server/Server";
import FullStack from "../Full-Stack/Full-Stack";
import Free from "../Free/Free"
import Premium from "../Premium/Premium";
import Messge from "../Countact/Messge";
 function Navbar() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/server" element={<Server/>} />
          <Route path="/fullStack" element={<FullStack/>} />
          <Route path="/free" element={<Free/>} />
          <Route path="/primium" element={<Premium/>} />
          <Route path="/contact" element={<Messge/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;