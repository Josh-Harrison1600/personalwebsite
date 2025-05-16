//resuable component for the tech icons

type TechIconProps = {
  href: string;
  imgSrc: string;
  alt: string;
  label: string;
};

const TechIcon = ({ href, imgSrc, alt, label }: TechIconProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div
      data-aos="fade"
      data-aos-delay="100"
      className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20"
    >
      <img src={imgSrc} alt={alt} className="h-16 w-16" />
      <span>{label}</span>
    </div>
  </a>
);

export default TechIcon;