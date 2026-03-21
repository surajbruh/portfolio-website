import useDataContext from "../contexts/DataContext";
const Exp = () => {
  const { experiences } = useDataContext();
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14">
        <div className="max-w-2xl mx-auto">
          <header className="text-center mb-12">
            <h2
              id="experience-heading"
              className="relative uppercase text-2xl sm:text-3xl"
            >
              Experience
            </h2>
          </header>

          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              data-image={experience.image}
              data-position={index}
              className="relative block sm:flex gap-4"
            >
              {/* Company Logo */}
              {experience.logo && (
                <div className="shrink-0">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-20 aspect-square object-contain rounded-full bg-white border border-gray-300"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Company Info */}
              <div>
                <header className="mb-3">
                  <div>
                    <h3 className="uppercase text-xl sm:text-2xl">
                      {experience.company}
                    </h3>

                    <p className="capitalize text-base sm:text-lg">
                      {experience.role}
                    </p>

                    <time
                      className="italic text-sm sm:text-base block"
                      dateTime={`${experience.startISO}/${experience.endISO || "present"}`}
                    >
                      {experience.startDate} – {experience.endDate}
                    </time>
                  </div>

                  {experience.technologies && (
                    <div>
                      <h1 className="capitalize text-[18px]">
                        technologies & tools
                      </h1>
                      <ul className="flex gap-2">
                        {experience.technologies?.map((item, index) => (
                          <li key={`tech-${item.label}-${index}`}>
                            <img
                              className="aspect-square w-full max-w-9 object-contain"
                              src={item.icon}
                              alt={`${item.label} logo`}
                              loading="lazy"
                              decoding="async"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </header>

                {/* Responsibilities */}
                {experience.points?.length > 0 && (
                  <ul
                    aria-label={`Responsibilities at ${experience.company}`}
                    className="space-y-1 list-disc pl-5 mb-5"
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exp;
