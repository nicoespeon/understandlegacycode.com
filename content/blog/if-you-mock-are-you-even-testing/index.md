---
title: If you mock, are you even testing?
date: 2020-06-15T21:48:27.306Z
image: /assets/is-it-reality.jpg
description: >-
  Is this the real code? Is this just fantasy? Let's discuss the problem with unit testing Legacy Code and an approach you can take.
tags:
  - best practice or code smell?
---

Have you ever felt like you're making the code harder to read for the sake of testing?

Imagine, you have this existing code and it's not tested. It does a bunch of side-effects. People say you should put that code under tests before touching it.

So you begin to follow advice like [passing globals as parameters](https://understandlegacycode.com/blog/best-way-to-handle-global-variables) or [extracting problematic side-effects to mock them in tests](https://understandlegacycode.com/blog/quick-way-to-add-tests-when-code-does-side-effects).

But the more you go, the more it feels off. You end up with a lot of mocked states and data so you can write your _fast and reliable_ unit tests. In the end, it looks like you've created an entirely different class that doesn't accurately represent the actual code.

You pause and think:

> "Is it fine to change code signatures for the sake of testing?"

> "Am I testing the actual code or an entirely different class where real things won't happen?"

This might create a dilemma for you. Are you sure it's worth continuing with this approach or is it a waste of time?

The million-dollar question is: **should you rather write unit or integration tests on Legacy Code?**

## The paradox 🤯

You may have come across one of these gifs:

![](./unit-vs-integration-doors.gif)

![](./unit-vs-integration-windows.gif)

I don't know you, but they hit reaaaally close to home here. That's funny because that's true (and it hurts).

So yeah, people say you should mock problematic dependencies and write unit tests. Yet, at some point, it feels like there is a growing blind spot in your tests. What guarantees the code will behave correctly when using the actual database in production?

Wouldn't you catch more issues if you integrated with the _actual_ database?

This is a dilemma I've come across too! I've been a long time promoter of the [Testing Pyramid](https://martinfowler.com/bliki/TestPyramid.html). It says you should write more unit tests because they are fast and more reliable than integration tests.

I also do a lot of front-end. The mantra "_Write tests. Not too many. Mostly integration._" has been growing in the past few years, [promoted by Kent C. Dodds](https://kentcdodds.com/blog/write-tests/). Kent is a very smart guy who's a reference in testing front-end applications. Hey, you even have tools like [Cypress](https://www.cypress.io/) to test most of your web applications with end-to-end tests! Closer to the user!

So, how do you solve that paradox? Who's doing it right? Should you mock things so you can have fast and reliable tests? Or should you mostly write integration tests, which can be more brittle but catch more issues?

Before we dive in, let me tell you that **it's a great thing** you're having this dilemma. It looks like a problem, but it means **you're moving in the right direction**! In fact, it's a natural roadblock to hit and you will overcome it. There's a solution to this riddle.

## A practical view on testing 🚥

I let that problem sink in for a while and practiced different approaches. Finally, it clicked after a memorable discussion I had with [J. B. Rainsberger](https://twitter.com/jbrains) 💡

I realized that there's no paradox, but different definitions of what a "unit" is.

In fact, I think "unit" is a poor choice of word because it's misleading. People have different points of view of what a "unit" is. Typically, newcomers to testing think a unit is a function or a method. Then, they realize it might be the whole class or module. The truth is, as many things in life, It Depends™.

![](./it-depends.jpg)

### Isolated tests

I don't think "unit" and "integration" tests are clear enough. By categorizing tests like that, it makes people create problems and debate while they agree on the end goal: making software easier to change by having fast, accurate feedback when you break things.

Therefore, I prefer to talk about "isolated" tests.

Well, actually, I'm not sure it's a better word. I still like it because it raises the question that I think is the critical one: **isolated from what?**

My answer is: isolated from what's tricky to test.

### Things that are tricky to test

These are randomness, time, network, filesystem, databases, etc.

That's what I call "Infrastructure". The rest, I define that as the "Domain". _Domain vs. Infrastructure_ seems a very useful and practical vision of software design to me. In fact, it's not just me. This distinction is at the heart of many maintainable software architectures like Hexagonal Architecture (aka Ports and Adapters), Onion Architecture, Clean Architecture, Functional Core / Imperative Shell, etc.

These are all different nuances that share a common one truth: **Domain and Infrastructure are best kept separate**. That's also what Functional Programming naturally promotes: isolate side-effects at the edge of your system. Side-effects are Infrastructure. Infrastructure is painful to test.

### Sure, but how is that helpful?

In short, this gives you a direction for what to extract and mock. Don't move business logic in the Infrastructure, or it will be painful to test.

Domain isolated from Infrastructure is easy to test. You shouldn't need to mock other Domain objects. You can use the actual code that's used in production. The "only" thing you get rid of is the interaction with the Infrastructure.

> "Yeah but you can still have bugs in your Infrastructure code!"

If you keep it narrow enough, you're limiting the risk. But mostly, you're reducing the surface of code that you need to test in integration with an actual database.

The gist of it is: you should be able to test all the different behavior of your application without having to persist data in a PostgreSQL database. An in-memory database should do. You still need to check that your integration with a PostgreSQL database works, but you can do that with only _a few_ tests, and that makes the difference!

This is theory and all, but let's get back to our reality: existing code that's not tested.

### I/O-Free and I/O-Dependent tests

👍 I really like [Ted M. Young's nomenclature](https://ted.dev/articles/2023/04/02/i-m-done-with-unit-and-integration-tests/) of "I/O-Free tests" and "I/O-Dependent" tests.

"I/O" is everything that is external to your application code at runtime (eg. database, 3rd parties, system's clock…). It is what I called the "Infrastructure" earlier. "Infrastructure" comes from the Domain-Driven Design world, but it's often confused with DevOps/Docker/containers stuff. I/O may work best. It depends on who you are talking to.

### What good tests look like?

Kent Beck came up with [a list of characteristics](https://kentbeck.github.io/TestDesiderata/) of what make tests useful.

Beyond the nomenclature, I often find myself go back to this list to ask myself how existing tests can be improved, and what traits we should strive for.

## Back to Legacy Code 🦄 🌈

I think this view on testing can guide you. You shouldn't mock a lot. But dealing with Legacy Code, you will have to. Temporarily. Because the code is a tangled mess of things that are hard to test (Infrastructure) and business logic (Domain).

What you should aim for is to extract the Infrastructure code out of the Domain code.

Then, **make the Infrastructure depends on the Domain and not the reverse**. Keep the Infrastructure low in business logic. You'll have fast, reliable isolated tests to cover most of your application logic and a few integrated tests to verify your Infrastructure code does work with an actual database / external API / system clock…

Will you still have mocks? Yes and no 🤷‍♂️

You'll have alternative implementations on the Infrastructure, so you can still run your production logic without using an actual DB to store things.

How do you know the DB implementation works correctly? Because you'll still write a few integrated tests. Just enough to verify the implementation behaves correctly. This is what J. B. Rainsberger calls "Contract Tests". I think it's best illustrated [with this example](https://blog.thecodewhisperer.com/permalink/surely-the-mars-rover-needed-integrated-tests-maybe-not).

## A recipe you can follow 📝

Here's a process to approach Legacy Code:

1. **Use the [Extend & Override technique](https://understandlegacycode.com/blog/quick-way-to-add-tests-when-code-does-side-effects/) to break painful dependencies**. It's a good first step that works. Cut the Infrastructure part from the rest of the code so you can start writing tests.
2. **Invert the dependency between the code and the extracted Infrastructure**. You do that by using Dependency Injection. This is where you need to make design decisions: can you group some methods you extracted into a coherent class? E.g. group things that are related to storing/retrieving stored data. This is your **Infrastructure adapter**.
3. **If your language is statically typed, extract the interface from the class you've created**. It's a simple and safe refactoring. It allows you to finalize the dependency inversion: make your code depends on the interface and not the concrete implementation that you extracted.
4. **In your tests, provide a fake implementation to this interface**. Typically, this implementation will store things in memory. It should follow the same interface and behave similarly to the production implementation you've extracted.
5. **Write a Contract Test.** This guarantees your fake implementation and the production one both behave as you expect! A contract test verifies that implementations of the interface work as intended. As you run the same series of tests on both your fake and production implementations, you know you can trust your isolated tests. You're safe!

   [Here's a great starter on the topic](https://blog.thecodewhisperer.com/permalink/getting-started-with-contract-tests).

6. **Make the interface expresses business needs instead of implementation details**. That's where I recommend you push the design towards. But that comes with practice and it should not be a blocker.

When you do that, you make 80% of your code a breeze to test because there's no problematic stuff in the middle. You still have a few tests that verify things connect correctly, but you don't carry that burden while testing pure logic. No more blind spot!

You also improve the overall design and maintainability of the code. First, you'll highlight how much dependencies your code really has. The more you make it explicit, the easier it will be to identify missing abstractions that will simplify your code furthermore.

Finally, testable code means it's easy to re-use. This comes with lovely side-effects on developer experience… which is something I'm sure you will finally taste someday.

## You will do fine 👐

This is not easy stuff.

It took me a few years to make my mind around it. And I'm still reading, listening, and practicing to test this approach against different scenarios (so far, it works).

But all of this is important. Testing, software architecture, and Legacy Code: all of these skills are inter-related. By practicing one, you're also growing in the others, which I think is great news!

You might feel it's a lot of work and you won't do that right now because you don't have time.

I say it's a lot of practice. If you need to, [here are exercises you can use](https://understandlegacycode.com/blog/5-coding-exercises-to-practice-refactoring-legacy-code/).

But here's the final relief: **you don't have to do all 6 steps at once.** You can do that iteratively. It takes a bit of faith in the process (that's why it's good to practice), but it works. If you are worried about wasting time by mocking too much, that's because you're still at step 1. Push further! You should have fewer mocks and more confidence that your tests are accurate.

Infrastructure adapters + Contract Tests = the missing pieces of the Legacy Code jigsaw 🧩

So get back to work and keep writing those tests. Then, go beyond 👍
