import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import TweenMax from "gsap/TweenMax";
import Thesis from "./ThesisUI";
import GoalPosts from "./GoalPosts";
import MVP from "./ThesisUI copy";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    function fade($ele) {
      $ele
        .fadeIn(1000)
        .delay(3000)
        .fadeOut(1000, function() {
          var $next = $(this).next(".quote");
          fade(
            $next.length > 0
              ? $next
              : $(this)
                  .parent()
                  .children()
                  .first()
          );
        });
    }
    fade($(".quoteLoop > .quote").first());

    $(window).scroll(function() {
      if ($(window).scrollTop() > 600) {
        $(".main_nav").addClass("sticky");
      } else {
        $(".main_nav").removeClass("sticky");
      }
    });

    $(".mobile-toggle").click(function() {
      if ($(".main_nav").hasClass("open-nav")) {
        $(".main_nav").removeClass("open-nav");
      } else {
        $(".main_nav").addClass("open-nav");
      }
    });

    $(".main_nav li a").click(function() {
      if ($(".main_nav").hasClass("open-nav")) {
        $(".navigation").removeClass("open-nav");
        $(".main_nav").removeClass("open-nav");
      }
    });

    $(document).ready(function($) {
      $(".smoothscroll").on("click", function(e) {
        e.preventDefault();

        var target = this.hash,
          $target = $(target);

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top
            },
            800,
            "swing",
            function() {
              window.location.hash = target;
            }
          );
      });
    });

    TweenMax.staggerFrom(
      ".heading",
      3.8,
      { opacity: 0, y: 40, delay: 0.2 },
      0.4
    );
  }

  render() {
    return (
      <div>
        <header id="header">
          <div className="main_nav">
            <div className="container">
              <div className="mobile-toggle">
                {" "}
                <span /> <span /> <span />{" "}
              </div>
              <nav>
                <ul>
                  <li>
                    <a className="smoothscroll" href="#header">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#portfolio">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="title">
            <div className="smallsep heading" />
            <h1 className="heading"> Joshua Brigati</h1>
            <div className="smallsep heading" />
            <h2 className="heading">Front End Developer</h2>
            <a className="smoothscroll" href="#about">
              <div className="mouse">
                <div className="wheel" />
              </div>
            </a>{" "}
          </div>
          <a className="smoothscroll" href="#about">
            <div className="scroll-down" />
          </a>
        </header>

        <section id="about">
          <div className="container">
            <h1>About</h1>
            <div className="block" />
            <div className="row">
              <p>Hi! I am Joshua Brigati!</p>

              <p>
                {" "}
                I love creating web page animations and enjoy finding new ways
                to make something unique and pleasing to the eye; whether that
                be a certain combination of colors or the way something moves
                seamlessly across the screen. I excel in collaboration with my
                peers to create something where each of our strengths are
                highlighted. UI Development is my passion and I am excited to
                have the opportunity to do it.
              </p>
            </div>
            <div className="row">
              <div className="six columns">
                {/* <h3><span class="typcn icon"></span>Our Process</h3>  */}
                <a
                  href="mailto:brigati.joshua@gmail.com"
                  style={{ color: "black" }}
                >
                  brigati.joshua@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <h1>Skills</h1>
            <div className="block" />
            <div className="row">
              <p>
                I am great with communication and love speaking with clients!
              </p>
              <p>
                My most experience is with Javascript, HTML, CSS/SCSS, ReactJS,
                AngularJS.
              </p>
            </div>
            <div className="row">
              <div className="eight columns">
                <div className="progressBar">
                  <h4>JavaScript</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-80" />
                  </div>
                </div>
                <div className="progressBar">
                  <h4>HTML</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-75" />
                  </div>
                </div>
                <div className="progressBar">
                  <h4>CSS / SCSS</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-75" />
                  </div>
                </div>
                <div className="progressBar">
                  <h4>ReactJS / AngularJS</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-70" />
                  </div>
                </div>
                <div className="progressBar">
                  <h4>Bootstrap / Semantic-UI</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-50" />
                  </div>
                </div>
                <div className="progressBar">
                  <h4>Jquery</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-30" />
                  </div>
                </div>
                <div className="progressBar">
                  <h4>NodeJS</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-30" />
                  </div>
                </div>
                <div className="progressBar">
                  <h4>MongoDB / SQL</h4>
                  <div className="progressBarContainer">
                    <div className="progressBarValue value-30" />
                  </div>
                </div>
              </div>
              <div className="four columns">
                <p>
                  I have also worked with Java, C++, Python and I have made a
                  small app with Swift and xCode.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container">
            <h1>Projects</h1>
            <div className="block" />
            <div className="row">
              <div className="one-third column">
                <p style={{ textAlign: "center", marginBottom: "1px" }}>
                  Front End / UI Developer
                </p>
                <a href="https://www.github.com/JoshuaBrigati/deployedCryptoUI">
                  <Thesis />
                </a>
                <p style={{ textAlign: "center" }}>
                  Buy and sell between all cryptocurrencies!
                </p>
                <p style={{ textAlign: "center", color: "blue" }}>
                  ReactJS, SCSS, Jquery, SVG
                </p>
              </div>
              <div className="one-third column">
                <p style={{ textAlign: "center", marginBottom: "1px" }}>
                  Full Stack Developer
                </p>
                <a href="https://www.goalposts.website">
                  <GoalPosts />
                </a>
                <p style={{ textAlign: "center" }}>
                  Keeps tack of a users goals!
                </p>
                <p style={{ textAlign: "center", color: "blue" }}>
                  AngularJS, SCSS, Bootstrap, SQLite, NodeJS, AWS
                </p>
              </div>
              <div className="one-third column">
                <p style={{ textAlign: "center", marginBottom: "1px" }}>
                  Full Stack Developer
                </p>
                <a href="https://www.github.com/JoshuaBrigati/Crypto-Display">
                  <MVP />
                </a>
                <p style={{ textAlign: "center" }}>
                  Displays selected cryptocurrencies, updated every second
                </p>
                <p style={{ textAlign: "center", color: "blue" }}>
                  ReactJS, CSS, API, MongoDB, NodeJS
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: "30px" }} />
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h1>Contact</h1>
            <div className="block" />
            <form
              method="POST"
              action="https://formspree.io/brigati.joshua@gmail.com"
            >
              <div className="row">
                <div className="six columns">
                  <label htmlFor="exampleRecipientInput">Name</label>
                  <input name="name" className="u-full-width" type="text" />
                </div>
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Email</label>
                  <input name="email" className="u-full-width" type="email" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="exampleMessage">Message</label>
                <textarea name="message" className="u-full-width" />
                <input
                  className="button-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="nine columns">
              <p>Thanks for visiting!</p>
              <div className="social-container">
                <ul className="social-icons">
                  <li>
                    <a href="https://www.linkedin.com/in/joshuabrigati/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/JoshuaBrigati/">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://codepen.io/JoshuaBriagti/">
                      <i className="fa fa-codepen" />
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/document/d/1lYYaWtKkumMvGRiSDKPCHo4o_gauIs7l9yF3YDqxQ54/edit?usp=sharing">
                      <i className="far fa-file-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
