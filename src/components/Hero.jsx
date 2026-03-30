import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaLaptopCode, FaGem } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100 position-relative overflow-hidden py-5">
      {/* Background Elements */}

      <Container className="position-relative z-1">
        <Row className="align-items-center">
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(16px, 2vw, 20px)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }} className="text-gradient fw-bold">
                World-Class Developer
              </h2>
              <h1 style={{ fontSize: 'clamp(40px, 8vw, 90px)', lineHeight: '1.1', marginBottom: '20px' }} className="fw-bold">
                Salman Khan
              </h1>
              <h2 style={{ fontSize: 'clamp(24px, 5vw, 60px)', color: '#94a3b8', lineHeight: '1.2' }}>
                Architecting <span className="text-white">Digital Excellence</span>.
              </h2>
              
              <p className="mt-4 mb-5" style={{ fontSize: '18px', maxWidth: '600px', color: '#94a3b8', lineHeight: '1.8' }}>
                I don’t simply develop websites — I engineer <span className="text-white">future-ready solutions</span> that define industry standards. 
                Precision, scalability, and innovation in every line of code.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <motion.a 
                  href="#projects" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow text-decoration-none text-center flex-grow-1 flex-md-grow-0"
                >
                  Explore Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow text-decoration-none text-center flex-grow-1 flex-md-grow-0" 
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={5} className="mt-5 mt-lg-0 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="position-relative"
            >
              {/* Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)',
                  filter: 'blur(15px)',
                  opacity: 0.6,
                  zIndex: -1
                }}
              />
              
              {/* Image Container */}
              <div 
                style={{
                  width: 'min(350px, 80vw)',
                  height: 'min(350px, 80vw)',
                  borderRadius: '50%',
                  padding: '5px',
                  background: 'linear-gradient(45deg, #2A2A68, #1a1a40)',
                  boxShadow: '0 0 30px rgba(0,0,0,0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                 {/* REPLACE THE SRC BELOW WITH YOUR IMAGE */}
                 <img 
                   src="/public/img/IMG_0016.JPG" 
                   alt="Salman Khan"
                   onError={(e) => {
                     e.target.onerror = null; 
                     e.target.src = "https://placehold.co/400x400/030014/ffffff?text=Add+profile.png";
                   }}
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     borderRadius: '50%',
                     border: '4px solid rgba(255,255,255,0.1)'
                   }}
                 />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '0px',
                  background: 'rgba(17, 25, 40, 0.9)',
                  backdropFilter: 'blur(10px)',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}
              >
                <span className="text-gradient fw-bold">Top Tier 🚀</span>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
