import { useRef } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

const Header = () => {
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
      <div className="bg-(--primary-bg) font-mono text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          <a
            href="mailto:imsurajyadav044@gmail.com"
            aria-label="Send email to Suraj Yadav"
            className="mr-auto text-(--tertiary-text) hover:underline break-all"
          >
            imsurajyadav044@gmail.com
          </a>

          <span className="ml-auto text-(--tertiary-text) text-center lg:text-left">
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
              className="uppercase font-mono font-semibold text-(--primary-text) text-xl sm:text-2xl tracking-wide"
            >
              Suraj Yadav.
            </span>
          </NavLink>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
