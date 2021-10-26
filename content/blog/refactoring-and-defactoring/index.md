---
title: Refactoring vs. Defactoring
date: 2021-10-26T16:47:00.000Z
image: /assets/tangled-up.jpeg
description: "Some thoughts about refactoring and the opposite operation: defactoring."
tags:
  - refactoring
  - not sure where to start refactoring
---

"Refactoring" is an abused word, in my experience.

When most developers talk about "refactoring the code", they really mean "restructuring the code". Rewriting it. Certainly to make it better and fix some bugs. That will be a mix of re-organizing the code, changing the modeling, and modifying some behavior along the way—for the best!

That's not what I mean.

When I say "refactoring", I'm referring to Martin Fowler's definition of it:

> **Refactoring (noun)**: a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior.

Fixing a bug is not refactoring. Adding a new feature is not refactoring. But we may refactor before we fix a bug or add a feature.

Actually, it's a good idea to do so.

It's also a good idea to keep these 2 phases distinct.

![](/assets/tangled-up.jpeg)

## Don't mix refactorings & behavior changes.

In a recent post, Jason Swett shared this very advice: [don’t mix refactorings with behavior changes](https://www.codewithjason.com/dont-mix-refactorings-behavior-changes/).

Jason explains why it's a problem to mix these:

1. It adds risk to break something without realizing it.
1. It's harder to find what change created a bug.
1. It makes code harder to review.

Instead, he recommends refactoring code in a new branch and getting this branch merged into the main one, so you can get this back in your feature/bugfix branch.

I think that's good advice overall.

In my experience, there are other things that can help:

1. **Distinct commits that contain refactorings from commits that introduce changes**, even without creating a branch.
1. **Commit more frequently**, so 1) is easier to do.
1. **Prefix your commit message with `R` for refactoring and `C` for the other kind of changes**. It makes it easier to review the code. That's my lightweight version of [Arlo's commit notation](https://github.com/RefactoringCombos/ArlosCommitNotation).
1. **Learn and use automated refactorings**. Some IDEs provide that out of the box. Others have extensions. Automated refactorings are fast and safe—even when you don't have tests. Refactor one thing > commit. Move on.

I think this is more than a technique. It's a mindset.

It has changed the way I code just like learning git did. I wasn't aware you could work like that before. It took some time and practice until I finally understood it. Now, it just feels natural. It makes my work much safer and simpler. I am more aware of what's going on, so I can put my best quality into my work. 🏆

Think about it as wearing 2 different hats:

1. With the _Refactoring hat 🎩_, you are not allowed to change the way the code works.
1. With the _Change hat 🧢_, you can change code behavior, but you try to minimize that change.

When you work on the code, you would constantly switch between these two. But you would be _aware_ of doing that.

So you want to fix a bug. But you see some badly named variable here. You put your _Refactoring hat 🎩_ on and you rename the variable. Commit. Done.

Then, you put your _Change hat 🧢_ on to add the missing fallback value where it should be. While doing so, you realize this code would be easier to read if it uses a guard clause instead of being nested. **STOP!**

You are wearing the _Change hat 🧢_, so you shouldn't be refactoring.

You actually have two options:

1. **Commit the change**. Put the _Refactoring hat 🎩_ on and use a guard clause. Commit again.
1. **Revert the change**. Put the _Refactoring hat 🎩_ on and refactor the code. Commit. Put the _Change hat 🧢_ on and do the change on the transformed code.

In this case, I would probably do 1). In other scenarios, I would do 2).

You may do a lot of 2) and ship an intermediate Pull Request with all of these refactorings. They aren't supposed to change code behavior, so they are easy to review. They also make it easier to make my actual change later!

Or maybe you would ship both the refactorings and the code change in the same PR. That is fine if they are in different commits—ideally, refactoring commits first.

The actual change is small, therefore it is easier to review.

What matters is really to distinct refactoring moves from the rest of the changes.

## Defactoring

There is a particular kind of refactoring I would like to focus on: Inlines.

_Inline Variable_ for instance. That is a refactoring move. The code will behave the same, whether or not the variable is extracted or inlined (and duplicated).

If you think about it, _Inline Variable_ is the reverse operation of _Extract Variable_. Extracting variables is a common move we do to reduce duplication, increase abstraction, and overall make the code easier to read.

So why on Earth would you want to _Inline Variable_? 🤨

That's an interesting question. While some editors have automated the _Extract Variable_ refactoring, most of them won't inline things for you. It feels like second-class refactoring. And yet, I think it's a core one.

There are different reasons why you would inline a variable:

- **The variable name doesn’t tell you more than the expression itself**. In this case, the variable adds unnecessary indirection. Inlining reduces the cognitive complexity (less moving parts).
- **The variable gets in the way of another refactoring**. This happens when previous abstractions aren’t the best anymore, and you want to go another way.

I find myself using this refactoring often to remove a temporary variable that has no more use. For instance:

```js
function addParens(value) {
  const string = `(${value})`
  return string
}
```

The string intermediate variable doesn’t add much value. We fall into scenario #1. I would inline this to get rid of the noise:

```js
function addParens(value) {
  return `(${value})`
}
```

Think about Inlining as a _defactoring_.

I defactor a lot when I work with Legacy Code. I temporarily inline things to get a better understanding of what the code is doing. Then, I revert. Or maybe I extract things differently.

Defactoring is a _cognitive refactoring_. Making the code less abstract can help you process what's going on. There are fewer things to hold in your brain. Less scrolling back and forth. Some abstractions aren't necessary anymore, like this temporary variable above. Getting rid of the indirection can make the code easier to maintain.

Defactoring is also a common move before refactoring the code differently. Old abstractions may not be good enough anymore. Requirements change all the time, and we should adapt the code constantly.

[In this post](https://jimmybogard.com/domain-driven-refactoring-defactoring-and-pushing-behavior-down/), Jimmy Bogard illustrates how you would defactor to prepare for extracting domain code.

## Refactoring

At the end of the day, good abstractions are a matter of balance. It takes practice and experience to find the sweet spots that will make your code easier to maintain.

If you want to go down that path, I have a few recommendations for you.

Learn what your editor can automate for you. Some IDE like Jetbrains ones (ReSharper, Webstorm, PHPStorm…) can do a lot! Others like VS Code have extensions to help you do so—if you are doing JS/TS with VS Code, [you should have a look at Abracadabra](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra).

For what can not be automated, learn the moves. [Martin Fowler's Refactoring book is the reference](https://martinfowler.com/books/refactoring.html).

![](./refactoring-cover.jpg)

If you are looking for something more interactive, [Refactoring Guru](https://refactoring.guru/) can be useful in my opinion. I like that their catalog has public code examples. A nice complement to Fowler's book.

This topic is so interesting that I'm working on a course myself. My goal is to teach JavaScript developers to refactor legacy codebases safely. Unlike a book, the course will be interactive—I learn better when I do things, and I know I'm not the only one 😉

I'm also leveraging my own experience to build a learning path that makes sense for JS devs: start with the common ones, then learn more complex moves that require mastering the basics, etc.

If that is something you are interested in, let me know. I will give you some updates when I have more details.

In any case, practice your refactoring skills on [these 5 coding exercises](https://understandlegacycode.com/blog/5-coding-exercises-to-practice-refactoring-legacy-code/). They are tailored for working with Legacy Code!

What is your own experience with Refactoring? Are you used to switching hats? 🍻
