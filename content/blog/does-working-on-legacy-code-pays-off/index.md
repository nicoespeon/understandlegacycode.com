---
title: Does refactoring Legacy Code pay off in your career?
date: 2021-01-05T20:21:57.830Z
image: /assets/there-is-hope.jpg
description: >-
  Working on Legacy systems can be extremely beneficial to your career… If you can explain why it matters to the business!
tags:
  - making others care about it
---

Legacy software is everywhere. In fact, if you are working on code that was deployed to production and bring money to your company, you're certainly dealing with it every day. And yet, it's not seen as _fun_ 😬

Most developers I've talked to were more excited to work on new features, new projects, new concepts, new integrations… Something _new_. Something to _make_. Mending existing code might be a necessary chore, but building new things is what's exciting.

Companies are looking for _makers_. Developers who will architect, design, build, and deliver the next generation of features with exciting new technologies! Shipping, with high-quality for sure, brand new products to customers and outperform the competition!

And there you are, stuck maintaining that 10-year-old software weeks after weeks. You wish you could try out some GraphQL like the cool kids. But you've to compose with these PostgreSQL databases that were ~~patched~~ fine-tuned over the years.

If only you could sell the idea of rewriting part of the app to use a more modern stack… Unfortunately, there's no budget for that. Some managers can't see outside of the "what works" area. Now you're afraid to be left behind with the tools and frameworks, relegated to minor bug fixes instead of honing your skills!

Now, you have been committed to writing high-quality, well-tested software. Relentlessly improving the status quo of this codebase. But this doesn't seem to lead to career advancement and that's frustrating.

> Managers with non-technical background don't see the benefits of maintainable code!

I must admit that seeing developers who rack up mountains of technical debt get praised and promoted feels unfair, to say the least.

But the truth is: you've been honing extremely valuable skills across these months working on this legacy codebase. What you need now is:

1. To realize what are these skills
2. To learn how to communicate that to non-technical people

Let's go through this together.

![](/assets/there-is-hope.jpg)

## The skills you've been practicing without realizing

First of all, **persistence in front of challenges**. Having to constantly go in and change unfamiliar, undocumented, and poorly tested code is hard. And yet, you have been doing that for weeks, months, maybe years! It's normal to feel like quitting, and most developers do. We're lucky enough to have the option to jump from a company to another every year or so. If you have been maintaining a codebase for more than 12 months, you surely have a good lump of tenacity in you 👏

After all this time working with a convoluted codebase, you surely have developed **a spider-sense to detect code smells**. I won't pretend that being exposed to bad code makes you a great developer—it doesn't, exposure to _great_ code will teach you that. But now, you have experienced the maintenance issues some patterns can cause. I think that after spending weeks playing whack-a-mole with a bug that should have taken 2 days to be solved, you have a sense of how painful it is for the logic to be spread across the codebase. You may not know _how to solve_ that issue, but you can anticipate this will happen, from experience.

Then, my own history of working with Legacy software showed me that you learn to **think out of the box**. Because side-effects can happen everywhere, and you've been burned a few times already, you have learned to ask relevant questions when change requests come by:

- Is this bug occurring when there is only 1 element in the list?
- Can this ID field change in the partner system for some reason?
- What if I try to access this field with the keyboard?
- etc.

Coupling is subtle and spread like fire. It makes everything more complex than it looks. Hopefully, this has made you a more discerning developer.

Finally, working with Legacy Code teaches you **pragmatism**. Because everything is broken and you have limited time, you have to make tradeoffs. Sure this codebase isn't perfect, but can it run decently and serve customers in production? Sure a lot of things are broken, but what should be fixed first? Working with such a system is learning to embrace _better than yesterday_ over perfection. At some point, you have to focus on what matters: delivering value to people.

## How to get credit for your work

OK, I suspect at this point you may be cheered up, but doubtful this would make a difference in _the real world_.

> I've lost many jobs due to my wanting to push a culture of quality over sloppy hacks…

Have you heard such stories? Or maybe **you** have lived in such a situation.

So what? What can you do when companies seem to prefer developers who have a semblance of high productivity over those who really know about "craftsmanship" and "best practice"?

