---
title: Use the Mikado Method to do safe changes in a complex codebase
date: 2020-01-28T12:18:27.306Z
image: /assets/mikado-game.jpg
description: >-
  When a codebase is large and complex, it's risky to big changes. Here's a structured way to approach the problem.
tags:
  - changing untested code
  - not sure where to start refactoring
---

> You've inherited a 300k lines of spaghetti code. What do you do now?

Large, untested, poorly documented codebases are tricky to work with. They're very hard to reason about.

**You can't move fast in a complex codebase.**

## Stuck in the quicksand of Legacy Code

The thing is, they called you to change that codebase! You need to meet new functional requirements. Or fix some bugs.

Maybe you decided that you'll address the technical debt and refactor that legacy code. Maybe you want to improve the architecture of this system while it's serving customers in prod.

But any valuable change takes you down to a path of failures 😩

Say you want to upgrade your ORM dependency. You start doing so, but you quickly realize that there are some breaking changes. So you need to change some function calls across the codebase. To make it easier, you decide to refactor and extract them somewhere, so you only have one place to change. But to do so, you need to adapt each call first…

Quickly you find yourself sinking into quicksand: **whenever you fix 1 problem, 2 more arise**.

The project doesn't compile anymore. It has been a few hours since you committed the code. "I'm still working on it, I just need to fix a few things" is what your standup sounds like for a few days now…

**If you're here, you're not alone!**

And there's a way to avoid the quicksand. I'm about to teach you: _The Mikado Method_.

## A structured way to make valuable changes

The gist of it will sound like common sense:

> There is only one way to eat an elephant: a bite at a time.

In a complex codebase, small changes quickly become an elephant.

If you address them upfront, chances are you'll hit a wall. It will be painful. You will be late. Clients and management will be upset. Trust will erode and without trust, there are few chances you can get management support for necessary refactorings.

Instead, chop down the elephant into small pieces 🐘

### The process

Concretely, here's the _Mikado Method_ process you can follow:

1. **Grab a piece of paper**. Sometimes low-tech is better. This is such a time.
2. **Set a goal**. Write it down on paper. Put it at the top or at the center, it doesn't really matter. Just keep space for other items.
3. **Try to achieve the goal within a timebox**. 5min, 10min, 15min, as you wish. Keep it relatively short.

   - If you failed:

     - **Revert your changes**. Undo what you did during the timebox. This is important to start fresh.
     - **Think about what's missing**. What do you need to change to make the goal easier? That's your subgoal.
     - **Write it down on your paper** and attach it to the goal you tried to achieve.
     - **Start over from 3) with your subgoal**.

   - If you succeeded:

     - **Commit**. You'll certainly finish before the end of the timebox, that's fine, stop the timer.
     - **Check the goal you achieved on paper**. Celebrate internally.
     - **Start over from 3) with the next unchecked subgoal available**. Start from the leaves of your Mikado graph. Iterate until you've checked your main goal.

### What it looks like for real

Let's go back to our ORM dependency upgrade.

First, write down the goal on a piece of paper. Draw 2 circles around. That's your main goal!

![Main goal: "Upgrade ORM"](/assets/mikado-method-step1.jpg)

You try to do so. You upgrade the dependency and realize the project doesn't compile anymore. Damn, you should have read the changelog before!

Ok, so you read the changelog and understand you have to change some calls. Frankly, that's a lot of changes for a single timebox!

**Revert your changes**. Really. Undo it. It matters. 🔥

Then, write down what needs to be done _before_.

How to change a few calls within a little timebox? Easy: extract the calls, so you don't have many places to change. Make it so the upgrade in itself would be quick!

![2 new goals: "Extract .query()" and "Extract .dump()"](/assets/mikado-method-step2.jpg)

Start over. Try to extract the first method within the timebox.

Hopefully, there are just a few calls and they all look alike. You can complete that task within a few minutes. Congrats!

**Commit your work, check that subgoal** and pat yourself on the back. You got closer to your main goal.

![Goal "Extract .dump()" checked](/assets/mikado-method-step3.jpg)

Now try to address the other call. You start doing so, but it doesn't go as smooth as the previous one 😩

After a couple of minutes, just stop and think. What's missing? What would make it easier to do that change, like the previous one?

Maybe you first need to make each call look alike.

**Revert your changes**. Again. I'm serious.

Then write down the new subgoals.

![2 new subgoals: "Adapt calls in booking" and "Adapt calls in cart"](/assets/mikado-method-step4.jpg)

Start over with one of the leaves. Iterate.

When each of its subgoals is checked, tackling a goal should be easy. In the end, **you'll make the main goal easy**.

Then, just do it. Upgrade your ORM dependency.

![Finally, everything is checked, including the main goal!](/assets/mikado-method-step5.jpg)

Congrats! You just implemented an ambitious change without getting stuck in the quicksand of the codebase.

## 3 advice to master the Mikado Method

1. **Make your timebox short**. That way, it will be easier to revert your changes. It's a critical step to avoid the [sunk cost fallacy](https://en.wikipedia.org/wiki/Sunk_cost). I find **10min** to be a pragmatic compromise.
2. **Commit when you check a goal**. It's a checkpoint that gets you closer to the main goal. It means you can stop anytime, open a PR and ship the improvements. You may not be done with the task, but you made it easier.
3. **Use this when you start an ambitious refactoring**. Doing baby steps and keeping the code in a shippable state gives you incredible productivity.

## Why is it called "Mikado"?

It's a reference to [the Mikado pick-up sticks game](https://en.wikipedia.org/wiki/Mikado_%28game%29).

The _Stick_ you want to remove is your ORM dependency upgrade.

It's tangled with dozens of other sticks: annoying dependencies and tweaks you need to make, so the code still works.

The strategy is to remove the easy sticks first. The ones that are not tangled. Progressively, you untangle your _Stick_. Until you can reach it without breaking anything 🎉

There's even a book that goes deep in detailing this process: [The Mikado Method](https://www.manning.com/books/the-mikado-method).

![](/assets/mikado-game.jpg)

With a bit of practice, you'll become good at it.

And you'll become **a much more efficient developer!**
