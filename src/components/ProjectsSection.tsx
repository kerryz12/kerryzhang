import { ProjectCard } from ".";
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
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            My Projects
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
