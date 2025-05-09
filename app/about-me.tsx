import TitleWithDevider from "@/components/title-with-devider/title-with-devider";

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="about-me">
      <TitleWithDevider>
        <span className="hash-tag text-primary">#</span>about-me
      </TitleWithDevider>
      <div className="about-me-content flex flex-col gap-8">
        <p>Hello i&apos;m Abhi!</p>
        <p>
          I am a dedicated full-stack developer with over two years of
          experience crafting scalable web applications. I specialize in
          building responsive frontends using technologies such as React and
          Next.js, paired with robust backends powered by .NET Frameworks,
          Entity Framwork and SQL. Based in Toronto, I&apos;m passionate about
          solving complex problems with clean, efficient code. My goal is to
          create solutions that enhance user experiences and drive innovation.
        </p>
        <p>
          During my time at Bit Space Development Ltd., I contributed to the
          development and maintenance of multiple applications by designing and
          managing RESTful API services using various .NET technologies. On the
          frontend, I implemented new UI elements, built reusable components,
          and seamlessly integrated backend APIs to ensure a responsive user
          experience. I leveraged tools such as Docker, GitLab CI/CD, and Azure
          to streamline development workflows, enhance deployment efficiency,
          and maintain high standards of code quality.
        </p>
        <p>
          With a postgraduate degree in Information Technology Solutions from
          Humber College and a Bachelor&apos;s in Computer Engineering from
          Gujarat Technological University, I&apos;m well equipped with a solid
          technical foundation. I&apos;m eager to apply my skills to impactful,
          forward-thinking projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
