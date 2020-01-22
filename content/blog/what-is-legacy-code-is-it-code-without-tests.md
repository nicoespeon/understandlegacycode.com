---
title: What is Legacy Code? Is it code without tests?
date: 2020-01-22T01:47:28.963Z
description: Here's a useful definition of "Legacy Code" you can refer to.
---
*"Legacy Code"*. 

If you work in IT, that's a term you'll hear often in your career. Developers talk about it *a lot*. Usually with a lot of negative connotations.

But what exactly do they call "Legacy Code"? Is it just old code? Or someone else's code? In any case, you understood that it's not "good code". 

Now, if you've been in the game for some time, you might have realized that everyone has a different opinion on what good code looks like. So, is there a useful definition of "Legacy Code" you can refer to?

## Code without tests

If you looked around before reading this, you may have come across this description.

In his book [Working Effectively With Legacy Code](https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code), Michael Feathers gives a clear definition of what Legacy Code means to him:

> To me, legacy code is simply code without tests.

This is an insight from years of experience.

Why is Feathers saying that? Because without tests, it's usually very hard to know everything a code can do. If you need to understand what the code is doing, you need to read it carefully, play the computer in your head and envision all the possible scenarios. You can also test it manually to see what it does. In the end, code without tests is indeed hard to understand. Especially if you didn't write it.

I like this definition. But I think it's not complete.

Code without tests is probably Legacy Code, but **code with tests can also be Legacy Code**. If tests are poorly written, they get in the way. Yes, you can have code that is harder to change because the tests are terrible! If you're reading the tests and you can't understand what the code is supposed to do, they don't help. Tested code can be as difficult to change than if it had no test, maybe even more! It depends on the quality of the tests.

Code without tests is a valid definition from a "testing" point of view. But you can be maintaining a small codebase that's not tested, still feel it's easy to understand and change—although I must admit, it's a rare animal. This codebase could be tested, but the lack of automated tests might not qualify it as Legacy Code.

## Legacy Code is code that you're not comfortable changing

This is my definition of Legacy Code. Let me repeat that differently:

**Legacy Code is the code you need to change and you struggle to understand.** 

Maybe you're looking for the root cause of a bug. Or maybe you're figuring out where to insert your feature. You want to change the code, but you have a hard time doing so because you don't know how not to break existing behavior. This is Legacy Code.

**Unfamiliarity with the code plays a lot**. We overestimate the complexity of unfamiliar code. This is why you feel this code you didn't write is just Legacy Code. Or that code you wrote in the past, but can't remember what the hell you were thinking about when you did. Yes, our past self looks just like a rando dev doing silly mistakes. Don't tell your future self.

**Good tests will make you comfortable changing unfamiliar code**. Hence Feathers' definition. Poor tests won't though.

If you recently arrived on an old project and you're struggling with Legacy Code, I've got good news: it will get better after a few months. I'm not saying the code is great—most of the code is terrible. But at least, you'll get used to it and you'll understand it's quirks and specificities better. Exciting isn't it? Not feeling excited? Alright, let's move on.

I say most of the code is terrible because it's usually the result of multiple people working on it, over a long period of time, with conflicting requirements, under time pressure. Legacy Code Recipe™. Knowledge is imperfect and shortcuts are taken to just meet the deadlines. That's VERY common. Eventually, you'll reach a state where every move introduces a bug and any feature takes forever to be implemented. Meh.

Why is that definition useful? Because it states something people fail to realize: **Legacy Code is a personal point of view**. It depends on **your** understanding of the code. And **your** feeling about changing it.

Some code might be a challenge for every developer of the team.\
Some code might feel complex to just you because you don't understand it yet.\
Some code you might understand, but you still don't feel comfortable changing.

Hopefully, there are techniques to get familiar with Legacy Code faster!

**Learning to understand Legacy Code is essential to be productive.** There are a lot of Legacy Code out there! Every codebase you'll work on will mostly be Legacy. You can try to avoid it and feel bad when you're stuck with it. Or you can see this as an opportunity to develop valuable skills that will make you stand out as a *great* developer.
