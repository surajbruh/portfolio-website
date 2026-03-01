import useDataContext from "../contexts/DataContext";

// todo: add infinite scrolling animation later. import icons via json so i can arrange them.

const TechStack = () => {
  const { technologies } = useDataContext();

  return (
    <section aria-labelledby="techstack-heading">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-14">
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
            {technologies?.map((item, index) => (
              <li key={`tech-${item.label}-${index}`}>
                <img
                  className="aspect-square w-full max-w-10 sm:max-w-12 md:max-w-14 mx-6 sm:mx-8 object-contain"
                  src={item.icon}
                  alt={`${item.label} logo`}
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
            {technologies?.map((item, index) => (
              <li key={`tech-duplicate-${item.label}-${index}`}>
                <img
                  className="aspect-square w-full max-w-10 sm:max-w-12 md:max-w-14 mx-6 sm:mx-8 object-contain"
                  src={item.icon}
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
