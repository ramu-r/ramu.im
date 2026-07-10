---
title: "Building a file metadata companion"
description: "Why I built a companion-file system for storing context and connections between arbitrary files, and the Obsidian plugin fork that makes it work."
date: 2026-07-11
tags: ["tools", "obsidian", "files"]
---

## The problem

I save a lot of files that relate to each other in ways the filesystem does not let me express.

A photo of a shirt and a photo of trousers that go with it. A device manual and its warranty document. UI screenshots from different apps that solve the same design problem differently. These connections exist in my head when I save the files but I can't really express them in the filesystem.

The problem is filesystems don't let me store context information.

## Why the obvious approaches don't work

**Exif data** lets you embed metadata inside image files. But the UX of entering filenames into exif fields is bad, and more importantly, it only works for images. The same problem exists for PDFs and spreadsheets as well, and exif does not work for them.

**Tags/Folders** solve a different problem. They group files, which is useful, but grouping isn't the same as connecting. Tagging a warranty PDF and a device manual with "hp-printer" puts them in the same bucket. It does not let me add information about how they are connected, or add notes later on. It can even make it worse. I'd have to create tags for every type of connection or relation.

And it's not always connections. Context could be simple metadata like 'delete this user manual when the device breaks' or 'update this warranty document in a year'.

**A database or CMS** is another option. Storing metadata in a structured system outside the filesystem. Apps like TagSpaces do this. This takes away all the benefits of plain files. I can't grep across the entire collection, I can't write a regex to find and update references in bulk. I cannot back everything up with rsync. All my existing tools stop working.

- - -

What I need was closer to a graph: directed connections between specific files, plus freeform notes attached to each one.

The solution seemed to be companion files for each file. This companion file can be a place to write whatever context matters: notes, links to related files, expiry conditions, warnings. The companion travels with the original and is queryable independently of any specific app.

This isn't a new idea. Sidecar files exist in other contexts (XMP for photos, for instance). The gap is that no mainstream file manager treats this as a first-class concept for arbitrary file types.

If companion files were standard, you could build on top of them: show related files in a sidebar, warn before deleting something that has dependents, surface expiry reminders. The metadata is already there. It just needs a place to live.

**The best place to do it manually was in Obsidian.** Obsidian lets me save different kinds of files and maintain a separate note for each one that links to the file and stores the metadata. A vehicle insurance PDF and a note called "vehicle-insurance.md" with the expiry date and a link to the file. This works well for documents because they are usually one of a kind and their name describes them well.

It starts to break down with images. Fashion inspiration pictures, UI screenshots, reference photos. Now I have hundreds of files with no natural names, and to link two pictures together I'd have to: find both files in the filesystem, find or create their corresponding notes in Obsidian, then edit each note to reference the other. The overhead per connection is too high.

With documents I've to do this a handful of times. With images, I might come up with a dozen UI inspiration images in a single session and doing this manually just slows me down.

So the sensible next step was to create an extension for this. There were two extensions that did something like this. One, Obsidian Media Companion, came especially close. I got the term sidecar files from that.

I created a fork that changed three things:

**Colocated sidecar files.** The original stored all sidecar files in a central directory. I changed it so each sidecar lives next to the file it describes. If I ever stop using Obsidian, a script can walk the directories and migrate the metadata because every file is next to its sidecar file.

**Automatic media previews.** I might link to lots of media files, but I didn't want to open them to see what the related files were. So when a linked file is created the plugin automatically renders a preview of it inline.

**Implicit reverse links.** If file A's sidecar links to file B, file B's view will automatically show A as a related file even if B's sidecar doesn't explicitly mention A. This means I have to record a connection only once from one side, and both files reflect it. Without this, maintaining relationships bidirectionally would be just as much manual work as the Obsidian approach I was already doing.

## What this enables

**Navigating collections by relationship.** With UI inspiration images, I can follow connections in a particular direction or style. This layout links to that one, which links to a few others. Instead of going back and forth in the file system trying to remember what was related to what, the links let me traverse the collection the way I think about it.

**Grouping files by lifecycle.** A purchase receipt, a warranty document, and a device manual all belong together. When the device breaks and I want to get rid of it, I can find everything related to it and delete it together.

**Expiry and renewal tracking.** Some files have a natural expiry like insurance documents, warranties and subscriptions. I can store the renewal date in the sidecar and then use Obsidian Bases to create a view that lists everything expiring in the next week.
