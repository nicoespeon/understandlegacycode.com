---
title: What you can do when code is really hard to review
date: 2020-10-20T06:17:00.000Z
image: /assets/dont-panic.jpg
description: "5 advice you can try when you feel paralyzed with a change that's too risky to merge, but too long to verify."
tags:
  - no time to clean code
---

Code reviews are one way to improve the quality of the code by having more than one pair of eyes on the code. When you're dealing with a Legacy codebase, it's a helpful practice to spread knowledge, get more people familiar with the codebase, and reduce risks of breaking things.

But sometimes, you may stumble upon a _very hard_ code review. Maybe the pull request is big, or the change involves many parts of the code.

Maybe the change isn't really big, but **it's a risky one**!

You feel that _this_ code is fragile and complex. You don't feel safe poking too hard on it. The team doesn't know much about the possible side-effects of such change. The test suite isn't really exhaustive neither. The change _seems_ to work, but it would take an excessive amount of time to verify the absence of any regression. Perhaps even more time than what it took to do the change itself!

So here's the dilemma:

- Do you try to spot obvious flaws and get it merged, hoping nothing slips through the cracks of your imperfect knowledge?
- Or do you block the merge until you've tested extra-thoroughly the change against all scenarios you can imagine, risking the deadline?

What do you do when code is too hard to review, but you don't have time to do everything again?

![](/assets/dont-panic.jpg)

## If it's hard to review, it can't skip the review!

First, if you feel the change is so difficult that you won't have time to review it properly, then it's the very last code you should spend less time reviewing.

"Merge and cross fingers nothing bad happens" is a notoriously bad idea. When doing so, you rely on luck. When you're out of luck, you fail. Some day, you fail badly.

Think about it: if the code is hard to review now, it will be harder to maintain in 6 months! You'll lose the context around the decisions that were taken here. Changes without context stay untouched because we're afraid of unintended consequences! Hopefully, [there's a simple solution for that](https://understandlegacycode.com/blog/earn-maintainers-esteem-with-adrs).

Yet, it's hard to come up with a different approach when you're under the pressure to ship.

What can you do if you don't understand the impact of the change you're reviewing? I think you can reverse the steam and move the project in the right direction if you follow these 5 tips.

## 5 tips to review difficult code changes

### 1. Focus on readability

I always introduce the Software Crafters Montreal meetup with a slide saying:

> Code is not how you tell the computer what to do; it is how you tell **another programmer** what you want the computer to do.

I think this makes the difference between _something that works_ and _something that can be changed_.

Therefore, the first thing you should focus on in your review is readability. Do you understand the big picture of the change? Forget about trying to find all possible bugs. Do you get what's going on here? What is the problem being solved, and how your team has decided to solve it with this change?

### 2. Ask for proofs

Can you see what will happen to the software after this change? Do you understand the intentions behind the changes?

Manual tests could do. Often, a legacy codebase requires quite a lot of changes before you can add automated tests. In the short term, it might be faster to simply test manually. Before/after screenshots or a video reproducing the scenario in the PR description will do a lot more than trusting the code. Doing a QA of changed code before you merge it, while it's fresh, is a great moment to spot issues.

Focus on that, require to see the QA of the final result.

### 3. Ask for automated proofs

Manual tests could do, but if you really need to save time you should automate these tests. You won't have time to manually reproduce all scenarios **every time** you do a change. This grunt work is for the computer. This is why you should push your team to get the code under tests.

If there is no test, ask for them.

If there are automated tests along with the change, make sure you understand what they verify. It's easy to write tests for the sake of it and overlook their readability. Good tests will help you understand what the code is supposed to do. They act as living documentation of the software.

What if the code needs a lot of changes to be testable and you don't have time? If you don't know how to do better, go on survival mode: do the best review you can do, and fall back on manual tests. But you should make a top priority for the next iterations to address this issue.

Among all the technical debt you want to pay off, being able to write automated tests on the codebase is one of the most important ones! It's the one that will save you time and make deadlines easier to hit:

- Automated tests will execute faster than you can manually test
- Changes covered with automated tests will less likely introduce a regression, so you spend less time debugging and fixing code
- Tests will pressure you to improve the design of the code—pay attention to what's painful to test, and make that easier

### 4. Ask for smaller changes

A common clue for difficult code reviews is when the diff is more than 500 LOC, yet the description is as tiny as "_Implement cancellations_".

In such a case, ask the change to be broken down into smaller chunks. A series of small, self-contained changes is less risky. One formula that usually works is to first ship all the updates that don't change how the code works, then ship a smaller change that implements the feature.

Here's what you can say:

> I'm having trouble following everything going on here. Could you break this patch into smaller steps?

It will also make previous points easier. That's less room for mistakes!

### 5. Speed up the process with a synchronous code review

Here's the secret trick if you can't afford to spend days on this review: take notes and go through the review with the author **synchronously**. Do it IRL or schedule a call, share your screen, and go through it together.

It will help you understand the logic faster. It will help you discuss the trade-offs. It will help you explain what is critical to be changed vs. what is merely a nice-to-have.

Having a synchronous code review is a great way to save all the waiting time between each back-and-forth of asynchronous comments. The discussion is smoother and the end result is much more productive! You will come up with a concrete plan to get this merged safely.

## Bonus tip: spark the change!

If you have the power and the budget, you should really reject such a change. If the level of quality can't be proven, it's a very risky move to get such an uncontrolled change in the codebase.

Maybe you're in a Senior or technical leading position. If so, you can help your team do a better job on the log run. You can make the situation progressively improve instead of letting things getting worse and worse. What will happen if you don't hit the deadline? Does it worth delivering software that may or may not work? Can you buy some time to clean things up for the next iteration?

**Investing in people understanding the code pays off over time.**

If you don't have such power, you can use my 5 previous tips to deal with such changes. Don't block, but ask the right questions. Focus on what matters: not just producing code, but delivering value to the end-user.

The good part of Legacy software is that you already have people depending on it. So anything you do to improve it will have an actual impact. It's your opportunity to use your skills to help people. I find that to be a motivating challenge, don't you?
