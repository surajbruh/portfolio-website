import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      const section = sectionRef.current;
      const wrapper = imageWrapperRef.current;
      const image = imageRef.current;

      gsap.set(section, { perspective: 650 });

      const outerRX = gsap.quickTo(wrapper, "rotationX", { ease: "power3" });
      const outerRY = gsap.quickTo(wrapper, "rotationY", { ease: "power3" });
      const innerX = gsap.quickTo(image, "x", { ease: "power3" });
      const innerY = gsap.quickTo(image, "y", { ease: "power3" });

      const handlePointerMove = contextSafe((e) => {
        const rect = section.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        outerRX(gsap.utils.interpolate(5, -5, y));
        outerRY(gsap.utils.interpolate(-5, 5, x));
        innerX(gsap.utils.interpolate(-10, 10, x));
        innerY(gsap.utils.interpolate(-10, 10, y));
      });

      const handlePointerLeave = contextSafe(() => {
        outerRX(0);
        outerRY(0);
        innerX(0);
        innerY(0);
      });

      section.addEventListener("pointermove", handlePointerMove);
      section.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        section.removeEventListener("pointermove", handlePointerMove);
        section.removeEventListener("pointerleave", handlePointerLeave);
      };
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 items-center">
        <div ref={imageWrapperRef} aria-hidden="true">
          <div ref={imageRef} className="mx-auto max-w-100">
            <img
              className="h-95 sm:h-105 md:h-120 rounded-md shadow-inner object-cover w-full"
              src="/images/hero.png"
              alt="Portrait illustration representing Suraj Yadav"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="uppercase space-y-4 text-center sm:text-left">
          <span className="block text-base sm:text-lg md:text-xl">
            I'm Suraj Yadav, and I enjoy
          </span>

          <h1
            id="hero-heading"
            className="font-medium text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
          >
            Building pixel-perfect <br className="hidden sm:block" />
            interactive apps
          </h1>

          <span className="block text-base sm:text-lg md:text-xl font-medium">
            Full-Stack Developer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
