import html from "../assets/skills/html-1.svg";
import css from "../assets/skills/css-3.svg";
import javascript from "../assets/skills/javascript-1.svg";
import reactjs from "../assets/skills/react-2.svg";
import bootstrap from "../assets/skills/bootstrap-5-1.svg";
import sql from "../assets/skills/microsoft-sql-server-1.svg";
import mui from "../assets/skills/material-ui-1.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a frontend developer, I have expertise in the following
                technologies.These technologies allow me to create responsive
                and interactive user interfaces.style web pages with modern
                designs, implement complex logic and data manipulation, and
                build efficient and scalable web applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true} // Enable auto play
                autoPlaySpeed={3000} // Set the speed to 2 seconds per slide
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={reactjs} alt="Image" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={mui} alt="Image" />
                  <h5>Material Ui</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>Sql Server</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
