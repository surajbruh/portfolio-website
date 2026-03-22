import useDataContext from "../contexts/DataContext";

const Footer = () => {
  const { socials } = useDataContext();

  return (
    <footer className="relative bg-(--primary-bg) overflow-hidden">
      <div className="relative z-10">
        <div className="py-14">
          {/* Social Links */}
          <nav className="w-max mx-auto" aria-label="Social media links">
            <ul className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              {socials?.map((social, index) => (
                <li key={`${social.label}-${index}`}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Suraj Yadav on ${social.label}`}
                    className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.label} icon`}
                      loading="lazy"
                      decoding="async"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-80"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="py-4 text-(--primary-text) text-center text-sm font-mono">
            © {new Date().getFullYear()} Suraj Yadav — Crafted with care
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
