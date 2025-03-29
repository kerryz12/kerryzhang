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
        "A full-stack webapp where users attempt to guess a mystery word by asking yes or no questions.",
      image: guesstheword,
      alt: "Guess the Word",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      link: "https://guesstheworddaily.onrender.com/",
    },
    {
      title: "Song of the Day",
      description:
        "A social media app allowing users to share a song they enjoy with others, once every day.",
      image: songoftheday,
      alt: "Song of the Day",
      tech: ["React", "TypeScript", "Node.js", "Express", "PsotgreSQL"],
      link: "https://songoftheday.app",
    },
    {
      title: "Wearable Health Monitor",
      description:
        "A wrist-wearable device for monitoring patient vital signs and transmitting them to a web dashboard.",
      image: healthmonitor,
      alt: "healthmonitor",
      tech: ["Vue", "JavaScript", "Python", "Flask"],
      link: "https://github.com/kerryz12/capstone2023_JY92",
    },
    {
      title: "DB Forum",
      description:
        "A web forum allowing student from various schools to share posts and comments with one another during COVID lockdown.",
      image: dbforum,
      alt: "dbforum",
      tech: ["Next.js", "Java", "Spring Boot", "MongoDB"],
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          My Projects
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          expertise.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
