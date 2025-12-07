import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { mockPortfolioData } from '../../mock';

const ExperienceSection = () => {
  const { experience } = mockPortfolioData;

  return (
    <div className="section-content">
      <h2 className="section-title">
        <Briefcase className="section-icon" />
        Experience
      </h2>
      
      <div className="cards-container">
        {experience.map((exp) => (
          <Card key={exp.id} className="experience-card">
            <CardHeader>
              <CardTitle className="card-title">{exp.title}</CardTitle>
              <p className="card-subtitle">{exp.company}</p>
              <div className="card-meta">
                <span className="duration">{exp.duration}</span>
                <span className="location">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="description-list">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="technologies">
                  <p className="tech-label">Technologies:</p>
                  <div className="tech-badges">
                    {exp.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;