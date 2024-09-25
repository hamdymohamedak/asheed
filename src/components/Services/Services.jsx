import { CounterUp } from "larose-js";
import React from "react";
import "../Home/Home.css"
export default function Services() {
  return (
    <section className="secound_sec">
      <div className="secound_sec_container">
        <div className="cube"></div>
        <div className="secound_sec_list">
          <h1>
            <CounterUp time={40} start={0} end={120} />
          </h1>
          <p>الفلل السكنية</p>
          <h1>
            <CounterUp time={40} start={0} end={60} />
          </h1>
          <p>المحلات التجارية والمكتبية ​</p>
          <h1>
            <CounterUp time={40} start={0} end={80} />
          </h1>
          <p>المطاعم والكافيهات</p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "6rem",
        }}
      >
        خدماتنا
      </div>
      <div className="Services">
        <div id="card1" className="card ">
          <div className="icon">
            <i class="fa-solid fa-building-user"></i>
          </div>
          تصميم و تنفيذ المطاعم والمقاهي
        </div>
        <div id="card2" className="card ">
          <div className="icon">
            {" "}
            <i class="fa-solid fa-cube"></i>
          </div>
          تصميم و تنفيذ المحلات التجارية
        </div>
        <div id="card3" className="card ">
          <div className="icon">
            <i class="fa-solid fa-pen-nib"></i>
          </div>
          تصميم و تنفيذ الشاليهات والحدائق
        </div>
      </div>
    </section>
  );
}
