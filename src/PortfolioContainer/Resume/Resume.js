import React from "react";
import "./Resume.css";
import splitImage from "../../assets/AboutMe/split-2.png";
import ProgressBar from "@ramonak/react-progress-bar";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "education",
    };
  }

  componentDidMount() {
    this.updateSelectedTab();
  }

  componentDidUpdate() {
    this.updateSelectedTab();
  }

  updateSelectedTab() {
    document.querySelectorAll(".left-nav").forEach((item) => {
      item.classList.remove("active");
    });
    document
      .querySelector(`.${this.state.selectedTab}`)
      .classList.add("active");
  }

  progressBar(progress){
    return <ProgressBar isLabelVisible={false} completed={progress} width={200} borderRadius="0" bgColor="#1f2235" baseBgColor="#FF5823" margin="5px 0 15px 0"/>;
  }

  render() {
    return (
      <section id="Resume" className="resume-section">
        <div className="title">Resume</div>
        <div className="chooseme">My Formal Bio Details</div>
        <img className="splitter" src={splitImage} />
        <div className="details-section">
          <div className="resume-left-container">
            <div
              className="left-nav education"
              onClick={() => {
                this.setState({
                  selectedTab: "education",
                });
              }}
            >
              <i class="fas fa-user-graduate" />
              <span className="left-nav-text">Education</span>
            </div>
            <div
              className="left-nav experince"
              onClick={() => {
                this.setState({
                  selectedTab: "experince",
                });
              }}
            >
              <i class="fas fa-history"></i>
              <span className="left-nav-text">Experince</span>
            </div>
            <div
              className="left-nav skills"
              onClick={() => {
                this.setState({
                  selectedTab: "skills",
                });
              }}
            >
              <i class="fas fa-laptop"></i>
              <span className="left-nav-text">Skills</span>
            </div>
            <div
              className="left-nav projects"
              onClick={() => {
                this.setState({
                  selectedTab: "projects",
                });
              }}
            >
              <i class="fas fa-bar-chart"></i>
              <span className="left-nav-text">Projects</span>
            </div>
            <div
              className="left-nav interest"
              onClick={() => {
                this.setState({
                  selectedTab: "interest",
                });
              }}
            >
              <i class="fas fa-paint-brush"></i>
              <span className="left-nav-text">Interests</span>
            </div>
          </div>
          <div className="resume-right-container">
            {this.state.selectedTab == "education" && (
              <div className="right-education">
                <div className="institution">
                  <div className="institution-details">
                    <ul>
                      <li className="institution-list">
                        <span className="institution-name">
                          Chandigroup Engineering College, Mohali
                        </span>
                      </li>
                    </ul>
                    <span className="institution-course">
                      Compouter Scince &amp; Engineering - 8.1 CGPA
                    </span>
                  </div>
                  <div className="institution-duration">2017-2021</div>
                </div>
                <div className="institution">
                  <div className="institution-details">
                    <ul>
                      <li className="institution-list">
                        <span className="institution-name">
                          Adarsh Sr. Sec. School, Rohtak
                        </span>
                      </li>
                    </ul>
                    <span className="institution-course">12th - 7.9 CGPA</span>
                  </div>
                  <div className="institution-duration">2016-2017</div>
                </div>
                <div className="institution">
                  <div className="institution-details">
                    <ul>
                      <li className="institution-list">
                        <span className="institution-name">
                          Adarsh Sr. Sec. School, Rohtak
                        </span>
                      </li>
                    </ul>
                    <span className="institution-course">10th - 8.8 CGPA</span>
                  </div>
                  <div className="institution-duration">2015-2016</div>
                </div>
              </div>
            )}
            {this.state.selectedTab == "experince" && (
              <div className="right-experince">
                <div className="exp">
                  <div className="experince-details">
                    <div className="institution-details">
                      <ul>
                        <li className="institution-list">
                          <span className="institution-name">MAQ Software</span>
                        </li>
                      </ul>
                      <span className="position">Software Engineer 1</span>
                    </div>
                    <div className="institution-duration">Nov 21 - Present</div>
                  </div>
                  <div className="role-details">
                    <div>
                      - Developed and enhanced websites for clients using
                      React-TS etc.
                    </div>
                    <div>
                      - Created Power BI reports as per the given mock-ups.
                    </div>
                    <div>
                      - I scratch my mental capacity to develope the UI as per
                      the given design.
                    </div>
                  </div>
                </div>
                <div className="exp">
                  <div className="experince-details">
                    <div className="institution-details">
                      <ul>
                        <li className="institution-list">
                          <span className="institution-name">MAQ Software</span>
                        </li>
                      </ul>
                      <span className="position">Associate Software Engineer</span>
                    </div>
                    <div className="institution-duration">Mar 21 - Nov 21</div>
                  </div>
                  <div className="role-details">
                    <div>
                      - Responsible for writing efficient code.
                    </div>
                    <div>
                      - Created Power BI custom visuals in ReactJs.
                    </div>
                  </div>
                </div>
                <div className="exp">
                  <div className="experince-details">
                    <div className="institution-details">
                      <ul>
                        <li className="institution-list">
                          <span className="institution-name">MAQ Software</span>
                        </li>
                      </ul>
                      <span className="position">Software Intern</span>
                    </div>
                    <div className="institution-duration">Nov 20 - Mar 21</div>
                  </div>
                  <div className="role-details">
                    <div>
                      - Worked on Azure devOps and Azure databricks.
                    </div>
                    <div>
                      - Helped team to creat Power BI reports.
                    </div>
                  </div>
                </div>
                <div className="exp">
                  <div className="experince-details">
                    <div className="institution-details">
                      <ul>
                        <li className="institution-list">
                          <span className="institution-name">Dummy Bytes</span>
                        </li>
                      </ul>
                      <span className="position">Machine Learning Trainee</span>
                    </div>
                    <div className="institution-duration">Jun 19 - Jul 19</div>
                  </div>
                  <div className="role-details">
                    <div>
                      - Worked on Machine Learning algorithms, Pre-processing the data.
                    </div>
                    <div>
                      - Studied various libraries like NLTK, Sklearn etc.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.selectedTab == "projects" && (
              <div className="right-projects">Projects</div>
            )}
            {this.state.selectedTab == "skills" && (
              <div className="right-skills">
                <ul className="skills-parent">
                  <div>
                    <li className="skills-list"><span className="skills-list-style">JavaScript</span></li>
                    {this.progressBar(75)}
                    <li className="skills-list"><span className="skills-list-style">ReactJS</span></li>
                    {this.progressBar(80)}
                    <li className="skills-list"><span className="skills-list-style">TypeScript</span></li>
                    {this.progressBar(70)}
                    <li className="skills-list"><span className="skills-list-style">HTML</span></li>
                    {this.progressBar(80)}
                    <li className="skills-list"><span className="skills-list-style">CSS</span></li>
                    {this.progressBar(85)}
                  </div>
                  <div>
                  <li className="skills-list"><span className="skills-list-style">Core Java</span></li>
                  {this.progressBar(80)}
                  <li className="skills-list"><span className="skills-list-style">C/C++</span></li>
                  {this.progressBar(70)}
                  <li className="skills-list"><span className="skills-list-style">Python</span></li>
                  {this.progressBar(60)}
                  <li className="skills-list"><span className="skills-list-style">Tailwind CSS</span></li>
                  {this.progressBar(65)}
                  </div>
                </ul>
              </div>
            )}
            {this.state.selectedTab == "interest" && (
              <div className="right-interest">
                <div className="hobby">
                  <ul><li className="skills-list"><span className="skills-list-style">Music</span></li></ul>
                  <span className="hobby-text">I love listening to music because i feel happy/ excited through it.</span>
                </div>
                <div className="hobby">
                  <ul><li className="skills-list"><span className="skills-list-style">Competitive Gaming</span></li></ul>
                  <span className="hobby-text">Apart from tech enthusiast and code writer, i also love to play video games.</span>
                </div>
                <div className="hobby">
                  <ul><li className="skills-list"><span className="skills-list-style">Exercise</span></li></ul>
                  <span className="hobby-text">Excercise is one of my favourite hobby because it makes me feel energetic and strong.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
