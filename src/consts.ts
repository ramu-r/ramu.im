import type { Author, Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ramu Rajasekharan",
  DESCRIPTION: "Notes on building with care.\nProcess, patterns, and the thinking.",
  EMAIL: "mail@ramurajasekharan.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
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
  TAGLINE: "reader, writer & coder",
  BIO: [
    "curious about technology, politics, and morality, how they shape the way we live and think",
    "This blog is a space to share process notes, reflections and ideas, both finished and in-progress, on building systems with intentions.",
    "Writing is also a way of thinking I don't do enough of. A space where you're conscious of what you actually think. This is an attempt to be in that space more."
  ],
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/boogerbuttcheek",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "Website",
    HREF: "https://trevortylerlee.com",
  },
];
