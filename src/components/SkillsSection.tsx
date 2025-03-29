// Skills Section Component
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

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Skills and Tools
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          I've worked with a wide range of technologies in the software development world.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-center">Languages</h3>
            <ul className="space-y-3">
              {languages.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-center">Frameworks</h3>
            <ul className="space-y-3">
              {frameworks.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-center">
              Tools & Others
            </h3>
            <ul className="space-y-3">
              {toolsSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
