interface NavLinkProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href, onClick }) => {
  return (
    <li>
      <a className="nav-link md:ml-8" href={href} onClick={onClick}>
        <span className="hash-tag text-primary">#</span>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
