"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Eco Food",
    desc: "A food donation management platform to reduce waste.",
    img: "/img-1.jpg",
    link: "/project1",
  },
  {
    id: 2,
    title: "Student Toolkit",
    desc: "Helping students organize schedules and finances.",
    img: "/img-2.jpg",
    link: "/project4",
  },
  {
    id: 3,
    title: "Dev Knowledge",
    desc: "Collaborative platform for sharing academic resources.",
    img: "/img-3.jpg",
    link: "/project2",
  },
  {
    id: 4,
    title: "Portfolio Site",
    desc: "A premium personal portfolio with smooth animations.",
    img: "/img-4.jpg",
    link: "/projects",
  },
  {
    id: 5,
    title: "E-Commerce App",
    desc: "A modern shopping experience with seamless UX.",
    img: "/img-5.jpg",
    link: "/projects",
  },
  {
    id: 6,
    title: "Task Manager",
    desc: "Stay productive with our intuitive task management tool.",
    img: "/img-6.jpg",
    link: "/projects",
  },
];

export default function ProjectSection() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const leftXValues = [-400, -800, -400];
      const rightXValues = [400, 800, 400];

      const rows = gsap.utils.toArray<HTMLElement>(".row");
      rows.forEach((row, index) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");

        if (cardLeft) {
          gsap.to(cardLeft, {
            x: leftXValues[index % leftXValues.length],
            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "200% bottom",
              scrub: true,
            },
          });
        }

        if (cardRight) {
          gsap.to(cardRight, {
            x: rightXValues[index % rightXValues.length],
            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "200% bottom",
              scrub: true,
            },
          });
        }
      });
    });

    mm.add("(max-width: 1023px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    gsap.to(".line p", {
      y: 0,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const renderProjectCard = (project: (typeof projects)[0], sideClass: string) => (
    <div className={`card ${sideClass}`} key={project.id}>
      <img src={project.img} alt={project.title} />
      <div className="card-overlay">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <Link href={project.link}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < projects.length; i += 2) {
      rows.push(
        <div className="row" key={i}>
          {renderProjectCard(projects[i], "card-left")}
          {projects[i + 1] && renderProjectCard(projects[i + 1], "card-right")}
        </div>,
      );
    }
    return rows;
  };

  return (
    <section className="main mainSection">
      <div className="main-content">
        <div className="copy">
          <div className="line">
            <p>Dive into coding without clutter</p>
          </div>
          <div className="line">
            <p>Build faster, ship smarter</p>
          </div>
          <div className="line">
            <p>Your projects, beautifully organized</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/projects">
            <button className="button translate-y-10 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white opacity-0 transition hover:scale-105 hover:bg-gray-200 sm:px-10 sm:py-4 sm:text-base">
              View All Projects
            </button>
          </Link>
        </div>
      </div>

      <div className="rows-wrapper">{generateRows()}</div>
    </section>
  );
}
