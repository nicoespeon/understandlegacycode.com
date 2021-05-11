---
title: "Technical Debt, Rewrites, and Refactoring"
date: 2021-05-08T10:15:00.000Z
image: /assets/legacy-of-socrates-5th-edition.png
description: >-
  5 great talks on Legacy Code that I had the pleasure to host. Learn how to prioritize Tech Debt and rewrite systems incrementally.
tags:
  - conference
  - getting into a large codebase
  - not sure where to start refactoring
  - changing untested code
---

On April 14, 2021, I co-organized the 5th edition of The Legacy of SoCraTes with my partner in crime [Adrian Bolboacă](https://twitter.com/adibolb).

It's a half-a-day remote conference where 5 speakers share their tips to deal with Legacy Code.

![The Legacy of SoCraTes](/assets/legacy-of-socrates-5th-edition.png)
![by Nicolas Carlo and Adrian Bolboacă](/assets/legacy-of-socrates-organizers.png)

For this edition, we focused on prioritizing Tech Debt and learning a better way to approach "rewrite" projects. I had the pleasure to host Adam Tornhill, Sabrina Leandro, and Clare Macrae. I also gave a talk myself! More on that below 👇

As usual, we recorded all the talks so you can watch them now and share them with your friends and colleagues!

## Prioritizing Technical Debt as if Time and Money matter

[Adam Tornhill](https://twitter.com/AdamTornhill) made me discover the incredible power of [behavioral analysis](https://understandlegacycode.com/behavioral-analysis). With [Software Design X-Rays](https://understandlegacycode.com/blog/key-points-of-software-design-x-rays/), Adam explains how you can get quick insights from very large codebases, leveraging the information present in version control metadata.

This talk is a sneak peek of all of this. Using CodeScene, Adam explains how you can prioritize Technical Debt in a way that will make sense for the business.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eHVP_NkSegM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How to rewrite, a bit at a time

Rewrites 🌈

If you're familiar with my blog, you may already know that I advocate for constant, progressive refactorings. It's safer and pays off faster.

But what if you're already working on a rewrite project? You probably can't just stop everything and start over. [Sabrina Leandro](https://twitter.com/saleandro) talks about such a situation, from her own experience.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KmOXRHnuTrM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

She also gave precious advice to avoid the risk of such projects again. As she said:

> A refactoring a day keeps the rewrite away!

## 7 techniques to tame Legacy Code

I took the opportunity of the conference to present my talk. In this talk, I share 7 techniques to deal with Legacy Codebases.

Advice on working with existing and untested codebase are scattered around. I've been hunting for them, to try them and share what worked best for me. Here, I wanted to show you 7 different techniques you could try on your own:

1. Architecture Decision Records (ADRs)
2. The Brain Dump
3. Over-Committing
4. The Mikado Method
5. Hotspots Analysis
6. Approval Testing
7. Coding Katas

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f3B8CqL1Pbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you are looking for more, I've written a survival kit with 14 detailed techniques for when tests are missing and deadlines are short: [understandlegacycode.com/first-aid-kit](https://understandlegacycode.com/first-aid-kit) ⛑

## Refactoring Superpowers

Finally, [Clare Macrae](https://twitter.com/ClareMacraeUK) presented a topic that is overlooked by developers (in my experience): letting tools do the work for you!

You see, when the code you need to change has no test, any change is risky. But sometimes, you first need to change the code before you can even add tests! That's the paradox of Legacy Code.

How do you safely refactor code when you have no tests? Turns out, your IDE can probably do it for you!

Clare shows you a couple of examples of what you can achieve. Of course, it depends on your language and tooling. But I recommend you look for what your IDE can do for you. In general, it will refactor the code faster and more safely than you ever could!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UJEABZKII_w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

☝ Oh, by the way! If you're doing JS/TS and you use VS Code, I'm building an extension to help you do that. Check it out: [Abracadabra](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra).

## "These talks are really great! Can I have more?"

Sure thing!

There's no fixed schedule, but I like to organize this short conference every few months. I reach out to a few speakers to build an interesting agenda, then we set up the event.

Everything is FREE. Attending is the opportunity to directly ask questions to these speakers, from the comfort of your home.

If that's something you want to hear about, **subscribe to my newsletter** below 👇

I publish my weekly tips on Legacy Code here. I also tell my subscribers in advance about the conference and the agenda, so they don't miss out. Join them!
