import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

const displayUrl = (link: string) => {
  try {
    const { hostname, pathname } = new URL(link);
    return hostname + (pathname === "/" ? "" : pathname.replace(/\/$/, ""));
  } catch {
    return link;
  }
};

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  alt,
  tech,
  link,
  featured = false,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors duration-200 hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${featured ? "md:col-span-2 md:flex-row" : ""
        }`}
    >
      <div
        className={`flex flex-col ${featured ? "md:w-[58%] md:border-r md:border-gray-100" : ""
          }`}
      >
        <div className="flex h-9 shrink-0 items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4">
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="ml-3 truncate text-xs text-gray-400">
            {displayUrl(link)}
          </span>
        </div>

        <div
          className={`relative aspect-[16/10] overflow-hidden bg-gray-100 ${featured ? "md:aspect-auto md:min-h-[320px] md:flex-1" : ""
            }`}
        >
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col gap-4 p-6 ${featured ? "md:justify-center md:p-10" : "md:p-7"
          }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-bold text-gray-900 ${featured ? "text-2xl md:text-3xl" : "text-xl"
              }`}
          >
            {title}
          </h3>
          <ArrowUpRight
            size={22}
            aria-hidden="true"
            className="mt-1 shrink-0 text-gray-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
          />
        </div>

        <p className="text-sm leading-relaxed text-gray-600">{description}</p>

        <div className={`flex flex-wrap gap-2 ${featured ? "pt-2" : "mt-auto pt-2"}`}>
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-gray-200 px-2 py-0.5 text-xs text-gray-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;