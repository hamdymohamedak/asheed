import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/Logo-removebg.png";

import { useRouter } from "larose-js";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  let { navigate } = useRouter();

  return (
    <div className="nav">
      <img className="navLogo" src={logo} alt="Logo" />

      {/* Burger Icon */}
      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {/* Desktop Menu */}
      <ul id="des" className="desktop_Nav">
        <li onClick={()=>{navigate("/")}}>الرئيسية</li>
        <li onClick={()=>{navigate("/Services")}}>خدماتنا</li>
        <li onClick={()=>{navigate("/OurWork")}}>أعمالنا</li>
        <li onClick={()=>{navigate("/Who")}}>من نحن</li>
        <li>مقالاتنا</li>
        <li>التوظيف</li>
      </ul>

      {/* Mobile Menu */}
      <ul className={`mobile_Nav ${isOpen ? "open" : ""}`}>
      <li onClick={()=>{navigate("/")}}>الرئيسية</li>
      <li onClick={()=>{navigate("/Services")}}>خدماتنا</li>
      <li onClick={()=>{navigate("/OurWork")}}>أعمالنا</li>
      <li onClick={()=>{navigate("/Who")}}>من نحن</li>
      <li>مقالاتنا</li>
      <li>التوظيف</li>
      </ul>
    </div>
  );
}
