import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github, Camera, Palette, Code } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Photography', icon: Camera, level: 90 },
    { name: 'Design', icon: Palette, level: 85 },
    { name: 'Development', icon: Code, level: 80 },
    { name: 'Creative Direction', icon: Camera, level: 88 }
  ];

  const experiences = [
    {
      title: 'Creative Director',
      company: 'Studio Creative',
      period: '2022 - Present',
      description: 'Leading creative projects and managing design teams to deliver innovative solutions.'
    },
    {
      title: 'Photographer',
      company: 'Freelance',
      period: '2020 - Present',
      description: 'Capturing moments and creating visual stories for clients across various industries.'
    },
    {
      title: 'Design Consultant',
      company: 'Design Studio X',
      period: '2019 - 2022',
      description: 'Providing strategic design solutions and creative direction for brands and businesses.'
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
            <h1>About Me</h1>
            <p className="about-intro">
              I'm a passionate creative professional with over 5 years of experience in photography, 
              design, and creative direction. My work is driven by a desire to tell compelling stories 
              and create meaningful connections through visual art.
            </p>
            <p>
              Based in the vibrant creative community, I specialize in capturing authentic moments 
              and translating ideas into compelling visual narratives. My approach combines technical 
              expertise with artistic vision to deliver results that resonate with audiences.
            </p>
          </div>
          
          <motion.div
            className="about-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-placeholder">
              <Camera size={48} />
              <p>Profile Photo</p>
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
            <span>hello@portfolio.com</span>
          </motion.div>
          
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin size={20} />
            <span>Creative City, CA</span>
          </motion.div>
          
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Phone size={20} />
            <span>+1 (555) 123-4567</span>
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
          <motion.a
            href="#"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="skills-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Skills & Expertise</h2>
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
              <div className="skill-icon">
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
        <h2>Experience</h2>
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