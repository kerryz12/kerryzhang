import React from "react";
import { ProjectCard } from ".";
import { SectionHeading } from ".";
import guesstheword from "../assets/guesstheword.png";
import songoftheday from "../assets/songoftheday.png";
import healthmonitor from "../assets/healthmonitor.png";
import dbforum from "../assets/dbforum.png";
import dbmanager from "../assets/dbmanager.png";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Guess the Word",
      description:
        "A full-stack web application where users attempt to guess a mystery word by asking an AI yes or no questions.",
      image: guesstheword,
      alt: "Guess the Word",
      tech: ["React", "TypeScript", "Node", "Express", "PostgreSQL"],
      link: "https://guesstheworddaily.onrender.com/",
    },
    {
      title: "Song of the Day",
      description:
        "A social media app allowing users to share a song they enjoy with others, once every day.",
      image: songoftheday,
      alt: "Song of the Day",
      tech: ["React", "TypeScript", "Node", "Express", "PostgreSQL"],
      link: "https://songoftheday.app",
    },
    {
      title: "Wearable Health Monitor",
      description:
        "A wrist-wearable device for monitoring patient vital signs and transmitting them to a web dashboard.",
      image: healthmonitor,
      alt: "healthmonitor",
      tech: ["Vue", "Python", "Flask"],
      link: "https://github.com/kerryz12/capstone2023_JY92",
    },
    {
      title: "DB Forum",
      description:
        "A web forum allowing students from various schools to share posts and comments with one another during COVID lockdown.",
      image: dbforum,
      alt: "dbforum",
      tech: ["Next", "Java", "Spring Boot", "MongoDB"],
      link: "https://github.com/kerryz12/nwHacks-2022",
    },
    {
      title: "DB Manager",
      description:
        "An application enabling students to track, organize, and prioritze their school assignments.",
      image: dbmanager,
      alt: "dbmanager",
      tech: ["Java", "JavaFX"],
      link: "https://github.com/kerryz12/nwHacks-2021",
    },
  ];

  return (
    <section id="projects" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          description="Here are some of my recent projects that showcase my skills and expertise."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
              tech={project.tech}
              link={project.link}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;