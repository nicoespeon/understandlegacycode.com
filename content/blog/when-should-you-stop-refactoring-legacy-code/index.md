---
title: When should you stop refactoring Legacy Code?
date: 2020-09-15T21:10:28.963Z
image: /assets/lost-in-field.jpg
description: "A personal story to illustrate how good habits can save your day when things turn bad."
tags:
  - no time to clean
---

When you work with Legacy Code, things can quickly get out-of-hand.

Sometimes you dive into the code with a clear goal in mind… 3 hours later you're still trying to break a problematic dependency and have completely lost track of why you were here in the first place!

![](/assets/lost-in-field.jpg)

I recently experienced such a situation. Fortunately, I was mindful enough to apply the great advice I learned from others. It saved me a lot of time. I thought it would be a good story to share 🍷

## Have a plan

When I was working at [Busbud](https://busbud.com) we used to hold a "Sustainability Week" every quarter.

During this week, engineers from all teams work together. We do maintenance tasks. We pay off some Technical Debt. Ideally, things that are cross-teams concerns. It's a moment for engineers to just focus on improving their environment, while product managers discuss the next great ideas for the company.

**It's great, I recommend doing something similar** 👍

One occurrence happened to be a short week: the Monday was off, and I took my Wednesday off to organize [a remote conference on Legacy Code](https://twitter.com/nicoespeon/status/1303656226698539008). Demos were on Friday, so that gave me around 2 days to find, fix, and ship something.

![It's gonna be fine!](./gonna-be-fine.gif)

Hopefully, I kept track of things I wanted to improve as I was working on our codebase every day. A good candidate at the top of my list was:

> "Clean up the DB between each test"

We had roughly 5,200 integrated tests for this codebase. Most of them involve the database. I realized that developers had to think about cleaning up the database after tests execute, so the next ones wouldn't be impacted by previous test data.

Cleaning up the database can be tricky because of foreign key constraints: you have to clean up the tables in a specific order. I noticed that each developer was trying to figure it out for the tests they wrote. What a waste of time!

My plan was simple: **automatically clean up the database between each test**. That would have 3 benefits:

1. People wouldn't have to think about it, faster development!
2. Each test would be independent, less time spent in debugging failures!
3. There would be only one place to maintain for cleaning up tables in the correct order.

I knew that execution shouldn't be too hard: we were using [mocha](https://mochajs.org/) and we could run hooks before each test.

I had a plan. It was great. I presented it and everybody was excited to see the results 🌈

## "Everybody has a plan until they get punched in the mouth"

On the first day, I started executing my plan. Everything went fine:

- I created the hook
- I resolved the order in which tables should be cleaned
- I tried the hooks and it worked!
- I started deleting some (now useless) code from tests

Then, I ran the whole test suite.

**Around 2,700 tests fail 💥**

It turns out that more than half of our tests depended on the data being persisted between tests. Clean up the database in between and they will start falling like dominos!

!["Everybody has a plan, until they get punched in the mouth" from Mike Tyson](./everybody-has-a-plan.jpg)

This is when I realized this seemed to be a widespread pattern for node.js developers using mocha:

```js
describe("some API call", function() {
  let response

  before(done => {
    // System Under Test is called in the `before()` hook
    request.get("/some/api/path").end((err, res) => {
      response = res
      response.json = JSON.parse(res.text)
      done(err)
    })
  })

  // Assertions are spread across different `it()`
  it("returns a 404", () => {
    expect(response.statusCode).to.equal(404)
  })

  it("returns an empty array of foo", () => {
    expect(response.foo).to.be.instanceof(Array)
    expect(response.foo).to.have.length(0)
  })
})
```

The code was executed in the `before()` hook. Then, assertions were spread across `it()`.

On paper, it may look nice. It works and there's kind of a relationship between the "execution" and the remaining `it()`. Also, code was executed once, so it was faster. And for integration tests, that surely makes a difference, right?

Well, the problem is this is preventing more ambitious optimizations:

- Now you couldn't "just parallelize" the tests anymore
- You couldn't wipe out the database between each test
- In fact, tests were now coupled, and you couldn't easily tell that statically. You had to read the code in details.

## Stop, think and revise

My first thought was:

> Well, these tests are all coupled and it's bad. I should start decoupling them first!

And I actually started doing that. Hopefully, I was wise enough to also start a 1h timer for this.

After 1h, I stopped and I reflected on my progress. It turned out that cleaning up the tests wasn't an easy task — who could have guessed…

I realized that **I wouldn't be able to achieve this in 2 days!**

So I stopped, reverted my work, and thought about the problem again.

Sure, decoupling all of these tests would have been ideal. But doing that would have taken too long. So much time that it wouldn't make it up for the time it would save to developers! The fact is: we didn't touch _all of these tests_ most of the time. Also, I didn't know which tests we would need to maintain in the future.

In our past, we decided to use this pattern. Now, it was costing us, slowing us down a bit every day. But recovering from that would take too much time. This refactoring would only start paying off in a few years (maybe).

Thinking about the problem again, I tried to determine if I could apply [the Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle):

> Roughly 80% of the benefits come from 20% of the efforts.

Time was being wasted because:

1. Developers had to think about cleaning up the database themselves
2. Developers had to figure out how to clean up their data

In fact, providing a helper function to only "clean up the database" would solve a good part of the problem!

Sure, developers would still have to think about cleaning up the DB themselves. But doing so would be easy. Also, there would be only one function to maintain if the database structure ever changes.

## Happy ending

I was able to ship this change before the deadline and even tackle other topics in the remaining time. The end result wasn't the one I announced, but I explained my findings and the decisions I had taken. I also [documented all that in an ADR](../earn-maintainers-esteem-with-adrs), so we can easily revisit this decision in the future.

Was it wasted time? I think not:

- I shipped something that will save time to developers nevertheless
- I learned something along the way
- I documented that learning somewhere reliable, so we can change our mind later
- I moved to other refactoring opportunities

I think that was a good and productive week 😄

## Lessons to be learned

To be honest, this could have easily turned into a nightmare if it wasn't for the good habits I developed over time.

Here's my recap' of the things that helped me win the day when the odds were against me. They can help you too:

1. **Have a clear goal in mind before starting refactoring**. I like using [the Mikado Method](../a-process-to-do-safe-changes-in-a-complex-codebase) for that. Or simply dropping my thoughts on a piece of paper, to keep track of what I'm doing.
2. **Timebox yourself**. Especially when you're not familiar with what you're about to do. Decide to go for one hour. Then stop, go have a drink, and think about your problem again. Are you heading in a good direction? What if you retried? Would you have a better way?
3. **Don't be afraid to throw away what you did and start over**. Timebox helps with that!
4. **Do the best you can in the allocated time**. Be mindful of your deadline.
5. **Communicate with your team**. Share your findings. Document your decisions.
6. **Know when to stop**. Especially if you've already invested long hours. This is when you need to take a step back and think again. Can you bring 80% of the value in time, even if it's not perfect?
7. **Some refactorings aren't worth it**. Legacy Code isn't perfect and that's fine. The game is about making it better, even if it's just a little bit.

I don't think there is such a thing as "over-quality" because, to me, the best quality is when you find the perfect balance to keep solving people problem fast, without creating new ones. [The 4 rules of simple design](https://martinfowler.com/bliki/BeckDesignRules.html) are a concrete way to achieve that.
