import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import youtubeclone from "../assets/project/youtubeColne1.png";
import the_Hydra from "../assets/project/The_Hydra.png";
import Weather_Web from "../assets/project/Weather_Web.png";
import crypto from "../assets/project/crypto app.png";

import ChakraUi from "../assets/project/chakraUi.png";
import shoppingCart from "../assets/project/ShoppingCart.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Youtube Clone",
      description: "YouTube Clone using React, Material-UI, and RapidAPI's 'Youtube Search and Download' API",
      imgUrl: youtubeclone,
      view:'https://youtube-clone-10b2tqhds-omkar01111.vercel.app/?vercelToolbarCode=ADUYObJlqI1p6rT',
      code:'https://github.com/omkar01111/youtube_clone'
    },
    {
      title: "Weather Web",
      description: "Weather forcast application using React and RapidAPI's ",
      imgUrl: Weather_Web,
      view:'https://weather-web-puce.vercel.app/?vercelToolbarCode=tCrLsq-X_ANO6cq',
      code:'https://github.com/omkar01111/Weather_Web'
    },
    {
      title: "Crypto App",
      description: "The crypto price app is built using React .This app provides live prices and charts for various cryptocurrencies, allowing users to stay updated on the latest market trends and make informed investment decisions.",
      imgUrl:crypto ,
      view:'https://crypto-app-five-delta.vercel.app/?vercelToolbarCode=Aa_6MI8gODeKZAT',
      code:'https://github.com/omkar01111/CryptoApp'
    },
    {
      title: "ChakraUi website",
      description: "A basic React website created using Chakra UI.",
      imgUrl: ChakraUi,
      view:'https://react-chakra-responsive-1.vercel.app/',
      code:'https://github.com/omkar01111/React-Chakra-Responsive-1/tree/master'
    },
    {
      title: "The Hydra",
      description: "The Hydra is a React application that was created using Material-UI.",
      imgUrl: the_Hydra,
      view:'https://the-hydra.vercel.app/?vercelToolbarCode=nuL9uJZb7nxG6T5',
      code:'https://github.com/omkar01111/The_Hydra'
    },
    {
      title: "Shopping Cart",
      description: "Shopping Cart is a React application that was created using Chakra-UI",
      imgUrl: shoppingCart,
      view:'https://weather-web-g1b7.vercel.app/?vercelToolbarCode=VJK5tUVP2LTky69',
      code:'https://github.com/omkar01111/Shopingcart'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the projects I have worked on:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
