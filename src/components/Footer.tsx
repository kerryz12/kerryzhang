import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

const socials = [
  {
    label: "LinkedIn Profile",
    href: "https://linkedin.com/in/kerry-zhang-ee",
    icon: <FaLinkedin size={26} />,
    external: true,
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/kerryz12",
    icon: <FaGithub size={26} />,
    external: true,
  },
  {
    label: "Send Email",
    href: "mailto:kerryzhang12@gmail.com",
    icon: <FaEnvelope size={26} />,
    external: false,
  },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "/Kerry_Zhang_Resume.pdf", external: true },
];

const Footer: React.FC = () => {
  const currentSpotifyEmbed =
    "https://open.spotify.com/embed/track/6K4t31amVTZDgR3sKmwUJJ?utm_source=generator";
  const currentQuote = "What you seek is seeking you.";

  return (
    <footer className="bg-white pb-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 border-t border-gray-200 pt-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-gray-900">Kerry Zhang</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
              Passionate about developing software, building real-world
              solutions, and learning new things.
            </p>

            <div className="mt-6 flex gap-5 text-gray-700">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={`transition-colors hover:text-blue-500 ${focusRing}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links" className="md:col-span-3">
            <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={`transition-colors hover:text-blue-500 ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-5">
            <h4 className="text-sm font-semibold text-gray-900">Now Playing</h4>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                src={currentSpotifyEmbed}
                width="100%"
                height="152"
                allow="encrypted-media"
                loading="lazy"
                title="Spotify Player"
                className="block border-0"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Kerry Zhang</p>
          <p>"{currentQuote}"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;