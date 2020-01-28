---
title: A process to do safe changes in a complex codebase
date: 2020-01-28T12:18:27.306Z
description: >-
  When a codebase is large and complex, it's risky to big changes. Here's a
  structured way to approach the problem.
---
> You've inherited a 300k lines of spaghetti code. What do you do now?

Large, untested, poorly documented codebases are tricky to work with. They're very hard to reason about. 

**You can't move fast in a complex codebase.**

## Stuck in the quicksand of Legacy Code

The thing is, they called you to change that codebase! You need to meet new functional requirements. Or fix some bugs.

Maybe you decided that you'll address the technical debt and refactor that legacy code. Maybe you want to improve the architecture of this system while it's serving customers in prod.

But any valuable change takes you down to a path of failures 😩

Say you want to upgrade this dependency. You start doing so, but you quickly realize TK: find concrete example. 

Quickly you find yourself sinking into quicksand: **whenever you fix 1 problem, 2 more arise**.

The project doesn't compile anymore. It has been few hours since you committed the code. "I'm still working on it, I just need to fix a few things" is what your standup sounds like for a few days now…

If you're here, you're not alone!

And there's a way to avoid the quicksand. I'm about to teach you: *The Mikado Method*.

## A structured way to make valuable changes

The gist of it will sound like common sense:

> There is only one way to eat an elephant: a bite at a time.

In a complex codebase, small changes quickly become an elephant. If you address them upfront, chances are you'll hit a wall. It will be painful. You will be late. Clients and management will be upset. Trust will erode and without trust, there are few chances you can get management support for necessary refactorings.

Instead, chop down the elephant into small pieces.

Concretely, here's the *Mikado Method* process you can follow:
1. **Grab a piece of paper**. Sometimes low-tech is better. This is such time.
2. **Set a goal**. Write it down on paper. Put it at the top or at the center, it doesn't really matter. Just keep space for other items.
3. **Try to achieve the goal within a timebox**. 2min, 5min, 10min, as you wish. Keep it relatively short.
    - If you failed:
        - **Revert your changes**. Undo what you did during the timebox. This is important to start fresh. 
        - **Think about what's missing**. That's your subgoal. 
        - **Write it down on your paper** and attach it to the goal you tried to achieve.
        -  **Start over from 3) with your subgoal**. 
    - If you succeeded:
        - **Commit**. You'll certainly finish before the end of the timebox, that's fine, stop the timer.
        - **Check the goal you achieved on paper**. Celebrate internally.
        - **Start over from 3) with the next unchecked subgoal available**. Start from the leaves of your Mikado graph. Iterate until you've checked your main goal.

TK: concrete example presented before, steps illustrated with pictures.
TK: benefits of baby steps => always shippable.
TK: that's the implicit technique used behind the "Refactoring" book. 
TK: why is it called Mikado
