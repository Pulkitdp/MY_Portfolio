import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <span className="colz-icon">
              <a href="https://www.facebook.com/pulkit.swami.7">
                <i className="fa fa-facebook-square"></i>
              </a>
            </span>
            <span className="colz-icon">
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
            </span>
            <span className="colz-icon">
              <a href="https://twitter.com/Pulkit64855176">
                <i className="fa fa-twitter"></i>
              </a>
            </span>
            <span className="colz-icon">
              <a href="https://www.instagram.com/pulkitdp/">
                <i className="fa fa-instagram"></i>
              </a>
            </span>
            <span className="colz-icon">
              <a href="https://www.linkedin.com/in/pulkit-a2415817a/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </span>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Pulkit</span>
            </span>
          </div>
          <div className="profile-details-roles">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer",
                    1000,
                    "FrontEnd Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                A motivated individual with in-depth knowledge of languages
                seeking a position in a growth-oriented company where I can use
                my skills to the advantage of the company while having the scope
                to develop my own skills.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#ContactMe">
              <button className="btn primary-btn"> Hire Me </button>
            </a>
            <a href="Pulkit_Resume.pdf" download="PulkitResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
