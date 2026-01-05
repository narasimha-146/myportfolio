import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { mockPortfolioData } from '../../mock';

const WorkshopsSection = () => {
  const { workshops } = mockPortfolioData;

  return (
    <div className="section-content">
      <h2 className="section-title">
        <Award className="section-icon" />
        Workshops
      </h2>
      
      <div className="cards-container">
        {workshops.map((cert) => (
          <Card key={cert.id} className="certification-card">
            <CardHeader>
              <CardTitle className="card-title">{cert.title}</CardTitle>
              <p className="card-subtitle">{cert.issuer}</p>
              <div className="card-meta">
                <span className="date">{cert.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                size="sm"
                className="cert-link-btn"
                onClick={() => window.open(cert.link, '_blank')}
              >
                <ExternalLink size={16} />
                View Completion Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkshopsSection;