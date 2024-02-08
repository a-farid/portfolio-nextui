export type Project = {
  title: string;
  description: string;
  screenshots?: string;
  imgCount?: number;
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Todo App",
    description: "A simple todo app built with React and Redux.",
    screenshots: "/images/projects/todo-app/",
    imgCount: 2,
    url: "https://todo-app-fr.netlify.app/",
    github: "https://github.com/a-farid/todo-redux",
  },
  {
    title: "Users API calls",
    description:
      "A simple api calls for testing and getting users, app built with React.",
    screenshots: "/images/projects/users-api/",
    imgCount: 1,
    url: "https://users-api-gmd.netlify.app/",
    github: "https://github.com/a-farid/api-checkpoint",
  },
  {
    title: "The movie db",
    description:
      "A website of movies ans TV shows, the movies are called from a free API of movies, the project was built using React JS.",
    screenshots: "/images/projects/tm-db/",
    imgCount: 1,
    url: "https://tm-db-film.netlify.app/",
    github: "https://github.com/a-farid/tm-film",
  },
];
