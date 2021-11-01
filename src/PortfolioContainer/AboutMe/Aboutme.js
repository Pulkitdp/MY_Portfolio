import React from "react";
import "./Aboutme.css";
import splitImage from "../../assets/AboutMe/split-2.png";
import aboutmeimage from "../../assets/AboutMe/aboutme.jpg";

export default function Aboutme() {
  return (
    <section id="AboutMe" className="aboutme">
      <div className="title">About Me</div>
      <div className="chooseme">Why Choose Me?</div>
      <img className="splitter" src={splitImage} />
      <div className="details-block">
        <div className="details">
          <img className="aboutMeImage" src={aboutmeimage} />
          <div className="right-block">
            <div className="brief">
              Enthusiastic to work in a challenging environment, which gives me
              an opportunity for growth and helps me achieve my goal as well as
              the organization's target.
            </div>
            <div className="heighlights">
              <div className="hightlight-header">
                Here are a Few Highlights:
              </div>
              <ul className="heighlight-list">
                <li>
                  <span>
                    Responsible for writing efficient code in React and
                    TypeSctipt
                  </span>
                </li>
                <li>
                  <span>
                    Worked on Power BI, Azure DevOps, MS SQL, Azure Databricks
                    etc
                  </span>
                </li>
                <li>
                  <span>
                    Achieved 6-star gold badge in Problem Solving on HackerRank
                  </span>
                </li>
                <li>
                  <span>HackerRank certified in Java, C++</span>
                </li>
              </ul>
            </div>
            <div className="aboutme-buttons">
            <a href="#ContactMe"><button className="btn primary-btn"> Hire Me </button></a>
              <a href="Pulkit_Resume.pdf" download="PulkitResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}