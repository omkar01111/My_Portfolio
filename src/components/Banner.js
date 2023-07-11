import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const downloadFile = () => {
    // Replace 'path/to/file.ext' with the actual file path and name
    const fileUrl = 'https://my-portfolio-bn7iz8gk3-omkar01111.vercel.app/?vercelToolbarCode=Y8Ox3G_dC6XzlZh/cv/OmkarMore.pdf';
   

    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(new Blob([blob]));

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = url;

        // Set the 'download' attribute to specify the file name
        link.setAttribute('download', fileUrl.substring(fileUrl.lastIndexOf('/') + 1));

        // Append the link element to the document body
        document.body.appendChild(link);

        // Trigger the click event on the link element
        link.click();

        // Remove the link element from the document body
        document.body.removeChild(link);

        // Release the object URL to free up memory
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Failed to download file:', error);
      });
  };

  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Omkar`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Passionate frontend developer and a recent graduate from Saraf College, where I earned my BScIT degree in 2022. With a strong foundation in web development, I thrive on creating engaging and user-friendly experiences.</p>
                  <button onClick={downloadFile}>Download CV <ArrowRightCircle size={25} /> </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
