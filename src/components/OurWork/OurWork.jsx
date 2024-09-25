import React from "react";
import "../Home/Home.css";
import company1 from "../../assets/تصميم-بدون-عنوان-1-1024x1024.png";
import company2 from "../../assets/تصميم-بدون-عنوان-1024x1024.png";
import company3 from "../../assets/تصميم-بدون-عنوان-2-1024x1024.png";
import company4 from "../../assets/تصميم-بدون-عنوان-3.png";
import company5 from "../../assets/تصميم-بدون-عنوان-4-1024x1024.png";
import company6 from "../../assets/الهوية-04-1-1024x1024.png";
import slideImg1 from "../../assets/1-1.png";
import slideImg2 from "../../assets/10-1.png";
import slideImg3 from "../../assets/11-1.png";
import slideImg4 from "../../assets/12-1.png";
import slideImg5 from "../../assets/13-1.png";
import slideImg6 from "../../assets/14.png";
import slideImg7 from "../../assets/15.png";
import slideImg8 from "../../assets/16.png";
import slideImg9 from "../../assets/17.png";
import slideImg10 from "../../assets/18.png";
import slideImg11 from "../../assets/19.png";
import slideImg12 from "../../assets/2-1.png";
import slideImg13 from "../../assets/20.png";
import { RoseBox, Slider } from "larose-js";
function OurWork() {
  return (
    <div>
      <RoseBox RoseName="ourWork">
        شركاء النجاح
        <div className="companys">
          <img className="companyImg" src={company1} alt={"img"} />
          <img className="companyImg" src={company2} alt={"img"} />
          <img className="companyImg" src={company3} alt={"img"} />
          <img className="companyImg" src={company4} alt={"img"} />
          <img className="companyImg" src={company5} alt={"img"} />
          <img className="companyImg" src={company6} alt={"img"} />
        </div>
        <svg
          width="100%"
          height={"20rem"}
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          overflow="auto"
          shapeRendering="auto"
          fill="#ffffff"
        >
          <defs>
            <path
              id="wavepath"
              d="M 0 2000 0 500 Q 62.5 469 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0  v1000 z"
            />
            <path id="motionpath" d="M -250 0 0 0" />
          </defs>
          <g>
            <use xlinkHref="#wavepath" y={125} fill="#29B6F6">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath xlinkHref="#motionpath" />
              </animateMotion>
            </use>
          </g>
        </svg>
      </RoseBox>
      <RoseBox
        edit={{
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
        autoLayout
      >
        اعمالنا
        <Slider autoplay={true} autoplayInterval={4000}>
          <div className="sliderCards">
            <img style={{ height: "20rem" }} src={slideImg1} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg2} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg3} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg4} alt={"Alooo"} />
          </div>
          <div className="sliderCards">
            <img style={{ height: "20rem" }} src={slideImg5} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg6} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg7} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg8} alt={"Alooo"} />
          </div>
          <div className="sliderCards">
            <img style={{ height: "20rem" }} src={slideImg9} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg10} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg11} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg12} alt={"Alooo"} />
          </div>
          <div className="sliderCards">
            <img style={{ height: "20rem" }} src={slideImg13} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg1} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg10} alt={"Alooo"} />
            <img style={{ height: "20rem" }} src={slideImg11} alt={"Alooo"} />
          </div>
        </Slider>
      </RoseBox>
    </div>
  );
}

export default OurWork;
