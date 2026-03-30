import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiAntdesign, SiCplusplus, SiNextdotjs, SiTypescript, SiGraphql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06b6d4' },
    { name: 'Ant Design', icon: <SiAntdesign />, color: '#0170fe' },
    { name: 'Python', icon: <FaPython />, color: '#3776ab' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599c' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#e10098' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="expertise" className="py-5 position-relative">
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <div className="section-title text-center">
            <h2 className="text-white">Elite Tech Stack</h2>
            <p className="mx-auto" style={{ color: '#94a3b8', maxWidth: '600px', marginBottom: '4rem' }}>
              Mastering the most powerful tools in the digital ecosystem to deliver lightning-fast, scalable, and visually stunning applications.
            </p>
          </div>

          <Row className="g-3 g-md-4 justify-content-center">
            {skills.map((skill, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <motion.div variants={item} className="h-100">
                  <Card className="glass-card h-100 text-center py-3 py-md-4 text-white border-0 transition-all" 
                        style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center p-2">
                      <div 
                        className="mb-2 mb-md-3 d-flex align-items-center justify-content-center" 
                        style={{ 
                          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                          color: skill.color,
                          filter: `drop-shadow(0 0 10px ${skill.color}40)`
                        }}
                      >
                        {skill.icon}
                      </div>
                      <Card.Title style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', fontWeight: '600', letterSpacing: '0.5px', margin: 0 }}>{skill.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