Actually, you _can_ do something. It's not about the skills—you already have that. It's about focusing on what matters.

And this starts with you grasping something critical: **it's not about doing craftsmanship, it's about _being_** **a craftsperson.**

Let's be honest here:

- Most employers don't care about craftsmanship. You'll hardly find job descriptions mentioning refactoring skills, despite these being critical to evolve existing systems.
- Most developers ignore there are better ways than the way they've done things for years. There are always new tools, new frameworks to learn. How come making it harder to access the global state would help them ship faster?

And yet, I've seen a lot of folks willing to do better and fall for this last one:

- Many software developers use "craftsmanship" and "best practices" as an excuse to over-engineer.

"Pushing a culture of quality" isn't the strategy to adopt, unless you're in a leading position to have a privilege. I don't mean you should stop writing automated tests neither.

My point is that the best way to spark a change towards a culture of quality is the same as getting credit for your hard work on Legacy Code: **focus on the business** and **lead by example**.

### Focus on the business

It is usually the missing part in developers' argumentation.

Why all of this matter for the end-user? For the company? Dig into the root cause. Use [the 5 whys](https://en.wikipedia.org/wiki/Five_whys) technique to explore the potential impact of your actions. Maybe you can find data on how much some problem is costing the company (e.g. time spent on bugs per iteration).

Taking care of this Legacy Code has a much more direct impact on existing customers (and company wallet!) than a greenfield project—that is generally a risky bet. So use the data you have to demonstrate the value of your work!

### Lead by example

It works, even if you aren't in a leadership position.

I don't mean being stubborn in forcing your coding techniques over the rest of your team. I mean introducing better ways progressively in the code you write, proving the added benefits of doing so are greater than the cost of changing The Way It Has Always Been Done™.

If your team doesn't like to pair-program as a rule, that's fine! Take the opportunity of a non-trivial question to dome some without naming it. If your colleague doesn't know how to test some part of the code, propose to spend a 30min timebox on this together. While you collaborate, share your tips of "doing it better" with them.

Actually, this is how I introduced my teammates to using automated refactorings: "I see you've extracted this variable. If you want, I can show you how to do that almost instantly with your editor. Let's try?". That felt like sharing a handy trick. After a couple of mentions across a few weeks, they started doing it by themselves. But most of all, they realized there were better ways to do that kind of work. This sparked the idea that there might be more… ☀️

## Working on Legacy Code can pay off in your career

Having to deal with a Legacy codebase feels like a chore for many. Yet, it teaches you skills that are **extremely valuable for your career.**

There will probably always be opportunities to jump from greenfield projects to greenfield projects. "Makers" are everywhere.

There will certainly always be open positions to maintain applications that are running in production and serving actual customers. "Menders" are needed. Good ones are not so common, because it's so tempting to always chase for the latest technology, leaving very little time to focus on the basics of building maintainable software.

Being persistent, creative, and pragmatic: Legacy Code teaches you all of that.

**You can't make it perfect, but you know how to constantly make it better.** That's why companies will desperately need **you**!

All big, successful companies have a whole load of legacy. If they are still alive after all these years, they are not running on the latest tech. They require experienced developers to keep this working while growing. This is where **you** can make a key difference compared to any other candidate. "_I'll rewrite everything with X_" is less sexy than "_I can migrate your system smoothly to new high standards_". That is a valuable skill, generally overlooked.

Can you put an existing software into automated tests? Can you minimize risks while making changes to such software? Then you'll have plenty of jobs. Legacy code isn't about COBOL. There are already plenty of Rails and JS legacy codebases. Not everyone can afford to rewrite everything from scratch…

Working on Legacy software does pay off. You need:

1. To realize what you learned, what you are capable of
2. To explain these skills to non-technical people, focusing on your impact on the business
3. To inspire your fellow developers by solving the annoying problems with your techniques

### Don't stay alone

My final advice would be to get in touch with other developers like you. You'll find plenty of great persons you can talk to in these 2 communities:

- The [Software Crafters community](https://slack.softwarecrafters.org/)
- The [Legacy Code Rocks community](https://www.legacycode.rocks/community)

If you join there, come and say hi to me 👋

In any case, take care of yourself!
