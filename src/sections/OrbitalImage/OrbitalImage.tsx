import { OrbitalImageWheel } from "@/components/unlumen-ui/orbital-image-wheel";

const images = [
  {
    src: "/photos/01.jpg",
    alt: "Capsule pack",
    label: "Capsule",
    subtitle: "Precision delivery",
  },
  {
    src: "/photos/02.jpg",
    alt: "Lab interior",
    label: "Lab",
    subtitle: "AI diagnostics",
  },
  {
    src: "/photos/03.jpg",
    alt: "Clinical scan",
    label: "Vision",
    subtitle: "Predictive screening",
  },
];

export default function OrbitalImage() {
  return <OrbitalImageWheel images={images} />;
}
