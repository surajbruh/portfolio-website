import { Link } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

const Footer = () => {
  const { navigation, socials } = useDataContext();

  return (
    <footer className="bg-(--accent-color)">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 py-12">
          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h2 className="uppercase text-lg font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2">
              {navigation?.map((item, index) => (
                <li key={`${item.name}-${index}`} className="uppercase text-sm">
                  <Link
                    to={item.href || "#"}
                    className="quick-links hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <section aria-labelledby="footer-contact">
            <h2
              id="footer-contact"
              className="uppercase text-lg font-semibold mb-4"
            >
              contact me
            </h2>
          </section>
        </div>
      </div>

      <div className="pb-6">
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
                  className="flex items-center justify-center"
                >
                  <img
                    src={social.icon}
                    alt={`${social.label} icon`}
                    loading="lazy"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-80"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-gray-300 py-4 text-center text-sm font-mono">
          © {new Date().getFullYear()} Suraj Yadav — Crafted with care
        </div>
      </div>
    </footer>
  );
};

export default Footer;
