import TitleWithDevider from "@/components/title-with-devider/title-with-devider";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="contacts">
      <TitleWithDevider>
        <span className="hash-tag text-primary">#</span>contacts
      </TitleWithDevider>
      <div className="description flex flex-row gap-2">
        <p>
          Let&apos;s connect and bring ideas to life! Whether it&apos;s coding a sleek app
          or tackling a tough challenge, I&apos;m just a message away and excited to
          chat.
        </p>
        <div className="contact-info">
          <div className="flex flex-col gap-3 p-3 border border-white">
            <p className="text-white">Contact me here</p>
            <div className="flex flex-row gap-1 items-center">
              <MdOutlineEmail size={30} />
              <a href="mailto:abhipatel181998@gmail.com">
                abhipatel181998@gmail.com
              </a>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <MdOutlineLocalPhone size={30} />
              <a href="tel:+16475642482">+1(647)-564-2482</a>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <FaLinkedin size={30} />
              <a
                href="https://www.linkedin.com/in/abhipatel18/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
