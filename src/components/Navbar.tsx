import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "skills"];
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection("skills");
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Projects", "Skills"];

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "p-2" : "p-0"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg"
            : "bg-transparent rounded-none shadow-none"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-3">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Kerry Zhang
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-blue-500"
                    : "text-gray-800"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="/Kerry_Zhang_Resume.pdf"
              className="font-medium hover:text-blue-500 transition-colors text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
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
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
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
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-4 border-t border-gray-200/50">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-blue-500"
                    : "text-gray-800"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="/Kerry_Zhang_Resume.pdf"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium hover:text-blue-500 transition-colors text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
