---
title: 7 practices you should follow for a successful code handover
date: 2020-05-26T20:50:12.338Z
image: /assets/sailing.jpg
description: >-
  Code handovers are critical moments in the lifetime of a project. Make the most out of it with these advice.
ctaTitle: Keep it under control after the handover!
---

Usually you would skim around this blog to learn tips and techniques to deal with some Legacy Code you inherited. In general, the original developers are long gone…

But, sometimes, you can be in a very particular position: **a code handover!**

Maybe you're inheriting a project from a different team and there's a dedicated knowledge transfer budgeted. Or maybe the original developer is still working with you, but he will leave soon.

Well you might even be the one who's handing over a Legacy codebase and you want to give the best chances to your successor!

## Deadlines, deadlines, deadlines

In any situation, **your time is limited**. The codebase is huge. The technical debt backlog is bottomless. What should you document? Should you plan refactoring sessions with all developers? Is it smarter to focus on tests?

Imagine the last day of the handover: that's quite an event! What if you could live this moment relaxed, being confident that you set the team on the right track? You'll enjoy the very last moment of this transition as you'd have proven **how efficient and professional** you are!

But this moment is coming soon and there's so much to do… What should you prioritize now?

Hopefully, I've gathered 7 best practices that will help you go through this very particular period of your project.

![](/assets/sailing.jpg)

## 7 best practices to hand over Legacy Code

### 1) Get everything under version control

Careful, this is very easy to overlook!

Get **everything** under version control, including the scripts that are on the leaving developers' hard drive.

Think about:

- backup procedures
- manual operations done periodically
- manual operations done exceptionally
- documentation of third-party softwares or APIs

Make sure you have all the passwords, licenses, contacts you need to keep maintaining the project.

New developers should be able to:

- build the code
- test the code
- deploy the code

Make sure this is DONE before moving on!

### 2) Get management support

You don't have infinite time for this transition.

A great transition will make a tremendous difference in the new team productivity. That's crucial for the business!

Make sure that you get management on your side. Ask them to **prioritize the knowledge transfer** over "just fixing those last few bugs before they leave".

### 3) New developers should write the docs

Writing documentation can feel boring. Yet, it's really helpful and does wonder for passing knowledge!

The developers who will maintain the code after the transition are in the best position to document: they know nothing.

![](./you-know-nothing.gif)

When you don't know, you have plenty of questions. This is where you can detect what's missing in the existing docs.

Original developers can't unlearn what they know, they won't realize things are not obvious to you!

Ask questions to the leaving developers. Document that knowledge. Make the leaving developers review the documentation.

Documentation can (should) take many forms:

- formal documents
- comments in the code to clarify the intent of the tricky bits
- class and interaction diagrams at different levels of abstraction

You can make this massively easier by **pairing**: the leaving developer explains and the new developer writes the documentation. Reformulating is the best indicator of successful knowledge transfer 👌

### 4) Make it fast and fun for the leaving developers

Did you notice how I suggested making the previous practice easier? It's deliberate.

You'll realize that leaving developers' motivation will go down as their last day comes over.

Leverage that by making them do the _exciting_ stuff. E.g. let them code while pairing with them if that's what they like.

### 5) Write more tests to understand the system

Most of the time, the system will be lacking tests.

Find out what are the critical parts of the application:

- what is critical for the business?
- what parts are often impacted by bugs?
- what parts will be impacted by incoming features?
- where are [the Hotspots](../focus-refactoring-with-hotspots-analysis) of the system?

Writing these tests is a great investment for your future work. Not only, but it will pay off later, it's also a great way to understand how the system works and discover the most important quirks you'll have to deal with.

Write more tests to understand the system and reveal potential bugs.

### 6) Try to predict where fixes should be made

Take the list of old bugs and practice this exercise with new developers: **can they accurately predict where the problem was?**

If they can't, you probably have identified important knowledge that needs to be transferred.

That's a great way to prioritize knowledge to transfer outside of doing a guided tour of the codebase.

You'll likely have to deal with subparts of the system that fail to stabilize. That is, bugs keep appearing in the same subparts of the code. Identifying these will make the new team much more efficient.

### 7) Don't refactor code without a specific goal

This final advice is more of a warning.

Sure, there is plenty of Tech Debt in this Legacy Code that's handed over. And maybe you've negotiated 2 Sprints of knowledge transfer. But spending this time refactoring the code isn't a good idea.

**Refactoring code without a clear goal quickly becomes a bottomless pit** that ends up using way more of your available time.

You can't afford it!

Efficient refactoring is oriented towards a goal: implementing a new feature, fixing a bug, etc. Don't refactor for the sake of it. Refactoring isn't cost-effective to transfer knowledge.

Focus on tests and documentation instead. This will set you in the best possible tracks 🚂

## Remember the 7 practices

Next time you participate in a code handover, these are the things that will get you the most bang for the buck:

1. Get everything under version control
2. Get management support
3. New developers should write the docs
4. Make it fast and fun for the leaving developers
5. Write more tests to understand the system
6. Try to predict where fixes should be made
7. Don't refactor code without a specific goal

![](./i-know-how-to-do-it.gif)

Transitions are exciting because they mean "change". I know you'll make the best out of yours 👍
