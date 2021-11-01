import React from "react";
import "./Contactme.css";
import splitImage from "../../assets/AboutMe/split-2.png";
import emailjs from "emailjs-com";

export default function Contactme (){
    function sendEmail(e) {
      emailjs
        .sendForm(
          "service_xju026e",
          "template_j1sujkp",
          e.target,
          "user_QgIPwzpTOrkVbnPkYfeLj"
        )
        .then(
          (result) => {
            console.log(result);
            alert("sent");
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    }

    return (
      <section id="ContactMe">
        <div className="contact-upper">
          <div className="title">Contact Me</div>
          <div className="chooseme">Get In Touch</div>
          <img className="splitter" src={splitImage} />
        </div>
        <div className="contact-lower">
          <div className="contact-left">
            <div className="contact-container">
              <div className="icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div className="conact-detail">
                <h5>Call Me</h5>
                <span className="contact_no_etx">+91 9996494077</span>
              </div>
            </div>
            <div className="contact-container">
              <div className="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div className="conact-detail">
                <h5>E-mail</h5>
                <span className="contact_no_etx">pulkitswami7@gmail.com</span>
              </div>
            </div>
            <div className="contact-container">
              <div className="icon">
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <div className="conact-detail">
                <h5>Address</h5>
                <span className="contact_no_etx">Sector 22, Rohtak, India</span>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p>Interested to work together? - Let's talk</p>
            <form onSubmit={sendEmail}>
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      required={true}
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                      required={true}
                    />
                  </div>
                </div>
                <div class="col-md-12 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Message"
                  required={true}
                  style={{ resize: "none", height: 150 }}
                />
              </div>
              <div class="submit-btn">
                <input
                  type="submit"
                  className="btn btn-general highlighted-btn"
                  role="button"
                  title="Submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="contactme-footer">
          <div className="contact-name col-md-4 col-sm-4">
            <div className="pulkit">Pulkit</div>
            <span className="pulkit-pos">Software Engineer</span>
          </div>
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
          <a href="#Home">
            <i class="fas fa-arrow-up gotohome"></i>
          </a>
        </div>
      </section>
    );
}