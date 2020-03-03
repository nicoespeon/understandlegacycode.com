---
title: Dive into a large codebase from its edges
date: 2020-03-03T02:47:33.298Z
description: >-
  Curious to learn different ways to approach a legacy codebase? Try to start
  from the system edges.
---
Becoming acquainted with a codebase is a process that happens over time. But how to even begin?

> I don't know of any way to make the job easy!

> It can take weeks before I feel safe making any changes.

You probably have some techniques to explore unfamiliar lumps of code. Some tooling maybe. Chances are you don't have good documentation—legacy code rarely has good documentation. 

But you know that communication is key!

Even if the author is long gone, you surely have talked to other developers, your Product Manager, end users, etc. At least, they can share what they know about it. Knowledge is gold. Having different point of views help. 

If you didn't asked anyone yet, start with that!

## Then, attack the system from its edges

Start with an existing feature. One that is related to the change you have to do.

If you're not sure which feature to start with, go talk to people again. The users are experts on how they use the system. Watch them do so to understand how the system behaves. 

Now that you have a use-case in mind, your goal is to understand how THAT works.

---

start from the inputs and outputs of the system, "you can often get a handle on what these are supposed to be"

"follow data through the application and see where it goes and how it is changed"

"debug and do line breaks step through the code" / step through using the debugger

"stack trace through to see where the key points are"

"set a breakpoint on a button that launched an important piece of logic, and step through"

find the button by looking for a specific text. once you got your first handle, you understand what this is. Move on from there.

Take notes of your progression. A piece of paper is a good, low-tech tool to do so. Your energy and focus should be on discovering the program.

If your editor allows to set breakpoints, use them. They are checkpoints.

Following that bullet you should develop an understanding of a part of the codebase. Use that to enhance your knowledge. Do little, safe refactorings to clean the code around and get more familiar.

That is a good way to begin with an unfamiliar codebase.
