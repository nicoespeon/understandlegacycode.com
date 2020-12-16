---
title: "Refactoring, Unit Tests, and Symmathesy"
date: 2020-12-14T20:05:57.830Z
image: /assets/legacy-of-socrates-4th-edition.png
description: >-
  5 great talks on Legacy Code that I the pleasure to host. Learn how to progressively migrate existing codebase towards a better state.
tags:
  - conference
  - approval tests
---

On December 3, 2020, I co-organized the 4th edition of The Legacy of SoCraTes with my partner in crime [Adrian Bolboacă](https://twitter.com/adibolb).

It's a half-a-day remote conference where 5 speakers share their tips to deal with Legacy Code.

![The Legacy of SoCraTes](/assets/legacy-of-socrates-4th-edition.png)
![by Nicolas Carlo and Adrian Bolboacă](/assets/legacy-of-socrates-organizers.png)

This edition focused on changing existing code **incrementally**, slowly migrating towards a better codebase. _Refactoring_ was certainly the main keyword here!

We also tried something different and had a roundtable discussion with Jessica Kerr, instead of a formal talk. More on that below 👇

As usual, we recorded all the talks so you can watch them now and share them with your teammates! Let's see what great talks this edition had…

## Refactoring like a Zen master

[Bastien David](https://twitter.com/bastien_david) and [Rémy Sanlaville](https://twitter.com/sanlaville) paired on this one to present you with a brand new refactoring kata.

They used this kata to demonstrate how they would refactor some legacy code together.

I particularly love the dynamic between the 2 developers. Although it's a talk, they tried not to practice too much in advance so they'd keep a fresh eye on this code. The end result is insightful. The pace is a bit slower than a regular talk, but the content is much more authentic.

I'd recommend you watch this one in multiple 10-15min shots to get most of it:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3ezxq5XU5ek" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to practice on the same kata, here it is: [github.com/SoftwareCraftsmanshipGrenoble/elections](https://github.com/SoftwareCraftsmanshipGrenoble/elections)

If you are looking for more coding exercises to work on Legacy Code, [I've compiled a list for you](../5-coding-exercises-to-practice-refactoring-legacy-code/).

## Refactoring Large Objects with the Strangler Fig pattern

I **love** this one.

First of all, [I've written about the Strangler Fig pattern](../avoid-rewriting-a-legacy-system-from-scratch-by-strangling-it/) because it's such a useful technique to avoid big-bang rewrites.

But in this talk, [Adrianna Chang](https://twitter.com/adriannakchang) goes further: she gives you her feedback **from Shopify's trenches**! Real, concrete, technical examples. Stories from production. And a smart 7-steps process to follow 🌈

I never had the opportunity to apply such a pattern at this scale. I think that's an awesome opportunity to learn from her experience:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zZ95_5y_iPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you prefer to refer to written content, she also wrote [a blog post on Shopify's Engineering blog](https://engineering.shopify.com/blogs/engineering/refactoring-legacy-code-strangler-fig-pattern).

The blog post has more code snippets, but the talk has more insights into what she learned 😉

## Master Legacy Code Incrementally

So far, we've talked about refactoring code and whole systems.

In the following talk, [Arlo Belshee](https://twitter.com/arlobelshee/) takes a step back and proposes a systematic approach that works to address any Legacy codebase. It's all about making steady progress.

With his advice, you'll be able to see small but tangible improvements every 2 days:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9YxQzjtPdtw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Among this great advice, you'll find gems as:

- **Naming things**, which can be done incrementally. I wrote [a recap of these steps in a previous post](../improving-legacy-function-names/#its-fine-to-use-and-but-your-journey-doesnt-stop-here)
- **Extract & Inline things**. You can often find these refactorings automated in your IDE and I can only recommend you to practice these!

## A discussion on Legacy Code and Symmathesy

This talk was more of a roundtable discussion between [Jessica Kerr](https://twitter.com/jessitron), Adrian Bolboacă, and me.

Jessica's favorite word these days is _symmathesy_. If you're not familiar with this concept, I recommend you listen to our discussion as we dive into what it means and why it matters.

In short: you are part of a system and you mutually influence each other. Your team, the codebase you're working with… They impact you as well as you impact them. This logic applies to different scales. It's an eye-opening reflection to adopt a more efficient approach when working on a legacy system.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SgZxM6211yc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Unit Tests as Specifications

Finally, I had the pleasure to host [David Bernstein](https://twitter.com/ToBeAgile)!

David is the author of "Beyond Legacy Code", a great book [for which I did a summary of the salient points already](../key-points-of-beyond-legacy-code/).

David trains teams to work more efficiently with existing software. This talk is an excerpt of his wisdom that you could find in his book or courses. He goes back to the basics of unit testing and shows how you can leverage it not just to prevent regressions, but to drive future changes you have to do!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/L9ZZgF861dg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to connect with other menders like David or me, I recommend you join us on the [Legacy Code Rocks community](https://www.legacycode.rocks/). There is a Slack group and a weekly virtual meetup.

If you join there, come and say hi to me 👋

## "These talks are really great! Can I have more?"

Sure thing!

There's no fixed schedule, but I like to organize this short conference every few months. I reach out to a few speakers to build an interesting agenda, then we set up the event.

Everything is FREE. Attending is the opportunity to directly ask questions to these speakers, from the comfort of your home.

If that's something you'd like to hear about, **subscribe to my newsletter** below 👇

I publish my weekly tips on Legacy Code here. I also tell my subscribers in advance about the conference and the agenda, so they don't miss out. Join them!
