import useDataContext from "../contexts/DataContext";

const Exp = () => {
  const { experiences } = useDataContext();

  if (!experiences || experiences.length === 0) return null;

  return (
    <section className="" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14">
        <div className="max-w-2xl mx-auto">
          <header className="text-(--primary-text) text-center mb-12">
            <h2
              id="experience-heading"
              className="relative uppercase text-2xl sm:text-3xl"
            >
              Experience
            </h2>
          </header>

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.role}-${index}`}
                data-image={experience.image}
                data-position={index}
                className="relative block sm:flex gap-4"
                aria-labelledby={`exp-${index}-company`}
              >
                {/* Company Logo */}
                {experience.logo && (
                  <div className="shrink-0 mb-3 sm:mb-0">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-20 w-20 object-contain rounded-full bg-white border border-gray-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                {/* Company Info */}
                <div className="w-full">
                  <header className="mb-3">
                    <div>
                      <h3
                        id={`exp-${index}-company`}
                        className="uppercase text-(--primary-text) text-xl sm:text-2xl"
                      >
                        {experience.company}
                      </h3>

                      <p className="capitalize text-(--primary-text) text-base sm:text-lg">
                        {experience.role}
                      </p>

                      <time
                        className="italic text-(--secondary-text) text-sm sm:text-base block"
                        dateTime={`${experience.startISO}/${experience.endISO || "present"}`}
                      >
                        {experience.startDate} –{" "}
                        {experience.endDate || "Present"}
                      </time>
                    </div>

                    {experience.technologies?.length > 0 && (
                      <section aria-label="Technologies and tools">
                        <h4 className="capitalize text-[18px]">
                          Technologies & tools
                        </h4>

                        <ul className="flex flex-wrap gap-2 mt-1">
                          {experience.technologies.map((item, techIndex) => (
                            <li key={`tech-${item.label}-${techIndex}`}>
                              <img
                                className="w-8 h-8 object-contain"
                                src={item.icon}
                                alt={item.label}
                                loading="lazy"
                                decoding="async"
                              />
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </header>

                  {/* Responsibilities */}
                  {experience.points?.length > 0 && (
                    <section aria-labelledby={`exp-${index}-responsibilities`}>
                      <h4
                        id={`exp-${index}-responsibilities`}
                        className="sr-only"
                      >
                        Responsibilities at {experience.company}
                      </h4>

                      <ul className="text-(--primary-text) space-y-1 list-disc pl-5 mb-5">
                        {experience.points.map((point, pointIndex) => (
                          <li
                            key={`${experience.company}-point-${pointIndex}`}
                            className="text-base sm:text-[18px] leading-tight"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
