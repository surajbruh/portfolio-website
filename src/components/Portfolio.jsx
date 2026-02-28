import { useState } from "react";
import { Link } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

// todo: add animation, make the preview follow mouse pointer

const Portfolio = () => {
  const { websites } = useDataContext();
  const [image, setImage] = useState(null);

  return (
    <section className="bg-gray-50" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <header className="text-center mb-12">
          <h2
            id="portfolio-heading"
            className="relative font-semibold uppercase text-2xl sm:text-3xl"
          >
            my work
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
                      after:transition-transform after:duration-300 after:ease-in-out
                      hover:after:translate-y-0
                      focus-visible:after:translate-y-0
                    "
                  >
                    <h3 className="relative z-10 uppercase font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
                      {item.title}
                    </h3>
                  </article>
                </Link>
              </li>
            ))}
          </ul>

          {/* Image Preview */}
          {image && (
            <aside
              className="
                hidden lg:block fixed bottom-[40vh] right-[10vw]
                z-30 shadow-xl w-full max-w-125 aspect-video
              "
              aria-hidden="true"
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
