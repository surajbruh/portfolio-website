import useDataContext from "../contexts/DataContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useState, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const { experiences } = useDataContext();

  const [image, setImage] = useState(null);

  const sectionRef = useRef(null);
  const containers = useRef([]);

  useGSAP(
    () => {
      // clear previous triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      containers.current.forEach((container) => {
        ScrollTrigger.create({
          trigger: container,
          start: "top 45%",
          end: "bottom 55%",
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
        setImage(img);
      }

      function deactivate(container) {
        container.classList.remove("active-career");
      }
    },
    { scope: sectionRef, dependencies: [experiences] },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100"
      aria-labelledby="career-heading"
    >
      <div className="mx-auto px-4 py-12 sm:py-14 max-w-7xl">
        <header className="text-center mb-12">
          <h2
            id="career-heading"
            className="relative font-semibold uppercase text-2xl sm:text-3xl mb-4"
          >
            career
          </h2>
        </header>

        <div className="block sm:grid sm:grid-cols-2 gap-12">
          {/* left */}
          <div>
            {experiences?.map((experience, index) => (
              <div
                ref={(el) => (containers.current[index] = el)}
                data-image={experience.image}
                className="pb-10 inactive"
                key={`${experience.company}-${index}`}
              >
                <h3 className="career-title uppercase font-semibold text-xl sm:text-2xl md:text-3xl">
                  {experience.company}
                </h3>

                <p className="career-role uppercase text-base sm:text-lg font-medium">
                  {experience.role}
                </p>

                <span className="italic text-sm sm:text-base block">
                  {experience.startDate} - {experience.endDate}
                </span>

                {/* points */}
                <ul className="my-4 space-y-1">
                  {experience.points?.map((point, pointIndex) => (
                    <li key={`${experience.company}-point-${pointIndex}`}>
                      <div className="flex items-start gap-2">
                        <span
                          className="bg-black aspect-square w-2 mt-2 rounded-full shrink-0"
                          aria-hidden="true"
                        ></span>

                        {/* leading-tight preserved */}
                        <span className="text-sm sm:text-base leading-tight">
                          {point}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div>
                  <img
                    className="sm:hidden w-full aspect-video h-56 sm:h-64 object-cover object-center rounded-2xl border border-gray-300 shadow-md"
                    src="./images/websites/navilshipping.png"
                    alt="Screenshot of project or work related to the company"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* right preview */}
          <div className="hidden sm:flex items-center justify-center">
            <img
              className="shadow-md aspect-square max-h-120 w-full max-w-md object-cover rounded-2xl"
              src={image || experiences?.[0]?.image}
              alt="Highlighted project preview"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
