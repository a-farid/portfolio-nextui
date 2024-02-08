import React from "react";
import Modal from "./Modal";
import { Project } from "@/config/projects";
import { Link2 } from "lucide-react";
import { GithubIcon, LinkIcon } from "@/components/icons";

import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function CardProject({
  screenshots,
  description,
  title,
  url,
  github,
}: Project) {
  return (
    <div className="w-ful relative">
      {url && (
        <Link
          href={url}
          className="absolute z-50 bottom-4 right-4 bg-black rounded-md cursor-pointer opacity-40 hover:opacity-100 transition-opacity hover:scale-125"
        >
          <LinkIcon className="text-default-500" />
        </Link>
      )}
      {github && (
        <Link
          href={github}
          className="absolute z-50 bottom-4 right-12 bg-black rounded-md cursor-pointer opacity-40 hover:opacity-100 transition-opacity hover:scale-125"
        >
          <GithubIcon className="text-default-500" />
        </Link>
      )}
      <Card className="col-span-12 sm:col-span-4 h-[300px] w-full">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="bg-gray-700 rounded-md px-2 mb-2 font-medium text-large">
            {title}
          </h4>
          <Modal
            description={description}
            title={title}
            url={url}
            github={github}
          />{" "}
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-fill"
          src={`${screenshots}1.png`}
        />
      </Card>
    </div>
  );
}
