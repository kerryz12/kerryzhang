import React from "react";
import { Code, Layout, Terminal } from "lucide-react";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      iconClass: "bg-blue-100 text-blue-400",
      description:
        "I'm experienced with a variety of programming languages, each one suited to different applications.",
      skills: ["C/C++", "Java", "TypeScript", "Python", "HTML/CSS", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout size={24} />,
      iconClass: "bg-indigo-100 text-indigo-400",
      description:
        "I utilize modern frameworks and libraries to create responsive interfaces and reliable backend services.",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Vue.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal size={24} />,
      iconClass: "bg-purple-100 text-purple-400",
      description:
        "I work with tools that make development smoother, from version control to deployment pipelines.",
      skills: [
        "Git",
        "Docker",
        "REST APIs",
        "CI/CD (Jenkins)",
        "Agile/Scrum",
        "Linux",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="lg:pr-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                My Skills
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Here's a summary of the primary tools and technologies I work
                with to bring ideas to life, from concept to deployment.
              </p>

              <div className="mt-8 w-20 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full"></div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-gray-200 p-6 md:p-8 
                             transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-gray-300
                             group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${category.iconClass}
                                 group-hover:scale-110 transition-transform duration-300 ease-in-out`}
                    >
                      {category.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-white text-gray-700 px-3 py-2 rounded-lg text-sm font-medium
                                   border border-gray-200 group-hover:border-gray-300 group-hover:shadow-sm
                                   transition-all duration-200 ease-in-out cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
