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

        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {iconList.map((icon, index) => (
            <li key={`${icon}-${index}`}>
              <img
                className="aspect-square w-10 sm:w-12 md:w-14 object-contain"
                src={icon}
                alt="Technology logo"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
