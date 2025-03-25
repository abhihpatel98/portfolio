import Image from "next/image";
import Card from "@/components/card/card";
import TitleWithDevider from "@/components/title-with-devider/title-with-devider";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <TitleWithDevider>
        <span className="hash-tag text-primary">#</span>skills
      </TitleWithDevider>
      <div className="container grid grid-cols-2">
        <div className="images relative">
          <Image
            className="absolute top-3 left-5"
            src={"/svg/dots.svg"}
            alt={"Dots"}
            width={50}
            height={50}
          />
          <Image
            className="absolute top-55 right-40"
            src={"/svg/dots.svg"}
            alt={"Dots"}
            width={50}
            height={50}
          />
          <Image
            className="absolute bottom-10 left-30"
            src={"/svg/rectangle.svg"}
            alt={"Ractengle"}
            width={70}
            height={70}
          />
          <Image
            className="absolute top-10 right-45"
            src={"/svg/rectangle.svg"}
            alt={"Ractengle"}
            width={30}
            height={30}
          />
          <Image
            className="absolute bottom-50 right-85"
            src={"/svg/lines.svg"}
            alt={"Lines"}
            width={80}
            height={80}
          />
        </div>
        <div className="skills-details grid grid-cols-3 gap-2">
          <div className="languages-section">
            <Card
              sectionOneContent={<p className="text-white">Languages</p>}
              sectionTwoContent={
                <>
                  <p>C#</p>
                  <p>Javascript</p>
                  <p>Typescript</p>
                  <p>SQL</p>
                  <p>T-SQL</p>
                  <p>Java</p>
                </>
              }
            ></Card>
          </div>
          <div className="frontend-section">
            <Card
              sectionOneContent={<p className="text-white">Frontend</p>}
              sectionTwoContent={
                <>
                  <p>Next.js</p>
                  <p>React</p>
                  <p>Redux</p>
                  <p>jQuery</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JSON</p>
                  <p>Jest</p>
                </>
              }
            ></Card>
          </div>
          <div className="framework-and-database-section flex flex-col gap-2">
            <Card
              sectionOneContent={<p className="text-white">Frameworks</p>}
              sectionTwoContent={
                <>
                  <p>.NET Core</p>
                  <p>ASP.NET</p>
                  <p>Entity Framework</p>
                  <p>Web API</p>
                  <p>GraphQL</p>
                  <p>XUnit</p>
                </>
              }
            ></Card>
            <Card
              sectionOneContent={<p className="text-white">Database/Tools</p>}
              sectionTwoContent={
                <>
                  <p> SQL Server</p>
                  <p>MongoDB</p>
                  <p>PostgreSQL</p>
                  <p>Git</p>
                  <p>GitLab CI</p>
                  <p>Docker</p>
                  <p>Kubernetes</p>
                  <p>AWS</p>
                </>
              }
            ></Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
