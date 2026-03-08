import { useState, useRef } from "react";
import useDataContext from "../contexts/DataContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { experiences } = useDataContext();

  const [image, setImage] = useState(experiences?.[0]?.image || null);

  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const calculateHeight = () => {
    let difference;
    const previewContainer = gsap.utils.toArray(".preview-container");
    const preview = previewRef.current;

    if (!previewContainer) return;

    previewContainer.forEach((el) => {
      const previewContainerHeight = el.offsetHeight;
      const previewHeight = preview.offsetHeight;

      difference = previewContainerHeight - previewHeight;
      console.log(previewContainerHeight, previewHeight, difference);
    });
    return difference;
  };

  useGSAP(
    () => {
      if (!experiences?.length) return;

      const containers = gsap.utils.toArray(".career-item");

      containers.forEach((container) => {
        ScrollTrigger.create({
          trigger: container,
          start: "top center",
          end: "bottom center",
          markers: true,

          onEnter: () => activate(container),
          onEnterBack: () => activate(container),

          onLeave: () => deactivate(container),
          onLeaveBack: () => deactivate(container),
        });
      });

      function activate(container) {
        container.classList.add("active-career");
        const img = container.getAttribute("data-image");
        const index = container.getAttribute("data-position");
        const translateHeight = calculateHeight();
        console.log(index, translateHeight);
        setImage(img);

        gsap.to(previewRef.current, {
          y: index === 0 ? translateHeight : 0,
        });
      }

      function deactivate(container) {
        container.classList.remove("active-career");
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    {
      scope: sectionRef,
      dependencies: [experiences],
    },
  );

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
                className="career-item inactive pb-12"
              >
                <header className="career-description mb-3">
                  <h3 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl">
                    {experience.company}
                  </h3>

                  <p className="uppercase text-base sm:text-lg font-medium">
                    {experience.role}
                  </p>

                  <time className="italic text-sm sm:text-base block">
                    {experience.startDate} – {experience.endDate}
                  </time>
                </header>

                {experience.points?.length > 0 && (
                  <ul className="career-pointers max-w-xl space-y-1 list-disc pl-5">
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
              </article>
            ))}
          </div>

          {/* Preview Image */}
          <aside className="preview-container bg-amber-200 relative">
            <img
              ref={previewRef}
              src={image}
              alt="Highlighted experience preview"
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
