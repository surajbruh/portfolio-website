import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

const Header = () => {
  const { socials } = useDataContext();
  const headerRef = useRef(null);
  const headingRef = useRef(null);
  const hasAnimated = useRef(false);

  const handleMouseEnter = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    gsap.killTweensOf(headingRef.current);

    gsap.to(headingRef.current, {
      scrambleText: {
        text: "Suraj Yadav.",
        chars: "upperAndLowerCase",
        revealDelay: 0.2,
        tweenLength: true,
      },
      duration: 1,
    });
  };

  return (
    <header ref={headerRef} className="">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 font-mono text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          <a
            href="mailto:imsurajyadav044@gmail.com"
            aria-label="Send email to Suraj Yadav"
            className="mr-auto text-gray-800 hover:underline break-all"
          >
            imsurajyadav044@gmail.com
          </a>

          <span className="ml-auto text-gray-700 text-center lg:text-left">
            Mumbai, Maharashtra, India
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <NavLink
            to="/"
            aria-label="Suraj Yadav portfolio home"
            className="inline-flex items-center"
          >
            <span
              onMouseEnter={handleMouseEnter}
              ref={headingRef}
              className="uppercase font-mono font-semibold text-xl sm:text-2xl tracking-wide"
            >
              Suraj Yadav.
            </span>
          </NavLink>

          {/* Social Links */}
          <nav className="ml-auto" aria-label="Social media links">
            <ul className="flex items-center gap-3 sm:gap-4 px-4 py-2">
              {socials?.map((social, index) => (
                <li key={`${social.label}-${index}`}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Suraj Yadav on ${social.label}`}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.label} icon`}
                      loading="lazy"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-80"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
