import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Who from "./components/who/Who";
import OurWork from "./components/OurWork/OurWork";
import Services from "./components/Services/Services";
import { Route, RoseRouter,SideText } from "larose-js";
export default function App() {
  let [displayAlert, setDisplayAlert] = useState("none");

  let handleAlertView = () => {
    setDisplayAlert("flex");
    if (displayAlert === "flex") {
      setDisplayAlert("none");
    } else {
      setDisplayAlert("flex");
    }
  };
  let customStyle = `.route {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .route-active {
    opacity: 1;
    transform: translateY(0);
  }`;
  return (
    <RoseRouter customStyle={customStyle}>
      <div onClick={handleAlertView} className="messageBtn">
        <i class="fa-solid fa-comment"></i>
      </div>
      <SideText
        edit={{ display: displayAlert }}
        direction="right"
        RoseName="alertSocial"
      >
        <div
          onClick={() => {
            window.open(
              "https://web.whatsapp.com/send?text=&phone=9660582226234"
            );
          }}
        >
          <i style={{ color: "white" }} class="fa-brands fa-whatsapp"></i>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=asheedcon@gmail.com"
            );
          }}
        >
          <i style={{ color: "white" }} class="fa-solid fa-envelope"></i>
        </div>
        <div>
          <a style={{ color: "white" }} href="tel:9660582226234">
            <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      </SideText>
      <NavBar />
      <Route element={<Home />} path={"/"} />
      <Route element={<OurWork />} path={"/OurWork"} />
      <Route element={<Services />} path={"/Services"} />
      <Route element={<Who />} path={"/Who"} />
    </RoseRouter>
  );
}
