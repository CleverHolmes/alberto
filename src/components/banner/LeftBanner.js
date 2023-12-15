import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Blockchain Developer.", "AI Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal"></h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Alberto Biel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          "Greetings, Earthlings! Gather 'round as I unveil the chronicles of my 8-year odyssey in web wizardry, navigating the binary cosmos with a keyboard and a sprinkle of magic. For the past 5 years, I've transcended into the blockchain realm, crafting DeFi wonders and weaving NFT P2E tales on the tapestry of Ethereum and Solana—because what's life without a touch of crypto sorcery?

          But hold on to your keyboards, for in recent years, I've taken a detour into the whimsical realm of AI projects. Picture this: combining the elegance of neural networks with the blockchain ballet. Yes, you heard it right—making crypto projects not just cutting-edge but cutting through dimensions! Join me on this intergalactic coding carnival, where every line of code is a step into the cosmos of hilarity and innovation."
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
