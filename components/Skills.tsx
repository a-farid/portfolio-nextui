"use client";

import { useState } from "react";
import { skillsItems } from "@/config/skillsItems";
import Link from "next/link";

const tabs = ["skills", "educations", "experiences"];
const skills = () => {
  const [tab, setTab] = useState("");
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div>
      <div className="w-full flex justify-between">
        {tabs.map((tab, index) => (
          <span
            key={index}
            onClick={() => {
              setTab(tab);
              setSelectedTab(tab);
            }}
            className={`mx-2 ${
              selectedTab === tab
                ? "text-gray-500 border-b-3 border-gray-500"
                : "text-gray-400"
            } cursor-pointer font-bold`}
          >
            {tab.toUpperCase()}
          </span>
        ))}
      </div>
      {selectedTab == "skills" && (
        <ul className="grid grid-cols-2 lg:grid-cols-3 border border-gray-500 rounded-sm">
          {skillsItems.skills.items.map((item, index) => (
            <li key={index} className="text-base lg:text-lg">
              -{item.name}: {item.pourcentage}%
            </li>
          ))}
        </ul>
      )}
      {selectedTab == "educations" && (
        <ul className="grid grid-cols-1 lg:grid-cols-1 border border-gray-500 rounded-sm">
          {skillsItems.educations.items.map((item, index) => (
            <li key={index} className="text-base lg:text-lg">
              <Link href={item.url} target="blank">
                -{item.name}: {item.year}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {selectedTab == "experiences" && (
        <ul className="grid grid-cols-1 lg:grid-cols-1 border border-gray-500 rounded-sm">
          {skillsItems.experiences.items.map((item, index) => (
            <li key={index} className="text-base lg:text-lg">
              -{item.name}: {item.year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default skills;
