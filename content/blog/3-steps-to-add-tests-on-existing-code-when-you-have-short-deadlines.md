---
title: 3 steps to add tests on existing code when you have short deadlines
date: 2020-01-24T02:15:57.830Z
image: /assets/time-for-dat.jpg
description: >-
  Here's a recipe you can follow when you want to add tests on Legacy Code, but you don't have much time to do so.
tags:
  - approval tests
  - changing untested code
---

> The code requires significant changes to support unit tests. I have deadlines to meet!

![Ain't nobody got time for that](/assets/time-for-dat.jpg)

You have that pile of Legacy Code you need to change.

Of course, there are no tests. Deep in your heart, you know that you should add tests before touching this code. People on the Internet told you so. "First, you should add tests" they said.

But you also have deadlines to meet. Time is flying. Maybe the project is already late. You can't afford spending _days_ to write the tests that should be here in the first place.

BUT you know that you should. If you don't, you're making things worse! If you don't write the tests, you may even break something and you won't realize!!! 🙀

**You want to add tests, but you don't have time to!**

If that's you, I do have a solution for you!

It's not a pretty one, but *it works*™. It did save me many times when I was in a hurry. It can help you too.

## The 3-steps recipe to add tests when you don't have time to 🚀

What you're looking for is called "_Approval Testing_". Some people call that "_Characterization Testing_".

Here's how it goes:

1. 📸 Generate an output you can snapshot
2. ✅ Use test coverage to find all input combinations
3. 👽 Use mutations to verify your snapshots

Follow that and you'll get your thing under tests _super fast_!

Let's see how you do that in detail.

### 1. 📸 Generate an output you can snapshot

That's the most difficult part. When you get that done, you're almost done.

You need to find a way to capture what the code is doing, in a serialized way. Put simply: it should produce some text you can capture.

Call the code from a test file. Provide the simplest inputs you need to get it running.

You can face 3 scenarios:

1. **What you're testing returns a value**. That's your output. Easy!
2. **What you're testing performs side-effects** (e.g. it calls an HTTP endpoint). You should intercept that and capture the parameters that are used. You'll probably need a spy/stub/mock to do so.
3. **What you're testing does both**. That's fine, you can test each side-effect and the return value separately.

Go figure out how to get that output. What you need is a string that proves the code has executed.

When you got that string, write it in a file. **That's your snapshot**.

Some testing libraries will give you utilities to do that for you. For example, in JavaScript, _Jest_ has [a guide to snapshot testing](https://jestjs.io/docs/en/snapshot-testing).

Here's an example of a snapshot test with Jest:

```js
it("should update quality", () => {
  expect(updateQuality("foo", 0, 0)).toMatchSnapshot()
})
```

You get your snapshot? Sweet! You're almost done 👍

### 2. ✅ Use test coverage to find all input combinations

With your first snapshot test running, you're executing some of the code you want to test.

Probably not all of it.

That's where test coverage is useful: it will tell you **what you're not testing yet**.

Here's an example of a test coverage report:

![Example of test coverage](/assets/test-coverage-gilded-rose.png)

The red lines indicate the code that's not executed.

The "I" and "E" symbols indicate the code inside the "If" or "Else" branch is not executed.

Use this information to guide your next steps. **You want to cover all the code with tests.**

Remember I told you to put the simplest inputs to get your test running? Great.

Now write another test and change one input. Try to find a combination that will exercise a part of the code you're not covering.

This is easier than it sounds. Actually, it can be solved by trying random inputs, if you really have no idea. In practice, you'll certainly make informed guesses of what the next combination should be.

Repeat that until you cover every line.

![Test coverage showing all lines covered](/assets/test-coverage-gilded-rose-done.png)

You might end up with a test looking like that:

```js
it("should update quality", () => {
  expect(updateQuality("foo", 0, 0)).toMatchSnapshot()
  expect(updateQuality("foo", 0, 1)).toMatchSnapshot()
  expect(updateQuality("foo", 0, 2)).toMatchSnapshot()
  expect(updateQuality("Aged Brie", 0, 1)).toMatchSnapshot()
  expect(updateQuality("Aged Brie", 0, 50)).toMatchSnapshot()
  expect(updateQuality("Sulfuras", 0, 1)).toMatchSnapshot()
  expect(updateQuality("Sulfuras", -1, 1)).toMatchSnapshot()
})
```

If you're using Jest, you can use [jest-extended-snapshot](https://www.npmjs.com/package/jest-extended-snapshot). It's a free library I created to simplify previous code into:

```js
it("should update quality", () => {
  expect(updateQuality).toVerifyAllCombinations(
    ["foo", "Aged Brie", "Sulfuras"],
    [-1, 0],
    [0, 1, 2, 50]
  )
})
```

### 3. 👽 Use mutations to verify your snapshots

Everything is now covered with snapshots.

**But 100% test coverage doesn't mean you actually test the code.**

There's a simple way to verify you're safe: introduce mutations!

And by "introduce mutations" I really mean:

- deliberately change each line of code to introduce a silly mistake (I like to comment out the code)
- verify a test is failing
- revert the silly mistake
- celebrate internally (yay!)

For every line you mutate and see a failing snapshot, your confidence in the tests grows.

**If no test fails, you need to add other input combinations**. Revert the silly mistake, find the correct combination that will exercise this line and try again. You want to see a failing test.

When you reach the end of the code, you're done!

<p style="text-align: center">
 <img src="/assets/self-high-five.gif" />
</p>

## Why is it the fastest technique to add tests?

Because you don't have to write comprehensive unit tests of the existing code.

Instead, you take it as a black box. You execute the code, whatever it does. And you capture the output.

**It's the fastest way to put regression tests on existing code.**

With this technique, I already put monstrous lumps of code under tests within a couple of hours.

## Why don't we _always_ use that kind of test?

As sexy as this approach is, it has downsides:

- you capture existing behavior, bugs included
- tests will fail whenever you change the behavior, even if it's intended
- you can't read the tests and understand what the code does

These kind of tests can be really noisy. If you notice people just update them when they fail, they don't provide any value. **Delete them**.

It's fine to delete useless tests afterwards. They were useful when you had to change the code. They're not here to replace proper tests in your codebase!

That's my secret weapon to add tests when we're in a hurry. That's a pragmatic compromise. But it's a temporary solution until we have time to write better, helpful tests on the code.

It's your secret weapon too now. Use it wisely!
