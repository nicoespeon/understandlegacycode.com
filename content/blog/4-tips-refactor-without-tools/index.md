---
title: "4 tips to refactor a complex legacy app without automation tools"
date: 2021-08-30T22:00:00.000Z
image: /assets/bb8.jpg
description: >-
  How do you refactor a complex legacy application when you can't rely on automation tools?
tags:
  - not sure where to start refactoring
  - approval tests
  - changing untested code
---

How do you refactor a complex legacy application when you can't rely on automation tools?

We're talking about untested, undocumented legacy codebase here. The kind that nobody knows exactly how it works—not even your client/employer!

Maybe it's running on some old stack you're not familiar with. Some language like [ColdFusion](https://en.wikipedia.org/wiki/Adobe_ColdFusion) or [lucee](https://www.lucee.org/) just look exotic to you. People who wrote that code don't work here anymore.

> I wish I could just re-engineer the whole thing!

Yeah, but we are talking about 13 years of business knowledge serving customers in production. A big bang rewrite is NOT an option.

Unfortunately, there is no tool that can help you refactor the app with such a stack… You'd be lucky to find one that could at least help with _understanding_ the app, [such as NDepend](https://understandlegacycode.com/blog/safely-restructure-codebase-with-dependency-graphs/#using-automated-tools-like-ndepend-to-save-your-day). At least .NET developers have some great tooling available. But not you. Sadness. 😓

There you are. Tooling sucks. You can't rewrite from scratch. The thing "runs" in production but pulling a string on one end makes everything break on the other one #fun

How do you approach such a beast?

![](/assets/bb8.jpg)

## 4 tips for refactoring a codebase when tooling is missing

The main question that should guide you in the process is:

> Did I break something?

If you can't answer this question, someone else will do it for you later. Worst case scenario: the end-users will be testing your changes in prod.

Working with legacy code is difficult because it's often hard to answer this question:

- the behavior is hard to reproduce
- you don't really know everything the system is doing in the first place

It's not easy. Still, you have ways to **reduce the risk of breaking something.**

### 1) Exploratory Testing: trigger those aha moments! 🕵️‍♀️

If you really don't know much about what the app does, I suggest you try the [Exploratory Testing](https://understandlegacycode.com/blog/demine-codebase-with-exploratory-refactoring/) technique.

Maybe it's a part of the system you're not familiar with. Maybe you're stumbling upon some code that's _really_ hard to read.

The trick is:

> You learn faster by actively changing the code rather than passively reading it.

You may agree. But if you're like me, you are probably afraid to _touch_ this code—what if it breaks?!

Thus, you should try this technique:

1. **Set up a timer**, so you don't end up in a rabbit hole (30min works well for me)
2. **Start changing code without caring if it still works**. Refactor away. It's fine if it doesn't even compile!
3. **When the timer rings, pause and think.** Did you learn anything? Take notes and reset your changes.

The goal isn't to refactor the code. The goal is to have a better understanding of what it does. Removing the fear of touching the code helps you do that!

You'll learn a ton during these 30 minutes!

For that reason, it is also a great idea to capture what you learned. 💡

Put that knowledge somewhere that is [easy to find, read, and update](https://understandlegacycode.com/blog/where-to-put-documentation/#the-3-traits-of-great-documentation). It doesn't need to be perfect or fancy. A little bit is better than nothing.

### 2) Approval Tests: feel safe when refactoring code ✅

> If I change this part of the code, will something break?

To answer that question 100%, you need to verify the app's behavior after the change. That's something you can do manually: you launch the app and interact with it.

If you want to go faster, it's a good idea to automate this.

I'd recommend starting with E2E tests. Automate what you'd manually do, from the end-user perspective. Start the app and have something to automate the clicks and keystrokes you'd enter yourself.

If you're dealing with a web application, I suggest you take a look at [Cypress](https://www.cypress.io/).

That's for the large picture. Another, tremendously useful, technique for covering some code with tests is called [Approval Testing](https://understandlegacycode.com/approval-tests).

The gist of Approval Testing is to capture _what the system does_ instead of writing the tests _you think it does._

You may have done this already, without knowing the name of the technique:

1. Execute some code in an automated test suite
2. Capture the output
3. Assert the code produces the same output when the test runs again

Tools like [approvaltests.com](https://approvaltests.com/) and [Touca](https://touca.io/) can help you in doing so.

Putting the code under test is usually a challenge. To find safe ways in doing so, I recommend you to read [Working Effectively with Legacy Code](https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/).

My own ⛑ [First Aid Kit](https://understandlegacycode.com/first-aid-kit) also contains a few techniques to do so.

#### But what if there's a regression _elsewhere_?

Now, there's still a flaw in this advice: what if changing this part of the code has unexpected side-effects that you can't anticipate? 😱

I don't have a silver bullet here. Yes, you may introduce a regression because you couldn't expect the relationship with this piece of code.

However, it's not because an approach is not 100% efficient that it shouldn't be adopted. We're not aiming for perfection, but for something _better._

Experience will do the rest.

### 3) Atomic Refactorings: know the safe moves without the tools 😎

Refactoring is the practice of changing the code structure, without changing its observable behavior.

Most developers would say that they know how to refactor. Yet, the way most developers refactor is _risky_.

This is the kind of discipline that looks trivial, but really isn't. Automated tests make refactoring safe and sweet. But sometimes, you don't have tests.

Worse: you can't put the code under tests without refactoring it FIRST!

In this situation, tools can have your back. Many IDEs have a set of **automated refactorings** that allow you to refactor code safely, even when tests are missing. Handy.

But what if you have no such tools?

Then I recommend you to read Martin Fowler's excellent book: [Refactoring](https://martinfowler.com/books/refactoring.html).

![](./refactoring-cover.jpg)

The second edition was published in 2018. It will teach you how to decompose your refactoring into safe, tiny steps. Baby steps. 🐾

The core idea is to spend **as little time as possible in a "broken" state**. Instead of renaming a variable, first, make a copy and gradually replace the references to the old name with the new one. Once you're done, delete the old name.

That sounds longer to perform. It will be… at first. With practice, you'll be able to chain the steps faster and faster. With the added benefits of not making any mistake, since it's easier to get a baby step right than a big one.

> Slow is smooth. Smooth is fast.
>
> — [U.S. Navy Seals](https://www.lesswrong.com/posts/4FZfzqMtwQZES3eqN/slow-is-smooth-and-smooth-is-fast)

Whenever you can, write Approval Tests before you continue refactoring. That will give you the confidence you didn't break anything in the process.

### 4) Ship of Theseus: progressively migrate to a new codebase ⛵

If your plan is to rewrite the whole thing, think twice.

Big bang rewrites are usually a bad idea—except if your clients expect a _new_ product. If there's pressure to maintain the existing software, to make sure "users won't notice", then re-engineering from scratch is definitely NOT what you should do.

You can still rewrite, but you need to take a more subtle approach. Baby steps. 🐾

Instead of starting from scratch, **rewrite a chunk**. Progressively replace the old system with something new. This requires more coordination, but you'll get major benefits:

- **Faster feedback loop**. You'll be able to ship your (small) rewrite to production within weeks instead of months, then see if it's working fine.
- **Reduced risk**. Since you rewrite less, less can go wrong.
- **More flexibility**. You can prioritize the chunks in an order that makes sense.

This approach has a name. It's usually known under the name "Strangler Fig" pattern. I prefer to call it [the "Ship of Theseus" pattern](https://understandlegacycode.com/blog/ship-of-theseus-avoid-rewrite-legacy-system/).

It doesn't require specific tools or technology. The philosophy is to introduce a proxy that will redirect some features to the new system instead of the old one, without the client noticing.

This way you can do a smooth transition between systems.

The best part of this technique happens when, inevitably, your client/employer will come to your team in a few weeks to add a new critical feature or fix some urgent bug in the legacy app. Don't forget to pat yourself on the back for not having to duplicate the work in the legacy AND the rewrite. 👍

## Well, it's an interesting challenge

I think that being able to migrate a running codebase to a cleaner state is a valuable skill to develop!

**It's not easy to do**. Usually, the code isn't tested and deadlines are short. This pressure prevents most teams from getting out of their comfort zone to improve the situation.

That's the main focus of my ⛑ [First Aid Kit](https://understandlegacycode.com/first-aid-kit): provide developers with concrete techniques they can apply when facing legacy systems. If that's you, I'm convinced it will be useful.

Besides learning the techniques, taking some time to practice also helps. If you're looking for some exercises, I've put a list of [5 coding katas you can practice on](https://understandlegacycode.com/blog/5-coding-exercises-to-practice-refactoring-legacy-code/).

I hope that helps!
