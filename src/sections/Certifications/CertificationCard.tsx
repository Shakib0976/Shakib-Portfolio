// components/CertificationsSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Certification } from '@/Types/Types';
import CertificationCard from '@/components/CErtification/CertificationCard';
import CertificationModal from '@/components/CErtification/CertificationModal';
import { Code2, Sparkles } from 'lucide-react';

const certifications: Certification[] = [
  {
    id: 'web-dev-01',
    title: 'Web Development',
    issuer: 'Programming Hero',
    date: 'October2025',
    description: 'Hands-on training in React, Node.js, MongoDB, and deployment workflows.',
    image: '/Programming.png',
    category: 'web-development',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    credentialUrl: 'https://www.coursera.org',
    fullDescription:
      'Completed an intensive full-stack course building dynamic web applications with React, Next.js, Express, and MongoDB in a production-style workflow.',
  },
  {
    id: 'internship-01',
    title: 'Frontend Internship',
    issuer: 'ReturnHex',
    date: 'October 2025 - April 2026',
    description: 'Practical experience working on responsive UI, accessibility, and real-world product features.',
    image: '/Intern.png',
    category: 'internship',
    skills: ['HTML', 'CSS', 'JavaScript'],
    credentialUrl: 'https://www.example.com',
    fullDescription:
      'Served as a frontend intern delivering production-ready components, improving UI performance, and collaborating with cross-functional teams.',
  },
  {
    id: 'diploma-01',
    title: 'Diploma in Computer Engineering',
    issuer: 'Habiganj Polytechnic Institute',
    date: 'Ongoing',
    description: 'Professional diploma focused on engineering fundamentals, embedded systems, and software development.',
    image: '/Diploma.png',
    category: 'diploma',
    skills: ['Programming', 'Problem Solving', 'Digital Logic'],
    fullDescription:
      'Pursuing a diploma program that emphasizes practical lab work, , software engineering, and real-world problem solving.',
  },
];

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate section title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  const visibleCertifications = certifications;

  const handleReview = (certification: Certification) => {
    setSelectedCert(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section ref={sectionRef} className="">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Code2 className="text-blue-500" size={32} />
            <h1 className="text-3xl md:text-4xl text-gray-800 font-bold shimmer-text">
              My Certifications
            </h1>
            <Sparkles className="text-purple-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Showcasing my professional certifications and achievements
          </p>
        </div>


        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              onReview={handleReview}
            />
          ))}
        </div>

        {/* Empty State */}
        {visibleCertifications.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No certifications found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificationModal
          certification={selectedCert}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}