import type { Author, Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ramu Rajasekharan",
  DESCRIPTION: "Notes on building with care.\nProcess, patterns, and the thinking.",
  EMAIL: "mail@ramurajasekharan.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_BOOKS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: SITE.DESCRIPTION,
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const AUTHOR: Author = {
  NAME: "Ramu Rajasekharan",
  TAGLINE: "Frontend engineer & reader",
  BIO: [
    "Curious how technology and tools shape  our ideas and thought",
    "This blog is a space to share process notes, reflections and ideas, both finished and in-progress, on building systems with intentions.",
    "Written by a human. Everything in this blog comes from a human. Sometimes LLMs are used to proofread."
  ],
};

export const SOCIALS: Socials = [
    {
    NAME: "Bluesky",
    HREF: "https://bsky.app/profile/ramu-r",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ramu-r",
  },
  {
    NAME: "Email",
    HREF: `mailto:${SITE.EMAIL}`,
  },  
  
];
