interface NavLinkProps {
  text: string;
  href: string;
  onClick?: () => void;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href, onClick, isActive }) => {
  return (
    <li>
      <a 
        className={`nav-link ml-8 ${isActive ? 'text-primary' : ''}`} 
        href={href} 
        onClick={onClick}
      >
        <span className="hash-tag text-primary">#</span>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
