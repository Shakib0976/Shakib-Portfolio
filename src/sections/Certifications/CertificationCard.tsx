// app/certificates/page.tsx
'use client';

import CertificateCard from '@/components/GlowCard/GlowCard';
import React from 'react';

interface CertificateData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
  status: 'completed' | 'pending' | 'in-progress';
  glowColor: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}

const CertificatesPage: React.FC = () => {
  const certificates: CertificateData[] = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Full Stack Web Development certification covering HTML, CSS, JavaScript, React, Node.js, and modern web technologies.',
      imageUrl: '/certificates/web-dev.jpg',
      downloadUrl: '/certificates/web-dev-cert.pdf',
      status: 'completed',
      glowColor: 'blue',
    },
    {
      id: '2',
      title: 'Professional Internship',
      description: 'Industry internship certification with hands-on experience in real-world projects and professional development.',
      imageUrl: '/certificates/internship.jpg',
      downloadUrl: '/certificates/internship-cert.pdf',
      status: 'completed',
      glowColor: 'purple',
    },
    {
      id: '3',
      title: 'SSC Diploma',
      description: 'Secondary School Certificate Diploma program - Currently in progress, completion expected in 2026.',
      imageUrl: '/certificates/ssc-diploma.jpg',
      status: 'pending',
      glowColor: 'orange',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            My Certificates
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my professional certifications and academic achievements
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              title={cert.title}
              description={cert.description}
              imageUrl={cert.imageUrl}
              downloadUrl={cert.downloadUrl}
              status={cert.status}
              glowColor={cert.glowColor}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>Certificates are updated regularly as new achievements are completed</p>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;