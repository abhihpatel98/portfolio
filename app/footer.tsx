interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <hr />
      <p className="copyright text-center w-full my-4">
        © Copyright 2025. Made by Abhi
      </p>
    </footer>
  );
};

export default Footer;
