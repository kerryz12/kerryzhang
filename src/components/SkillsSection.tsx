import React from "react";

const SkillsSection: React.FC = () => {
  const languages = [
    "C/C++",
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "HTML/CSS",
    "SQL",
  ];
  const frameworks = [
    "Node.js",
    "Express",
    "React",
    "Vue.js",
    "Tailwind CSS",
    "Next.js",
  ];
  const toolsSkills = [
    "Git",
    "RESTful APIs",
    "Travis CI",
    "Agile",
    "Linux",
    "MATLAB",
  ];

  const BackgroundLights: React.FC<{ color: string }> = ({ color }) => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-64 h-64 rounded-full opacity-25 ${color} filter blur-md`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Skills and Tools
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          I've worked with a wide range of technologies in the software
          development world.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 group">
            <BackgroundLights color="bg-blue-200" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-center">Languages</h3>
              <ul className="space-y-3">
                {languages.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 group">
            <BackgroundLights color="bg-purple-200" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-center">Libraries & Frameworks</h3>
              <ul className="space-y-3">
                {frameworks.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 group">
            <BackgroundLights color="bg-green-200" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                Tools & Others
              </h3>
              <ul className="space-y-3">
                {toolsSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
