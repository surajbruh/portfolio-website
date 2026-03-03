import { Link } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { navigation, socials } = useDataContext();

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(containerRef.current, {
        yPercent: 120,
        scrollTrigger: {
          trigger: sectionRef.current,
          once: true,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <footer
      ref={sectionRef}
      className="relative bg-(--accent-color) overflow-hidden"
    >
      <div
        className="absolute bottom-[-15%] left-0 right-0 max-w-7xl mx-auto pointer-events-none select-none"
        aria-hidden="true"
      >
        <h1
          ref={containerRef}
          className="uppercase font-black text-white text-[clamp(3rem,10vw,10rem)] text-right leading-none"
        >
          suraj
        </h1>
      </div>

      <div className="relative z-10">
        <div className="mx-auto px-4 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h2 className="uppercase text-lg font-semibold mb-4">
                Quick Links
              </h2>

              <ul className="space-y-2">
                {navigation?.map((item, index) => (
                  <li
                    key={`${item.name}-${index}`}
                    className="uppercase text-sm"
                  >
                    <Link
                      to={item.href || "#"}
                      className="quick-links hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <section aria-labelledby="footer-contact">
              <h2
                id="footer-contact"
                className="uppercase text-lg font-semibold mb-4"
              >
                contact me
              </h2>
            </section>
          </div>
        </div>

        <div className="pb-6">
          {/* Social Links */}
          <nav className="w-max mx-auto" aria-label="Social media links">
            <ul className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              {socials?.map((social, index) => (
                <li key={`${social.label}-${index}`}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Suraj Yadav on ${social.label}`}
                    className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.label} icon`}
                      loading="lazy"
                      decoding="async"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-80"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="py-4 text-center text-sm font-mono">
            © {new Date().getFullYear()} Suraj Yadav — Crafted with care
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
