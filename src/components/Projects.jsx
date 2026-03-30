import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Neon E-Commerce",
      category: "Web App",
      description: "A futuristic shopping experience built with high-performance tech. Features real-time inventory, AI recommendations, and 3D product previews.",
      tech: ["React", "Three.js", "Tailwind", "Stripe"],
      icon: <FaLaptopCode size={40} />,
      color: "#ec4899",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      id: 2,
      title: "Crypto Dashboard",
      category: "Dashboard",
      description: "Real-time cryptocurrency tracking platform with advanced data visualization, portfolio management, and secure authentication.",
      tech: ["Next.js", "TypeScript", "D3.js", "Firebase"],
      icon: <FaChartLine size={40} />,
      color: "#8b5cf6",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 3,
      title: "Smart Home Mobile",
      category: "Mobile",
      description: "IoT control center for modern smart homes. Control lights, temperature, and security from a single beautiful interface.",
      tech: ["React Native", "GraphQL", "Node.js", "Socket.io"],
      icon: <FaMobileAlt size={40} />,
      color: "#38bdf8",
      image: "https://images.unsplash.com/photo-1558002038-1091a166111c?w=800&q=80"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-5 position-relative">

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >
          <div className="section-title d-inline-block">
            <h2 className="text-white">Featured Projects</h2>
          </div>
          <p className="mx-auto mt-3" style={{ color: '#94a3b8', maxWidth: '600px' }}>
            A selection of projects that demonstrate my passion for building seamless, scalable, and beautiful digital experiences.
          </p>

          {/* Filter Buttons */}
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            {['All', 'Web App', 'Dashboard', 'Mobile'].map((item) => (
              <motion.button
                key={item}
                onClick={() => setFilter(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-pill border-0 transition-all ${filter === item ? 'text-white' : 'text-secondary'}`}
                style={{
                  background: filter === item ? 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)' : 'rgba(255,255,255,0.05)',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <Row className="g-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <Col xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card h-100 border-0 overflow-hidden group">
                    {/* Project Image */}
                    <div 
                      className="position-relative overflow-hidden"
                      style={{ height: '200px' }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        className="project-image"
                      />
                      <div 
                        className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(3, 0, 20, 0.7)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: '60px',
                            height: '60px',
                            background: 'white',
                            color: project.color,
                            cursor: 'pointer'
                          }}
                        >
                          {project.icon}
                        </motion.div>
                      </div>
                    </div>

                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <Card.Title className="text-white h5 fw-bold mb-0">{project.title}</Card.Title>
                        <Badge bg="transparent" className="border border-secondary text-secondary fw-normal">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <Card.Text style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6' }}>
                        {project.description}
                      </Card.Text>

                      <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                        <div className="d-flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span 
                              key={i} 
                              style={{ 
                                fontSize: '12px', 
                                color: project.color,
                                background: `${project.color}15`,
                                padding: '4px 10px',
                                borderRadius: '4px'
                              }}
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
