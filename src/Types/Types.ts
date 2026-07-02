// types/certification.ts
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  category: 'web-development' | 'internship' | 'diploma';
  skills: string[];
  credentialUrl?: string;
  fullDescription: string;
}