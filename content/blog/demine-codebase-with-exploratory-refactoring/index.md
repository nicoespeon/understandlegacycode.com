---
title: Demine your codebase in 30min with Exploratory Refactoring
date: 2020-06-01T22:07:28.963Z
image: /assets/little-maneuver.jpg
description: When you're stuck trying to understand some code, it pays off to spend some time with a different approach.
tags:
  - getting into a large codebase
  - not sure where to start refactoring
---

> The codebase feels like a minefield…

This is how I feel when an apparently simple function later reveals itself as thousands of lines of validation code involving 10 tables across 3 different schemas 🤯

Diving into unknown parts of the codebase carries the risk of getting stuck trying to implement your change without breaking anything.

You feel like you're not making any progress because **you're not comfortable making changes to this code**. Any mistake could cost you hours of debugging and you should be done by tomorrow.

!["This little maneuver is gonna cost us 51 years" from Interstellar](/assets/little-maneuver.jpg)

And so you get hung up deciphering _cryptic_ code and you're not sure where to start!

"Writing tests" is what they told you to do first. But you're not quite sure what this code is doing. Everything is so tangled…

You'd like to refactor this mess, but without tests, you can't do that safely. So you move in slow-motion, not taking much risk and not understanding much neither.

Hopefully, there's a technique to **increase your confidence** in this code **promptly**.

It's all about refactoring the code. That's certainly scary since you don't have tests to get your back! But there's a trick that makes it safe…

## Exploratory Refactoring: the recipe

When you feel stuck because you don't understand what the code is doing, here's what you can do:

1. **Take a breath**, there is a way out and you're about to find it
2. **Reset your git status** to start fresh (`git reset --hard` or `git stash` will do)
3. **Set up a timer** for 30 minutes
4. **Refactor the code freely**, don't worry if the code still compiles, just go ahead and change it
5. **Throw away your changes** when the timer rings! Just do it: `git reset --hard`
6. **Take a break**, go drink some water and _think_ about what you just learned

This is described by Michael Feathers as "Exploratory Refactoring" in [Working Effectively with Legacy Code](../key-points-of-working-effectively-with-legacy-code).

It's not really a refactoring process, but a learning one. Your goal here is to **understand Legacy Code**.

## Why it works

First, by setting a 30min timer you're giving yourself a **timebox**. This is a very efficient way to avoid getting stuck in a tunnel for too long. After 30 minutes, the timer will remind you to stop, take a step back, and think. This alone is powerful.

Then, the trick comes from the twist in the refactoring mindset: you don't have to worry about breaking things. The goal of this timebox is not to clean the code, but to understand what it is doing.

> Exploratory Refactoring is exciting because you write code instead of just reading it.

Sometimes you need to play with the code to wrap your head around it. Rename variables. Extract functions. Inline methods. Try things. As you're relieved from the burden of making it work, you can be more creative!

Finally, you need to throw away these changes at the end of the timebox. It's an important step!

Consider this exercise as a Proof Of Concept. You're prototyping your refactoring by trying things. Not having a safety net allows you to move fast and learn quickly. When you're done, you'll have a clearer understanding of what to do… but **don't put your prototype in production**!

Start fresh, throw away your first draft, and come back to proper refactoring with tests and all.

I guarantee these 30 minutes you invested will pay off 😉
