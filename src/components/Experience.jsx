import { useState, useRef } from "react";
import useDataContext from "../contexts/DataContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { experiences } = useDataContext();

  const [activeIndex, setActiveIndex] = useState(0);
  const [image, setImage] = useState(experiences?.[0]?.image || null);

  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const previewContainerRef = useRef(null);

  const calculateHeight = () => {
    const container = previewContainerRef.current;
    const preview = previewRef.current;
    if (!container || !preview) return 0;
    return container.offsetHeight - preview.offsetHeight;
  };

  useGSAP(
    () => {
      if (!experiences?.length) return;

      const containers = gsap.utils.toArray(".career-item");
      let translateHeight = calculateHeight();

      // Recalculate on resize for responsiveness
      const resizeObserver = new ResizeObserver(() => {
        translateHeight = calculateHeight();
      });
      if (previewContainerRef.current) {
        resizeObserver.observe(previewContainerRef.current);
      }

      function activate(container, position) {
        // Remove active from all, then add to current
        gsap.utils.toArray(".career-item").forEach((el) => {
          el.classList.remove("active-career");
          el.removeAttribute("aria-current");
        });

        container.classList.add("active-career");
        container.setAttribute("aria-current", "true");

        const img = container.getAttribute("data-image");
        const idx = Number(position);
        setImage(img);
        setActiveIndex(idx);

        gsap.to(previewRef.current, {
          y: idx === 0 ? 0 : translateHeight,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      function deactivate(container) {
        container.classList.remove("active-career");
        container.removeAttribute("aria-current");
      }

      containers.forEach((container) => {
        const position = Number(container.getAttribute("data-position"));

        ScrollTrigger.create({
          trigger: container,
          start: "top center",
          end: "bottom center",

          onEnter: () => activate(container, position),
          onEnterBack: () => activate(container, position),
          onLeave: () => deactivate(container),
          onLeaveBack: () => deactivate(container),
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        resizeObserver.disconnect();
      };
    },
    { scope: sectionRef, dependencies: [experiences] },
  );

  if (!experiences?.length) return null;

  return (
    <section ref={sectionRef} aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14">
        <header className="text-center mb-12">
          <h2
            id="experience-heading"
            className="font-semibold uppercase text-2xl sm:text-3xl mb-4"
          >
            Experience
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience List */}
          <div>
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.role}-${index}`}
                data-image={experience.image}
                data-position={index}
                className="career-item inactive-item pb-12"
              >
                <header className="career-description mb-3">
                  <h3 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl">
                    {experience.company}
                  </h3>

                  <p className="uppercase text-base sm:text-lg font-medium">
                    {experience.role}
                  </p>

                  <time
                    dateTime={`${experience.startDate}/${experience.endDate}`}
                    className="italic text-sm sm:text-base block"
                  >
                    {experience.startDate} – {experience.endDate}
                  </time>
                </header>

                {experience.points?.length > 0 && (
                  <ul
                    aria-label={`Responsibilities at ${experience.company}`}
                    className="career-pointers max-w-xl space-y-1 list-disc pl-5 mb-5"
                  >
                    {experience.points.map((point, pointIndex) => (
                      <li
                        key={`${experience.company}-point-${pointIndex}`}
                        className="text-base sm:text-[18px] leading-tight"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="career-preview lg:hidden mt-4 aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
                  <img
                    src={experience.image}
                    alt={`${experience.company} — ${experience.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Sticky Preview Image — desktop only */}
          <aside
            ref={previewContainerRef}
            aria-label="Experience preview image"
            className="relative hidden lg:block"
          >
            <img
              ref={previewRef}
              src={image}
              alt={
                experiences[activeIndex]
                  ? `${experiences[activeIndex].company} — ${experiences[activeIndex].role}`
                  : "Experience preview"
              }
              className="absolute inset-0 mx-auto w-full max-w-sm aspect-square object-cover rounded-md shadow-md"
              loading="lazy"
              decoding="async"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
