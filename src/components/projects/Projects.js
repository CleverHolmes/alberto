import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Pioneer"
          src={projectSix}
          websiteLink="http://pioneerlegends.io"
        />
        <ProjectsCard
          title="Danketsu"
          src={projectFive}
          websiteLink="https://danketsuhustle.io/"
        />
        <ProjectsCard
          title="Pinksale"
          src={projectThree}
          websiteLink="https://pinksale.finance"
        />
        <ProjectsCard
          title="Lunachow"
          src={projectEight}
          websiteLink="https://www.lunachow.com/"
        />
        <ProjectsCard
          title="CryptoZoon"
          src={projectOne}
          websiteLink="https://app.cryptozoon.io/"
        />
        <ProjectsCard
          title="Xsurge"
          src={projectTwo}
          websiteLink="https://xsurge.net"
        />
        <ProjectsCard
          title="Aloyoga"
          src={projectFour}
          websiteLink="https://www.aloyoga.com/"
        />
        <ProjectsCard
          title="Arsante"
          src={projectNine}
          websiteLink="https://arsante.com/"
        />
        <ProjectsCard
          title="One Wheel"
          src={projectSeven}
          websiteLink="https://onewheel.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
