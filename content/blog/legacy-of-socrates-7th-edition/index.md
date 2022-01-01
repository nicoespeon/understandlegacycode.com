---
title: "DevOps, Living Documentation, and Hexagonal Architecture"
date: 2021-09-26T20:15:00.000Z
image: /assets/legacy-of-socrates-7th-edition.png
description: >-
  5 great talks on Legacy Code that I had the pleasure to host. This edition raises new topic such as documentation and legacy pipelines.
tags:
  - conference
  - making others care about it
  - documentation
  - software architecture
---

On September 22, 2021, I co-organized the 7th edition of The Legacy of SoCraTes with my partner in crime [Adrian Bolboacă](https://twitter.com/adibolb).

It's a half-a-day remote conference where 5 speakers share their tips to deal with Legacy Code.

![The Legacy of SoCraTes](/assets/legacy-of-socrates-7th-edition.png)
![by Nicolas Carlo and Adrian Bolboacă](/assets/legacy-of-socrates-organizers.png)

This edition raises discussions around topics we never talked about before: legacy pipelines and Living Documentation. We also had an inspiring talk that relates Interior Design with software development.

Finally, Jim Humelsine did a tour of the Hexagonal Architecture and how to approach legacy codebases with this in mind.

As usual, we recorded all the talks so you can watch and share them with your friends and colleagues!

## Working with Legacy Pipelines

[Laura Santamaria](https://twitter.com/nimbinatus) is _reaaaaally_ well-versed into pipelines. She's really involved in the DevOps community and I was glad she came to share her expertise on this crucial topic.

Indeed: you can't really tame a legacy codebase if you can't easily deploy changes to production in the first place!

When you inherit a legacy system that you now have to maintain, you should ask yourself the question: what does it take to make a change… and get it deployed?

Turns out the pipeline is probably as legacy as the code. You should maintain that too!

In her talk, Laura gives precious advice to doing so:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kVENYNdIJhE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A few gems that really stood out for me:

- When you are lost, make a map! 🗺
- Priorize stability when modernizing the pipeline. Don't let users notice it's being changed!

These are true for code as well:

- [Dependency Graphs](https://understandlegacycode.com/dependency-graphs) are really helpful for when you are lost
- [Progressive replacement](https://understandlegacycode.com/blog/ship-of-theseus-avoid-rewrite-legacy-system/) is a better alternative than big rewrites when the users expect the same system to keep running

## Software Interior Design

### AKA: limit cognitive waste when writing code

[EsterDaniel Ytterbrink](https://twitter.com/edytterbrink) has a blog with an amazing title: [chocolatedrivendevelopment.com](https://www.chocolatedrivendevelopment.com/) 🍫

In their talk, EsterDaniel is comparing taking care of your codebase as taking care of your home. I think it makes sense: you spend a considerable amount of time in this codebase. Paying attention to the details will preserve your sanity.

You may have inherited something particularly complex. That's fine. You can reverse the steam. Slow and steady progress over time does wonders!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/an9g8HlHEZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Don't let a wrongly placed bureau hurt your toes again.

Don't let a wrongly named variable waste your time again.

Things that help:

- Define standards
- Make them explicit
- Refactor code towards standards
- Separate Queries (= return something) and Commands (= execute something)
- If something surprised you, do something

## Leaving Documentation, or Living Documentation?

Writing documentation is hard. It's only a matter of time before it gets outdated with what the system _actually_ do.

[Cyrille Martraire](https://twitter.com/cyriux) has worked on this problematic a lot. He wrote [a book titled "Living Documentation"](https://www.oreilly.com/library/view/living-documentation-continuous/9780134689418/). This talk is an excerpt of what you can find in his book.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/icGhEOWPqB4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

There's a lot to unpack in this talk. One of the key aspect of Living Documentation is to generate it from the code itself. You can use tags and annotations to do so.

Parsing and extracting such tags are explained in the book. There's no standard, but it's not that hard to do. If you're looking for generic tooling to do so, then you'll enjoy our next talk…

## Writing Maintainable Documentation with Automated Tools

[Dr. Ana Clarkson](https://twitter.com/ananelson) is the creator of [Dexy](http://www.dexy.it/), an open-source software for software documentation, reproducible research and document automation.

In her talk, she explains how she's able to generate Living Documentation from any codebase with her tool. It seems to be flexible enough to adapt many situations! In particular, it can run in your CI pipeline — which is great news.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jAEuU3otTeI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Hexagonal Architecture & Legacy Code

Finally, I was happy to have [Jim Humelsine](https://twitter.com/jhumelsine) come and talk about Hexagonal Architecture.

The core concept behind this architecture applies to any software. The key of taming a legacy codebase usually goes by identifying the Infrastructure parts, extracting them from the Domain, and invert the dependency.

If you're not sure what I'm referring to, then I recommend you watch this talk. Jim explains everything:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aayl6FysZ_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## "These talks are really great! Can I have more?"

Sure thing!

There's no fixed schedule, but I like to organize this short conference every few months. I reach out to a few speakers to build an interesting agenda, then we set up the event.

Everything is FREE. Attending is the opportunity to directly ask questions to these speakers, from the comfort of your home.

If that's something you want to hear about, **subscribe to my newsletter** below 👇

I publish my monthly tips on Legacy Code here. I also tell my subscribers in advance about the conference and the agenda, so they don't miss out. Join them!
