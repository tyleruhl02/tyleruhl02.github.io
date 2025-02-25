import { FaFileArrowDown, FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={20}
          height={20}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s make something <span className="text-purple">great</span> together.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        I&apos;m always looking for new challenges and opportunities to make an impact. If you&apos;re looking for a dedicated problem solver with a passion for technology and innovation, let’s connect!
        </p>
        <a href="mailto:tyleruhl02@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <br />
        <a href="/Tyler Uhl Resume February 2025.pdf" target="_blank">
          <MagicButton title="Resume" icon={<FaFileArrowDown />} position="right" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Tyler Uhl
        </p>
        <br />
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank">
                <Image src={info.img} alt="icons" width={20} height={20}/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;