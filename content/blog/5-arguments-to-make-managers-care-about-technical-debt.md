---
title: 5 arguments to make managers care about technical debt
date: 2020-02-18T02:00:02.828Z
description: >-
  If you think that management wouldn't let you refactor Legacy Code, use these
  5 arguments to convince them.
---

> Management won't let me refactor Legacy Code!

![](/assets/dev-office-help.jpg)

Do you recognize your current situation here? How _frustrating_ is that!

As a developer, it's quite common to be confronted with managers who don't seem interested in fixing what's already here.

New features. Emergency releases. Bug fixes! There's always an excuse to postpone the refactoring of that messy codebase. 😭

Even when you explain the merits and benefits of clean code, they still not seem to understand, or care. Focus is always on _cost_ and _time_ instead of **quality**. And there you are, feeling powerless to address the accumulating technical debt.

> IT is stuck doing production support for impatient customers.

> Clients won't pay for the refactoring.

> It feels like a lost cause!

The situation already pushed the good developers to pack up and leave. Now the company it's just like a revolving door, with developers coming in and out…

## Managers aren't engineers

You need to help management **understand** the impact of bad code quality on the business.

In the end, what matters to the company is generating money. Profitability. Management needs to make the best decisions to reduce costs and increase revenue.

Therefore, you should learn to **speak the business language** if you want to make a case for refactoring.

As a former consultant and Tech Lead, that's something I'm used to doing. So let me give you a helping hand 😉

## 5 arguments you can use with management

### 1) "Refactoring will reduce the volatility in the marginal cost of features"

This exact quote is from J. B. Rainsberger's great talk: ["The Economics of Software Design"](https://youtu.be/TQ9rng6YFeY).

Don't run away! It's just a way that sounds vaguely smart to say what you already know.

Let's break it down:

- **"Refactoring will reduce"** so far so good.
- **"the volatility in"** is another way to say "the uncertainty of"
- **"the marginal cost of"** is "how much it costs to produce 1 more unit of"…
- **"features"** are business value! Yay! We're all interested in business value here.

The gist of it is the heart of these 5 arguments. And that's something we overlook when we talk to non-technical people:

> Speak their language.

Don't use geek words. Talk about _economics_ and _business_. It's the secret sauce!

**Connect** with your manager.

So go ahead, try out this argument. You know what it means after all.

Here's a couple more to back up your message.

### 2) "In the last 3 months, we spent 63% of development budget in fixing quality issues"

I'll let you adapt the numbers to your reality 😉

The point here is to back up your message with data. This technical debt sure has an impact on your daily job. Can you prove it?

Sure you can!

Here are some examples you can look at:

- Your velocity over time. How many points per Sprint are you doing? Is it going down?
- The number of bugs reported per week. The number of bugs fixed per week. Are bugs accumulating? Are you spending more and more time on bug fixes?
- Track the number of emergencies that occur per week. Is it sustainable? Is it going up?

Show management **the cost of bad quality.**

#### Bonus: tie these numbers to actual money 💰

One day, I attended a post-mortem of a bug that could have been prevented with static type checking. The code was in JavaScript. There was an ongoing debate on adopting TypeScript in the company.

The developers doing the post-mortem did a bit of digging and were able to cost the impact of that bug on the business.

That bug had cost us **1 million Canadian Dollars** over its few months of existence. **1M\$ CAD** 💥

That alone would have made TypeScript worth the investment!

Therefore, it was decided that new services would be implemented in TypeScript and the critical ones would be revisited with type checking.

### 3) "We took technical loans to ship faster, we need to pay back some debt to keep a low time-to-market"

Again, **speak their language.**

A metaphor can be very efficient to convey a message. It helps others understand concepts they're not familiar with, by relating to something they know.

"Loan" is a concept that managers will be familiar with. "Technical debt" is also a famous metaphor.

You could also picture the company as a restaurant and the codebase as its kitchen. As you let the dishes pile up, it becomes harder and harder to deal with the increasing number of clients. Your staff needs to start washing the dishes as you go.

![](/assets/restaurant-kitchen.jpg)

### 4) "We can reduce our turnover by investing 10% of our time in our code quality"

We talked about the direct cost of bad quality.

But there is a vicious one that could go unnoticed: **turnover**.

Today, it's hard for companies to retain developers. Especially good developers. When the morale goes down, it can be quite easy for them to just leave for another offer. Something that will save them from the mess they're dealing with.

Hey! Maybe _you_ are there already, dreaming about a greener grass!

Now, raise the question:

> How much does it cost us to replace a leaving developer?

Attracting new talents, hiring and onboarding them. That costs money, takes time and slows down the team.

Your manager would surely prefer not to replace developers every year. _Reducing turnover_ can be a compelling argument. And having a plan to tackle technical debt is already a boost for team morale.

### 5) "Investing 20% of budget in refactoring will cut FRT in half with a positive ROI on devs productivity"

FRT is the _First Response Time_. That's a Customer Support key metric.

Keeping customers happy is important for the business.

The point is to:

- **Get the metrics that matter** for the Customer Support department
- **Identify a couple of issues** that are recurring or need developers to be addressed
- **Propose a plan** to reduce the number of Support issues, by addressing their root causes

By solving these issues, developers will spend less time assisting Customer Support. That will make up for the time invested: a positive _Return On Investment_.

## But in the end, _they_ decide (bonus advice)

Right?

Well, I just gave you 5 arguments that will help you make a case for the importance of addressing technical debt.

But I feel I should give you one final, bonus advice before you go talk to your manager.

> Refactor as you go.

Refactoring should not be an independent step from implementing a feature. In fact, you can't anticipate what the next features will be. Therefore, you have to refactor the code to adapt it to the new reality.

It's part of _your_ job.

As a professional developer, you know what is necessary to keep bringing business value.

That's valid, even on Legacy codebases. OK, granted, it won't be great tomorrow. And there's no way you can tackle large scale refactorings "as you go". But at least, it won't be worse.

**Working with Legacy Code is not about good. It's about better.**

With every bug fix, spend an extra hour writing an automated test. With every feature, spend an extra day cleaning the code. Make the change easier. Every day. After a few months, this habit will have a tremendous impact on your productivity.

Do you know why?

Because "these interests compound to reduce the volatility in the marginal cost of features"! 😉
