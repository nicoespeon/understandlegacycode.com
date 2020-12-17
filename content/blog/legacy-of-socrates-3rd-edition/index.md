---
title: "Approval Tests, TCR, and Menders"
date: 2020-09-21T12:15:57.830Z
image: /assets/legacy-of-socrates-3rd-edition.png
description: >-
  5 great talks on Legacy Code that I had the pleasure to host. Learn how to test existing code and approach unfamiliar codebases.
tags:
  - conference
  - approval tests
---

On September 9, 2020, I co-organized the 3rd edition of The Legacy of SoCraTes with my partner in crime [Adrian Bolboacă](https://twitter.com/adibolb).

It's a half-a-day remote conference where 5 speakers share their tips to deal with Legacy Code.

![The Legacy of SoCraTes](/assets/legacy-of-socrates-3rd-edition.png)
![by Nicolas Carlo and Adrian Bolboacă](/assets/legacy-of-socrates-organizers.png)

This edition had an accent on bringing existing code under tests. We talked about Approval Testing a lot. I [have a dedicated page for that](../../approval-tests). These talks are a great opportunity to learn more and **see it in action**.

Without further ado, let me tell you how each talk can help you deal with your existing codebase.

## A deep dive into the Gilded Rose

[Barney Dellar](https://twitter.com/branaby) kick-started this conference by demonstrating the Approval Testing technique, on the Gilded Rose refactoring kata, in C++.

I like this talk because it shows the technique in action, on concrete code.

Also, [Gilded Rose is an exercise I recommend doing](../5-coding-exercises-to-practice-refactoring-legacy-code/#1-the-gilded-rose) if you want to get better at refactoring existing code.

Watch him get the code under test in no-time:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1bJzZvGLVzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Approval Testing

> Approval Testing, again?!

Well, this was intentional. [Emily Bache](https://twitter.com/emilybache) follow-up on Barney's talk to go further with the techniques.

She has been using this technique in lots of situations for many years. It's especially useful when working with legacy code. But there are common pitfalls to avoid and best practice to learn.

Oh and if you don't know Emily, she's the expert in coding exercises. Most of the refactoring katas I would recommend can be found in her GitHub, in many different languages: [github.com/emilybache?tab=repositories&q=refactoring](https://github.com/emilybache?tab=repositories&q=refactoring)

Watch her talk to see how she compares unit tests and approval tests methodologies:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0ZVKcFsEp-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Did you noticed she uses a similar definition of Legacy code of mine:

> Valuable code that works, developers find it difficult and we need to change it safely.

## 7 Techniques to understand Legacy Code

This time, [these techniques are not from me](../7-techniques-to-regain-control-of-legacy/) 😁

[Jonathan Boccara](https://twitter.com/JoBoccara) is the author of [The Legacy Code Programmer's Toolbox](https://leanpub.com/legacycode). It's one of the rare books that give you practical skills when you have to deal with Legacy code.

In this talk, Jonathan presents 7 techniques that can be handy:

1. Know your I/O frameworks
2. Find a stronghold
3. Analyze call stacks
4. Start reading from the outputs
5. Count words (I wrote [about this one in details](../reveal-long-methods-structure-with-online-word-counter/))
6. Filter on control flow
7. Scan for the main action

See them in action in his talk:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OzwQXGLWI0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## TCR is your best friend against legacy

Test, Commit, or Revert (TCR) is a technique that was popularized by Kent Beck. You can think about it as a variant of TDD, pushing the programmer to do very small changes.

My friend [Khaled Souf](https://twitter.com/khaledsouf) had the opportunity to **actually use it** on a Legacy rescue project. In this talk, he shares his experience and explains why it's really efficient when you're dealing with existing, untested code:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DUSdArEttg0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Makers vs Menders

Finally, I had the pleasure to host [M. Scott Ford](https://twitter.com/mscottford) to talk about developers' mindsets.

We're all familiar with "makers". But it takes a different state of mind to really enjoy _mending_ code.

Scott presents 4 different traits:

1. The rapid prototyper
2. The feature builder
3. The emergency responder
4. The software remodeler

He goes into the details of what are the strengths and weaknesses of each, and in which case each is best suited.

I personally don't like putting people inside boxes. We made that clear with Scott as we discussed how each of us can be in many boxes at the same time, or switch depending on the context.

This is a really inspiring talk I recommend you to watch if you feel alone, fighting with your codebase:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YW0BpCThjuM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to connect with other menders (like me!), I recommend you join the [Legacy Code Rocks community](https://www.legacycode.rocks/). There is a Slack group and a weekly virtual meetup.

If you join there, come and say hi to me 👋

## "These talks are really great, can we have more?"

Sure thing!

There's no fixed schedule, but I like to organize this short conference every few months. I reach out to a few speakers to build an interesting agenda, then we set up the event.

Everything is FREE. Attending is the opportunity to directly ask questions to these speakers, from the comfort of your home.

If that's something you'd like to hear about, **subscribe to my newsletter** below 👇

I publish my weekly tips on Legacy Code here. I also tell my subscribers in advance about the conference and the agenda, so they don't miss out. Join them!
