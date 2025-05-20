import React, { useState } from "react";
import {
  Code,
  Layout,
  Database,
  Terminal,
  BarChart,
  Globe,
} from "lucide-react";
import BackgroundLights from "./BackgroundLights";

const SkillsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      color: "blue",
      skills: ["C/C++", "TypeScript", "Python", "Java", "HTML/CSS", "SQL"],
      description:
        "Programming languages I'm most experienced in using to bring ideas to life.",
    },
    {
      title: "Libraries & Frameworks",
      icon: <Layout size={24} />,
      color: "purple",
      skills: ["Node", "Express", "React", "Vue", "Next", "Tailwind CSS"],
      description:
        "Tools that I utilize while developing various types of projects.",
    },
    {
      title: "Tools & Others",
      icon: <Terminal size={24} />,
      color: "lightBlue",
      skills: ["Git", "RESTful APIs", "Travis CI", "Agile", "Linux", "MATLAB"],
      description:
        "Additional skills and technologies that round out my technical toolkit.",
    },
  ];

  const additionalSkills = [
    { title: "Embedded Software", icon: <BarChart size={20} /> },
    { title: "Web Development", icon: <Globe size={20} /> },
    { title: "Database Design", icon: <Database size={20} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          I've worked with a wide range of technologies in the software
          development world.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, idx) => {
            const isHovered = hoveredCard === idx;
            const colorClasses = {
              blue: {
                border: "border-blue-200",
                bg: "bg-blue-50",
                text: "text-blue-700",
                iconBg: "bg-blue-100",
                iconText: "text-blue-700",
                highlight: "border-blue-400",
                dot: "bg-blue-700",
              },
              purple: {
                border: "border-purple-200",
                bg: "bg-purple-50",
                text: "text-purple-700",
                iconBg: "bg-purple-100",
                iconText: "text-purple-700",
                highlight: "border-purple-400",
                dot: "bg-purple-700",
              },
              lightBlue: {
                border: "border-sky-200",
                bg: "bg-sky-50",
                text: "text-sky-700",
                iconBg: "bg-sky-100",
                iconText: "text-sky-700",
                highlight: "border-sky-400",
                dot: "bg-sky-700",
              },
            };

            const colors =
              colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={idx}
                className={`rounded-xl p-6 border ${
                  colors.border
                } shadow-sm transition-all duration-300 ease-out 
                  ${
                    isHovered
                      ? `shadow-lg ${colors.highlight} -translate-y-1`
                      : ""
                  }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-2 rounded-lg ${colors.iconBg} ${colors.iconText} mr-3`}
                  >
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className={`
      px-3 py-2 rounded-lg text-sm flex items-center
      transition-colors duration-300
      ${isHovered ? colors.bg : "bg-gray-50"}
    `}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full mr-2 ${colors.dot}`}
                      ></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {additionalSkills.map((skill, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-gray-50 rounded-full flex items-center border border-gray-200 shadow-sm"
            >
              <span className="mr-2 text-gray-700">{skill.icon}</span>
              <span className="font-medium">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
