import React, { useState, useEffect } from "react";

// Navbar Component
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
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
      className={`fixed w-full py-4 px-6 transition-all duration-300 z-50 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">
          Kerry Zhang
        </a>
        <div className="hidden md:flex space-x-8">
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
    </nav>
  );
};

export default Navbar;