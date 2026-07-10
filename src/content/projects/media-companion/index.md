---
title: "Media Companion"
description: "An Obsidian plugin fork that stores context and connections for arbitrary files in colocated sidecar files — turning the filesystem into something closer to a graph of related documents, images, and notes."
date: "07/11/2026"
draft: false
repoURL: "https://github.com/ramu-r/media-companion"
notes:
  - title: "Introduction to the idea"
    description: "Filesystems can't express how files relate to each other. An introduction to the companion-file approach that fixes it."
    url: "/blog/media-companion"
  - title: "How I built the plugin"
    description: "Turning the idea into a working setup — a fork of Obsidian Media Companion with colocated sidecars and implicit reverse links."
    url: "/blog/media-companion-obsidian"
---

Media Companion is a fork of the Obsidian Media Companion plugin that stores metadata and relationships in sidecar files living next to the files they describe.

It changes three things from the original: sidecar files are colocated with their source file instead of a central directory, linked media renders an inline preview automatically, and reverse links are implicit so a connection recorded from one side shows up on both.
