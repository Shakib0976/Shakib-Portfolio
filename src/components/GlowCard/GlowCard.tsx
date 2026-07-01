// components/CertificateCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Download, Clock } from 'lucide-react';
import GlowCard from '../ui/GlowCard';

interface CertificateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
  status?: 'completed' | 'pending' | 'in-progress';
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  className?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  description,
  imageUrl,
  downloadUrl,
  status = 'completed',
  glowColor = 'blue',
  className = '',
}) => {
  const statusConfig = {
    completed: {
      label: 'Completed',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      icon: null,
    },
    pending: {
      label: 'Pending',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      icon: <Clock className="w-4 h-4" />,
    },
    'in-progress': {
      label: 'In Progress',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      icon: null,
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <GlowCard
      glowColor={glowColor}
      className={`group transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
      customSize={true}
      width={320}
      height={420}
    >
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Status Badge */}
          <div className={`absolute top-3 right-3 ${currentStatus.bgColor} backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium ${currentStatus.color}`}>
            {currentStatus.icon}
            {currentStatus.label}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between pt-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-300 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Download Button */}
          {downloadUrl && status === 'completed' && (
            <a
              href={downloadUrl}
              download
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download Certificate
            </a>
          )}

          {status === 'pending' && (
            <div className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-medium rounded-lg">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>
          )}

          {status === 'in-progress' && (
            <div className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium rounded-lg">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              In Progress
            </div>
          )}
        </div>
      </div>
    </GlowCard>
  );
};

export default CertificateCard;