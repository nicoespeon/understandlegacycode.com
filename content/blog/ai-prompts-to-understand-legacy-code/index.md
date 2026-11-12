---
title: 7 ways to use AI to understand legacy code
date: 2026-11-12
image: /assets/telescope-understand-legacy-code.jpg
description: >-
  AI can write code faster than you can read it. But you can also use it to understand the code you have to change. Michael Feathers shared a few techniques at Craft 2026. Here are the ones I'd try first.
tags:
  - getting into a large codebase
  - ai
  - conference
---

You open a file you need to change: 1232 lines. None of your colleagues wrote it. The person who did left two years ago… or maybe an agent generated it last sprint and it never really got reviewed as everyone is buried under the amount of generated code.

Either way, you don't understand it, but you still need to change it.

That's _legacy code_.

I [defined it](https://understandlegacycode.com/blog/what-is-legacy-code-is-it-code-without-tests/) as _the code you need to change, but you struggle to understand_. Thus, I smiled when I watched Michael Feathers' talk at Craft 2026. The author of [Working Effectively with Legacy Code](https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/) now frames legacy code as [the difference between code we understand and code we don't](https://youtu.be/Mcsb4_7U-LY?t=312).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mcsb4_7U-LY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The talk is cleverly called "Working Effectively with AI-Generated Code". In fact, it applies to any code you don't understand, whoever wrote it. AI is just another way to produce such code, at a faster rate.

In this talk, Feathers shares hope: while AI is used to generate more and more legacy code, it can also be leveraged to keep up and help you _understand_ such code. Here are the tips that I found the most useful, with concrete "prompts" you can feed your favorite LLM to try them out 🙂

## Why do you struggle more with AI-generated code?

Feathers starts with [Peter Naur's "Programming as Theory Building"](https://pages.cs.wisc.edu/~remzi/Naur.pdf) ([at 6:55](https://youtu.be/Mcsb4_7U-LY?t=415)), a paper from 1985 that is a very relevant read today.

Naur's idea is the following:

- a program is the _theory_ the developers have in their heads
- the code on disk is a by-product
- when the people who hold the theory leave, the theory leaves with them. The next developers have to rebuild it from the source, the tests, and the stories they hear about the old system.

That's why inheriting a codebase hurts so much 😅

Now think about code that an agent generated: **nobody had a theory of it in the first place**! You get all the by-product (code), and no person to ask later about it once the context is gone. Also, it keeps coming faster than you can review it.

> So, should we stop using AI to write code? 🤨

That's not the point of the talk. Feathers' point is that **AI also gives you new ways to build that theory**. For instance, you can ask it to explain things. But there are better ways to do so than just asking "explain this code".

## The 7 tips

### 1. Lensing: ask for "the 5", then "the 3"

"What does this function do?" is a fine question. But the quality of the answer depends on the model, its effort level, the skills you have…

Instead, Feathers [asks for a specific number](https://youtu.be/Mcsb4_7U-LY?t=1133):

```text
List the 5 most important responsibilities of `processOrder()`.
```

Then, follow up with:

```text
Now list the 3 most important responsibilities of `processOrder()`.
```

The second answer won't be the first one minus two items. The model has to regroup things to fit in 3. So 2 responsibilities get merged under a new name.

That's where you learn: comparing "the 5" and "the 3" shows you how the code could be split, and which names might fit the pieces.

You can use the same trick on files, instead of functions. Pick a handful of files and ask what they do together:

```text
Look at these files together. What do they do?
Are they related enough to share a name? Which one?
```

Then, add or remove a couple of files and ask again. Watch how the answer moves. It may hint at other ways the code could be grouped into modules.

Feathers gives an example of that: pick some files of an existing service and ask "if the service only contained these files, what would you call it?". If the name you get back is very different from the service's name, maybe that group of files wants to be its own module, with a name that fits better 💡

### 2. Project the code into another shape

Feathers calls these [projections](https://youtu.be/Mcsb4_7U-LY?t=1250). The idea is simple, yet powerful: render the same code in a format that makes something else visible.

If you have ever fiddled with a piece of paper or a whiteboard to reason about the code you are reading, well, this is a similar idea.

Yet, this is not something your LLM will produce by default, so you have to ask.

A few projections you can try:

- **A state diagram.** Feathers used PlantUML. I like to go for Mermaid since GitHub renders it (so you can append it to a PR, if relevant).

  ```text
  Draw a Mermaid state diagram for the `Subscription` class.
  Which states does it have? What triggers each transition?
  ```

- **Math.** Feathers took a two-page Ruby class and [asked for its mathematical representation](https://youtu.be/Mcsb4_7U-LY?t=1317), rendered as LaTeX. The result made the logic click for him.
- **Another language or paradigm.** [Convert it to Haskell](https://youtu.be/Mcsb4_7U-LY?t=1459). Or, if the code is functional, ask what it would look like with objects. The goal is not to ship that version, it's just another way to look at the problem so you understand it better.

Projections also help when _others_ need to understand something. Recently, I asked Claude to turn a change we were planning on our volume snapshots into a diagram, so my colleagues could review the change more easily:

![A diagram of daily volume snapshots and the check that alerts when one is missing](./snapshots-diagram.png)

It isn't perfect (e.g., why is the "Sentry monitor" node red?). But it was fast to produce, and good enough for reviewers to get the point without facing the typical wall of AI-slop text.

Before AI, I would rarely have drawn a whole diagram just for that. Now, it's one prompt away. Yet, you still need to make that prompt.

If a piece of the projection confuses you, zoom in on that piece with lensing. The techniques combine well.

### 3. Go rogue, ask for silly features

Feathers [compares this](https://youtu.be/Mcsb4_7U-LY?t=1508) to wondering what would happen if you fed marshmallows to a puppy. Of course you wouldn't try it on the puppy (!). But AI gives you a sandbox to try it on your code.

```text
What would change in this module if we had to support
multiple currencies on a single invoice?
```

Ask for features that go against the grain of the current design. Some will fit in a couple of lines. Others will touch 12 files. Like [Exploratory Refactoring](/blog/demine-codebase-with-exploratory-refactoring), the agent doesn't need to get it right for you to learn: you see where the design bends easily, and where it resists.

Feathers [comes back to this idea](https://youtu.be/Mcsb4_7U-LY?t=2092) later in the talk as a way to "bulletproof" a design.

I see it as a relatively cheap way to find out which parts of the system you'll want to refactor before the next real feature lands there.

### 4. Ask twice, or ask "for N"

AI always sounds confident, which is a problem when you are not familiar with the code.

To work around that, Feathers [asks the same question in a fresh session](https://youtu.be/Mcsb4_7U-LY?t=1918), with no shared memory, and compares the answers. Are both right? Is one wrong? Did one notice something the other missed?

Asking twice allows you to make a direct comparison. But you can [go further and ask for N](https://youtu.be/Mcsb4_7U-LY?t=2018):

```text
Give me 5 different ways to explain what `syncInventory()` does,
each from a different angle: data flow, error handling,
side effects, performance, business rules.
```

Or run several agents on the same question, in parallel. It costs you a few minutes. You can then task another agent to check all answers to draw the comparison and have a clearer picture—some sort of "meta-analysis" if you will.

### 5. Ask what's unnecessary

[This one](https://youtu.be/Mcsb4_7U-LY?t=2056) is simple and I think underrated:

```text
What in this code is unnecessary?
```

Or one of my favorites:

```text
Are there any tautological tests in this file? Redundant ones?
```

LLMs are really good at _generating_ content, adding more code, adding tests…

Feathers noticed the answers go further than a linter would to detect dead code. The AI may point out that a library already handles this. Or that something upstream already validates that input, so the check/test is indeed redundant.

⚠️ **Don't delete anything just because AI said so, of course. Treat the answer as a list of hypotheses to verify.**

Again, when the code is untested, [Exploratory Refactoring](/blog/demine-codebase-with-exploratory-refactoring) is a nice way to check them without risk: refactor, learn, then throw away the changes.

### 6. Build a tiny system from what you learned

As you learn facts about the system, **write them down**.

Then, [ask the AI to build a tiny system](https://youtu.be/Mcsb4_7U-LY?t=2572) that does only these things. For instance:

```text
Here is what I know about our billing system:
- Invoices are generated on the 1st of each month
- Late payments get a 5% fee after 15 days
- Customers can pause their subscription for up to 3 months

Write the smallest program that does exactly this.
```

Then, compare that tiny program with the real thing.

Where does all the extra complexity come from? Some of it will be legitimate, edge cases you didn't know about. Some of it won't. Sometimes you'll find the simple core that was hiding in the mess. That's a great target for your next refactoring!

### 7. Have the AI quiz you before you ship

This is the one I've started experimenting with after watching this talk.

"Co-Authored-By: Claude" is the new "Sent from my iPhone". This is misleading marketing though: regardless of the tools you use, _you_ are the one who owns the changes.

![A computer can never be held accountable. Therefore a computer must never make a management decision.](./computer-never-accountable.jpg)
_(Source: [IBM training slide, 1979](https://simonwillison.net/2025/Feb/3/a-computer-can-never-be-held-accountable/))_

So you'd better understand it. Not in detail, but at least understand what the change does, the _theory_. It shouldn't make you a bottleneck. Think of it as a sanity check.

Feathers [flips the roles](https://youtu.be/Mcsb4_7U-LY?t=2532): he asks the AI to quiz him on the code it just wrote.

```text
Before we push code, ask me 5 questions about it,
one at a time, to check I understand it well enough.
Focus on edge cases and what could break.
```

You can change the focus: security, performance, the patterns used… As Feathers says, there's no guarantee these are the right questions. But it's a lot more approachable than reading the whole diff from A to Z, hoping to notice what matters.

IMO, it works on legacy code in general. Ask the AI to quiz you on a module before you touch it. It helps you get into _thinking_ mode and the corrections from the LLM will teach you before you start changing it.

## Try first, then ask

Feathers worries about de-skilling, which is a recurring, legitimate concern whenever new technology changes the way we used to do things.

His answer: when he wants to understand something, he tries on his own first. He looks for hints, compares with systems he's seen before. When he gets stuck, he asks AI. Then he compares: what was I missing? Or what did the AI miss?

The active thinking is what makes the knowledge stick. You don't need to do it for _everything_. Pick the parts of the system that matter for your work and your career, and do the homework there.

He closes with Lisanne Bainbridge's paper, ["Ironies of Automation"](https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf) ([at 43:54](https://youtu.be/Mcsb4_7U-LY?t=2634)). Back in 1983, Bainbridge noticed that **the more you automate, the more skilled the humans in the loop need to be**. Automation takes care of the routine work. Humans get called in when something goes wrong. The irony is that these are the hardest cases to solve!

If you didn't keep your agents in check and [they painted themselves into a corner](https://www.reddit.com/r/ClaudeCode/comments/1xq2n3t/a_year_after_the_100_ai_mandate_nobody/), you are the one who needs to understand what's going on and unblock the system, so you can keep shipping without breaking everything all the time.

## Ask better questions

I like that none of these techniques ask you to trust the AI blindly. They all generate _more views_ of the code: different scales, different shapes, different answers to compare. Understanding comes from that comparison.

Also, none of them are specific to AI-generated code. They work as well on that 15-year-old module nobody dares to touch. It's just that AI generates more of these, faster.

If you only try one, I'd start with **quizzes before you ship**. As you let the LLM handle the implementation and generate code as a by-product, I find it really relevant to help you keep your hands on the wheel. See what you learn 😉

Have you tried some of these already? Do you have other prompts that help you understand legacy code? I'd love to hear about them: hit me on [Bluesky](https://bsky.app/profile/nicoespeon.com) or [LinkedIn](https://www.linkedin.com/in/nicolas-carlo-095b243b/).
