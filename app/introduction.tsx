import Button from "@/components/button/button";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <section id="home" className="introduction flex items-center mt-10">
      <div className="intro-container flex-1/2">
        <h1 className="intro-text text-3xl font-semibold">
          Abhi is a <span className="text-primary">Full Stack Developer</span>{" "}
          with more then{" "}
          <span className="text-primary">two years of experience</span> in the
          industry.
        </h1>
        <a href="#contacts"><Button className="mt-5">Contact me!!</Button></a>
      </div>
      <div className="avatar-container relative flex-1/5">
        <Image
          className="avatar relative"
          layout="responsive"
          src="/img/avatar.png"
          alt="Avater"
          width={350}
          height={350}
        />
        <Image
          className="lines absolute top-44 left-4 -z-10"
          src="/svg/lines.svg"
          alt="Lines"
          width={150}
          height={150}
        />
        <Image
          className="dots absolute bottom-14 right-2 z-0"
          src="/svg/dots-grid.svg"
          alt="Dots"
          width={70}
          height={70}
        />
      </div>
    </section>
  );
};

export default Introduction;
