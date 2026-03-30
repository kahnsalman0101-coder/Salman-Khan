import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 text-center" style={{ backgroundColor: '#0a192f', color: '#8892b0', fontSize: '14px', fontFamily: 'Fira Code, monospace' }}>
      <Container>
        <p className="mb-0">
          Designed & Built by <span style={{ color: '#64ffda' }}>Salman Khan</span>
        </p>
        <p className="mb-0 mt-1">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
