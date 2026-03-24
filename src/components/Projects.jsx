import useDataContext from "../contexts/DataContext";

const Projects = () => {
  const { websites } = useDataContext();

  if (!websites || websites.length === 0) return null;

  return (
    <section aria-labelledby="projects-heading" className="">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
        {/* Section Header */}
        <header className="text-(--primary-text) text-center mb-14">
          <h2 id="projects-heading" className="uppercase text-2xl sm:text-3xl">
            My Projects
          </h2>
        </header>

        {/* Grid */}
        <div className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2">
          {websites.map((website, index) => (
            <article
              key={`${website.title}-${index}`}
              className="backdrop-blur-xs border-2 border-(--tertiary-border) rounded-2xl"
              aria-labelledby={`project-${index}-title`}
            >
              <div className="overflow-hidden p-4">
                <img
                  src={website.image}
                  alt={`${website.title} preview`}
                  className="border border-(--secondary-border) w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-5 flex flex-col grow">
                <div className="mb-4">
                  <h3
                    id={`project-${index}-title`}
                    className="text-(--primary-text) text-lg mb-2"
                  >
                    {website.title}
                  </h3>

                  <p className="text-(--secondary-text) leading-tight line-clamp-3">
                    {website.description}
                  </p>
                </div>

                {website.technologies?.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-auto mb-2">
                    {website.technologies.map((tech, techIndex) => (
                      <li
                        key={`${tech}-${techIndex}`}
                        className="text-sm bg-(--tertiary-bg) text-(--tertiary-text) px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
