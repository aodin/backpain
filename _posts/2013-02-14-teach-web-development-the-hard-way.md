---
layout: default
title: Teach Web Development the Hard Way
excerpt: Letting novice JavaScript programmers repeat your own mistakes might actually be a good, just help them so that they don't repeat their own.
---

Teach Web Development the Hard Way
==================================

{{ page.date | date: "%d %B %Y" }}

If I had to use one word to describe the current state of web development it would be "cruel".

I'm not suggesting that a robust web service has ever been easy to build. But the industry's recent shift to heavy client-side JavaScript applications and backed by an API, often REST, has made the learning curve a bit more precipitous. 

The biggest contributer to this increased complexity is the division of logic. Not only do features, such as validation, need to be duplicated between client and server (often in two different programming languages), but the successful execution of logic is now dependent on the quirks of a user's operating system, browser and a plethora of other configurable options. The only way for a programmer to guarantee successful execution of logic on the client-side is to test it, in every possible combination.

_(While client-side compatibility issues have long existed, especially with CSS, those were issues of appearance, not logic.)_ 

Of course, complexity alone isn't cruelty. And the open source community's response to this challenge is as strong as ever; projects have emerged across the entire software stack: new frameworks, new languages, new test suites.

The cruelty of it all is that experienced programmers are pretending it isn't big deal. We are quick to recommend a solution, in the form of a prepackaged project with its own opinionated way of doing things, while remaining indifferent to the real reasons a novice is suffering.

We must acknowledge that this change in application structure, pushing logic to the client, is a major shift. And despite Facebook, Twitter, Gmail, et al. making it looking easy, the novice can quickly be lost in the technical chasm that separates the client from the server.

A first step is for experienced developers to stop treating so many projects as a panacea for the ills of the industry. Any software stack that is provided without context should be treated with skepticism. It is alright for us to recommend a project, but we must bear in mind that it is providing a solution to _our_ problems. 

This isn't a call to throw the rookies overboard and watch silently while they sink or swim, but to guide them with the understanding that our perspective may not be the best representation of reality. We should, to the best of our abilities, help a novice avoid certain disaster, but also allow them to pursue their ideas and opinions. After all, they may discover a solution that is better than our own.

That is to say: as hard as it is to learn web development, teaching it should be harder.

_Happy Hacking,_

_aodin_