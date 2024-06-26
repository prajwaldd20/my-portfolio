import React from "react";
import SkillCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="container mx-auto px-2 py-8 lg:h-3/5 lg:mt-32 ">
      <h2 name="skills"  className="text-4xl mt-4 mb-8 font-semibold ml-0 underline  dark:text-white lg:mt-24">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
        {/* Development Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-green-500 ">Development</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillCard imageUrl={"/images/html5.png"} skillName={"HTML"} />
            <SkillCard imageUrl={"/images/css3.png"} skillName={"CSS"} />
            <SkillCard imageUrl={"/images/jslogo.jpeg"} skillName={"JavaScript"} />
            <SkillCard imageUrl={"/images/react.png"} skillName={"React JS"} />
            <SkillCard imageUrl={"/images/node.png"} skillName={"Node JS"} />
            <SkillCard imageUrl={"/images/tw.png"} skillName={"Tailwind CSS"} />
            <SkillCard imageUrl={"/images/sql.jpg"} skillName={"SQL"} />
          </div>
        </div>
        
        {/* Programming and Others Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-green-500">Programming & Others</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillCard imageUrl={"/images/c++.png"} skillName={"C++"} />
            <SkillCard imageUrl={"/images/py.jpg"} skillName={"Python"} />
            <SkillCard imageUrl={"/images/java.png"} skillName={"Java (Basic)"} />
            <SkillCard imageUrl={"/images/git.png"} skillName={"Git & Github"} />
            <SkillCard imageUrl={"/images/canva.jpg"} skillName={"Canva"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
