import Button from "@/components/button/button";
import Card from "@/components/card/card";
import TitleWithDevider from "@/components/title-with-devider/title-with-devider";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectsProps {}

const ProjectDetails = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="project-description h-full flex flex-col">
      <h1 className="title text-2xl my-2 text-white">{title}</h1>
      <p className="description">{description}</p>
      <Link
        className="project-link flex justify-end my-2 mt-auto"
        href={link}
        target="_blank"
      >
        <Button className="visit-btn flex items-center">
          Visit <FaExternalLinkAlt className="link-icon ml-2" />
        </Button>
      </Link>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="projects">
      <TitleWithDevider>
        <span className="hash-tag text-primary">#</span>projects
      </TitleWithDevider>
      <div className="grid grid-cols-3 gap-2">
        <Card
          className="flex-1"
          image={{
            url: "/img/realx.png",
            alt: "RealX",
          }}
          sectionOneContent={
            <p>
              .NET-Core EF-Core SQL React Redux AWS Swagger HTML CSS Javascript
            </p>
          }
          sectionTwoContent={
            <ProjectDetails
              title="RealX"
              description="Unified Medical Simulation and Decision Support Platform."
              link="https://simwerx.com/product/realx/"
            ></ProjectDetails>
          }
        />
        <Card
          className="flex-1"
          image={{
            url: "/img/swrm.png",
            alt: "SWRM",
          }}
          sectionOneContent={
            <p>
              .NET-Core EF-Core PostgreSQL Next.js Azure Swagger HTML CSS
              Javascript
            </p>
          }
          sectionTwoContent={
            <ProjectDetails
              title="SWRM"
              description="SWRM™ is a next-gen AI-driven data analytics platform."
              link="https://www.swrm.ai/"
            />
          }
        />
        <Card
          className="flex-1"
          image={{
            url: "/img/vrsafety.png",
            alt: "VR Safety",
          }}
          sectionOneContent={
            <p>
              .NET-Core EF-Core SQL MongoDB React ContextAPI Three.js Azure
              Swagger HTML CSS Javascript
            </p>
          }
          sectionTwoContent={
            <ProjectDetails
              title="VR Safety"
              description="VR Safety is a Virtual Reality based training platform for safety training."
              link="https://www.vrsafety.net/"
            />
          }
        />
      </div>
    </section>
  );
};

export default Projects;
