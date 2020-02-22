import React, { useState } from 'react'
import { Navbar, Container, Row, Col, Image, Nav, NavDropdown } from 'react-bootstrap'
import Logo from './Timo_signatureLogo_black.png'
import useDocumentScrollThrottled from './useDocumentScrollThrottled'
import { useSpring, animated } from 'react-spring'

function Header() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    const fadeTime = useSpring({ opacity: 1, from: { opacity: 0 } })

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (

        <Navbar collapseOnSelect expand="lg" className={`header ${shadowStyle} ${hiddenStyle}`}>
            
            <Navbar.Brand> <Image src={Logo} className="logoimg" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#projects">PROJECTS</Nav.Link>
                    <Nav.Link href="#skills">SKILLS</Nav.Link>
                    <Nav.Link href="#experience">WORK EXPERIENCE</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}

export default Header;