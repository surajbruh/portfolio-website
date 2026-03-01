const icons = import.meta.glob("/src/assets/technologies/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

// todo: add infinite scrolling animation later. import icons via json so i can arrange them.

const TechStack = () => {
  const iconList = Object.values(icons);

  return (
    <section aria-labelledby="techstack-heading">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14">
        <header className="text-center mb-12">
          <h2
            id="techstack-heading"
            className="relative font-semibold uppercase text-2xl sm:text-3xl mb-4"
          >
            my tech stack
          </h2>
        </header>

        <div className="inline-flex w-full flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
          <ul className="animate-infinite-scroll flex items-center shrink-0">
            {iconList.map((icon, index) => (
              <li key={`tech-${index}`}>
                <img
                  className="aspect-square min-w-10 sm:min-w-12 md:min-w-14 mx-8 object-contain"
                  src={icon}
                  alt="Technology logo"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>

          <ul
            className="animate-infinite-scroll flex items-center shrink-0"
            aria-hidden="true"
          >
            {iconList.map((icon, index) => (
              <li key={`tech-duplicate-${index}`}>
                <img
                  className="aspect-square min-w-10 sm:min-w-12 md:min-w-14 mx-8 object-contain"
                  src={icon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
