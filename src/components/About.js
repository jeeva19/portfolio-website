import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, HardHat, Building2, Hammer } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Residential Construction', icon: HardHat, level: 95 },
    { name: 'Commercial Projects', icon: Building2, level: 90 },
    { name: 'Renovation & Remodeling', icon: Hammer, level: 92 },
    { name: 'Project Management', icon: Building2, level: 88 }
  ];

  const experiences = [
    {
      title: 'Luxury Villa Construction',
      company: 'Ahvanya Constructions',
      period: '2023 - Present',
      description: 'Completed multiple high-end residential projects with a focus on quality and client satisfaction.'
    },
    {
      title: 'Commercial Complex Development',
      company: 'Ahvanya Constructions',
      period: '2021 - 2023',
      description: 'Delivered state-of-the-art office and retail spaces for leading businesses.'
    },
    {
      title: 'Renovation & Restoration',
      company: 'Ahvanya Constructions',
      period: '2019 - 2021',
      description: 'Transformed aging properties into modern, functional spaces while preserving their character.'
    }
  ];

  return (
    <div className="about">
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-content">
          <div className="about-text">
            <h1>About Ahvanya Constructions</h1>
            <p className="about-intro">
              <b>Ahvanya Constructions</b> is dedicated to building dreams with precision, passion, and integrity. With years of experience in the construction industry, we deliver exceptional residential, commercial, and renovation projects that stand the test of time.
            </p>
            <p>
              <b>Our Mission:</b> To provide world-class construction services, ensuring every project is a testament to quality, safety, and client satisfaction.
            </p>
            <p>
              <b>Our Values:</b> Excellence, transparency, innovation, and a commitment to turning your vision into reality.
            </p>
          </div>
          <motion.div
            className="about-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-placeholder" style={{ background: 'linear-gradient(135deg, #1a2236 0%, #bfa14a 100%)' }}>
              <HardHat size={48} />
              <p>Our Team</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="contact-grid">
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Mail size={20} />
            <span>contact@ahvanyaconstructions.com</span>
          </motion.div>
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin size={20} />
            <span>123 Elegant Avenue, Metro City</span>
          </motion.div>
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Phone size={20} />
            <span>+1 (555) 987-6543</span>
          </motion.div>
        </div>
        <div className="social-links">
          <motion.a
            href="#"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="skills-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Our Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="skill-icon" style={{ background: 'linear-gradient(135deg, #bfa14a 0%, #1a2236 100%)' }}>
                <skill.icon size={24} />
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="experience-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Our Projects</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="experience-dot" />
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="experience-period">{exp.period}</span>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About; 