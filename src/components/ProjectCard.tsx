interface ProjectProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  alt,
  tech,
  link,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 group">
      <div className="h-56 overflow-hidden">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
            >
              {item}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-medium hover:text-blue-700 transition-colors flex items-center"
        >
          View Project
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
