import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { mockPortfolioData } from '../../mock';

const ProjectsSection = () => {
  const { projects } = mockPortfolioData;

  return (
    <div className="section-content">
      <h2 className="section-title">
        <Code className="section-icon" />
        Projects
      </h2>
      
      <div className="cards-container">
        {projects.map((project) => (
          <Card key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
            </div>
            
            <CardHeader>
              <CardTitle className="card-title">{project.title}</CardTitle>
              <CardDescription className="card-description">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technologies">
                <p className="tech-label">Tech Stack:</p>
                <div className="tech-badges">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <Button 
                  variant="default" 
                  size="sm"
                  className="project-link-btn"
                  onClick={() => window.open(project.liveLink, '_blank')}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="project-link-btn"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github size={16} />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;