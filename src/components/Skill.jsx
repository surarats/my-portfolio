import React from "react";
import { skills } from "../data/data";

const SkillCard = ({ item }) => (
  <div className="flex flex-col gap-1 bg-white rounded-md p-4 lg:flex-1">
    <h3 className="font-bold text-xl">{item.title}</h3>
    {item.skills.map((skill, index) => (
      <p key={index}>
        <i className="ri-check-line me-1 text-xl text-cyan-500 font-bold"></i>
        {skill}
      </p>
    ))}
  </div>
);

function Skill() {
  return (
    <div className="bg-gray-200">
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center" id="skills">
          Skills
        </h2>
        <div className="flex flex-col gap-4 p-4 lg:flex-row ">
          {skills.map((item, index) => (
            <SkillCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
