---
title: Are functions that simply call another function a bad design choice?
date: 2020-03-22T01:47:28.963Z
description: Let's see how you end up with these while trying to refactor Legacy Code and what you can do about that.
image: /assets/legacy-code-not-a-problem.jpg
---

Consider this line of code:

```js
transaction.details.refundRequests.add(refundReference)
```

If you ask experienced developers, they may tell you this code has a problem:

> It violates the Law of Demeter!

## Wait, what's the Law of Demeter?

The [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) (LoD) is a design guideline to help you write maintainable Object-Oriented code.

It promotes "loose coupling" between classes with "information hiding".

If classes know too much about each other, it's harder to change them. When things are tightly coupled, a change somewhere has ripple effects everywhere: to change something, you need to touch everything! Loosely coupled means that you can change things independently. It's easier to maintain.

That's why LoD says: **"Only talk to your immediate friends"**.

The problem with the line of code above is that it shows too much about the `transaction` structure:

- It has a `details` field,
- that has a `refundRequests` field,
- that has an `add()` method.

Therefore, one could say "it violates the Law of Demeter".

## How to fix this design issue

That kind of code smell is frequent in Legacy Code. It even has a name: [the Train Wreck](https://wiki.c2.com/?TrainWreck).

When you start to notice it, you usually refactor the code like this:

```js
transaction.addRefundRequest(refundReference)
```

Well, that looks better!

To do so, you had to change the `Transaction` class:

```js
class Transaction {
  // … some irrelevant code

  addRefundRequest(reference) {
    this.details.refundRequests.add(reference)
  }
}
```

So far, so good.

But wait! You're still not done. Now `Transaction` knows that the `details` have a `refundRequest` field, that has an `add()` method.

Law of Demeter blablabla, you continue to refactor and create a new method on `TransactionDetails`:

```js
class TransactionDetails {
  // … some irrelevant code

  addRefundRequest(reference) {
    this.refundRequests.add(reference)
  }
}
```

Now you can proudly use it in `Transaction`:

```diff
class Transaction {
  // … some irrelevant code

  addRefundRequest(reference) {
-    this.details.refundRequests.add(reference);
+    this.details.addRefundRequest(reference);
  }
}
```

That seems better. Or does it?

Let's take a step back and see the code you have now:

```js
transaction.addRefundRequest(refundReference)

class Transaction {
  // … some irrelevant code

  addRefundRequest(reference) {
    this.details.addRefundRequest(reference)
  }
}

class TransactionDetails {
  // … some irrelevant code

  addRefundRequest(reference) {
    this.refundRequests.add(reference)
  }
}
```

At this point, I've seen programmers stop and feel unsure about the refactoring.

The problematic part?

The `addRefundRequest()` of `Transaction` is just calling the same method on `TransactionDetails` 🤔

> "These functions seem pretty redundant, it doesn't feel smart to me…"

> "I fear this is going to bite me somewhere down the line!"

Yeah… It's normal you feel confused. There's a valid question here:

## Is it bad design to have a function that just calls another?

"A function that just calls another" is a code smell called a Middle Man.

Does that mean it's a bad choice? Yep. Nope. _It depends_.

Say that a new feature comes in: you need to change the state of the `Transaction` when there's a refund request. The encapsulation makes it easy to implement, with no impact on the calling code:

```js
class Transaction {
  // … some irrelevant code

  addRefundRequest(reference) {
    this.setPending()
    this.details.addRefundRequest(reference)
  }
}
```

Now, if the feature never comes… then the original line of code maybe was fine.

![Legacy Code is not a problem if you don't need to change it](/assets/legacy-code-not-a-problem.jpg)

"When you need to change it" is a great time to refactor the design.

**A function that just calls another is not bad design by itself**.

It's a hint:

- If you compose objects together, you'll probably have a few
- If you have many, then your code tries to tell you something about your design…

## What matters is the level of abstraction

Hiding the information inside the `Transaction` class has another benefit: it's an opportunity to name things!

Sure, naming is hard. But it expresses concepts. These concepts can represent different levels of abstraction.

This is well illustrated in this other (Java) example:

```java
// Player is a high-level abstraction. "Being alive" is a generic idea.
// For the consuming code, that's all that matters.
bool isAlive = player.IsAlive();

// For a human player, "being alive" means the heart is.
// Heart is a lower-level abstraction. It's an implementation detail.
public class HumanPlayer : Player {
    public bool IsAlive() {
        return this.heart.IsAlive();
    }
}

// For a robot, "being alive" is a question of boolean. Was it switched on?
public class RobotPlayer : Player {
    public bool IsAlive() {
        return this.IsSwitchedOn();
    }
}
```

Here, `HumanPlayer.IsAlive()` just looks like a Middle Man. But if we pay attention to our business, we may realize the names are off.

Rather than "being alive", the heart "is beating". Let's express this:

```java
public class HumanPlayer : Player {
    public bool IsAlive() {
        return this.heart.isBeating();
    }
}
```

And now you realize it looked like a Middle Man _by accident_. In fact, the levels of abstraction were different. This is what matters:

**You should not mix concepts from different levels of abstractions.**

### What this means for the transaction

Let's get back to our original example after our refactor:

```js
class Transaction {
  // … some irrelevant code

  addRefundRequest(reference) {
    this.details.addRefundRequest(reference)
  }
}

class TransactionDetails {
  // … some irrelevant code

  addRefundRequest(reference) {
    this.refundRequests.add(reference)
  }
}
```

What do you think `Transaction.addRefundRequest()` is telling you?

To me, it makes me think twice about the `TransactionDetails` concept. I'm not 100% sure this is a relevant abstraction. It looks more like a data structure detail. Maybe it would make sense to move the `refundRequests` directly under `Transaction`:

```diff
class Transaction {
  // … some irrelevant code

  addRefundRequest(reference) {
-    this.details.addRefundRequest(reference)
+    this.refundRequests.add(reference)
  }
}

class TransactionDetails {
  // … some irrelevant code

-  addRefundRequest(reference) {
-    this.refundRequests.add(reference)
-  }
}
```

No more Middle Man.

Is it the right thing to do? I don't know. _It depends_.

There's an answer to this. To find it, you should talk to other people: business experts, other developers… Maybe no-one knows and that's fine. You can keep it like that until it becomes a problem. Then you'll know that you need to change the design.

Until then, it's fine to have a function that just calls another one 🍻
