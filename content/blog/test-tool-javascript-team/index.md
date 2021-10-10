---
title: "What unit test tool should I bring to my JavaScript team?"
date: 2021-10-05T20:35:00.000Z
image: /assets/toolbox.jpg
description: >-
  A reflection on coaching, facts, and pragmatism. Which testing framework would I recommend to devs who are not familiar with testing?
tags:
  - making others care about it
  - changing untested code
---

When you are coaching a team of developers who are not familiar with testing practices, you need to adapt your advice.

Not all techniques work for any team, in any context. Coaching your teammates towards a better way is an art that takes time, and some trial and error.

Today, I'd like to address an interesting question:

> I'm trying to get my coworkers to adopt some testing practices. We do JavaScript and most code isn't even tested. What tools should I bring to them?

![](/assets/toolbox.jpg)

This is related to JavaScript because this is what I'm working with. Yet, I believe the reflection is interesting enough to apply in many different situations. 👨‍🏫

When asking for more details, I would learn a few more things about _the context_. Usually:

- No-one in the team has experience in testing
- Adopting a new tool takes months because of the culture of the team/company
- There are not many practices in place to share knowledge (e.g. no much pairing, coding dojo, engineering retro, etc.)

In such a context, what's the best answer to give? The team clearly needs to start somewhere, even with baby steps.

If the culture is legacy, the burden is HUGE on the coach's shoulders! In particular when that person isn't even an official coach, but more of a developer who wants to improve the _statu quo_. This person is looking for the fastest and more efficient way to get the rest of the team to understand the value of automated tests!

And that's a long journey to take…

## Should it be Jest?

When it comes to the JavaScript world, as of 2021, there are two major solutions for testing:

