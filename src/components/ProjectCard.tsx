import { ReactNode } from 'react';

type ProjectCardProps = {
  title: string;
  description: ReactNode;
  techStack: { name: string; href: string }[];
  videoUrl?: string;
  imageUrl?: string;
  liveUrl: string;
  sourceUrls: { label: string; href: string }[];
  colorClass: string;
  reverse?: boolean; 
};

const ProjectCard = ({
  title,
  description,
  techStack,
  videoUrl,
  imageUrl,
  liveUrl,
  sourceUrls,
  colorClass,
  reverse = false, 
}: ProjectCardProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between mb-16`}>
      <div className="md:w-[43%] mb-4 md:mb-0 text-center">
        <a href={liveUrl} target="_blank">
          <h3 className={`inline-block text-2xl font-bold hover:text-${colorClass} transition-all duration-300 transform hover:scale-110 text-center mb-4`}>
            {title}
          </h3>
        </a>

        {/* Description + Title */}
        <p className="text-xl">{description}</p>
        <p className="text-xl mb-4 mt-4">{title} was made using:</p>
        <ul className="list-disc list-inside text-lg ml-4">
          {techStack.map((tech) => (
            <li key={tech.name}>
              <a href={tech.href} target="_blank" className={`inline-block hover:text-${colorClass} transition-all duration-300 transform hover:scale-105 mb-2`}>
                {tech.name}
              </a>
            </li>
          ))}
        </ul>
        {sourceUrls.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            className={`block text-xl mt-4 ml-8 underline hover:text-${colorClass} transition-all duration-300 transform hover:scale-105`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Video of the project */}
      <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">
        <a href={liveUrl} target="_blank" className="block">
          {videoUrl ? (
            <video autoPlay loop muted className={`w-full border-2 border-transparent hover:border-${colorClass} hover:scale-105 transition-all duration-300`}>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support this video.
            </video>
          ) : (
            <img src={imageUrl} alt={title} className={`w-full border-2 border-transparent hover:border-${colorClass} hover:scale-105 transition-all duration-300`} />
          )}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
