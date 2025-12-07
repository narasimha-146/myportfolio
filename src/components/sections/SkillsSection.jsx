import React from 'react';
import { Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { mockPortfolioData } from '../../mock';

const SkillsSection = () => {
  const { skills } = mockPortfolioData;

  const skillCategories = [
    { key: 'frontend', title: 'Frontend Development', color: 'blue' },
    { key: 'backend', title: 'Backend Development', color: 'green' },
    { key: 'database', title: 'Database & Storage', color: 'purple' },
    { key: 'programming', title: 'Programming Languages', color: 'red' },
    { key: 'tools', title: 'Tools & Technologies', color: 'orange' },
    { key: 'softskills', title: 'Soft Skills', color: 'blue' }
  ];

  return (
    <div className="section-content">
      <h2 className="section-title">
        <Wrench className="section-icon" />
        Skills
      </h2>
      
      <div className="cards-container">
        {skillCategories.map((category) => (
          <Card key={category.key} className="skills-card">
            <CardHeader>
              <CardTitle className="card-title">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="skills-grid">
                {skills[category.key].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <Badge 
                        variant="secondary" 
                        className={`skill-level skill-level-${skill.level.toLowerCase()}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress skill-progress-${skill.level.toLowerCase()}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;