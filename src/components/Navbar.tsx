import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
];

const RESUME_URL = "/Kerry_Zhang_Resume.pdf";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const showLogo = activeSection !== "home";
  const solid = scrolled || isMenuOpen;

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${solid
        ? "border-gray-200 bg-white/80 backdrop-blur"
        : "border-transparent bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a
            href="#home"
            tabIndex={showLogo ? 0 : -1}
            aria-hidden={!showLogo}
            className={`text-base font-bold text-gray-900 transition-opacity duration-300 ${showLogo ? "opacity-100" : "pointer-events-none opacity-0"
              } ${focusRing}`}
          >
            Kerry Zhang
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, id }) => {
              const active = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active ? "location" : undefined}
                    className={`border-b pb-0.5 text-sm transition-colors ${active
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-blue-500"
                      } ${focusRing}`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-500 ${focusRing}`}
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={`-mr-2 p-2 text-gray-900 md:hidden ${focusRing}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "visible max-h-96" : "invisible max-h-0"
            }`}
        >
          <ul className="flex flex-col border-t border-gray-200 py-2">
            {navLinks.map(({ label, id }) => {
              const active = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "location" : undefined}
                    className={`block py-3 text-base transition-colors ${active
                      ? "font-semibold text-gray-900"
                      : "text-gray-500 hover:text-blue-500"
                      } ${focusRing}`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-base text-gray-500 transition-colors hover:text-blue-500 ${focusRing}`}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;