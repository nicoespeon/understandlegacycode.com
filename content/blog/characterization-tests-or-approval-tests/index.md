---
title: >-
  What's the difference between Characterization Tests and Approval Tests?
date: 2021-08-11T09:15:00.000Z
description: "You may have heard one or the other. Now you're confused: is there a difference? Nope! Let me explain…"
image: /assets/choice-paralysis.jpg
tags:
  - approval tests
  - changing untested code
---

Before you start refactoring some Legacy Code, fellow developers would drop this advice:

> Make sure it's covered with a test first!

_Of course_, this code isn't tested. Since you have little time and deadlines to meet, people like me would advise you to use a nifty technique: [Approval Testing](https://understandlegacycode.com/blog/3-steps-to-add-tests-on-existing-code-when-you-have-short-deadlines/).

Approval Testing is the fastest way to put existing code under tests. You take some code, you throw a variety of inputs at it, and you capture outputs. Quickly, you build up a regression net that will tell you if you broke something when refactoring.

Sometimes, people are familiar with [Working Effectively with Legacy Code](https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/) from Michael Feathers. When that's the case, they usually pop the question:

> Yeah, I've heard about Approval Tests. Is this the same as Characterization Tests? Asking for a friend…

![](/assets/choice-paralysis.jpg)

And since I've been answering this question a few times already, I'm saving it here so we can all share it with our confused fellows 😉

## Yes, Approval and Characterization Tests are the same thing

The reason for the different names is because there is no recognized standard—so far. Different people came up with different names for the same technique.

What matters is the spirit of it.

First, you should understand the goal: **have tests that fail if the system behaves differently.**

The process has roughly 3 phases:

1. **Get the code run into automated tests** 👈 This typically is the hard part of the game. It involves cutting annoying dependencies. Feathers techniques will help you do that!
2. **Capture interesting output.** That may be the returned response. Or you may introduce a custom logger to capture interesting facts that happen during execution.
3. **Vary inputs as much as possible to cover all possible scenarios.** Test coverage can help you identify what you're not testing. I like to introduce deliberate bugs to verify I got at least one test fails.

"Characterization Tests" is the name that has been popularized among Feathers' audience. I think it's a good name, especially for Legacy Code.

"Approval Tests" is also a great name. I think it's even better.

_Why?_ Because of what it suggests. Name matters. Let me tell you about the other names to illustrate that—yep, there are more!

## The Golden Master and Snapshot Tests

If you've been around for a while, you may recall the Golden Master technique. Well, it's the same story. The goal is to capture existing behavior, so we can compare future changes against it.

> "The purpose of characterization testing is to document your system's actual behavior; not to check for the behavior you wish your system had"
>
> — Michael Feathers

The "Golden Master" name comes from the audio record-making industry, specifically [the process of mastering](<https://en.wikipedia.org/wiki/Mastering_(audio)>). It's the one truth from which copies can be made.

While it embeds the spirit that _what the software does is more important than what it should do_, I don't like "Golden Master" as a name. To me, it implies you won't touch it, which I don't think is a good mindset to have when dealing with Legacy systems.

I prefer "Approval" because it suggests the behavior has been _approved_ by a human, and we can change that. I think the human aspect is important to this process. We are in control of evolving the software. That means we have to make decisions on how the system behaves. "Approval Tests" expresses that!

### The (unknown) importance of a good Printer

In September 2020, [Emily Bache](https://twitter.com/emilybache) gave a talk on Approval Testing.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0ZVKcFsEp-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[At 15:40](https://youtu.be/0ZVKcFsEp-4?t=940), she presents the four parts of an Approval Test:

1. Arrange
2. Act
3. **Print**
4. Assert (compare with previous output)

The **Print** step matters to make these tests really useful. A _Printer_ is what turns the output you're capturing into a string that will be convenient to compare new values with old values.

A good Printer will scrub irrelevant and flaky data, and format the output in a way that makes sense for a human to read.

For example, here's the output captured by an approval test [in the Supermarket Refactoring kata](https://github.com/emilybache/SupermarketReceipt-Refactoring-Kata/blob/6c2fbe7ca8a8aea593fd16f12e3418dc2df1867c/java/src/test/java/dojo/supermarket/ReceiptPrinterTest.discounts.approved.txt):

```txt
----------------------------------------
Receipt date:           [date]
----------------------------------------
3 for 2(apples)                    -0.99

Total:                             -0.99
```

Notice how the data was formatted to look like an actual receipt?

Notice also that the actual date has been scrubbed (removed), because it may change between test runs.

And that's why "Snapshots Tests" also miss the point!

Snapshots have been popularized by Facebook and their testing library: [Jest](https://jestjs.io/). They are useful when dealing with Legacy Code. They help you do Approval Testing.

The name "Snapshots Tests" focuses on the action of capturing the output, and **doesn't suggest the importance of a good Printer**.

I think Jest's snapshots are generally misused. It's common to reach a point where people just update snapshots without really understanding what's going on. Therefore, despite having tests, bugs appear because there's no easy way to tell whether the change is legit.

Although the misuse of the technique isn't Jest's fault, I think Facebook should have known better and re-use the "Approval Tests" name. Instead, they came up with their own 🤷‍♂️

### "Approval Tests" will lead you to more resources

I would use this one over the other because the name leads you to convenient tools that help you do that. While you can write Characterization Tests by yourself, I recommend you have a look at [approvaltests.com](https://approvaltests.com).

The "Approvals Tests" project has a lot of resources and documentation. It is implemented in a dozen of languages.

Going further than the `approvaltests` library, you may find products like [Touca](https://touca.io/) which aim to simplify the process for you. It supports applying Approval Testing at scale, fixing the typical issues you'd have collaborating with the captured outputs.

## Call them "Approval Tests"

Now you know that the technique of capturing existing code behavior into tests has different names:

- Characterization Tests
- Approval Tests
- Golden Master
- Snapshot Tests
- Locking Tests (thanks [Maaret](https://twitter.com/maaretp))
- Regression Tests (that's how [Touca](https://touca.io/) describe itself)

Among all, I recommend referring to it as "Approval Tests". Acknowledge other names refer to the same technique.

Have a look at [approvaltests.com](https://approvaltests.com) and think about implementing a Printer to make your Approval Tests more useful.

---

Have you heard about another name for this technique?

Have you used Approval Tests without knowing it had a name?

[Let me know!](https://twitter.com/nicoespeon) 🤠
