import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
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
            {["Home", "About", "Projects", "Skills"].map((item) => (
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
            <button className="text-gray-800">
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
