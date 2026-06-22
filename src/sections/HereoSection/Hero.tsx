
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      

      // Name animations from top
      tl.fromTo(
        firstNameRef.current,
        { y: -120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          lastNameRef.current,
          { y: -120, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.7"
        )

        // Image from bottom
        .fromTo(
          imageRef.current,
          { y: 150, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.5"
        )

        // Left content from bottom
        .fromTo(
          leftContentRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.6"
        )

        // Right social links from bottom staggered
        .fromTo(
          ".social-link",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="hero-section max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 relative overflow-hidden  p-16 md:p-12 lg:p-24">
      <div className="hero-container relative z-10">

        {/* Big name at top */}
        <div className="hero-name-wrapper">
          <span ref={firstNameRef} className="hero-name-first">
            MD. SHAKIB
          </span>
          <span ref={lastNameRef} className="hero-name-last">
            KHAN
          </span>
        </div>

        {/* Bottom row: left info | center image | right social */}
        <div className="hero-bottom">

          {/* LEFT — title, description, button */}
          <div ref={leftContentRef} className="hero-left">
            <p className="hero-role">Full Stack Developer</p>
            <p className="hero-description">
              Building scalable Full Stack applications with clean and efficient design.
            </p>
            <a href="/cv.pdf" download className="hero-btn">
              Download CV ↗
            </a>
          </div>

          {/* CENTER — photo */}
          <div ref={imageRef} className="hero-image-wrap">
            <div className="hero-image-inner">
              {/* Replace /your-photo.png with your actual image path */}
              <img
                src="/ShakibLogo.png"
                alt="Profile"
                className="hero-photo"
              />
            </div>
          </div>

          {/* RIGHT — social links */}
          <div ref={rightContentRef} className="hero-social">
            {[
              { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/shakib09/" },
              { label: "GitHub", icon: "GH", href: "https://github.com/Shakib0976" },
              { label: "Facebook", icon: "fb", href: "https://www.facebook.com/md.shakib.khan.809698" },
              { label: "Twitter", icon: "𝕏", href: "https://x.com/ShakibMd5698" },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">{icon}</span>
                <span className="social-label">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ─── GLOBAL ─────────────────────────────────────── */
       .hero-section {
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}

        /* ─── CONTAINER ──────────────────────────────────── */
       .hero-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

        /* ─── BIG NAME ───────────────────────────────────── */
.hero-name-wrapper {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 24px;
  line-height: 1;
  overflow: hidden;
  flex-wrap: nowrap; /* ← add this */
  white-space: nowrap; /* ← add this */
  margin-top: 50px;
  position: relative;
  z-index: 20;

};
.hero-name-first,
.hero-name-last {
  font-family: "Arial Black", "Helvetica Neue", sans-serif;
  font-size: clamp(45px, 9vw, 120px);
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  position: relative;

  /* Glass effect */
  color: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  text-shadow:
    0 2px 10px rgba(255,255,255,0.25),
    0 4px 30px rgba(255,255,255,0.1);
}


        .hero-name-first {
          font-family: "Arial Black", "Helvetica Neue", sans-serif;
          font-size: clamp(45px, 9vw, 120px);
          font-weight: 900;
          letter-spacing: -2px;
          color: transparent;
          -webkit-text-stroke: 2px #111111;
          text-transform: uppercase;
         display: inline;
        }

        .hero-name-last {
          font-family: "Arial Black", "Helvetica Neue", sans-serif;
          font-size: clamp(42px, 8vw, 100px);
          font-weight: 900;
          letter-spacing: -2px;
          color: #111111;
          text-transform: uppercase;
          display: inline;
        }

        /* ─── BOTTOM ROW ─────────────────────────────────── */
        .hero-bottom {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: flex-end;
          gap: 40px;
          width: 100%;
        }

        /* ─── LEFT ───────────────────────────────────────── */
        .hero-left {
          padding-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-self: flex-end;
          width:220px;
         
        }

        .hero-role {
          font-family: "Arial", sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #111111;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .hero-description {
          font-family: "Arial", sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #555555;
          line-height: 1.65;
          max-width: 300px;
          margin: 0;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111111;
          color: #ffffff;
          font-family: "Arial", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 12px 22px;
          border-radius: 100px;
          text-decoration: none;
          width: fit-content;
          margin-top: 8px;
          transition: background 0.2s, color 0.2s;
        }

        .hero-btn:hover {
          background: #333333;
        }

        /* ─── CENTER IMAGE ───────────────────────────────── */
   .hero-image-wrap {
  display: flex;
  align-items: flex-end;
}

.hero-image-inner {
  width: clamp(350px, 55vw, 750px);
  max-height: 75vh;
}
        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: contain;
         margin-top: -20px;
          object-position:bottom center;
          display: block;
          filter: grayscale(15%);
        }

        /* ─── RIGHT SOCIAL ───────────────────────────────── */
        .hero-social {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 16px;
          align-self: flex-end;
          align-items: flex-end;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 1.5px solid #dddddd;
          color: #111111;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 100px;
          font-family: "Arial", sans-serif;
          font-size: 13px;
          font-weight: 500;
          min-width: 140px;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }

        .social-link:hover {
          background: #111111;
          border-color: #111111;
          color: #ffffff;
        }

        .social-icon {
          font-size: 12px;
          font-weight: 700;
          font-style: italic;
          width: 20px;
          text-align: center;
          opacity: 0.7;
        }

        .social-label {
          font-size: 13px;
        }

        /* ─── RESPONSIVE ─────────────────────────────────── */
      /* ───────── LARGE DEVICE (1200px+) ───────── */
@media (min-width: 1200px) {
  .hero-name-first,
  .hero-name-last {
    font-size: clamp(76px, 9vw, 132px);
  }

  .hero-image-inner {
    width: clamp(400px, 55vw, 800px);
    max-height: 80vh;
  }

  .hero-bottom {
    gap: 50px;
  }
}

/* ───────── MEDIUM DEVICE (769px - 1199px) ───────── */
@media (max-width: 1199px) and (min-width: 769px) {
  .hero-section {
    padding: 40px;
  }

  .hero-name-first,
  .hero-name-last {
    font-size: clamp(45px, 8vw, 80px);
  }

  .hero-bottom {
    gap: 20px;
  }

  .hero-image-inner {
    width: clamp(300px, 50vw, 550px);
    max-height: 65vh;
  }

  .hero-description {
    max-width: 250px;
  }

  .social-link {
    min-width: 120px;
  }
}
  

/* ───────── SMALL DEVICE (≤768px) ───────── */
@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    max-height: none;
    overflow: visible;
    padding: 24px 20px;
    padding-top: 110px;
  }

  .hero-container {
    gap: 25px;
  }

 .hero-name-wrapper {
    flex-direction: row; /* ← was column, change to row */
    align-items: baseline;
    gap: 12px;
    margin-top: 5px;
  }

  .hero-name-first,
  .hero-name-last {
    font-size: clamp(20px, 8vw, 42px); 
    line-height: 1;
  }

  .hero-bottom {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
  }

  .hero-image-wrap {
    order: 1;
    justify-content: center;
  }

  .hero-image-inner {
    width: min(90vw, 400px);
    max-height: 55vh;
  }

  .hero-left {
    order: 2;
    align-items: center;
    text-align: center;
    padding-bottom: 0;
  }

  .hero-description {
    max-width: 340px;
  }

  .hero-social {
    order: 3;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 0;
  }

  .social-link {
    min-width: 110px;
    justify-content: center;
  }
}

/* ───────── EXTRA SMALL DEVICE (≤480px) ───────── */
@media (max-width: 480px) {
  .hero-name-first,
  .hero-name-last {
    font-size: clamp(26px, 12vw, 35px);
  }

  .hero-image-inner {
    width: 95vw;
    max-height: 45vh;
  }

  .hero-role {
    font-size: 16px;
  }

  .hero-description {
    font-size: 13px;
    line-height: 1.6;
  }

  .hero-btn {
    padding: 10px 18px;
    font-size: 12px;
  }

  .social-link {
    min-width: 100px;
    font-size: 12px;
    padding: 8px 14px;
  }
}


      `}</style>
    </section>
  );
}
