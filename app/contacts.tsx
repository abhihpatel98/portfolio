import TitleWithDevider from "@/components/title-with-devider/title-with-devider";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="contacts px-4 md:px-6 py-8 md:py-12">
      <TitleWithDevider>
        <span className="hash-tag text-primary">#</span>contacts
      </TitleWithDevider>
      
      <div className="description flex flex-col md:flex-row gap-8 md:gap-12 mt-6">
        <div className="flex-1">
          <p className="text-sm md:text-base text-left max-w-xl">
            Let&apos;s connect and bring ideas to life! Whether it&apos;s coding a sleek app
            or tackling a tough challenge, I&apos;m just a message away and excited to
            chat.
          </p>
        </div>
        
        <div className="contact-info flex-1 max-w-xl w-full">
          <div className="flex flex-col gap-6 p-6 border border-white rounded-lg bg-black/20 backdrop-blur-sm">
            <p className="text-white text-lg md:text-xl font-medium text-left">
              Contact me here
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-4 items-center">
                <MdOutlineEmail size={24} className="flex-shrink-0 text-primary" />
                <a 
                  href="mailto:abhipatel181998@gmail.com"
                  className="text-sm md:text-base hover:text-primary transition-colors break-all text-left"
                >
                  abhipatel181998@gmail.com
                </a>
              </div>
              
              <div className="flex flex-row gap-4 items-center">
                <MdOutlineLocalPhone size={24} className="flex-shrink-0 text-primary" />
                <a 
                  href="tel:+16475642482"
                  className="text-sm md:text-base hover:text-primary transition-colors text-left"
                >
                  +1(647)-564-2482
                </a>
              </div>
              
              <div className="flex flex-row gap-4 items-center">
                <FaLinkedin size={24} className="flex-shrink-0 text-primary" />
                <a
                  href="https://www.linkedin.com/in/abhipatel18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base hover:text-primary transition-colors text-left"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
