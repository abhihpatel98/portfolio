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
          building responsive frontends using React and Next.js, paired with
          robust backends powered by .NET and PostgreSQL. Based in Toronto, I&apos;m
          passionate about solving complex problems with clean, efficient code.
          My goal is to create solutions that enhance user experiences and drive
          innovation.
        </p>
        <p>
          During my time at Bit Space Development, I optimized .NET APIs,
          cutting response sizes by 42% and boosting performance by 60%. I also
          developed reusable UI components with Next.js and Typescript, slashing
          development time by 35% while increasing user engagement by 68%.
          Leading intern teams, I improved productivity by 30% and delivered key
          project milestones. Tools like Docker, GitLab CI, and Azure are my
          go-to for streamlining workflows.
        </p>
        <p>
          With a postgraduate degree in Information Technology Solutions from
          Humber College and a Bachelor&apos;s in Computer Engineering from Gujarat
          Technological University, I&apos;m equipped with a solid technical
          foundation. I&apos;m eager to apply my skills to impactful,
          forward-thinking projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
