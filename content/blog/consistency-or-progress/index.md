---
title: >-
  Should we stick to old patterns or sacrifice consistency?
date: 2021-08-22T09:15:00.000Z
description: "Consistency is great! But over time, it's hard to keep a codebase consistent. Here's my approach to adopt changes without creating a mess."
image: /assets/tree-trunk.jpg
tags:
  - best practice or code smell?
---

Consistency is great!

A consistent codebase is easier to work with because you get used to its patterns. Your brain creates shortcuts that help you read its code faster.

Working with Legacy Code… is a different story 😅

Code usually isn't consistent in a legacy codebase. The older it gets, the more patterns you see emerge. They accumulate into _layers_. Sometimes you can even tell how old some piece of code is from what it looks as if it was a tree trunk.

![](/assets/tree-trunk.jpg)

## It's hard for a codebase to stay consistent

As time passes, new patterns emerge. New ways of solving problems become idiomatic. People learn these new ways and bring them back into the codebase.

That's a good thing! It means the team keeps learning.

Not only the team learns, but the team changes. Over time, new developers onboard and old developers quit the project. The way the team works evolves with the people composing that team.

It's a living system 🌱 [#symmathesy](https://understandlegacycode.com/blog/legacy-of-socrates-4th-edition/#a-discussion-on-legacy-code-and-symmathesy)

The understanding of the problem to solve evolves too. The team learns from the feedback it receives:

- from the users of the product, telling about the quality of the solution
- from the bugs and outages, telling about the wrong assumptions

If a product is successful, it will stay around for years, maybe decades. Therefore, it becomes harder and harder to maintain consistency within the system.

### Preserving consistency has a cost

