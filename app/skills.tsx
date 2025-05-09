import Image from "next/image";
import Card from "@/components/card/card";
import TitleWithDevider from "@/components/title-with-devider/title-with-devider";

const skillsCardClasses = "flex flex-cols-2 text-sm";
const skillsCardCol1Classes = "col1 space-y-1.5";
const skillsCardCol2Classes = "col2 space-y-1.5 ml-5 ";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills px-4 md:px-6 py-8 md:py-12">
      <TitleWithDevider>
        <span className="hash-tag text-primary">#</span>skills
      </TitleWithDevider>

      <div className="container mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Decorative images container - hidden on mobile, visible from medium screens */}
        <div className="images relative hidden lg:block lg:col-span-1">
          <div className="relative w-full h-full">
            <Image
              className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16"
              src={"/svg/dots-grid.svg"}
              alt={"Dots"}
              width={50}
              height={50}
            />
            <Image
              className="absolute bottom-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16"
              src={"/svg/dots-grid.svg"}
              alt={"Dots"}
              width={50}
              height={50}
            />
            <Image
              className="absolute bottom-0 left-1/4 w-16 h-16 md:w-20 md:h-20"
              src={"/svg/rectangle.svg"}
              alt={"Rectangle"}
              width={70}
              height={70}
            />
            <Image
              className="absolute top-1/4 right-1/3 w-8 h-8 md:w-10 md:h-10"
              src={"/svg/rectangle.svg"}
              alt={"Rectangle"}
              width={30}
              height={30}
            />
            <Image
              className="absolute top-1/2 left-1/3 w-16 h-16 md:w-20 md:h-20"
              src={"/svg/lines.svg"}
              alt={"Lines"}
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Skills cards grid */}
        <div className="skills-details lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            sectionOneContent={
              <p className="text-white font-medium">Languages</p>
            }
            sectionTwoContent={
              <div className={`${skillsCardClasses}`}>
                <div className={skillsCardCol1Classes}>
                  <p>C#</p>
                  <p>Javascript</p>
                  <p>Typescript</p>
                  <p>SQL</p>
                  <p>T-SQL</p>
                  <p>Java</p>
                </div>
                <div className={skillsCardCol2Classes}></div>
              </div>
            }
          />

          <Card
            sectionOneContent={
              <p className="text-white font-medium">Frontend</p>
            }
            sectionTwoContent={
              <div className={skillsCardClasses}>
                <div className={skillsCardCol1Classes}>
                  <p>Next.js</p>
                  <p>React.js</p>
                  <p>Redux</p>
                  <p>jQuery</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <div className={skillsCardCol2Classes}>
                  <p>JSON</p>
                  <p>Jest</p>
                  <p>Tailwind</p>
                </div>
              </div>
            }
          />

          <Card
            sectionOneContent={
              <p className="text-white font-medium">Frameworks</p>
            }
            sectionTwoContent={
              <div className={skillsCardClasses}>
                <div className={skillsCardCol1Classes}>
                  <p>.NET Framework & Core</p>
                  <p>Entity Framework</p>
                  <p>Blazor</p>
                  <p>REST Apis</p>
                  <p>SignalR</p>
                  <p>RabbitMQ</p>
                </div>
                <div className={skillsCardCol2Classes}>
                  <p>GraphQL</p>
                  <p>XUnit</p>
                  <p>Web services</p>
                </div>
              </div>
            }
          />

          <Card
            sectionOneContent={
              <p className="text-white font-medium">Database/Tools</p>
            }
            sectionTwoContent={
              <div className="flex flex-cols-2 text-sm">
                <div className={skillsCardCol1Classes}>
                  <p>SQL Server</p>
                  <p>MongoDB</p>
                  <p>PostgreSQL</p>
                  <p>Azure</p>
                  <p>AWS</p>
                  <p>Git</p>
                </div>
                <div className={skillsCardCol2Classes}>
                  <p>Git CI/CD</p>
                  <p>Docker</p>
                  <p>Kubernetes</p>
                  <p>Visual Studio 2022</p>
                  <p>Visual Studio Code</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
