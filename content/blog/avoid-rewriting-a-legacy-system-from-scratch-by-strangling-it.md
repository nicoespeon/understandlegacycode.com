---
title: 'Avoid rewriting a legacy system from scratch, by strangling it'
date: 2020-02-10T21:06:13.397Z
description: >-
  When application becomes impossible to maintain, a rewrite is very tempting.
  But it could make things worse.
---
As we speak about legacy project, it common to reach a point where there's so much technical debt that you can't implement new features anymore.

The code was hacked around repeatedly. And you've reached the **point of no return**.

## Facing the beast, you try to find a solution to move on!

Maybe you tried to rework parts of the app, but every refactoring pulls the rest of the app. 😭

Maybe you tried to write unit tests before you can do change, but that code wasn't designed to be testable in the first place! 😬

Maybe you think that you should just freeze the app and stop touching it anymore… 😫

> What to do if you need to change code that's impossible to maintain, without making it worse?

## Is rewriting from scratch a good idea?

Sometimes, code is  **risky to change** and **expensive to refactor**.

In such situation, a seemingly good idea would be to rewrite it, from scratch. Here's how it goes:

1. You discuss with management about the strategy of stopping new features for some time, while you rewrite the existing app.
2. You estimate the rewrite will take 6 months to cover what the existing app does.
3. Few months in, a nasty bug is discovered and ABSOLUTELY needs to be fixed in the old code. So you patch the old code and the new one too.
4. Few months later, a new feature has been sold to the client. It HAS TO BE implemented in the old code—the new version is not ready yet! You need to go back to the old code but also add a TODO to implement this in the new version.
5. After 5 months, you realize the project will be late. The old app was doing way more things than expected. You start hustling more.
6. After 7 months, you start testing the new version. QA raises up a lot of things that should be fixed.
7. After 9 months, the business can't stand "not developing features" anymore. Leadership is not happy with the situation, you are tired. You start making changes to the old, painful code while trying to keep up with the rewrite.
8. Eventually, you end up with the 2 systems in production. Long-term goal is to get rid of the old one, but the new one is not ready yet. Every feature needs to be implemented twice.

Sounds fictional? Or familiar?

Don't be shamed, **it's a very common mistake**.

### In my current project, we're dealing with exactly that!

We have 2 systems working in parallel: a `cart` and a `booking`. `booking` was supposed to replace `cart`.

The project started 3 years ago. But it was never finished! `booking` is *better* than `cart`, but it's not as *complete*. Some purchase flows use `booking`, but a lot still use `cart`. 

Now, new features cost twice the time to implement.

And here's the fun part: because `cart` is not designed to support the new features we want and `booking` is too out-of-date, it was proposed to "rewrite `cart` properly" 😏

If we go there, you can bet we'll soon have 3 systems running in parallel in a few months.

Hopefully, **we won't go there**. 

I know an efficient technique to work around a legacy system. The technique is **to strangle it**.

## How to strangle a legacy code

> Progressively delete the old code base in favour of a new one.

Here's the plan:

* **Have the new code acts as a proxy** for the old code. Users use the new system, but it just redirects to the old one.
* **Re-implement each behavior to the new codebase**, with no change from end-user perspective. 
* **Progressively fade away the old code** by making users consume the new behavior. Delete the old, unused code.

TK: schema cart & booking plan with/without rewrite

The best part of it is that you solve the problem of delivering new features during the rewrite.

With this technique, you're not duplicating the code. You don't need to implement new features twice!

Also, you put the new system in production as soon as possible. You get feedback sooner, which means **less work** and **less risk of breaking things**.

Finally, you can roll-out the rewrite progressively. No need to freeze code.

TK: Strangle Fig pattern by Martin Fowler in reference to the tree

![A Strangler fig tree](/assets/david-clode-y_l5tep9wxI-unsplash.jpg)

TK: Wrap method/class in Working Effectively with Legacy Code by M. Feathers

TK: DDD by Eric Evans propose to approach existing non-DDD app like that
