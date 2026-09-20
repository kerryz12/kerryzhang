import React from "react";
import { SectionHeading } from ".";

const skillCategories = [
  {
    title: "Languages",
    description:
      "I'm experienced with a variety of programming languages, each one suited to different applications.",
    skills: ["C/C++", "Java", "TypeScript", "Python", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
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
    description:
      "I work with tools that make development smoother, from version control to deployment pipelines.",
    skills: [
      "Git",
      "Docker",
      "REST APIs",
      "CI/CD (Travis)",
      "Agile/Scrum",
      "Linux",
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          description="Here's a summary of the primary tools and technologies I work with to bring ideas to life, from concept to deployment."
        />

        <div>
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid gap-5 border-t border-gray-200 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
                  {category.description}
                </p>
              </div>

              <ul className="flex flex-wrap content-start gap-x-8 gap-y-3 text-lg text-gray-800 md:col-span-8">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;