import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Card, Row, Container, ProgressBar, Col } from 'react-bootstrap'

function Body() {

  const fadeTime = useSpring({ opacity: 1, from: { opacity: 0 } })


  return (
    <Container className="projectsSection" id="projects">
      <h1 id="projectsh1">WORK EXPERIENCE</h1>
      <Col id="experience" className="item-iconC" ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-briefcase fa-w-16 fa-3x"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" class=""></path></svg></Col>

      <Row className="projectrow">


        <Col class="item-inner">
          <Col className="item-icon"></Col>
          <h3 className="item-title">Logistics Worker</h3>
          <h5 className="item-title">Heinon Tukku 2014, 2016-</h5>
          <Col className="item-desc">Warehouse managment and order tracking  </Col>
        </Col>


        <Col class="item-inner">
          <Col className="item-icon"></Col>
          <h3 className="item-title">Salesman</h3>
          <h5 className="item-title">LIDL 2015-2016</h5>
          <Col className="item-desc">Salesperson and warehouse managment</Col>
        </Col>


        <Col class="item-inner">
          <Col className="item-icon"></Col>
          <h3 className="item-title">Warehouse worker</h3>
          <h5 className="item-title">Lyreco, 2013-2013</h5>
          <Col className="item-desc">Dispatch, reception work and collecting goods</Col>
        </Col>
      </Row>


    </Container>


  );
}

export default Body;