import React, { useState, useEffect } from "react";

const AboutSection: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");

  const command = "echo Hello World!";
  const typingSpeed = 100;

  useEffect(() => {
    if (typedText.length < command.length) {
      const timeout = setTimeout(() => {
        setTypedText(command.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="bg-violet-50 text-gray-800 h-[550px] rounded-xl overflow-hidden shadow-lg border border-violet-100 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <div className="relative flex items-center p-4 bg-violet-100 rounded-t-xl">
              <div className="flex space-x-2 z-10">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <span className="text-sm font-mono text-violet-600">
                  kerry@website: ~/portfolio
                </span>
              </div>
            </div>

            <div className="flex-grow p-6 font-mono text-gray-700 text-sm overflow-auto">
              <pre>
                <span>
                  <span className="text-pink-500">kerry@website</span>:
                  <span className="text-purple-500">~</span>$ {typedText}
                  <span className="animate-blink">_</span>
                </span>
              </pre>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm an electrical engineering graduate from UBC with a passion
                for all kinds of software development! While my background was
                originally in low-level development, writing embedded code using
                languages like C and C++, I've gone on to build all different
                kinds of software, including web applications and more!
              </p>

              <p className="text-lg leading-relaxed">
                I work with a wide variety of languages and technologies ranging
                from TypeScript to Python to React. I always focus on writing
                functional, robust, and maintainable code.
              </p>

              <p className="text-lg leading-relaxed">
                My background allows me to utilize my knowledge of computers and
                software to solve interesting problems and create real-world
                applications! I'm always learning and exploring new technologies
                to stay at the forefront of software engineering.
              </p>

              <p className="text-lg leading-relaxed">
                In my free time, I enjoy powerlifting, bouldering, creating
                music, and coming up with fashionable new outfits.
              </p>

              <div className="mt-8 w-20 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full"></div>
            </div>

            <div className="pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  View Projects
                </a>
                <a
                  href="/Kerry_Zhang_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
