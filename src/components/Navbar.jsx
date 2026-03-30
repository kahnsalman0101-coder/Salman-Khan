import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { motion, useScroll, useSpring } from 'framer-motion';

import { FaPaperPlane } from 'react-icons/fa';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
          transformOrigin: '0%',
          zIndex: 10000
        }}
      />
      <Navbar 
        expand="lg" 
        variant="dark" 
        fixed="top" 
        className={`py-3 transition-all duration-300 ${scrolled ? 'glass-nav' : ''}`}
        style={{ transition: 'all 0.3s ease' }}
      >
        <Container className="justify-content-between align-items-center">
          <Navbar.Brand href="#home" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: '700' }}>
            SK<span className="text-gradient">.</span>
          </Navbar.Brand>
          
          {/* Mobile Top Icon (Replaces Hamburger) */}
          <div className="d-lg-none">
            <a href="mailto:salmankhansa741@gmail.com" className="text-white text-decoration-none p-2">
              <FaPaperPlane size={20} color="#ec4899" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="d-none d-lg-block">
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto align-items-center">
              {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item) => (
                <Nav.Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 position-relative nav-link-hover"
                  style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}
                >
                  {item}
                </Nav.Link>
              ))}
              <Nav.Link 
                href="mailto:salmankhansa741@gmail.com"
                className="btn-glow ms-lg-3 mt-3 mt-lg-0 text-decoration-none d-inline-block text-center"
              >
                Hire Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
