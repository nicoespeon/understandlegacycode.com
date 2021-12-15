---
title: Improve your refactoring and testing skills with the Expense Report kata
date: 2021-12-13
description: "Watch Gregor Riegler refactor code with this coding exercise. Learn useful techniques from it."
image: /assets/expense-report-kata.jpg
tags:
  - coding exercises
  - refactoring
  - changing untested code
  - approval tests
---

Coding exercises are great to practice new skills in a sandbox environment. If you never practiced one before, you should check out [these 5 exercises](https://understandlegacycode.com/blog/5-coding-exercises-to-practice-refactoring-legacy-code/) that focus on taming Legacy Code.

Recently, [Gregor Riegler](https://twitter.com/gregor_riegler) published a series of short videos to show you how to practice another exercise: [the Expense Report kata](https://github.com/christianhujer/expensereport/).

I really like this exercise too. It's small enough to be tackled within an hour, yet it shows common smells you could find out there. It's available in many programming languages.

Let's dive into this series of videos. There are a couple of things I think are worth highlighting 🏮

## Writing the first (missing) test

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DS_940tXMXQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Gregor presents the Expense Report kata here. We need to change this code to implement a new feature. While doable, implementing the feature will require you to modify the code at a bunch of places. If you miss one, you may have a bug!

It's a good candidate for refactoring. But we can't refactor safely because there is no test. Hence, let's add tests first!

I love how this is a great illustration of [Approval Testing](https://understandlegacycode.com/approval-tests). It's **the fastest way to write the missing tests** by capturing what the existing code _does_.

### Oh oh, the code depends on things we don't control…

Writing these tests raise a problem about the code: it depends on the time. It means that every time you run the test, the timestamps will change! Hopefully, there are a couple of ways to solve this.

Gregor decides to refactor the code to pass the date as a parameter while exposing the original function. Since he uses Java and IntelliJ, these changes can be tackled by the editor. **Automated refactorings are perfect for doing necessary changes while you don't have tests!**

The approved test report makes it easy to verify the change we made is legit and didn't break the intended behavior.

The first test is working, we can move on. **It's a great moment to commit**.

## Write the remaining tests

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Y20cEM4xZ8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The next step of the Approval Testing approach is to find all the interesting inputs to cover all the behavior. We can do that by scanning the code as Gregor does. I wish that [AI can help us do that someday](https://understandlegacycode.com/blog/ai-test-generation-for-legacy-code/) (gnarly codebases are usually trickier than that).

It's good to note that Gregor keeps using automated refactorings such as "Extract Function".

Another thing that's worth noting: he takes the time to clean up how to create new expenses in the tests. We could just get away with copy-pasting the code for creating new tests. But that would be missing the opportunity to create a nice API to write new code faster. 🏎

Most of the moves are automated. Plus, it's all tests code: we are safe.

And yet, these niceties may finally be moved back into the source code for everyone to use! This is how you progressively improve the state of your legacy codebase, from the safety of your test suite.

The next steps are typical Approval Testing:

- run a newly approved test a few times to make sure there is no flakiness to clean up (e.g. date-times)
- use test coverage to detect code we are not testing
- find out more combinations to cover all of the logic
- commit often

In the end, the proxy function is not tested. Is it a problem? Nope. This function binds together the actual logic with the actual date-time that is used in production. The cost/benefits balance of testing is quite negative if you ask me ⚖

We'll still have a blind spot. But it's much, much, much smaller than not having tests at all!

## Making the change easy

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rDvQ1lF494E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The code is now covered with tests. It's time for **refactoring** ✨

Notice how Gregor doesn't refactor _the whole code_. Instead, focus on what would make the change easier. Refactor to deliver value!

Extracting functions create opportunities for renaming things.

Move things around. You don't have to get it right on the first try. This is easier to do when you can lean on automated refactorings—I can also teach you how to do that if you are a JavaScript developer, keep reading 😉

I spotted that Gregor removes the empty lines manually. Personally, I would use a tool to automate the style. Having a consistent code style matters more than the actual style.

Each refactoring move is followed by a test run. In particular the _manual_ refactorings. That's easy to do because the tests are fast and reliable.

Eventually, we end up in a state where declaring a new expense type is a matter of configuration:

```java
enum ExpenseType {
  DINNER("Dinner", true, 5000);
  BREAKFAST("Breakfast", true, 1000);
  CAR_RENTAL("Car Rental", false, Integer.MAX_VALUE);
}
```

How cool is that? It's much faster to add new capabilities. It's much safer too.

If you extrapolate to a dirtier, bigger codebase, the benefits are even more desirable. Writing the missing tests and refactoring will require more work too. That's why you should first practice coding exercises like this one 😉

## TDD the change

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2YthyLqIaqU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Now that the code is tested & refactored, Gregor implements the required change, guided by tests.

It's interesting to note that he updates the approved tests to add the expected values _before_ doing the change.

Approval Tests is a _test-after_ technique. It captures _the existing behavior_ of code that's already written. That's perfect to use on Legacy Code.

Usually, we recommend getting rid of these tests once you start adding more comprehensive "unit tests".

Yet, if you take care of what your approved tests look like, they can actually be useful in the long run. A snapshot that's easy to read will be valuable. What matters is that you can understand what's going on when you read the diff. If you want to know more, [I wrote about this in particular](https://understandlegacycode.com/blog/characterization-tests-or-approval-tests/#the-unknown-importance-of-a-good-printer).

Naturally, the "Expense Report kata" fits very well in this category!

### Gold Plating on the green bar

Finally, Gregor does some more refactoring once the tests are passing.

> Shouldn't we refactor only to deliver value?

Yes. What to refactor at this point is less clear. It depends on your understanding and what you can anticipate for future changes.

I found that [the Four Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html) help with that. It focuses on making the code less surprising and easier to read.

In doubt, I would leave the code as-is. Especially since I know I can refactor the code later, when I know better!

I love that Gregor illustrates a "Split Loop" refactoring because it's not common to see developers split a loop. In this case, though, the performance hit is negligible compared to the opportunities of decoupling the different steps!

## Refactor the Primitive Obsession

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/cVCtMd73doU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To wrap it up, Gregor addresses a very common code smell: Primitive Obsession.

`Expenses` is a primitive list. There is an opportunity to create a richer domain model for it. Doing so will clean the design, so it becomes very easy to add new behavior.

Instead of a list of expenses, he defines an `Expenses` class that implements `Iterable`.

Note that the test code needs to change too. Hopefully, the approved snapshots are here to verify the behavior of the whole program stays the same, regardless of the implementation details. That makes refactoring much easier!

With Java and IntelliJ, the `Move Function` refactoring is automated. You can see Gregor move behavior to the new `Expenses` class fast and safely. If tests were missing, these automated moves would reduce the risk of breaking something.

After the refactoring is done, all of what the printer is doing is "printing". That's a good sign! The rest of the logic is moved and exposed through explicitly named methods:

```java
public void printReport(Expenses expenses, Date date) {
  System.out.println("Expenses " + date);

  for (Expense expense : expenses) {
    printSingleExpense(expense)
  }

  System.out.println("Meal expenses: " + expenses.getMealExpenses());
  System.out.println("Total expenses: " + expenses.getTotalExpenses());
}

public void printSingleExpense(Expense expense) {
  String mealOverExpenseMarker = expense.isOverLimit() ? "X" : " ";
  System.out.println(expense.getName() + "\t" + expense.getAmount() + "\t" + mealOverExpenseMarker);
}
```

One last thing I want to point out from this last video: notice how Gregor refactors incrementally. Instead of removing and breaking the code, he is building the new design first. Then, when he feels ready, he switches the implementations. The tests tell if something broke in the process.

Nothing breaks, so then he can proceed and delete the old, unused code.

**This is known as "Parallel Change" refactoring**. It's a GREAT approach to refactoring code while keeping it working at all times.

## Conclusion

I really like [this Expense Report kata](https://github.com/christianhujer/expensereport/).

It is smaller than the Gilded Rose one, so it's very convenient to introduce people to refactoring katas with this. The Gilded Rose is still the most popular. But the Expense Report is a refreshing alternative that is now available in many, many languages.

I suggest you give it a try 😉
