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
              className="backdrop-blur-[2px] hover:bg-(--secondary-bg) border-2 border-(--tertiary-border) rounded-2xl transition-colors"
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
                  <ul className="flex flex-wrap gap-2 mt-auto mb-5">
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

                <div className="flex flex-wrap gap-2">
                  {website.websiteURL && (
                    <a
                      href={website.websiteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${website.title || "project"} website`}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded w-max bg-(--inverse-bg) text-(--inverse-text)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <span className="capitalize text-sm font-medium">
                        website
                      </span>
                    </a>
                  )}

                  {website.websiteURL && (
                    <a
                      href={website.websiteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${website.title || "project"} github repository`}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded w-max bg-(--inverse-bg) text-(--inverse-text)"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 0C4.477 0 0 4.59 0 10.253c0 4.529 2.862 8.371 6.833 9.728.507.101.687-.219.687-.492 0-.338-.012-1.442-.012-2.814 0-.956.32-1.58.679-1.898-2.227-.254-4.567-1.121-4.567-5.059 0-1.12.388-2.034 1.03-2.752-.104-.259-.447-1.302.098-2.714 0 0 .838-.275 2.747 1.051A9.43 9.43 0 0110 4.958c.85.004 1.706.118 2.505.345 1.909-1.326 2.747-1.051 2.747-1.051.545 1.412.202 2.455.098 2.714.642.718 1.03 1.632 1.03 2.752 0 3.938-2.34 4.805-4.567 5.059.359.318.679.942.679 1.898 0 1.372-.012 2.476-.012 2.814 0 .273.18.593.687.492C17.138 18.624 20 14.782 20 10.253 20 4.59 15.523 0 10 0Z" />
                      </svg>
                      <span className="capitalize text-sm font-medium">
                        Github
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
