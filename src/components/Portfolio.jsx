import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDataContext from "../contexts/DataContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const { websites } = useDataContext();

  const [image, setImage] = useState(null);
  const cursor = useRef(null);
  const containers = useRef([]);
  const secitonRef = useRef(null);

  const moveCursor = (e) => {
    if (!cursor.current) return;
    gsap.to(cursor.current, {
      x: e.clientX + 20,
      y: e.clientY + 20,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    image && window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [image]);

  useGSAP(
    () => {
      containers.current.forEach((container) => {
        gsap.from(container, {
          yPercent: 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 95%",
          },
        });
      });
    },
    { scope: secitonRef },
  );

  return (
    <section
      ref={secitonRef}
      className="bg-gray-50"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 py-14">
        <header className="text-center mb-12">
          <h2
            id="portfolio-heading"
            className="relative font-semibold uppercase text-2xl sm:text-3xl"
          >
            My Work
          </h2>
        </header>

        <div className="relative group" onMouseLeave={() => setImage(null)}>
          <ul>
            {websites?.map((item, index) => (
              <li key={`${item.title}-${index}`}>
                <Link
                  to={item.websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <article
                    tabIndex={0}
                    onMouseEnter={() => setImage(item.image)}
                    onFocus={() => setImage(item.image)}
                    className="
                      relative overflow-hidden px-4 py-5 border-b
                      after:content-['']
                      after:absolute after:inset-0
                      after:bg-(--accent-color)
                      after:-translate-y-full
                      after:transition-transform after:duration-300
                      hover:after:translate-y-0
                    "
                  >
                    <div
                      ref={(el) => (containers.current[index] = el)}
                      className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                      <div className="leading-tight">
                        <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-5xl mb-2">
                          {item.title}
                        </h3>
                        <span className="italic">{item.year}</span>
                      </div>

                      <div className="uppercase sm:max-w-xs">
                        <p className="text-lg font-medium leading-tight">
                          {item.role}
                        </p>
                        <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                          {item.technologies}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>

          {image && (
            <aside
              ref={cursor}
              className="fixed inset-0 pointer-events-none z-30 opacity-0 hidden lg:block w-125 aspect-video shadow-xl"
            >
              <figure className="w-full h-full overflow-hidden rounded-md">
                <img
                  src={image}
                  alt="Project preview screenshot"
                  className="w-full h-full object-cover"
                />
              </figure>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
