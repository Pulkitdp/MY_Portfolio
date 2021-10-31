import React from "react";
import Carousel from "react-elastic-carousel";
import splitImage from "../../assets/AboutMe/split-2.png";
import akshit from "../../assets/Testimonial/Akshit.jpg";
import Item from "./Item";
import "./Testimonial.css";

const breakPoints = [
  { width: 400, itemsToShow: 1 },
  { width: 650, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const feedbacks = [
  {
    name: "Akshit",
    position: "Software Engineer 1",
    feedback:
      "Pulkit's creativity is very high. Specifically, he solved a problem with an extra creative solution.",
    pic: `${akshit}`,
  },
  {
    name: "Chetan",
    position: "Associate Software Engineer",
    feedback:
      "He understands clearly that to complete the projects is a team effort. He is always willing to help others when needed.",
    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZH-x4UnmQ3b4DXT0sLHI4wHaFN%26pid%3DApi&f=1",
  },
  {
    name: "Naman",
    position: "Software Engineer 1",
    feedback:
      " He has a wide skill set and although he has some weaknesses, he always seeks help from appropriate colleagues when needed.",
    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZH-x4UnmQ3b4DXT0sLHI4wHaFN%26pid%3DApi&f=1",
  },
  {
    name: "Pulkit Garg",
    position: "Software Engineer 1",
    feedback:
      "He respects every team member and appreciates new ideas from his team members very much.",
    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZH-x4UnmQ3b4DXT0sLHI4wHaFN%26pid%3DApi&f=1",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonial">
      <div className="testimonial-upper">
        <div className="title">Testimonial</div>
        <div className="chooseme">My Colleague Say About Me</div>
        <img className="splitter" src={splitImage} />
      </div>
      <div className="carousel">
        <Carousel
          autoPlaySpeed={4000}
        //   pagination={false}
          // enableAutoPlay={true}
          showArrows={false}
          breakPoints={breakPoints}
        >
          <Item>
            <div>
              <p style={{textAlign: "center"}}>
                <span className="quotation">
                  <i class="fas fa-quote-left"></i>
                </span>
                {" "+feedbacks[0].feedback+" "}
                <span className="quotation">
                  <i class="fas fa-quote-right"></i>
                </span>
              </p>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div className="testimonial-details">
                  <img className="testimonial-images" src={akshit}/>
                  <div>
                      <h6>{feedbacks[0].name}</h6>
                      <p style={{fontSize:12}}><i>{feedbacks[0].position}</i></p>
                  </div>
              </div>
            </div>
          </Item>
          <Item><div>
              <p style={{textAlign: "center"}}>
                <span className="quotation">
                  <i class="fas fa-quote-left"></i>
                </span>
                {" "+feedbacks[1].feedback+" "}
                <span className="quotation">
                  <i class="fas fa-quote-right"></i>
                </span>
              </p>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div className="testimonial-details">
                  <img className="testimonial-images" src={feedbacks[1].pic}/>
                  <div>
                      <h6>{feedbacks[1].name}</h6>
                      <p style={{fontSize:12}}><i>{feedbacks[1].position}</i></p>
                  </div>
              </div>
            </div></Item>
          <Item><div>
              <p style={{textAlign: "center"}}>
                <span className="quotation">
                  <i class="fas fa-quote-left"></i>
                </span>
                {" "+feedbacks[2].feedback+" "}
                <span className="quotation">
                  <i class="fas fa-quote-right"></i>
                </span>
              </p>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div className="testimonial-details">
                  <img className="testimonial-images" src={feedbacks[2].pic}/>
                  <div>
                      <h6>{feedbacks[2].name}</h6>
                      <p style={{fontSize:12}}><i>{feedbacks[2].position}</i></p>
                  </div>
              </div>
            </div></Item>
          <Item><div>
              <p style={{textAlign: "center"}}>
                <span className="quotation">
                  <i class="fas fa-quote-left"></i>
                </span>
                {" "+feedbacks[3].feedback+" "}
                <span className="quotation">
                  <i class="fas fa-quote-right"></i>
                </span>
              </p>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div className="testimonial-details">
                  <img className="testimonial-images" src={feedbacks[3].pic}/>
                  <div>
                      <h6>{feedbacks[3].name}</h6>
                      <p style={{fontSize:12}}><i>{feedbacks[3].position}</i></p>
                  </div>
              </div>
            </div></Item>
        </Carousel>
      </div>
    </section>
  );
}
