---
title: "5 talks on Legacy Code: The Legacy of SoCraTes, 1st edition"
date: 2020-04-12T12:15:57.830Z
image: /assets/legacy-of-socrates-1st-edition.jpeg
description: >-
  Tips and advice on dealing with Legacy Code from 5 great speakers at this remote conference I organized for the community.
---

On April 1st, 2020, I co-organized with [Adrian Bolboacă](https://twitter.com/adibolb) a remote conference on my favorite topic of all: **Legacy Code**.

![The Legacy of SoCraTes](/assets/legacy-of-socrates-1st-edition.jpeg)
![by Nicolas Carlo and Adrian Bolboacă](/assets/legacy-of-socrates-organizers.png)

We hosted 5 great speakers who talked and shared their tips on how to deal with existing code.

Recordings are now available. Let's go through each talk and see how they can help you.

## Choking the Monolith − The Strangler Pattern Applied

[Tobias Goeschel](https://twitter.com/w3ltraumpirat) is a principal consultant at codecentric. Tobias has seen, improved and survived enough of "the code that earns our money" to enjoy it.

I met Tobias when he came to facilitate the SoCraTes Canada unconference I also co-organized in 2020.

The so-called "Strangler Fig" (aka "Strangler") pattern is a much-cited strategy for replacing legacy systems with new, often microservice-based architectures.

[I even wrote about it myself](../avoid-rewriting-a-legacy-system-from-scratch-by-strangling-it)!

However, it's not actually a microservice pattern, and there are several - quite different - ways to implement it. Are you confused yet?

Fear not: here you will have a look at the theory and then explore, together with Tobias, how Strangler Fig could be used to improve and replace a project worthy of being called "The Most Horrible Piece Of Code in the World".

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jm_ZBc5z6B0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Escaping the Tar Pit

[Ernesto Tagwerker](https://twitter.com/etagwerker) is the Founder of Ombu Labs, a small software development company dedicated to building lean code and reducing tech debt in the world.

This talk looks at different definitions of code quality and then focuses on one which will be composed of three sections: Code Coverage, Complexity and Code Smells. Ernesto talks about a tool he's built to take all these things into account and calculate a maintainability score for Ruby projects: the SkunkScore.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Zo4lfiKc8yA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[I also wrote about the topic of Hotspots Analysis](../focus-refactoring-with-hotspots-analysis) with concrete tools you can use to prioritize technical debt, even if you're not using Ruby.

## Improving Legacy

[Dr. Carola Lilienthal](https://twitter.com/Cairolali) is managing director of WPS - Workplace Solutions in Germany. In 2015 she has summarized her experience from more than one hundred analyses in the book "Sustainable Software Architecture".

Today programmers do not develop applications from scratch, but they spend their time fixing, extending, modifying and enhancing existing applications.

As the code becomes more and more complex, we start programming extensions that we know are bad from an architectural point of view. But it's the only solution that, if we're lucky, will still work at all.

In this talk, you will learn how to bring your old code base back to the path of virtue, step by step, so that maintenance is fun again.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/icDjN3yv4C4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I find it really fascinating how Carola can analyze the state of a Legacy codebase from an architectural standpoint. Definitely a lot of great insights from this talk!

## Three Great Opportunities from Legacy Code

[J.B. Rainsberger](https://twitter.com/jbrains) describes himself has a "Swede stuck in a Canadian's body, barista, 5-pin Bowler, Trusted adviser, Agile Coach, but actually Agile and actually a Coach".

I was lucky enough to meet J.B. when he came to Montreal in 2019. We set up a special meetup together where he presented us with the universal traits of great software architecture. But that's a topic for another day…

So the thing is: most programmers focus on adding tests as a primary way to reduce the cost of working with Legacy Code.

In this talk, J.B. would like to offer a few alternative skills to practice that will "build muscles" that you'll need to work with that code.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8e9a_b16e7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Applied Domain-Driven Design on Legacy Code

[Khaled](https://twitter.com/khaledsouf) is a passionate Globe-trotter developer from Tunisia. He likes to speak about DDD, crafting software, clean code, XP and DevOps practices.

I know Khaled very much as we co-organize [the Software Crafters Montréal community](https://www.meetup.com/fr-FR/Software-Crafters-Montreal/) together.

Would you like to apply Domain-Driven Design to your old code? You don't know how? This talk is for you. Khaled introduces a few techniques and heuristics based on his experience dealing with Legacy Code and applying DDD concepts on it.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bzEGZOj3rYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## To many more!

That's it. It was really great to be able to connect with the community in these days of lockdown.

A remote conference has some advantages:

- many people across the globe can join
- it's easy to **make it free** (as long as you got 1 or 2 sponsors)
- content is naturally recorded and can be shared afterward

This 1st edition of "The Legacy of SoCraTes" went really well, so we decided to do more!

If you'd like me to tell you when I organize another session, you can **subscribe to my newsletter**. I'll also send you concrete tips and advice to deal with Legacy Code every Wednesday 😉

Until then, take care of yourself and of your codebase!
