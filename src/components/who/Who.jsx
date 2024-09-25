import React from "react";
import img1 from "../../assets/1-1.png";
import img2 from "../../assets/16.png";
import "../Home/Home.css";

import { RoseBox, SideText, ShinyButton, ShinyText } from "larose-js";
export default function Who() {
  return (
    <section className="Home_Parent">
      <div className="container">
        <div className="titleParent">
          <SideText>
            <h1 className="title">من لا شيء ...حتى كل شي </h1>
          </SideText>
          <SideText>
            <ShinyButton
              ShinyButtonEvent={() => {
                window.open("https://wa.me/966582226234");
              }}
              RoseName={"btn"}
            >
              <ShinyText edit={{ color: "white" }}>تواصل معنا</ShinyText>
            </ShinyButton>
          </SideText>
          <RoseBox edit={{ fontSize: "2rem" }}>من نحن ؟</RoseBox>
          <SideText>
            <p className="whoiam">
              مؤسسة أشيد للمقاولات المعمارية هي واحدة من المؤسسات الرائدة في
              مجال التصميم المعماري والتنفيذ والبناء. تأسست المؤسسة بهدف تقديم
              حلول معمارية متكاملة تتسم بالإبداع والابتكار والجودة العالية. بفضل
              فريق من المهندسين المعماريين والمختصين ذوي الخبرة، استطاعت أشيد أن
              تبرز كقوة رائدة في مجال صناعة البناء والتشييد.
            </p>
          </SideText>
        </div>
        <div className="bgdiv">
          <div>
            <SideText>
              <img className="boxImg" src={img1} alt="logo" />
            </SideText>
          </div>
          <div>
            <SideText direction="right">
              <img className="boxImg" src={img2} alt="logo" />{" "}
            </SideText>
          </div>
        </div>
      </div>
    </section>
  );
}
