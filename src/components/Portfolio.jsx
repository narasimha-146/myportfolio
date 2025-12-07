import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { mockPortfolioData } from '../mock';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';

const Portfolio = () => {
  const { profile, contact } = mockPortfolioData;
  const [activeSection, setActiveSection] = useState('education');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['education', 'experience', 'projects', 'skills', 'certifications'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Left Section - Fixed */}
      <div className="left-section">
        <div className="profile-content">
          {/* Profile Image */}
          <div className="profile-image-container">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="profile-image"
            />
          </div>

          {/* Profile Info */}
          <div className="profile-info">
            <h1 className="profile-name">{profile.name}</h1>
            <p className="profile-title">{profile.title}</p>
            <p className="profile-tagline">{profile.tagline}</p>
          </div>

          {/* About Me */}
          <div className="about-section">
            <h2 className="section-heading">About Me</h2>
            <p className="about-text">{profile.about}</p>
          </div>

          {/* Contact Icons */}
          <div className="contact-section">
            <h2 className="section-heading">Contact</h2>
            <div className="contact-icons">
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-icon"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="contact-icon"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href={`tel:${contact.phone}`}
                className="contact-icon"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div className="contact-details">
              <p className="contact-detail">{contact.email}</p>
              <p className="contact-detail">{contact.phone}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="section-nav">
            <button 
              onClick={() => scrollToSection('education')}
              className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className={`nav-item ${activeSection === 'certifications' ? 'active' : ''}`}
            >
              Certifications
            </button>
          </nav>
        </div>
      </div>

      {/* Right Section - Scrollable */}
      <div className="right-section">
        <div id="education" className="section-container">
          <EducationSection />
        </div>
        
        <div id="experience" className="section-container">
          <ExperienceSection />
        </div>
        
        <div id="projects" className="section-container">
          <ProjectsSection />
        </div>
        
        <div id="skills" className="section-container">
          <SkillsSection />
        </div>
        
        <div id="certifications" className="section-container">
          <CertificationsSection />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;