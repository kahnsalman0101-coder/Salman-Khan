import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaLaptopCode, FaGem } from 'react-icons/fa';

const About = () => {
  const features = [
    { icon: <FaRocket />, title: "High-Performance", desc: "Lightning fast load times and interaction." },
    { icon: <FaCode />, title: "Clean Code", desc: "Scalable, maintainable, and modern architecture." },
    { icon: <FaLaptopCode />, title: "Responsive", desc: "Flawless experience on every device." },
    { icon: <FaGem />, title: "Premium UI/UX", desc: "Pixel-perfect design with smooth animations." }
  ];

  return (
    <section id="about" className="py-5 position-relative">
      
      <Container>
        <div className="section-title">
          <h2 className="text-white">About Me</h2>
        </div>
        
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-4" style={{ fontSize: '28px' }}>
                I Build <span className="text-gradient">Digital Masterpieces</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '18px', lineHeight: '1.8' }} className="mb-4">
                My approach is driven by perfection, innovation, and results. I focus on understanding client goals deeply so I can transform ideas into premium digital products that attract users, build trust, and deliver measurable impact.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '18px', lineHeight: '1.8' }}>
                "I don’t follow industry standards — I help define them." This philosophy drives me to push boundaries and explore new technologies to deliver the absolute best for my clients.
              </p>

              <div className="mt-5">
                <Row className="g-4">
                  <Col sm={6}>
                    <div className="glass-card p-4 rounded-3 h-100">
                      <h4 className="text-white fw-bold mb-0" style={{ fontSize: '3rem' }}>3+</h4>
                      <p className="text-secondary mb-0">Years of Experience</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="glass-card p-4 rounded-3 h-100">
                      <h4 className="text-white fw-bold mb-0" style={{ fontSize: '3rem' }}>50+</h4>
                      <p className="text-secondary mb-0">Projects Completed</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6} className="mt-5 mt-lg-0">
            <Row className="g-3">
              {features.map((feature, index) => (
                <Col sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-card p-4 rounded-3 h-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-3" style={{ color: '#ec4899', fontSize: '2rem' }}>{feature.icon}</div>
                    <h5 className="text-white fw-bold mb-2">{feature.title}</h5>
                    <p className="text-secondary mb-0 small">{feature.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
