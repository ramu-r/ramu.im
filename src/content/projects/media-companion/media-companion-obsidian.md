---
title: "The changes with the fork"
description: "Creating the fork of an existing obsidian plugin."
date: 2026-07-04
---

These days I was working a lot of images and I needed some way to save lots of images and the interrlations between them. I was saving these images to obsidian and I thought I'll start noting down the relationships within obsidian itself. Obsidian lets me save different kinds of files and maintain a separate note for each one that links to the file and stores the metadata. A vehicle insurance PDF and a note called "vehicle-insurance.md" with the expiry date and a link to the file. This works well for documents because they are usually one of a kind and their name describes them well.

It starts to break down with images. Fashion inspiration pictures, UI screenshots, reference photos. Now I have hundreds of files with no natural names, and to link two pictures together I'd have to: find both files in the filesystem, find or create their corresponding notes in Obsidian, then edit each note to reference the other. The overhead per connection is too high.

With documents I've to do this a handful of times. With images, I might come up with a dozen UI inspiration images in a single session and doing this manually just slows me down.

So the sensible next step was to create an extension for this. Luckily There were already two extensions that did something very similar to what I wanted. Of those, the [Obsidian Media Companion](https://github.com/Nick-de-Bruin/obsidian-media-companion) came especially close. It already had the sidecars and all that.

I created a fork that changed three things:

**Colocated sidecar files.** The original stored all sidecar files in a central directory. I changed it so each sidecar lives next to the file it describes. If I ever stop using Obsidian, a script can walk the directories and migrate the metadata because every file is next to its sidecar file.

**Automatic media previews.** I might link to lots of media files, but I didn't want to open them to see what the related files were. So when a linked file is created the plugin automatically renders a preview of it inline.

**Implicit reverse links.** If file A's sidecar links to file B, file B's view will automatically show A as a related file even if B's sidecar doesn't explicitly mention A. This means I have to record a connection only once from one side, and both files reflect it. Without this, maintaining relationships bidirectionally would be just as much manual work as the Obsidian approach I was already doing.

## What this enables

**Navigating collections by relationship.** With UI inspiration images, I can follow connections in a particular direction or style. This layout links to that one, which links to a few others. Instead of going back and forth in the file system trying to remember what was related to what, the links let me traverse the collection the way I think about it.

**Grouping files by lifecycle.** A purchase receipt, a warranty document, and a device manual all belong together. When the device breaks and I want to get rid of it, I can find everything related to it and delete it together.

**Expiry and renewal tracking.** Some files have a natural expiry like insurance documents, warranties and subscriptions. I can store the renewal date in the sidecar and then use Obsidian Bases to create a view that lists everything expiring in the next week.
