import React from "react";
import about from "../assets/about.jpg";
import BackgroundLights from "./BackgroundLights";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <BackgroundLights />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="bg-gray-100 h-96 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 group">
          <div className="h-full w-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center relative">
            <img
              src={about}
              alt="A photo I took at night."
              className="absolute h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-cover rounded-xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 mb-6">
            I'm an electrical engineering graduate from UBC with a passion for
            all kinds of software development! While my background was
            originally in low-level development, writing embedded code using
            languages like C and C++, I've gone on to build all different kinds
            of software, including web applications!
          </p>
          <p className="text-gray-700 mb-6">
            I work with a wide variety of languages and technologies ranging
            from TypeScript to Python to React. I always focus on writing
            functional, robust, and maintainable code.
          </p>
          <p className="text-gray-700 mb-6">
            My background allows me to utilize my knowledge of computers and
            software to solve interesting problems and create real-world
            applications! I'm always learning and exploring new technologies to
            stay at the forefront of software engineering.
          </p>
          <p className="text-gray-700 mb-6">
            In my free time, I enjoy powerlifting, bouldering, creating music,
            and coming up with fashionable new outfits.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/Kerry_Zhang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
