"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Certification } from "@/Types/Types";

interface CertificationModalProps {
  certification: Certification;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificationModal({
  certification,
  isOpen,
  onClose,
}: CertificationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[98vw] lg:!max-w-[98vw] w-full lg:w-auto lg:h-[80vh] p-0 border-0 bg-transparent shadow-none"

>
        <div className="flex items-center justify-center w-full h-full overflow-auto rounded-lg bg-black/10 p-2">
          <Image
            src={certification.image}
            alt={certification.title}
            width={2000}
            height={1400}
            priority
            sizes="(max-width: 768px) 98vw, 95vw"
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};


