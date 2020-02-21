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

## TK: 1)

Add tests. Then refactor. Then implement the new feature.

## TK: 2)

A test is not unit if:

- it doesn't run fast (> 100ms / test)
- talks to the Infrastructure (a database, the network, the file system, environment variables)

## TK: 3) Effect Sketches to identify what to test

## TK: 4) Characterization tests (link to my page)

## TK: 5) Feature Sketches to split classes

## TK: 6) Sprout/Wrap to add code when you don't have time to refactor

## TK: 7) Avoid littering direct calls to library classes in your code. You might think that you'll never change them, but that can become a self-fulfilling prophecy.

## TK: 8) Use scratch refactoring to get familiar with the code. You can do unsafe changes. Then, throw the code away.

## TK: 9) 

3 refactorings techniques to break dependencies in OOP:

1. "Extract Interface" + "Parametrize Constructor"
2. "Subclass & Override Method"
3. "Adapt Parameter" if the param is a 3rd party dependency with a complex interface. Define a new interface based on what's used, implement an adapter and replace the param.