Think about all these React codebases that have been built with Classes Components for years, until [Functional Components became the official way to go](https://www.youtube.com/watch?v=dpw9EHDh2bM)…

What do you do when you have been using [Bluebird.js](http://bluebirdjs.com/docs/getting-started.html) since 2014, but most of it could be replaced with native [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) nowadays?

What if you've built your product for a few years until you've finally found a product-market fit. Now you want to grow, but development is slowing down. What do you do when people like me told you it would be easier to maintain if you've had [decoupled the storage mechanism from the business logic](https://blog.octo.com/en/hexagonal-architecture-three-principles-and-an-implementation-example/)? 😅

Consistency is valuable. Evolving the way things are done is valuable. **Having both, in the long run, has a cost.**

It takes time to change from _The Old Way_ to _The New Way_. In the meantime, the code is inconsistent, confusing. This cost can't be neglected.

**Most teams don't have time** to burn cycles to transition from pattern A to pattern B. They need to make a case for it. It's hard to make convincing, tangible arguments when it's all about the relative speed of navigating through the code…

That's how you end up stuck with old practices that won't change because "we don't do this here".

Read: "… and it would cost too much to change the way we work".

### Preserve consistency vs. allow for progress?

Here's the dilemma. Should you:

- Keep doing things the way it has always been done and hinder (probably) better ways of doing them?
- Change the way you work, but creating inconsistency across the codebase?

On a 20+ year-old legacy codebase, this isn't an easy decision.

I do have an approach that balances the benefits of both paths AND minimizes the downsides. Read along…

## Allow for changes, but clarify the standard

Let's start with that: **yes, I think you should evolve the ways things are done in a legacy system.**

Of course a legacy system has inertia. It comes with a legacy culture. You can't change things as fast as you would in a greenfield project.

Still, constantly pushing for improvements and change is the best thing you can do. It will take time, but time is on your side. Little improvements compound over time. You can massively transform the system if you keep slowly pushing in the right direction.

[![1% better every day = 37.78 times better after 1 year](./tiny-gains-graph.jpg)](https://jamesclear.com/continuous-improvement)

But first, **you should make the direction clear**.

### Make standards explicit

In my experience, that's what most teams are lacking.

Most practices are _implicit_ and acquired across years of working on the system. That's bad because **you can't efficiently change the ways things are done if it's not clear how things are done in the first place**.

Here's how you can solve that:

1. Start with a 1h brainstorming session with the engineering team. The goal is to collect in a single document what are the practices and patterns your team is using.
2. Put that document in a place where it's [easy to find, read, and update](https://understandlegacycode.com/blog/where-to-put-documentation/#the-3-traits-of-great-documentation).

Don't aim for a perfect document. Timebox the time spent on this.

When collaborating (code reviews, pairing…), note the way how things are done. Refer to the document so everyone follows the same standards.

😉 #consistency

### Team standards >> My standards

**Team standards are more important than personal standards.**

I prefer to put the `exports` at the top of my modules. I think it's better for a few reasons. But that's a personal taste. At work, I follow the conventions of our team instead of my personal style. It makes the code less surprising for anyone who has to maintain it.

In doubt, I can refer to the document to know what's the way our team is doing things _today_. That is super helpful when working with a legacy system with inconsistent patterns.

But because of that, it may happen that decisions about team standards turn into endless debates. One solution: timebox.

**Adopting a standard is more important than adopting the best one.**

If you notice the discussion is going nowhere and there's no consensus, have the Tech Lead decide. Start with that.

Some things are difficult to prove with pure debate. You'll go faster by picking a way and THEN see if that creates new problems.

### Whenever possible, automate

Some things don't worth spending time and energy to manually manage them. Computers can automate work for you, use them. That will save you precious hours every week.

If you don't have it already, I encourage you to automate 2 things:

1. **Code formatting**. Use tools like [Prettier](https://prettier.io/) to format the code automatically. Share the standard configuration in the source code. Make it [run automatically on commit](https://prettier.io/docs/en/precommit.html). Don't make people think about it. The exact coding style doesn't matter so much, as long as it's consistent. You get used to it.
2. **Linting**. Some rules can be enforced automatically, and you should do that. That is less optimal than code formatting (the feedback is slower), but it's way more efficient than doing it manually.

Once these are automated, your coding standards document will only refer to things that can't be. This is where things get interesting. You have more time to think about consistent approaches to solve problems, like Design Patterns.

**Explicit standards will promote consistency across the codebase.**

And that will help you work faster.

That's for #consistency, but how do you adopt new ways of doing things?

…

…

…

By allowing changes! 😏

## Change standards AND document the change

If you think there's a better way to doing things, you should:

1. Suggest to change things
2. Keep following the documented standard in the meantime

It doesn't take much: a short async discussion on a pull request, or a Slack thread could do. If the discussion takes long, I recommend having a synchronous meeting to discuss.

It can be ad-hoc, or you may dedicate a 30min meeting every 2 weeks to discuss the suggestions. It doesn't have to take long to be efficient, but it should be frequent enough.

Alright! Say you decide on a new way of doing something, how do you preserve the sacred consistency?

Now we're getting into the heart of the problem…

![You either die a startup, or live long enough to see your code become inconsistent](./inconsistent-legacy.jpg)

### First of all, document the change!

**Changing standards is fine, as long as it's explicit and documented.**

When you decide to change "the way we do things", you have 2 options to roll it out.

For both options, the first thing to do is **to document the change**.

Documenting is the heart of the trick. Even if your codebase gets inconsistent for a while, people should be able to go back to a documented standard to understand what's _the current way_ of doing things.

If you made coding standards explicit, then changing them should be easy. I also recommend writing [a short ADR](https://understandlegacycode.com/blog/earn-maintainers-esteem-with-adrs/) along with the change, to explain _why_ you're making this decision.

Maybe there's a more modern approach available now. Or maybe the old pattern is causing trouble. Today, you know better! Capture this insight in a small markdown file, along the codebase. Future maintainers will thank you for that! 🙏

OK, the change is documented, the direction is clear… Let's change "the way we do things"!

You now have 2 options:

1. **Automate the transition**, so the consistency is preserved
2. **Get there progressively**, sacrificing the consistency (but in a controlled way)

### 1) Atomic consistency: automate the transition

Depending on your language and tooling, you may be lucky enough to have tools that can refactor your codebase at scale!

I know these tools under the name of **codemods**. They will reformat your code, so you switch from _The Old Way_ into _The New Way_ with a snap 👌

This may involve some learning and coding. It pays off. Being able to reliably transform a codebase at scale is an interesting skill to develop.

Sometimes, other people would have done the work for you so you can just re-use it.

Here are some of the tools I know:

- Facebook's [jscodeshift](https://github.com/facebook/jscodeshift) for transforming JS codebases
- Specific to React, you have [react-codemod](https://github.com/reactjs/react-codemod)
- If you're dealing with PHP, have a look at [Rector](https://getrector.org/)
- _if you know more tools, let me know 🙏_

When using such a tool, I recommend you:

1. Create a new branch from the main one
2. Freeze the main branch for a bit while you transform the code
3. Run the tool on this branch
4. Review these changes and get them merged

That requires a bit of coordination. Don't freeze the main branch for too long—running the tool shouldn't take long anyway.

What about the other branches? Yes, they may have conflicts with the main branch. That's fine, here's the recipe to solve a conflict:

1. Synchronize the branch with the main one, get the conflict
2. Accept all branch changes, not the ones incoming from the main branch
3. Run the tool again to apply the transformation on the branch new code

Done.

### 2) Eventual consistency: get there progressively

When you are not lucky enough to be able to automate the change, you'll have to bite the bullet: **things will become inconsistent**. 👻

First of all: that's OK.

> Consistency is desirable, but it should not hinder changes.

That's OK because you have explicitly documented your standards. Things will be inconsistent, but it will be very clear what is the correct way of doing things now.

From now on, **any new code should follow the standard**.

Enforce it when collaborating. Share the knowledge among the team. If you can automate this with a simple linter rule, do it.

However, resist the temptation of refactoring the old patterns throughout the code. First, you probably don't have the time to do so. Then, as long as you don't need to work with the code the inconsistency won't impact you.

**Instead, only refactor the old patterns that you need to touch.**

Your codebase may have a few million lines of code, [only a subset of it is really active](https://understandlegacycode.com/blog/focus-refactoring-with-hotspots-analysis/). Therefore, following my advice will help you:

- adopt the change without the cost of refactoring the whole codebase,
- quickly get the most active parts of the codebase consistent with the new pattern.

So remember:

1. All new code should follow the new standard
2. Only refactor to the new standard the code you have to touch in your daily work

In my experience, that's a pragmatic approach that works fine. It's not perfect, but you'll be surprised how quickly it gets you in a cleaner state 🧗‍♀️

## Conclusion: Trade consistency for progress, but keep your standards explicit

Phew, this was a long one!

To be fair, that's not a trivial topic. Hopefully, you now have some insights to get out of the dilemma.

Let's recap!

1. **Make standards explicit.** It doesn't have to be perfect or exhaustive. Just start with what you have in mind and iterate from there.
2. **Keep the documented standards [easy to find, read, and update](https://understandlegacycode.com/blog/where-to-put-documentation/#the-3-traits-of-great-documentation).** There should be _just enough_ structure to keep sanity, but it should not be a burden to change.
3. **Embrace changes!** Try a new way of doing things. But **document the changes**.
4. **Use tools to automate the transition,** if possible. It will help you preserve consistency.
5. **Constantly move towards the new standard** if you can't preserve the consistency. Sooner than later, most of the code you touch will look clean and consistent.

And if you'd like further readings, I recommend this post from Mark Seemann: ["Against Consistency"](https://blog.ploeh.dk/2021/05/17/against-consistency/) 👌

Take care!
