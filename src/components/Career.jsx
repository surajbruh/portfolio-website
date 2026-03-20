import useDataContext from "../contexts/DataContext";
const Career = () => {
  const { experiences } = useDataContext();
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14">
        <header className="text-center mb-12">
          <h2
            id="experience-heading"
            className="font-semibold uppercase text-2xl sm:text-3xl"
          >
            Experience
          </h2>
        </header>

        <div className="max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              data-image={experience.image}
              data-position={index}
              className="pb-12 relative"
            >
              <header className="mb-3 block sm:flex items-center gap-4">
                {/* Company Logo */}
                {experience.logo && (
                  <div className="shrink-0">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-20 w-auto object-contain bg-amber-50 rounded border border-gray-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Company Info */}
                <div>
                  <h3 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl">
                    {experience.company}
                  </h3>

                  <p className="uppercase text-base sm:text-lg font-medium">
                    {experience.role}
                  </p>

                  <time
                    className="italic text-sm sm:text-base block"
                    dateTime={`${experience.startISO}/${experience.endISO || "present"}`}
                  >
                    {experience.startDate} – {experience.endDate}
                  </time>
                </div>
              </header>

              {/* Responsibilities */}
              {experience.points?.length > 0 && (
                <ul
                  aria-label={`Responsibilities at ${experience.company}`}
                  className="max-w-xl space-y-1 list-disc pl-5 mb-5"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