1. [Jest](https://jestjs.io/), the popular testing framework maintained by Facebook
2. [Mocha](https://mochajs.org/), the battle-tested testing framework that stood the test of time (created in 2011, 2 years only after the first release of Node.js)

I'm omitting the (numerous) other ones because these two have the biggest communities and resources today.

Jest is very, very popular. It's what the cool kids would use because there's a lot of buzz around it. It feels modern. It's recommended around.

But if you ask my peers, most of them will tell you to go with Mocha. Mocha would be better for a few reasons:

- It's more flexible, you can adapt to any situation and style by combining it with other libraries
- It seems to be [much faster than Jest](https://github.com/artemave/node-test-runners-benchmark)
- Jest is opinionated and pushes practices that are considered anti-patterns for TDD practitioners, such as [snapshot testing](https://jestjs.io/docs/snapshot-testing)

All of this is true. I've been working with both Mocha & Jest in my career, on various applications. An experienced developer can adapt mocha to any situation and get any codebase under a fast, and solid safety net.

And yet, **I would recommend going for Jest**.

## Wait, why Jest?!

![](./why.gif)

I know. Why the heck would I recommend Jest if I know mocha is more flexible, faster, and overall the best tool an experienced developer could use for testing a legacy application?

Because of **the context** 🌈

We are not discussing the testing framework I prefer. We are not about to choose a testing framework that advanced TDD practitioners would use.

We are here to recommend a tool for a team of developers who aren't experts in testing.

And that's a whole different context!

Let's reflect on the pros of Mocha in our context.

## 3 reasons I would use Jest over Mocha

### 1) Flexibility and decisions

Mocha is less opinionated than Jest. It is much more flexible. You can combine it with other libraries to achieve your needs.

In fact, you HAVE to combine it with other libraries.

This pro becomes a con. Such flexibility is **overwhelming** when you start testing.

Writing good tests is hard. There are a lot of things to consider to find the right balance between isolating the system you want to test, but not testing the implementation details.

I've seen a lot of tests that were hard to maintain. I've seen flaky tests. I've seen tests that would fail when you try to refactor the code, even though the actual behavior of the app didn't change. I've seen tests that would not fail, even though the behavior did change but that was mocked.

Teaching how to avoid these pitfalls takes time and energy.

If you go with mocha, you have to take _a lot_ of decisions:

- Which assertion library do you prefer to use? Classical ones are [Chai](https://www.chaijs.com/), [Should](https://shouldjs.github.io/), or [Expect](https://github.com/Automattic/expect.js/)_._
- Need to spy/stub/mock? You should probably add [sinon.js](https://sinonjs.org/) to the mix.
- Need to see the test coverage? [Istanbul](https://istanbul.js.org/) has your back.
- Did you know you can customize the [reporter](https://mochajs.org/#reporters) you want to use. If you're doing front-end, then you should have a look at [Mochawesome](https://www.npmjs.com/package/mochawesome).
- If you have to deal with Legacy Code, then you should probably add [approvaltests.com](http://approvaltests.com/) to the mix

Don't get me wrong: I _love_ having such flexibility. It's a toolbox I can adapt to any situation.

But for a newcomer, that's just Too Much Information. 😬

I don't want my teammates to be spend days trying to get the proper combination that would work for that legacy codebase they have to maintain.

Consider the same scenario, with Jest:

- The assertion library [is baked in](https://jestjs.io/fr/docs/expect)
- The reporter is baked in, with powerful diffs and a nice watcher mode
- Code coverage report is embedded
- Spy/Stubs/Mocks are also included
- You can capture snapshots of the code behavior without really needing [approvaltests.com](http://approvaltests.com)

Jest hardly requires any configuration.

You do `yarn add --dev jest`, then `jest --init` and you are good to test most JavaScript projects.

There's only ONE tool to learn and a community to help.

Jest focuses on providing a delightful experience to the developers. This may become a gotcha when the magic doesn't work and you can't figure out why…

But to get the team started, that's perfect! ✨

Tiny wins, frequent delights: these traits help to get people into the habit of testing. And that's what I'm looking for at this point.

### 2) Speed and pragmatism

Let me put this one straight: **it doesn't matter that Mocha is way faster than Jest if there is no test to run**.

That is premature optimization to me, a common pitfall we get into.

With enough experience, we can tell which one is objectively better on paper. We forecast future problems we may have with one instead of the other.

But once again, we are forgetting about the CONTEXT.

We don't need to optimize for speed until we start having enough tests for this to become an issue.

![](./cheers-mate.gif)

I also speak from experience. I have [this open-source side-project](https://github.com/nicoespeon/abracadabra) where I'm using Jest to run the tests. In CI, I currently have 1.068 tests running in about 168s. That's about 160ms per test. That's slow if you ask me. Some of them are actually slower than others (I'm doing some expensive computations).

But that's **fast enough**.

When I work, I only have a subset of the tests running. Maybe 20. They run in ~3s. Actually, they run faster than that: my machine is more powerful than the shared CI server I'm using for free. 😄

When I work, they run fast enough that **I never feel like I'm waiting**. I stay in the Flow.

If I need my tests to run faster on CI, I would:

- Parallelize the tests
- Spend money to use more powerful servers

I'm quite sure I could get 12k tests and still execute all of them in under 2 minutes.

There are plenty of solutions before the major bottleneck becomes "Jest".

On the field, **the main cause of slow tests is the lack of proper design**.

Running through the database/network/filesystem in 80% of the tests is what makes it slow. I would rather spend time teaching the team how to do better than having them learn the differences between all of these new tools they have to use now.

### 3) Patterns and opinions

Mocha is flexible. You can do whatever you want with it.

Jest is opinionated. It guides you to do things a certain way.

When starting with testing, I like to let people learn by themselves following the existing guides. There aren't so many chapters. The API isn't so big neither. So there isn't much alternative to the one way of testing things.

That's a feature!

![](ma-que.gif)

Adding constraints reduces the decisions people have to make. It's a good thing when they are new to the practice.

As they learn, we will discuss the limits of the tool.

For instance, I barely ever use [Jest's manual mocks](https://jestjs.io/docs/manual-mocks). They are powerful, but I see them as an anti-pattern most of the time. It creates quirks that even Jest had to document with [a follow-up guide](https://jestjs.io/docs/bypassing-module-mocks). More importantly: there are other, better techniques you can use to test code that doesn't require you to use such magic.

[Snapshot testing](https://jestjs.io/docs/snapshot-testing) is another example of a misused practice. Snapshot tests are great for quickly writing tests on existing code you don't understand well. It's known as [Approval Testing](https://understandlegacycode.com/approval-tests), and [I wrote extensively about this technique](https://understandlegacycode.com/blog/3-steps-to-add-tests-on-existing-code-when-you-have-short-deadlines/). Yet, I've seen front-end developers using it everywhere. They would test their whole application, solely with snapshots. Should I say this creates more problems than it solves?

So granted: Jest has pitfalls. You can do bad things with Jest. Should you avoid Jest?

No.

I prefer to teach you the pitfalls, why they are problematic, and how to avoid them.

**The quality of your tests doesn't depend much on the testing framework you are using**. Most of it depends on the quality of your software architecture. Learning to test well goes hand-to-hand with learning to design your software better.

## Mocha is great. Jest is good. Adapt to the context.

Is Jest the best unit testing tool for JavaScript? Maybe not.

Yet, it has a particular focus on the developer experience. You can tell they worked hard to provide you with all the tools you need to test a JavaScript application, with a minimum of fuss.

Jest works out of the box!

That's why **I recommend Jest to JavaScript developers who are not experts in testing**. Especially if the culture makes it hard to adopt new tools because "we've always done it this way".

Less friction, more pragmatism, better results.

In my experience, Jest is also a very fine tool for experts in testing. It's not as great as a tailored Mocha could be. But the benefits of not having many moving parts to maintain usually outweigh the tradeoffs I make. That's why I also tend to go for Jest on my personal side-projects.

But I'm very happy to work on a project that uses Mocha with developers who are well versed in the art of testing. That doesn't happen quite often though. 🙂

Most of the time, I'd have to teach testing practices to JavaScript fellows.

Therefore, most of the time, I would go for Jest.

## When coaching, consider the context

Whether you are a coach, a Tech Lead, a consultant, or an individual contributor who would like to change the way things work: be mindful of your context.

I don't know your context. I can't tell you what you should do to tame that Legacy codebase.

I can only give you advice based on my experience. I can share with you techniques that solve specific problems, under specific circumstances. You can probably adapt them to your situation.

> When helping others, adapt to their context.

It's not just a legacy codebase you are working with: it's a legacy culture. There are people involved and you should factor them in your approach.

I know a lot of peers who dislike Jest for many reasons. I like Mocha a lot. Yet, in most contexts I have to work with, I think Jest is the best tool for the job.

Does that resonate with you? Did you ever recommend something that would be considered harmful in other circumstances? [My DMs are open](https://twitter.com/nicoespeon) if you want to share your stories with me! 🍷

Take care!
