---
title: "The original problem"
description: "The reason I ended up wanting to build this."
date: 2026-06-27
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