interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <li>
      <a className="nav-link ml-8" href={href}>
        <span className="hash-tag text-primary">#</span>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
