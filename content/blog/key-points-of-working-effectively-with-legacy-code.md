---
title: >-
  The key points of Working Effectively with Legacy Code
date: 2020-02-21T02:05:52.092Z
description: "This book is a reference. Here's my review of its salient points so you understand why it's so recommended."
---

> "Legacy Code is code without tests"

If you've come across that definition, it's from Michael Feathers' book: [Working Effectively with Legacy Code](https://www.google.com/search?q=working+effectively+with+legacy+code).

While I have [a slightly extended definition](./what-is-legacy-code-is-it-code-without-tests/), this is a very valid and useful one!

Feathers' book is from 2004. Yet, its content doesn't get outdated. There is a reason for that and [this CommitStrip](http://www.commitstrip.com/en/2019/03/13/like-a-good-wine) puts it best:

![Working Effectively with Legacy Code is like a good wine: it gets better with age](/assets/legacy-code-commitstrip.png)

This book is a reference. Probably THE reference.

When there's a thread about Legacy Code, it doesn't take long for someone to drop a comment suggesting you to read it.

> I didn't read it. I've seen it's recommended. But what are the key points of that book?

If that's you, I got your back!

Here's my review of the salient points of the book and how they can help you deal with your existing codebase.

## First add tests, then do your changes

The challenge with changing existing code is to preserve the existing behavior.

When code is not tested, how do you know you didn't break anything?

You need **feedback**. Automated feedback. This is the first thing you need to do: write the tests.

Only then you'll be safe to change the code and refactor.

Your goal is to get there. The point of the book is to show you _how_ you can get there when you have to deal with an impossibly convoluted codebase. Which leads to the next point…

## Put code under tests: the Legacy Code dilemna

Before you change code, you should have tests in place. But to put tests in place, you have to change code.

This is the paradox of Legacy Code!

So, how do you go about it? Are you doomed?

You're not. But you should be extra careful until you got tests in place. You should perform minimal, safe refactorings.

**Change as little code as possible to get tests in place.**

The recipe is:

1. Identify change points (Seams)
2. Break dependencies
3. Write the tests
4. Make your changes
5. Refactor

Once you get to the tests, you know how to proceed. The first two points are the challenging ones.

## Identify Seams to break your code dependencies

Adding tests on the existing code can be challenging.

Hell, it's usually a nightmare!

That's because the code was not written to be _testable_ in the first place. 99% of the time, this is a dependency problem: the code you want to test can't run because it needs _something_ that's hard to put in the test.

Sometimes it's a database connection. Sometimes it's a call to a third-party server. Sometimes it's a parameter that's complex to instantiate. Usually, it's a complex mix of all that.

To test your code, you need to **break these dependencies** in the tests.

Therefore, you need to identify **Seams**.

> A Seam is a place to alter program behavior, without changing the code.

There are different type of Seams. The gist of it is to identify how you can change the code behavior without touching the source code.

If your language is Object-Oriented, the most common and convenient Seam is an object.

Consider this piece of JavaScript code:

```js
export class DatabaseConnector {
  // A lot of code…

  connect() {
    // Perform some calls to connect to the DB.
  }
}
```

Say the `connect()` method is causing you problems when you try to put code into tests. Well, the whole class is a Seam you can alter.

You can extend this class in tests to prevent it from connecting to an actual DB:

```js
class FakeDatabaseConnector extends DatabaseConnector {
  connect() {
    // Override the problematic calls to the DB
    console.log("Connect to the DB")
  }
}
```

There are other kind of Seams but you get the idea.

If your language allows you to change code behavior without altering the source code, you have an entry point to write the tests.

Speaking about tests…

## Unit tests are fast and reliable

Discussions about testing best practices usually turn into heated debates. Should you apply the [Pyramid of Tests](https://martinfowler.com/articles/practical-test-pyramid.html) principle and write a maximum of unit tests? Or should you embrace [the Testing Trophy](https://kentcdodds.com/blog/write-tests/) instead and write mostly integration tests?

> Why are people giving contradictory advice?

Because **they don't have the same definition of what a "unit" is**. Thus, some people talk about "integration tests" when others talk about "unit tests".

To avoid any confusion, Michael Feathers gives a clear definition of **what is NOT** a unit test.

In short, your test is not unit if:

1. it doesn't run fast (< 100ms / test)
2. it talks to the Infrastructure (e.g. a database, the network, the file system, environment variables…)

Write a maximum of tests that have these 2 qualities. How you call them doesn't matter.

Now, sometimes it's really hard to write such tests TK: transition

## Characterization tests (link to my page)

Characterization tests is a way to move on when you don't know what it's doing.

Also when you don't have much time TK: link to approval tests

TK: transition

## TK: Sprout/Wrap to add code when you don't have time to refactor

TK: transition

## Use scratch refactoring to get familiar with the code

When you've to work with a code that you didn't wrote, is not tested and poorly documented, it's overwhelming!

You know that you first need to break its dependencies and put that into tests. But where do you even start?

A good technique is _scratch refactoring_!

The goal is to **get familiar with the code, not to actually clean it**.

The only rule is: revert your changes when you're done. If you do that, then you can do unsafe changes.

You're free to play with the code as much as you want. Extract things, simplify code, rename variables… Play with the code so you get to know it. Once you know it, revert your changes and start over with proper tests.

TK: transition

## TK: Avoid littering direct calls to library classes in your code. You might think that you'll never change them, but that can become a self-fulfilling prophecy.

## Should you read that book, it still look old?

**Of course you should.**

You have to deal with Legacy Code every day. This is one of the most actionable resource you can find on the topic.

You might have read (or listed) other books such as Clean Code and Refactoring. These are must reads too. But I recommend to start with Working Effectively with Legacy Code.

If you want to refactor your code, you first need to put tests on it. And putting tests on an existing, tangled mess is the point of Michael Feathers' book.

> But the code examples are in Java and C++ and I do python / JavaScript / ruby / …

Granted, you might not feel familiar with the code example.

But that's OK for 2 reasons:

1. Legacy Code is not always easy to read, so that's actually relevant. It's a skill you need to practice.
2. Java code is object-oriented code that you should be able to understand.

This review gives you a good overview of what kind of advice are in the book. There are more! The book goes in details into _how_ you apply that on different use-cases. If you liked this review, you'll enjoy the book.

And you'll _love_ the content I publish every week!

Subscribe to my newsletter to receive my Legacy Code tips & tricks, directly in your inbox, every Wednesday.
