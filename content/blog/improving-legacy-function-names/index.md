---
title: Is it fine to use "AND" in a function name?
date: 2020-04-19T21:18:27.306Z
image: /assets/left-or-right-pedestrian.jpg
description: >-
  Finding a better name for a function is hard, especially when people have contradictory opinions on what a good name looks like…
tags:
  - best practice or code smell?
---

![](/assets/left-or-right-pedestrian.jpg)

> Naming is hard.

It's certainly one of the hardest things in programming. It's hard to name things because it's hard to create the correct abstractions. When you have a clear understanding of the concept, you can name it. But getting there takes time.

Yet, **naming is critical**!

We spend most of our time reading existing code to understand what it does and how we should modify it. Bad names terribly slow down this process. And bad names are quite common in Legacy Code.

And there you are, facing a poor function name in the code you have to update. You wonder how to rename it, to make it clearer.

But when you ask for their opinion, people give contradictory advice on what a good name should look like.

## 2 opposite views on naming things

Consider this piece of Python code:

```python
def get_response_id():
  response = get_response_from(question, user)
  response_id = compute_response_id(question, datetime.now())
  response.set_id(response_id)
  response.save_in_db()

  return response_id
```

Would you say it has a good name?

Probably not.

The main issue here is the side-effect: when you call `get_response_id()` it creates a `response`, assigns the ID to it and persists it in a database. Finally, it returns you the response ID.

I don't know your codebase, but it's quite common for Legacy systems to do a lot of database changes within functions like this.

**Side-effects are unexpected, we should make them explicit.**

Say you come across this function after a painful debugging session. How would you rename it?

### 1) Focus on the side-effect: `add_response_to_db()`

This won't leave anyone surprised!

Or would it? Depending on your language idioms, it might not feel intuitive to return the response ID from a function named like that.

Usually, people will advise you to separate the "Command" from the "Query" part. It's the [CQRS (or CQS) principle](https://martinfowler.com/bliki/CQRS.html).

So you should separate the responsibilities:

1. One function that creates a response ID and returns it to you
2. One function that adds the `response` to the DB

Something along these lines:

```python
# The Query, returns a value and has no side-effect
def get_response_id():
  return compute_response_id(question, datetime.now())

# The Command, performs the side-effect and returns nothing
def add_response_to_db(response_id):
  response = get_response_from(question, user)
  response.set_id(response_id)
  response.save_in_db()
```

> What if I always use these two together?

That's when people start to have different opinions.

Some would tell you to compose these functions when you use them.

Others would say it's fine for a Command to return a value. The important part is to be able to do queries without side-effects. Hence, you could simply rename the original function like this:

```python
def add_response_to_db():
  response = get_response_from(question, user)
  response_id = compute_response_id(question, datetime.now())
  response.set_id(response_id)
  response.save_in_db()

  return response_id
```

But you're back to square one: `response_id` can be a surprising returned value for this function. So maybe there's another approach…

### 2) Leave no surprise: `get_response_id_and_add_response_to_db()`

Some developers would advise you not to force a short function name that would omit critical parts of what the function does.

The goal is to reduce the number of surprises while reading the code. The code should be _self-documenting_.

![Good code has a lower "WTF per minute" during code review](/assets/wtf-per-minute.jpeg)

Since short function names are hard to get right, it's OK to add "AND" in the function name.

> But wouldn't that end up with really long function names?

Indeed. Our example is luckily small. Legacy Code generally does much more than that!

Also, if you ever worked with long naming conventions, you might have felt it was paradoxically hard to read.

This won't be easy to read:

```python
def get_response_id_but_also_add_cache_of_the_responses_to_the_db():
  response = create_response_from_user_to_the_question(question, user)
  response_id = compute_the_response_id_from_question(question, datetime.now())
  response.set_id(response_id)
  response.save_in_db()

  return response_id
```

You've lost the ability to scan the code because there is too much information.

All of the noise surely make things explicit, but it doesn't scale!

> Now I'm in a predicament… Is it OK to use "AND" or not?

Let me reconcile the advice for you…

## It's fine to use "AND", but your journey doesn't stop here

Hopefully, these conflicting advice are different faces of the same truth: [naming is a process](https://www.digdeeproots.com/articles/naming-as-a-process/).

In this series, [Arlo Belshee](https://twitter.com/arlobelshee) presents a 6-steps guide to naming things.

### 6 iterative steps to build a good name

When you come across a surprising name in your codebase, here's what you should do:

1. **Replace the surprising name with obvious nonsense** like `apple_sauce()`. It sounds silly, that's intentional. It makes it obvious that the name can't be trusted, so something should be done about it.
2. **Get to an honest name**, based on what you understand from what the function does. If you don't yet understand what the code does with the database, then `get_response_id_and_probably_use_db()` is an option.
3. **Get to completely honest**, so the function name says _everything_ the function does. `get_response_id_and_add_response_to_db()` is a great example of that!
4. **Get to "does the right thing"** which is basically the moment where you split your function along the "AND".

   Yes, "AND" does indicate you have many responsibilities. Thus, having 2 functions `get_response_id()` and `add_response_to_db()` is a good idea at this step.

5. **Get to an "Intention Revealing" name** which solves the point of _"I always want to use these two functions together"_.

   Stop thinking about the implementation details. Build an abstraction that uses the 2 smallest functions to build _something else_ at a higher-level of abstraction.

   Maybe `store_user_response()` could do it. It will be the composition of `get_response_id()` and `add_response_to_db()`, which are lower-level abstractions.

6. **Get to your Domain abstraction**. This is hard. It depends on your business. To get it right, you need time and to listen to your business language.

   Maybe you'll identify the concept of a `Response` that would encapsulate the ID. Or maybe `ResponseId` makes sense in itself and you would have a factory to create many. Insertion in the database would be an implementation detail of a Repository, etc.

When you reach this last step, the design is more abstract. It's richer and lets you express more.

But no-one outside of your team can tell you what the correct Domain abstraction should be in your situation. It depends™ 🤷‍♂️

## All suggestions were valid

- Yes, surprising function names are terrible and no-one wants to deal with that
- Yes, "AND" is acceptable in a function name because it's better than a misleading name
- Yes, the level of abstraction is a related concept and it matters
- You don't have to go for step 6) right away, it's fine to stay at step 2), 3) or 4) until you know better!

In our little example, we had already figured out 1) and 2). In the same situation, you should at least go to step 3). Put "AND" in the function name to be completely honest. Then, go further.

But going further will not be a question of naming. You'll need to split the responsibilities, find the intention, etc.

## Follow the process, you'll become good at it!

A poor function name is one that you realize you can't trust.

Good naming is hard to get right at first shot. Hence there's an iterative, 6-steps process:

1. Replace the surprising name with obvious nonsense
1. Get to honest
1. Get to completely honest _(use "AND")_
1. Get to "does the right thing" _(split the responsibilities)_
1. Get to "Intent Revealing" _(higher-level abstraction)_
1. Get to your Domain abstraction

You can stop at any step. It's fine to stay where you are until you learn more. It becomes easier with experience.

People's advice may sound conflicting because they aim at different steps. But they all share the same goal: use a better name!

**Focus on getting to the next step**. One step at a time. 🧗‍
