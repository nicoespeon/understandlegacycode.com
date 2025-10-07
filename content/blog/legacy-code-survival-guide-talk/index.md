---
title: >-
  The Legacy Code Survival Guide: Add Features Without Fear
date: 2025-10-07T10:36:52.092Z
description: "Steven Diamante gave a great presentation on Legacy Code at the Seattle Crafter meetup. Let's dive into it!"
image: /assets/legacy-code-survival-guide-talk.png
tags:
  - changing untested code
  - approval tests
  - getting into a large codebase
  - refactoring
  - conference
---

In 2025, [Steven Diamante](https://www.linkedin.com/in/stevendiamante/) delivered a talk on Legacy Code at the Seattle Crafter Meetup. Although I'm familiar with these techniques, I thought they were particularly well articulated.

I also enjoyed the heroic-fantasy, D&D vibe that transpires throughout the presentation.

Honestly, the talk is really good! It's a mix of theory, mindset, and concrete implementation 👌

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vNaHTSuH6Bw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The recording may feel a bit long, but it's worth it.

## My breakdown of the talk

Here's my breakdown of interesting sections, if that helps:

- [00:20](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=20) - Introduction
- [03:23](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=203) - Why changing legacy code feels risky? _Legacy Code is **profitable** software that **I'm afraid** to change_.
- [10:13](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=613) - The plan: explore the code, break dependencies, build safety nets, refactor carefully, and add features. Having a short feedback loop makes code easier to change.
- [13:55](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=835) - Context: the specs to implement and the existing app. Exploring the code, see what we have. I like how realistic this example is.
- [16:43](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=1003) - **Setting up a first test**. By doing this, we start learning about the problems and difficulties of this codebase. We are writing a "characterization" test: the goal is to capture what the system currently does. Not what it should do. I wrote about this in [Approval Tests](https://understandlegacycode.com/approval-tests/).
- [20:45](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=1245) - **Break dependencies**. Steven mentions different techniques, such as [Subclass & Override](https://understandlegacycode.com/blog/quick-way-to-add-tests-when-code-does-side-effects/#extract-and-override-the-problems)​, [Peel & Slice](https://understandlegacycode.com/blog/another-way-of-refactoring-untested-code/#peel--slice), and Dependency Injection in general. He also shows how he leans on his IDE to automate refactorings. Without tests, this is the safest approach to modifying code. These refactorings will help him break the annoying dependencies, so he can set up the safety net that will allow for more ambitious refactorings later.
- [26:50](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=1610) - **Build safety nets**. Interesting discussion about the type of tests to write. A mistake would be to write tests that rigidify the implementation details (what most people would call "unit tests"). Instead, we want to cover the behavior of the system at a reasonable distance, so the tests won't break when we refactor the design. We are relying on Approval Tests again here.
- [39:50](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=2390) - **Anecdote**: an Approval Testing story gone wrong. A good reminder that, even with the right tools and techniques, working with Legacy Code can be tricky since you often are not alone in this. In particular, it's common for developers to start ignoring Approval Tests failures since they would break any time you need to change the code's behavior. If they are not trivial to read, people stop reading them. You end up with _an illusion of safety_: you have tests, but you can't tell noise from signal.
- [42:03](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=2523) - **Refactoring the code**, carefully. Go for the low-hanging fruit, rename things, spot and remove duplication, extract code and concepts (e.g., [Value Objects](https://martinfowler.com/bliki/ValueObject.html)). In particular, do the refactorings that will enable the features you need to implement.
- [1:04:17](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=3857) - **Adding the new feature**. Leaning on the shoulders of previous tests, refactorings, and learnings, we can now implement the specs efficiently and safely.
- [01:12:18](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=4338) - **Common code smells**. Steven goes through typical issues you will find in legacy codebases.
- [01:13:15](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=4395) - **What about GenAI?** It's a great tool to support you, but you can't just delegate the work. Coding agents are not ready for dealing with Legacy code in autonomy. You still need to know the techniques, the vocabulary, so you can guide the agent. That being said, LLMs can help you grok the codebase faster.
- [01:17:36](https://youtu.be/vNaHTSuH6Bw?si=96IqV8CfPRxkJFPF&t=4656) - Key takeaways. A good recap and mention of helpful techniques. Most of these I've covered in my book ["Legacy Code: First Aid Kit"](https://understandlegacycode.com/first-aid-kit) 😃

Finally, you can dig into the source code to follow along with the presentation: ​https://github.com/SDiamante13/loan-management-service

I hope this breakdown will help you dig into this great presentation. There is a lot to learn from seeing Steven go through a realistic example of legacy code. With a bit of practice, you can do that too 😉
