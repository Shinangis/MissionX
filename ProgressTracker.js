import React from "react";
import "./ProgressTracker.css";

const ProgressTracker = ({ isSideBarCollapsed }) => {
  fetch("http://localhost:4000/api/students")
    .then((response) => response.json())
    .then((response) => console.log(response));

  return (
    <div
      className={`rightContentContainer2 ${
        isSideBarCollapsed ? "collapsedBody" : ""
      }`}
    >
      <div
        className={`helpReqContent ${
          isSideBarCollapsed ? "collapsedHelpReqContent" : ""
        }`}
      >
        <>
          <div className="beginner">BEGINNER COURSE</div>
        </>
        <>
          <div className="export">EXPORT AS SPREADSHEET</div>
        </>

        <>
          <div className="scrollbar">
            <div className="scrollbarblue"></div>
          </div>
        </>
        <div className="whiteBorderBox1">
          <div className="name">AIDEN ANDREWS</div>
          <div className="completed">4/15 Projects Completed</div>
          <section className="circles">
            <div className="circle">1</div>
            <div className="circle">2</div>
            <div className="circle">3</div>
            <div className="circle">4</div>
            <div className="circlewhite">5</div>
            <div className="circlewhite">6</div>
            <div className="circlewhite">7</div>
            <div className="circlewhite">8</div>
            <div className="circlewhite">9</div>
            <div className="circlewhite">10</div>
            <div className="circlewhite">11</div>
            <div className="circlewhite">12</div>
            <div className="circlewhite">13</div>
            <div className="circlewhite">14</div>
            <div className="circlewhite">15</div>
          </section>
        </div>
        <div className="whiteBorderBox2">
          <div className="name">COURTNEY BRISTOL</div>
          <div className="completed">1/15 Projects Completed</div>
          <section className="circles">
            <div className="circle">1</div>
            <div className="circlewhite">2</div>
            <div className="circlewhite">3</div>
            <div className="circlewhite">4</div>
            <div className="circlewhite">5</div>
            <div className="circlewhite">6</div>
            <div className="circlewhite">7</div>
            <div className="circlewhite">8</div>
            <div className="circlewhite">9</div>
            <div className="circlewhite">10</div>
            <div className="circlewhite">11</div>
            <div className="circlewhite">12</div>
            <div className="circlewhite">13</div>
            <div className="circlewhite">14</div>
            <div className="circlewhite">15</div>
          </section>
        </div>
        <div className="whiteBorderBox3">
          <div className="name">NAGINI CORTES</div>
          <div className="completed">4/15 Projects Completed</div>
          <section className="circles">
            <div className="circle">1</div>
            <div className="circlewhite">2</div>
            <div className="circlewhite">3</div>
            <div className="circle">4</div>
            <div className="circlewhite">5</div>
            <div className="circlewhite">6</div>
            <div className="circle">7</div>
            <div className="circle">8</div>
            <div className="circlewhite">9</div>
            <div className="circlewhite">10</div>
            <div className="circlewhite">11</div>
            <div className="circlewhite">12</div>
            <div className="circlewhite">13</div>
            <div className="circlewhite">14</div>
            <div className="circlewhite">15</div>
          </section>
        </div>
        <div className="whiteBorderBox4">
          <div className="name">RAWIRI</div>
          <div className="completed">7/15 Projects Completed</div>
          <section className="circles">
            <div className="circle">1</div>
            <div className="circle">2</div>
            <div className="circle">3</div>
            <div className="circle">4</div>
            <div className="circlewhite">5</div>
            <div className="circle">6</div>
            <div className="circle">7</div>
            <div className="circle">8</div>
            <div className="circlewhite">9</div>
            <div className="circlewhite">10</div>
            <div className="circlewhite">11</div>
            <div className="circlewhite">12</div>
            <div className="circlewhite">13</div>
            <div className="circlewhite">14</div>
            <div className="circlewhite">15</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
