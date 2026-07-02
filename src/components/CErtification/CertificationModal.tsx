// components/CertificationModal.tsx
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Certification } from '@/Types/Types';

interface CertificationModalProps {
  certification: Certification;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificationModal({ certification, isOpen, onClose }: CertificationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Animate modal in
      const tl = gsap.timeline();
      
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      .fromTo(
        modalRef.current,
        { 
          opacity: 0,
          scale: 0.8,
          y: 50
        },
        { 
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'back.out(1.7)'
        },
        '-=0.2'
      )
      .fromTo(
        '.modal-content > *',
        { 
          opacity: 0,
          y: 20
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        },
        '-=0.3'
      );

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose
    });

    tl.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: 'power2.in'
    })
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    }, '-=0.2');
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="modal-content bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Certificate Image */}
        <div className="relative h-64 md:h-80">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">
                {certification.category === 'web-development' && '🌐'}
                {certification.category === 'internship' && '💼'}
                {certification.category === 'diploma' && '🎓'}
              </span>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {certification.title}
                </h2>
                <p className="text-blue-400 font-medium text-lg">
                  {certification.issuer}
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              Issued: {certification.date}
            </p>
          </div>

          {/* Category Badge */}
          <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            {certification.category === 'web-development' && 'Web Development'}
            {certification.category === 'internship' && 'Internship'}
            {certification.category === 'diploma' && 'Diploma in Progress'}
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              About this Certification
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {certification.fullDescription}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Skills Acquired
            </h3>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 rounded-lg text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Verify Button */}
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Verify Credential
            </a>
          )}
        </div>
      </div>
    </div>
  );
}