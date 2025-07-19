import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, User } from 'lucide-react';

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
            Welcome to My Portfolio
          </h1>
          <p className="hero-subtitle">
            Creative professional passionate about design, photography, and innovation.
            Explore my work and discover what drives my creative vision.
          </p>
          
          <div className="hero-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn btn-primary">
                <User size={20} />
                About Me
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/gallery" className="btn btn-secondary">
                <Camera size={20} />
                View Gallery
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
            />
            <motion.div
              className="floating-element"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="floating-element"
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
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
            <div className="feature-icon">
              <Camera size={32} />
            </div>
            <h3>Creative Photography</h3>
            <p>Capturing moments and stories through the lens with a unique perspective.</p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon">
              <User size={32} />
            </div>
            <h3>Personal Brand</h3>
            <p>Building authentic connections through creative expression and storytelling.</p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon">
              <ArrowRight size={32} />
            </div>
            <h3>Innovation</h3>
            <p>Pushing boundaries and exploring new creative possibilities in every project.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 