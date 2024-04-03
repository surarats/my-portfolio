import React from "react";
import { projects } from "../data/data";

const ProjectCard = ({ item }) => (
  <div className="flex flex-col gap-2 hover:bg-white p-4 flex-1 rounded-md">
    <img src={item.image} className="h-[250px] object-cover mx-auto" />
    <h3 className="font-bold text-xl">{item.title}</h3>
    <p>{item.description}</p>
    <div className="mt-auto border">
      {item.gitUrl && (
        <a
          href={item.gitUrl}
          target="_blank"
          className=" text-white bg-gray-700 rounded-md p-2 hover:bg-cyan-500 me-1"
        >
          <i className="ri-github-line me-1"></i>View
        </a>
      )}

      {item.webUrl && (
        <a
          href={item.webUrl}
          target="_blank"
          className="text-white bg-gray-700 rounded-md p-2 hover:bg-cyan-500"
        >
          <i className="ri-dribbble-line me-1"></i>View
        </a>
      )}
    </div>
  </div>
);

function Project() {
  return (
    <div className="bg-gray-300">
      <div className=" p-6 max-w-7xl mx-auto" id="projects">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="flex flex-col gap-4 mt-4 lg:flex-row">
          {projects.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
