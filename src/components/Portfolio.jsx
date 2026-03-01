import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

const Portfolio = () => {
  const { websites } = useDataContext();

  const [image, setImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    image && window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [image]);

  return (
    <section className="bg-gray-50" aria-labelledby="portfolio-heading">
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
                  aria-label={`Open project ${item.title}`}
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
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="leading-tight">
                        <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-5xl mb-2">
                          {item.title}
                        </h3>
                        <span>{item.year}</span>
                      </div>

                      <div className="uppercase sm:max-w-xs">
                        <p className="text-lg">{item.role}</p>
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
              style={{
                position: "fixed",
                top: position.y + 20,
                left: position.x + 20,
                pointerEvents: "none",
                zIndex: 30,
              }}
              className="hidden lg:block w-full max-w-125 aspect-video shadow-xl"
            >
              <figure className="w-full h-full overflow-hidden rounded-md">
                <img
                  src={image}
                  alt="Project preview screenshot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
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
