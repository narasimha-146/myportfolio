import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { mockPortfolioData } from '../../mock';

const CertificationsSection = () => {
  const { certifications } = mockPortfolioData;

  return (
    <div className="section-content">
      <h2 className="section-title">
        <Award className="section-icon" />
        Certifications
      </h2>
      
      <div className="cards-container">
        {certifications.map((cert) => (
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
                View Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;