import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  const description = [
    "Built front end using React, Next.js, SCSS, Boostrap, TypeScript, React Hooks, Context API.",
    "Integrated API for Cardano wallets (Nami, Eternl, Flint, Yoroi, Typhon) connection, staking, claim, mission functions.",
    "Introduced image optimization, cookie parser to reduce amount of data load.",
    "Used react-infinite-scroll-component to provide lazy rendering technique for displaying lots of NFTs from paginated API",
    "Quick filtering and search function in gallery",
  ];
  const description1 = [
    "Built fully responsive pages in Figma design using React, Next.js, TypeScript, SASS, and Bootstrap",
    "Integrated API to get NFT data. Ensured lazy lendering using react-infinite-scrollcomponent.",
    "Building Chain-bridge between Cardano and Ethereum with bridge API and bridge contracts.",
    "Used React modules like react-horizontal-scrolling-menu, react-slick, react-icons, htmlreact-parser.",
  ];
  const description2 = [
    "Responsible for leading the development of NFT marketplace on Solana.",
    "Implementing new NFT linkdrop on Near Blockchain.",
  ];

  const description3 = [
    "Developing various kinds of Smart Contracts such as NFT minting, NFT marketplace, Defi ones in Solidity and Solana.",
    "Developing beautiful and responsible Front End using React, Vue, Typescript, ChakraUI and TailwindCSS.",
    "Developing interaction using Web3.js.",
  ];

  const destination4 = [
    "Developing tokens with wonderful tokenomics for NFT game.",
    "Developing web-based applications in ReactJS and storing the transactions in ethereum Blockchain.",
    "Developing condition-based contracts using solidity and deploying smart contracts in Testrpc.",
  ];

  const destination5 = [
    "Building Fantastic Front-End using React, Vue, Typescript and CSS template like Bootstrap.",
    "Hands on experience with various file systems (IPFS, COBAL) and databases like Oracle, NoSQL, MongoDB, Teradata etc.",
    "Solid experience in all phases of application development life cycle involved in design, development, testing and not limited to production support.",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont grid grid-cols-2 max-lg:grid-cols-1 flex-col gap-20 max-lg:gap-0"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Blockchain Front-End developer"
            subTitle="TOZU Investments PTY LTD (2022.10 - Present)"
            result="Australia"
            des={description}
          />
          <ResumeCard
            title="Blockchain Front-End Developer"
            subTitle="Mad Dog Car Club - (2022.08 - Present)"
            result="USA"
            des={description1}
          />
          <ResumeCard
            title="Senior Blockchain Full-Stack Developer"
            subTitle="AlwaysAugust (2022.01 - 2022.06)"
            result="Canada"
            des={description2}
          />
        </div>
      </div>
      <div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Blockchain Engineer & Full-Stack Developer"
            subTitle="PayAccept (2020.09 - 2022.01)"
            result="Netherlands"
            des={description3}
          />
          <ResumeCard
            title="Smart Contract Engineer"
            subTitle="Guadaltel, S.A. (2019.09 - 2020.06)"
            result="Spain"
            des={destination4}
          />
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="MALLORCA-ASESORA.COM (2016.01 - 2018.03)"
            result="Spain"
            des={destination5}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
