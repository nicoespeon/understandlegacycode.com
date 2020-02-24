---
title: >-
  X key points of / advices from / Review of "Working Effectively with Legacy
  Code"
date: 2020-02-21T02:05:52.092Z
description: 'TK: The book is a reference, here''s my review of the salient points for you'
---
TK: that's too much info in one post. Also, we'll need to introduce Feathers' Legacy Code definition + concept of Seams.

Some points could be turned to independent posts: refactorings, sketches (but it's a key point so maybe keep mentioning it), sprout/wrap techniques

It would be nice to get my comments on top of each & conclusion of why this can be really helpful.

TK: add CommitStrip image with link

## First add tests, then do your changes

The challenge with changing existing code is to preserve the existing behavior.

When code is not tested, how do you know you didn't break anything?

You need **feedback**. Automated feedback. This is the first thing you need to do: write the tests. Only then you'll be safe to change the code and refactor.

## Identify Seams to break your code dependencies

Adding tests on the existing code can be challenging. Hell, it can easily become a nightmare!

That's because the code was not written to be testable in the first place. 99% of the time, this is a dependency problem: the code you want to test can't run because it needs something that hard to put in the test.

Sometimes it's a database connection. Sometimes it's a call to a third-party server. Sometimes it's a parameter that's complex to instantiate. Usually, it's a complex mix of all that.

To test your code, you need to break these dependencies in your tests.

Therefore, you need to identify **Seams**.

> A Seam is a place to alter program behavior, without changing the code.

TK: Examples of Seams in JS

## Unit tests are fast and reliable

Discussions about testing best practices usually turn into heated debates. Should you apply the [Pyramid of Tests](TK: link) principle and write a maximum of unit tests? Or should you embrace [the Testing Trophy](TK: link) instead and write mostly integration tests? 

Why are people giving contradictory advice on this?

That's because **they don't have the same definition of what a "unit" is**. Thus, some people talk about "integration tests" when others talk about "unit tests".

To avoid any confusion, Michael Feathers gives a clear definition of **what is not** a unit test.

In short, your test is not unit if:

1. it doesn't run fast (< 100ms / test)
2. it talks to the Infrastructure (e.g. a database, the network, the file system, environment variables…)

Write a maximum of tests that have these 2 qualities. It's what matters the most.

## TK: 3) Effect Sketches to identify what to test

## TK: 4) Characterization tests (link to my page)

## TK: 5) Feature Sketches to split classes

## TK: 6) Sprout/Wrap to add code when you don't have time to refactor

## TK: 7) Avoid littering direct calls to library classes in your code. You might think that you'll never change them, but that can become a self-fulfilling prophecy.

## Use scratch refactoring to get familiar with the code

When you've to work with a code that you didn't wrote, is not tested and poorly documented, it's overwhelming!

You know that you first need to break its dependencies and put that into tests. But where do you even start?

A good technique is *scratch refactoring*!

The goal is to **get familiar with the code, not to actually clean it**. 

The only rule is: revert your changes when you're done. If you do that, then you can do unsafe changes.

You're free to play with the code as much as you want. Extract things, simplify code, rename variables… Play with the code so you get to know it. Once you know it, revert your changes and start over with proper tests.

## TK: 9) 

3 refactorings techniques to break dependencies in OOP:

1. "Extract Interface" + "Parametrize Constructor"
2. "Subclass & Override Method"
3. "Adapt Parameter" if the param is a 3rd party dependency with a complex interface. Define a new interface based on what's used, implement an adapter and replace the param.
