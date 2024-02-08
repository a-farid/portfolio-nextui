import React from "react";
import { Badge, Avatar } from "@nextui-org/react";
import Modal from "./Modal";
import CardProject from "./CardProject";
import { projects } from "@/config/projects";

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const ProjectsSection = () => {
  return (
    <>
      <h2 className="font-bold text-3xl mb-4 lg:text-5xl">My projects</h2>
      <div>
        <div className="grid grid-cols-1 gap-4  w-full md:grid-cols-3">
          {projects.map((project, i) => (
            <CardProject key={i} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
