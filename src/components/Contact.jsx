import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 position-relative overflow-hidden mb-5 mb-lg-0">

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title text-center mb-5">
            <h2 className="text-white">Let's Work Together</h2>
            <p className="mx-auto" style={{ color: '#94a3b8', maxWidth: '600px' }}>
              Have a project in mind? I’m always open to discussing new opportunities, creative ideas, or how I can help be part of your vision.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10} xs={12}>
              <div className="glass-card p-3 p-md-4 p-lg-5 rounded-4">
                <Row className="g-4">
                  <Col lg={5} className="mb-4 mb-lg-0">
                    <h3 className="text-white mb-4">Contact Info</h3>
                    <div className="d-flex align-items-center mb-4">
                      <div className="d-flex align-items-center justify-content-center rounded-circle" 
                           style={{ width: '50px', height: '50px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                        <FaEnvelope size={20} />
                      </div>
                      <div className="ms-3">
                        <p className="text-secondary mb-0 small">Email Me</p>
                        <h6 className="text-white mb-0" style={{ wordBreak: 'break-all' }}>salmankhansa741@gmail.com</h6>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center mb-4">
                      <div className="d-flex align-items-center justify-content-center rounded-circle" 
                           style={{ width: '50px', height: '50px', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>
                        <FaPhoneAlt size={20} />
                      </div>
                      <div className="ms-3">
                        <p className="text-secondary mb-0 small">Call Me</p>
                        <h6 className="text-white mb-0">+92 3405603070</h6>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center justify-content-center rounded-circle" 
                           style={{ width: '50px', height: '50px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                        <FaMapMarkerAlt size={20} />
                      </div>
                      <div className="ms-3">
                        <p className="text-secondary mb-0 small">Location</p>
                        <h6 className="text-white mb-0">Global / Remote</h6>
                      </div>
                    </div>
                  </Col>

                  <Col lg={7}>
                    <Form>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Control type="text" placeholder="Your Name" 
                                          className="bg-transparent text-white border-secondary py-3 custom-placeholder" 
                                          style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Control type="email" placeholder="Your Email" 
                                          className="bg-transparent text-white border-secondary py-3 custom-placeholder" 
                                          style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                            <Form.Control type="text" placeholder="Subject" 
                                          className="bg-transparent text-white border-secondary py-3 custom-placeholder" 
                                          style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                            <Form.Control as="textarea" rows={4} placeholder="Message" 
                                          className="bg-transparent text-white border-secondary py-3 custom-placeholder" 
                                          style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit" 
                            className="btn-glow w-100 border-0 d-flex align-items-center justify-content-center gap-2"
                          >
                            Send Message <FaPaperPlane />
                          </motion.button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
