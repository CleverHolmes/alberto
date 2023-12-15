import React from "react";
import { SiDiscord, SiGithub, SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Alberto Biel</h3>
        <p className="text-lg font-normal text-gray-400">
          Blockchain full stack developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Greetings, Earthlings! Gather 'round as I unveil the chronicles of my 8-year odyssey in web wizardry, navigating the binary cosmos with a keyboard and a sprinkle of magic. For the past 5 years, I've transcended into the blockchain realm, crafting DeFi wonders and weaving NFT P2E tales on the tapestry of Ethereum and Solana—because what's life without a touch of crypto sorcery?

          But hold on to your keyboards, for in recent years, I've taken a detour into the whimsical realm of AI projects. Picture this: combining the elegance of neural networks with the blockchain ballet. Yes, you heard it right—making crypto projects not just cutting-edge but cutting through dimensions! Join me on this intergalactic coding carnival, where every line of code is a step into the cosmos of hilarity and innovation.
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/kattlover99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:albertobial0912@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://discordapp.com/users/435454025702309888"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiDiscord />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
