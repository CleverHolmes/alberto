import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiGithub,
  SiDiscord,
  SiGmail,
  SiSolidity,
  SiRust,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-2 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
           <a
              href="https://github.com/Kattlover99"
              target="_blank"
              rel="noopener noreferrer"
            >
          <span className="bannerIcon">
              <SiGithub />
          </span>
            </a>
          <a href="mailto:albertobial0912@gmail.com">
          <span className="bannerIcon">
              <SiGmail />
          </span>
            </a>
          <a
              href="https://discordapp.com/users/435454025702309888"
              target="_blank"
              rel="noopener noreferrer"
            >
          <span className="bannerIcon">
              <SiDiscord />
          </span>
            </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST TECH STACK
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiSolidity />
          </span>
          <span className="bannerIcon">
            <SiRust />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
