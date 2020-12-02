---
title: >-
  The key points of Beyond Legacy Code
date: 2020-12-01T20:23:52.092Z
description: "This book is filled with practical strategies to apply on Legacy systems. Here's my summary of its salient points."
image: /assets/beyond-legacy-code.jpg
tags:
  - book review
  - not sure where to start refactoring
  - making others care about it
---

[Beyond Legacy Code](https://www.google.com/search?q=beyond+legacy+code) from [David Scott Bernstein](https://twitter.com/ToBeAgile) is one of the first books I read that address the question of Legacy software.

![](/assets/beyond-legacy-code.jpg)

Concretely, David's present 9 practices to extend the life (and value) of your software. My goal here isn't to rewrite a shorter version of the book, but to share with you the gems that I've found particularly useful. The examples that hit really close to home.

I think this is a good read, and here's why…

## Writing code isn't the limiting factor

A frequent mistake we make is to think that _typing_ is the limiting factor in software development. We optimize for writing code faster. Less boilerplate. More magic.

The truth is: **we spend most of our time figuring out what's going on** with the legacy code we have in front of us!

You may have noticed developers' estimations have 3 states:

1. Finished
2. Not yet started
3. Almost done

It's a bit of a joke, but really estimations are hard. Especially when there are so many uncertainties. As we assume what needs to be done, we certainly miss a step.

It's fine to produce wrong estimations when working on legacy code. It's difficult to produce the correct ones in general. I think what matters is to agree on the direction, then reflect periodically to check if we're on track.

## Start with "why"

You can start improving your user stories today if you focus on what, why, and for whom before detailing "how".

That's not just valid for legacy code. That's something you can improve in your delivery process for new features and bug fixes.

Take a step back from the implementation details and think about the end-user. Let the people who will actually implement the feature determine _how_ to get there. Focus on _why_. Make sure that's understood. All too often, people don't understand the end goal of their task when working on a legacy system.

To help you do that, **start using [clear Acceptance Criteria](https://rubygarage.org/blog/clear-acceptance-criteria-and-why-its-important)**. It really works, I tried that myself at work!

If you don't know how to start improving your user stories, having clear Acceptance Criteria is a pragmatic first step. It answers the question "_how do I know I'm done?_". A side-benefit is a clearer definition of _Done_ for your team and less rework. I can only recommend you to start doing that!

## Reduce the feedback loop

**Build small batches**. Do smaller things, more frequently. The key is to get feedback faster in everything that you do.

This is the heart of Agile, really. Faster feedback makes everything simpler: you don't need a perfect plan when you can revisit it every 2 weeks.

If you started using concrete Acceptance Criteria, you can use them to split your user stories. [Here's a guide to doing so](https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/).

As you do smaller batches, **deliver them as soon as you can**. Again: faster feedback. If you don't already, use version control. Lean towards Continuous Integration. When you start from a legacy system, that's an goal you may not reach before a long time, if ever. That's fine! Moving towards it will help you reduce the risk of working on such a system.

I suggest you start rescuing a legacy system by automating how to build & release it to production. That will make deploying to production not to be a constraint anymore. It means it's OK to do mistakes if you can revert them within minutes!

### Automate tests and write them first

Having automated tests helps to reduce the feedback loop. It's not something easy to set up on an existing code base, but it's only when you start putting the energy in that it would pay off.

For the new code you write, writing the test first can help tremendously. It's the simplest way to write testable code. If you find the code is hard to test, then try to practice TDD for the new logic you add to the code. It will force you to isolate this logic and make sure it can be tested. With automated tests, you'll be able to change this logic promptly and be notified if you break an unexpected scenario!

David shares a great technique to introduce TDD to a team:

1. Make your colleague developer focus on _what_. Ask them to first think about the interface of the code they want to create.
2. Capture these specifications in a test.
3. Then, implement.

It's really "_take a step back and think_". Without mentioning it, you'd have started writing the tests first. Use tests as specifications.

There's more to testing and David covers different aspects of making it right, and how it can help you go beyond just producing more legacy code.

## Make people collaborate

Emphasis collaboration between people in the team. **Spread the knowledge across multiple brains**.

It's a good idea to have code reviews between all developers (yes, junior should review senior code too).

To reduce the feedback loop even more, consider **pair programming**. Pairing isn't about taking turns at the computer, as David explains. It's about bringing two minds to bear on the same task, so the task is completed more rapidly and at a much greater level of quality than if one person worked on it alone.

Pair programming is tremendously useful to tackle one of the biggest problems in legacy code: naming things! Naming things well requires understanding. Bringing two minds together will help you crack through the code and understand what it does much faster! Pair programming helps pairs make more maintainable code. Better than code reviews.

It also leads to fewer distractions. You get the best of both people, which is better than the sum of the individuals.

### Set up a Buddy Program

I like how David suggests setting up a _Buddy Program_: in the last hour of the day, get together with your buddy and do a code review of what you both did that day. Randomly swap the buddies each day.

It's a baby step towards pair programming that will help spread knowledge across the team.

## Different strategies to approach Legacy Code

I like David's shortlist for writing sustainable code:

1. **Delete dead code**, which is generally overlooked. Features pile up, code is writing "just in case". Then, it's not used. Yet, you need to maintain it. If necessary, add some logs to determine if some code is used or not. When you know it's not, get rid of it.
2. **Keep names up-to-date**. You can't get the correct name at the first shot. It's important to rename things as you learn more.
3. **Centralize Decisions**. This is basically DRY. But [do it correctly](https://understandlegacycode.com/blog/refactoring-rule-of-three/)
4. **Abstract external dependencies**, things you don't control. It makes code easier to test and change.
5. **Organize classes**, which really means "keep adapting your model as you learn".

But finally, how do you approach Legacy Code?

For the most part, you do nothing. If it doesn't need to be touched, you don't really need to address the debt. It's only when you need to change the code that it becomes an issue. That's why I recommend you to focus [on your system hotspots](https://understandlegacycode.com/blog/focus-refactoring-with-hotspots-analysis/).

The way to approach Legacy Code is to do that incrementally, little by little, making it less of a burden as you go. If you ever need to replace a whole section of your system, you can apply [the Strangler Fig pattern](https://understandlegacycode.com/blog/avoid-rewriting-a-legacy-system-from-scratch-by-strangling-it/).

When should you refactor Legacy Code? David's propose 7 key moments:

1. When critical code is not well maintained. In this case, start with extensive testing before you touch it.
2. When the only person who understands the code is becoming unavailable.
3. When new information reveals a better design. Don't let the model rot. Software design is a never-ending process.
4. When fixing bugs. Bugs reveal flaws in the design. Cover them with tests, then fix it.
5. When adding new features.
6. When you need to document legacy code.
7. When it's cheaper than a rewrite.

## Conclusion

Overall, I'd say [Beyond Legacy Code](https://www.google.com/search?q=beyond+legacy+code) is a refreshing read. Not that it presents groundbreaking techniques to address Legacy Code, but it recaps pragmatic and useful practices. It's a comprehensive guide you can refer to when you are called to rescue a legacy system.

It's the kind of book that will inspire people and give you a direction towards maintainable software.
