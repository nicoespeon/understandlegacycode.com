---
title: Don't make Clean Code harder to maintain, use the Rule of Three
date: 2020-03-30T21:47:33.298Z
image: /assets/overwhelmed.jpg
description: >-
  If you worry that following clean code practices create more code to maintain, here's a way out.
---

## Question

"How do you justify more code being written by following clean code practices?"

![](/assets/overwhelmed.jpg)

### Proof

Applying Clean Code principles, you feel you add "a bunch of use-once helper functions for readability sake"

You "end up creating more classes to achieve other pieces of functionality"

"what could be a method of 30 lines, ends up being a class"

you end up with many classes instead of one to achieve the same thing

### Proof 2

"we are a very small team supporting a relatively large and undocumented code base (that we inherited)" so "writing less code to get things done" is "less code to maintain"

Thus, LOC is not the only metric but it's important. Don't use LOC as a metric for code maintainability.

### Proof 3

Short code isn't more readable, see code golf & BrainFuck. But these are strawman arguments. "Any practice taken to the extreme can be harmful"

Write code "for other people to read, not for the computer itself"

Still, aren't we smart enough to read long functions?

## Answer

"Premature refactoring is the root of many bad things". Don't do it to apply Clean Code principles.

Sure you can encapsulate a conditional. But if it's not more readable and you just end up reading it, it's not helpful.

Maybe you shouldn't extract everything, only if you need to extract a responsibility, give a better abstraction or reuse logic

https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)
DRY, WET, AHA

"In doubt, always choose the simplest and most straightforward code"

It's here already, it can wait until you know better.
