import Button from "@/components/button/button";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <section id="home" className="introduction flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 py-8 md:py-12 px-4 md:px-6">
      <div className="intro-container w-full md:w-3/5 text-center md:text-left">
        <h1 className="intro-text text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Abhi is a <span className="text-primary">Full Stack Developer</span>{" "}
          with more than{" "}
          <span className="text-primary">two years of experience</span> in the
          industry.
        </h1>
        <div className="flex justify-center md:justify-start">
          <a href="#contacts"><Button className="mt-4 md:mt-5">Contact me!!</Button></a>
        </div>
      </div>
      
      <div className="avatar-container relative w-full md:w-2/5 max-w-xs mx-auto md:mx-0">
        <div className="relative">
          <Image
            className="avatar"
            src="/img/avatar.png"
            alt="Avatar"
            width={350}
            height={350}
            layout="responsive"
          />
          <Image
            className="lines absolute top-1/2 -translate-y-1/4 left-0 -translate-x-1/4 -z-10 w-1/3 md:w-auto"
            src="/svg/lines.svg"
            alt="Lines"
            width={150}
            height={150}
          />
          <Image
            className="dots absolute bottom-1/4 right-0 translate-x-1/4 z-0 w-1/5 md:w-auto"
            src="/svg/dots-grid.svg"
            alt="Dots"
            width={70}
            height={70}
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;