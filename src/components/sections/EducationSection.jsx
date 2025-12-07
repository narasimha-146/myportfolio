import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { mockPortfolioData } from '../../mock';

const EducationSection = () => {
  const { education } = mockPortfolioData;

  return (
    <div className="section-content">
      <h2 className="section-title">
        <GraduationCap className="section-icon" />
        Education
      </h2>
      
      <div className="cards-container">
        {education.map((edu) => (
          <Card key={edu.id} className="education-card">
            <CardHeader>
              <CardTitle className="card-title">{edu.degree}</CardTitle>
              <p className="card-subtitle">{edu.institution}</p>
              <div className="card-meta">
                <span className="duration">{edu.duration}</span>
                <span className="gpa">GPA: {edu.gpa}</span>
              </div>
            </CardHeader>
            <CardContent>
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="achievements">
                  <h4 className="achievements-title">
                    <Award size={16} /> Achievements
                  </h4>
                  <ul className="achievements-list">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;