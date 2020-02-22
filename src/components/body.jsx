import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Card, Row, Container, Col } from 'react-bootstrap'
import profilePic from './timo_lin.jpg'
import { ContactInformation, Service, Email, SERVICE_TYPE, FONT_AWESOME_SIZE } from 'react-contact-information';


function Body() {

  const fadeTime = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 4000,
      duration: 1500,
    },
  });
  const fadeTime2 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 2000,
      duration: 3200,
    },
  });
  const fadeTime3 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 3000,
      duration: 5000,
    },
  });
  const fadeTime4 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 4000,
      duration: 7000,
    },
  });

  return (

    <Container className="section" id="about">

 
        <Container className="main">
          <Row className="main-left">
            <animated.div
              div style={fadeTime}>
              <Card.Img variant="top" src={profilePic} />
            </animated.div>
          </Row>
          <Row className="main-right">
            <animated.div className="animated"
              div style={fadeTime2}>
              <Card className="right-box"><Col>Hello, I'm Timo Harju from Espoo. I'm a software engineering from Metropolia University of Applied Sciences. I'm a native software developer and web developer with passion for both backend and frontend.</Col></Card></animated.div>
            <animated.div className="animated"
              div style={fadeTime3}>
              <Card className="right-box"><Col>I have had the oppurtunity to create various softwares and applications with multiple languages variating from compiled language (Java, C and C#) to inteprpreted languages (Javascript, PHP and Python). You can find some of my projects <a href="#projects"> below.</a> </Col></Card></animated.div>
            <animated.div className="animated"
              div style={fadeTime4}>
              <Card className="right-box"><Col>I'm currently looking for a developer position either in software or web developer department. Feel free to contact me.</Col>      <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6} >
                <Service showIdentifier accountIdentifier='timoharju' type={SERVICE_TYPE.GITHUB} />
                <Email to='timoharj@metropolia.fi' />
              </ContactInformation></Card></animated.div>
          </Row>
   
      </Container>

    </Container>

  );
}

export default Body;