import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <section id="headers" className="headers">
      <div className="items" id="items">
        <a href="#AboutMe" className="header">
          About Me
        </a>
        <a href="#Resume" className="header">
          Resume
        </a>
        <a href="#Home" className="header home-btn">
          Home
        </a>
        <a href="#testimonial" className="header">
          Testimonial
        </a>
        <a href="#ContactMe" className="header">
          Contact Me
        </a>
      </div>
      <div className="header-icons">
        <i style={{cursor: "pointer", color: "white"}} class="fas fa-ellipsis-h" onClick={() => {
            document.querySelector(".headers").style.backgroundColor= "rgba(0, 0, 0, 0.8)";
            document.querySelector(".items").style.display = "grid";
            document.querySelector(".items").style.justifyContent = "right";
            document.querySelector(".fa-times").style.display = "block";
            document.querySelector(".fa-ellipsis-h").style.display = "none";
        }}></i>
        <i style={{cursor: "pointer", color: "white", display: "none"}} class="fas fa-times" onClick={() => {
            document.querySelector(".items").style.display = "none";
            document.querySelector(".fa-times").style.display = "none";
            document.querySelector(".fa-ellipsis-h").style.display = "block";
            document.querySelector(".headers").style.backgroundColor= "rgba(0, 0, 0, 0)";
        }}></i>
      </div>
    </section>
  );
}
