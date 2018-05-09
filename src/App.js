import React, { Component } from "react";
import "./App.css";
import "./css/skeleton.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="intro">
          <h1 id="name-intro">
            Hi! My name is <h1>Joshua Brigati</h1>{" "}
          </h1>
          <h3 id="description">I am a Front-End Developer!</h3>
        </section>
        {/* ABOUT */}
        <section className="about">
          {/* <div className="container flex">
            <h1>Coming Soon!</h1>
          </div> */}
          <div class="container flex">
            <div class="header waypoint" data-animation="slide-in-left">
              ABOUT
            </div>
            <div
              class="header-bar waypoint"
              data-animation="slide-in-left"
              data-delay=".5s"
            />

            <div class="flex row label-wrap">
              <div class="flex row-gt-sm">
                <div class="flex bullet-wrap ">
                  <div class="hex-wrap waypoint" data-animation="flip-in-x">
                    <div class="hexagon">
                      <i class="mdi mdi-speedometer" />
                    </div>
                  </div>
                  <div class="waypoint" data-animation="fade-in">
                    <div class="label bold">Fast</div>
                    <div>
                      Fast load times and lag free interaction, my highest
                      priority.
                    </div>
                  </div>
                </div>

                <div class="flex bullet-wrap ">
                  <div
                    class="hex-wrap waypoint"
                    data-animation="flip-in-x"
                    data-delay=".2s"
                  >
                    <div class="hexagon">
                      <i class="mdi mdi-cellphone-link" />
                    </div>
                  </div>
                  <div
                    class="waypoint"
                    data-animation="fade-in"
                    data-delay=".2s"
                  >
                    <div class="label bold">Responsive</div>
                    <div>My layouts will work on any device, big or small.</div>
                  </div>
                </div>
              </div>
              <div class="flex row-gt-sm">
                <div class="flex bullet-wrap ">
                  <div
                    class="hex-wrap waypoint"
                    data-animation="flip-in-x"
                    data-delay=".4s"
                  >
                    <div class="hexagon">
                      <i class="mdi mdi-lightbulb-outline" />
                    </div>
                  </div>
                  <div
                    class="waypoint"
                    data-animation="fade-in"
                    data-delay=".4s"
                  >
                    <div class="label bold">Intuitive</div>
                    <div>
                      Strong preference for easy to use, intuitive UX/UI.
                    </div>
                  </div>
                </div>

                <div class="flex bullet-wrap ">
                  <div
                    class="hex-wrap waypoint"
                    data-animation="flip-in-x"
                    data-delay=".6s"
                  >
                    <div class="hexagon">
                      <i class="mdi mdi-rocket" />
                    </div>
                  </div>
                  <div
                    class="waypoint"
                    data-animation="fade-in"
                    data-delay=".6s"
                  >
                    <div class="label bold">Dynamic</div>
                    <div>
                      Websites don't have to be static, I love making pages come
                      to life.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="links-container container">
          <div className="social-container">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joshuabrigati">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://codepen.io/JoshuaBriagti/">
                  <i className="fa fa-codepen" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
