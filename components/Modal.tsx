import React from "react";
import { Snippet } from "@nextui-org/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { Project } from "@/config/projects";

export default function Modal({ description, title, url, github }: Project) {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button>Details</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <h2>{title}</h2>
          <p>{description}</p>
          <h3 className="font-bold">Link:</h3>
          <Snippet>
            <span>{url}</span>
          </Snippet>
          <h3 className="font-bold">Github:</h3>
          <Snippet>
            <span>{github}</span>
          </Snippet>
        </div>
      </PopoverContent>
    </Popover>
  );
}
