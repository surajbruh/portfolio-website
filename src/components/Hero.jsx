const Hero = () => {
  return (
    <section aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 items-center">
        <div aria-hidden="true">
          <div className="mx-auto max-w-100">
            <img
              className="h-95 sm:h-105 md:h-120 rounded-md shadow-inner object-cover w-full"
              src="/images/hero.png"
              alt="Portrait illustration representing Suraj Yadav"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="uppercase space-y-4 text-center sm:text-left">
          <span className="block text-base sm:text-lg md:text-xl">
            I'm Suraj Yadav, and I enjoy
          </span>

          <h1
            id="hero-heading"
            className="font-medium text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
          >
            Building pixel-perfect <br className="hidden sm:block" />
            interactive apps
          </h1>

          <span className="block text-base sm:text-lg md:text-xl font-medium">
            Full-Stack Developer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
