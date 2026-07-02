'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Certification } from '@/Types/Types';
import { BorderBeam } from '../ui/border-beam';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CertificationCardProps {
    certification: Certification;
    onReview: (certification: Certification) => void;
}

export default function CertificationCard({
    certification,
    onReview,
}: CertificationCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        gsap.fromTo(
            cardRef.current,
            {
                opacity: 0,
                y: 40,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    return (
        <Card
            ref={cardRef}
            className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
                <Image
                    src={certification.image}
                    alt={certification.title}
                    fill
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <Badge className="absolute top-4 right-4">
                    {certification.category === 'web-development' && '🌐 Web Dev'}
                    {certification.category === 'internship' && '💼 Internship'}
                    {certification.category === 'diploma' && '🎓 Diploma'}
                </Badge>
            </div>

            <CardHeader>
                <CardTitle>{certification.title}</CardTitle>

                <p className="text-sm font-medium text-muted-foreground">
                    {certification.issuer}
                </p>

                <p className="text-xs text-muted-foreground">
                    {certification.date}
                </p>
            </CardHeader>

            <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {certification.fullDescription}
                </p>
            </CardContent>

            <CardFooter>
                <Button
                    className="w-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        onReview(certification);
                    }}
                >
                    Review Certificate
                </Button>
            </CardFooter>

            <BorderBeam
                duration={4}
                size={300}
                reverse
                borderWidth={2}
                className="from-transparent via-primary to-transparent"
            />
        </Card>
    );
}