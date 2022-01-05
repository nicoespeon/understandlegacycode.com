---
title: A quick way to add tests when code has database or HTTP calls
date: 2020-05-09T21:47:33.298Z
image: /assets/code-in-time.jpg
description: >-
  You need to fix a bug, but you can't spend a week on it? Here's a technique to isolate problematic side-effects and write tests within minutes.
tags:
  - best practice or code smell?
  - changing untested code
  - no time to clean code
ctaTitle: Learn other techniques to master tangled Legacy Code
---

![](/assets/code-in-time.jpg)

You need to fix a bug, but you can't spend a week on it.

If you started added tests to the code you need to change, you quickly realize it will be PAINFUL. This code needs a database to run and it calls external APIs everywhere… Clearly, it wasn't designed to be testable!

> "Should I write tests and risk the deadline?"

If only you had time to redesign this part of the codebase, tests will be easier to write… But you can't afford it now!

So what can you do?

Well, you have 2 options:

1. **Don't write the tests**. Go in SEAL-mode: get in, kill the bug, get out. That's a risky way, although it's a common one.
2. **Quickly isolate problematic side-effects and write tests**. It may even be faster since you will spend less time testing your change manually 😉

I'm about to show you how to do just that. A technique that will make you vanquish any Legacy Code full of side-effects, by bringing it back into tests within minutes.

## Extract and Override the problems

This is a 3 steps recipe:

1. **Extract** the problematic side-effect in a method
2. **Subclass** the class you're testing (if you're dealing with OOP)
3. **Override** the problematic method in your test

That's it.

It's a _quick_ way to get control over what's in your way. Separate it from the rest of the code. Expose it so you can remove the obstacle.

Let's see that on a concrete example.

## Practice it on the Trip Service kata

[I told you](../5-coding-exercises-to-practice-refactoring-legacy-code) this coding exercise is great because it simulates problematic dependencies. Databases, HTTP, randomness… you name it.

The source code is available online:

👉 [github.com/sandromancuso/trip-service-kata](https://github.com/sandromancuso/trip-service-kata)

It's available in many languages. I'll be using JavaScript here.

So, you need to test the `TripService` class:

```js
class TripService {
  getTripsByUser(user) {
    let tripList = []
    let loggedUser = UserSession.getLoggedUser()
    // …
  }
}
```

But the `UserSession.getLoggedUser()` is in your way.

Simulating a logged user can be tricky. It will take some time. If you have a short deadline, you can't get sidetracked. Still, you want to do the best job you can!

Instead of going down the rabbit hole, let's apply the technique here.

### 1. Extract the problematic side-effect

```diff
class TripService {
  getTripsByUser(user) {
    let tripList = []
-   let loggedUser = UserSession.getLoggedUser()
+   let loggedUser = this.getLoggedUser()
    // …
  }

+ getLoggedUser() {
+   return UserSession.getLoggedUser()
+ }
}
```

By doing so, you are creating [a Seam](../key-points-of-working-effectively-with-legacy-code#identify-seams-to-break-your-code-dependencies): an entry point to change the behavior of the code in your tests.

### 2. Subclass the class you're testing

In your test file, you can extend this class:

```js
class TestableTripService extends TripService {}
```

At this point, using `TestableTripService` is equivalent to using `TripService`. But this indirection will be helpful in the last step.

### 3. Override the problematic method

```js
class TestableTripService extends TripService {
  getLoggedUser() {
    // Return what's convenient for your tests
    return new User()
  }
}
```

Now you can test the behavior of `TripService` through the `TestableTripService` class.

You can control what `getLoggedUser()` returns, hence you can easily test the different scenarios.

My preferred approach to control what is returned is to use a setter, so it's explicit:

```js
class TestableTripService extends TripService {
  getLoggedUser() {
    return this.loggedUser || new User()
  }

  withLoggedUserBeing(aUser) {
    this.loggedUser = aUser
    return this
  }
}

// Later in a test…

it("should throw when user is not logged in", () => {
  const tripService = new TestableTripService().withLoggedUserBeing(aGuest())

  expect.toThrow(() => tripService.getTripsByUser(anyUser()))
})
```

Repeat that for every problematic side-effect until you get your code under tests.

## Going further

You probably have questions. Let me tackle the usual ones.

### If I'm overriding, am I even testing?

Yes!

You're not testing _everything_ as it works in production. But you're testing **all the rest of the logic**. That's better than nothing!

Keep in mind that just one very important call to a database function can ruin your easy and simple plan of adding tests.

These tests won't be enough to cover everything, but they have a great ROI for you.

### Is it fine to test a subclass you declared in tests?

Yes.

The subclass doesn't really matter. What matters is that you isolated the problematic side-effects so you can test **the rest of the logic**.

This minimal overhead is acceptable when you're pressured by time.

### I use functions, not classes. What can I do?

In languages like JavaScript or Python, it's very common to use a more functional approach.

If that's you, my advice is to embrace the functional way of doing it: _composition_.

Extract the side-effect in a function and pass it as a parameter. In your tests you'll be able to control what is returned:

```js
function getTripsByUser(user, getLoggedUser) {
  let tripList = []
  let loggedUser = getLoggedUser()
  // …
}
```

```js
it("should throw when user is not logged in", () => {
  const getGuestUser = () => aGuest()

  expect.toThrow(() => tripService.getTripsByUser(anyUser(), getGuestUser))
})
```

### What if there are many side-effects?

You'll have many extracted methods.

That's fine. Your goal here is to **bring the code under tests**. Get to that state first, you'll refactor the design later.

When you deal with Legacy Code, you need to do small and efficient moves like this. It will get you in a safer state so you can think further.

### Is it OK to leave code in that state?

Ideally? No.

In practice, it depends. That allows you to get your fix **done, with tests, without risking your deadline**.

Now, this technique puts the spotlight on the design issues: side-effects are mixed with business logic and you certainly have mixed responsibilities here.

I can only encourage you to get some time to come back and clean the code. Refactor the design so you don't need such an indirection to test your business logic. Pay that Technical Debt back!

The good news is: you'll have tests to get your back when you do so!

So go ahead and get that Legacy Code under tests 🤠

## What it looks like in a codebase

Khalil Stemmler recorded a short video to present how he tests JavaScript code that is coupled to APIs & Databases.

I think the video is _really_ good. That's how I would do it myself.

If you have 20min, give it a watch:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ajfZqzeHp1E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
