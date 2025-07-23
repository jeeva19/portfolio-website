import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Hammer, HardHat, Home as HomeIcon, PhoneCall } from 'lucide-react';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Ahvanya Constructions
          </h1>
          <p className="hero-subtitle">
            where we make your dreams come true
          </p>
          <p className="hero-description">
            Delivering excellence in construction, renovation, and design. We build with integrity, quality, and a passion for turning your vision into reality.
          </p>
          <div className="hero-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn btn-primary">
                <HardHat size={20} />
                About Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/gallery" className="btn btn-secondary">
                <Building2 size={20} />
                Our Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn btn-tertiary">
                <PhoneCall size={20} />
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="floating-elements">
            <motion.div
              className="floating-element"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: 'linear-gradient(135deg, #1a2236 0%, #bfa14a 100%)' }}
            />
            <motion.div
              className="floating-element"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: 'linear-gradient(135deg, #bfa14a 0%, #1a2236 100%)' }}
            />
            <motion.div
              className="floating-element"
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: 'linear-gradient(135deg, #1a2236 0%, #fff 100%)', opacity: 0.08 }}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="features-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #bfa14a 0%, #1a2236 100%)' }}>
              <HomeIcon size={32} />
            </div>
            <h3>Residential Construction</h3>
            <p>Custom homes, villas, and apartments built with precision and care.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #1a2236 0%, #bfa14a 100%)' }}>
              <Building2 size={32} />
            </div>
            <h3>Commercial Projects</h3>
            <p>Offices, retail spaces, and industrial buildings with a focus on quality and efficiency.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #bfa14a 0%, #1a2236 100%)' }}>
              <Hammer size={32} />
            </div>
            <h3>Renovation & Remodeling</h3>
            <p>Transforming spaces with expert renovation and remodeling services.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 