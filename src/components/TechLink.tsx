//resuable component for the tech links

type TechLinkProps = {
  name: string;
  href: string;
  color: string;
};

const TechLink = ({ name, href, color }: TechLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`hover:${color} underline transition-all duration-300 transform hover:scale-105 inline-block`}
  >
    {name}
  </a>
);

export default TechLink;