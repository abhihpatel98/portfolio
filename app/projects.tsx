import Button from "@/components/button/button";
import Card from "@/components/card/card";
import TitleWithDevider from "@/components/title-with-devider/title-with-devider";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      <h1 className="title text-xl md:text-2xl my-2 text-white">{title}</h1>
      <p className="description text-sm md:text-base">{description}</p>
      <Link
        className="project-link flex justify-end my-2 mt-auto"
        href={link}
        target="_blank"
      >
        <Button className="visit-btn flex items-center text-sm">
          Visit <FaExternalLinkAlt className="link-icon ml-2" size={14} />
        </Button>
      </Link>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects px-4 md:px-6 py-8 md:py-12">
      <TitleWithDevider>
        <span className="hash-tag text-primary">#</span>projects
      </TitleWithDevider>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
        <Card
          className="w-full"
          image={{
            url: "/img/realx.png",
            alt: "RealX",
          }}
          sectionOneContent={
            <div className="flex flex-wrap gap-1">
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">React</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">.NET</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">SQL</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">AWS</span>
            </div>
          }
          sectionTwoContent={
            <ProjectDetails
              title="RealX"
              description="Unified Medical Simulation and Decision Support Platform."
              link="https://simwerx.com/product/realx/"
            />
          }
        />
        
        <Card
          className="w-full"
          image={{
            url: "/img/swrm.png",
            alt: "SWRM",
          }}
          sectionOneContent={
            <div className="flex flex-wrap gap-1">
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">.NET</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">PostgreSQL</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">Azure</span>
            </div>
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
          className="w-full sm:col-span-2 lg:col-span-1"
          image={{
            url: "/img/vrsafety.png",
            alt: "VR Safety",
          }}
          sectionOneContent={
            <div className="flex flex-wrap gap-1">
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">React</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">Three.js</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">MongoDB</span>
              <span className="text-xs md:text-sm bg-gray-800 px-2 py-1 rounded">Azure</span>
            </div>
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