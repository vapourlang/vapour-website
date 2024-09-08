---
title: Vapour Alpha Release
description: Initial release of Vapour!
slug: vapour-release
authors:
  - name: John Coene
    title: Creator of Vapour
    url: https://john-coene.com
    image_url: https://github.com/JohnCoene.png
    socials:
      x: jdatap 
      github: JohnCoene 
tags: [release]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# Hello, world!

At long last, I'm releasing Vapour!

<!-- truncate -->

## The story so far

I've been thinking about such a project for at least 4 years now,
since trying typed languages such as [Typescript](https://www.typescriptlang.org/),
[Go](https://go.dev/), and others.

Three years ago, I shared this idea with [Kirill Müller](https://github.com/krlmlr)
and it lead to [pre-processing R](https://github.com/pre-processing-r) and 
an ISC submission for a grant with other
[R community members](https://github.com/orgs/pre-processing-r/people).

We did not obtain the grant and that project died down, but it could not
leave my mind, I have since kept trying to put something together but ran into
many hurdles. mostly technical (skill issues), until now... I hope.

> Note that the following purposely simplifies many concepts.

## Build Step

In my opinion, what is probably even more valuable than types is the "build step."
The distinction between the code written by the programmer from the code that runs
implies a "pre-processor." In the case of Go, or Rust it's a compiler, for 
Typescript and Vapour it's a _transpiler_.

The pre-processor can carry a number of tasks to help the developer,
the main one being static analysis: analysing the code without executing it.
This is what allows spotting issues in the code before execution.

For instance, Vapour will warn that the code below may error as `x`
might be missing.

```vapour
func add_one(x: int): int {
  return x + 1
}
```

You can then resolve that warning by either checking whether that variable is 
missing with `missing` or give it a default value.

Vapour's pre-processor allows such checks, along with many others, and we
hope to add many more.

## Frustrations

My "native" programming language is R, I certainly don't consider myself a good
R programmer but I've used the language for just over a decade now so I can
claim to be quite at ease with it.

And yet...

I still frequently make stupid mistakes, see the exaggeration below.

```r
x <- "hello"

x + 1
```

When I see such errors I always think: "Why did you even let me run that?"
The language should warn me of such problems in my code,
not the users of my applications or packages.

This probably applies to all dynamically typed languages, though
Javascript bundlers sometimes catch such problems.
However, R sometimes exacerbates the issue as it can have rather
cryptic error messages that, for goodness sake, refuse to tell the 
developer where the error occured: give me a file name and line number!

```r
if(NA){
  print("this will error")
}
```

The above produces an error that genuinely does not give any indication as to the location
of it in the source code, even with `options(error = traceback)`. 
I have already spent too many afternoons trying to identify the offending
`if` statement in large codebases.

We should not have to advocate for `if(isTRUE(NA)){}`, it's a failure of the 
language which sometimes seems to work again the developers rather than
attempt to help them.

Types do away with that, because the language can check for it, such 
checks also remove the infamous `object of type closure is not subsettable` error,
and many more.
Also, a new language allows a custom tree-walker to check for issues
at the time we write the code so any potential problem can be fixed before
the code is run.

## Syntax

Another fascinating idea enabled by pre-processors is the idea of multiple
syntaxes. R's syntax is very stable, 99% of the code written in R version 2+
still runs fine on version 4+. Certainly that's a good thing!

I'm not entirely sure this is a positive.
We should differentiate between syntax and language.
Almost all languages make the distinction: English is one language but
there are multiple syntaxes for it (British, American, Indian, etc.),
the same applies to Spanish, Portuguese, French, and many more.

Javascript has such a concept, though the point is not to have various
dialects of the language but to allow the syntax of the language to
move faster than the language.

Javascript is the engine, ECMAScript is the syntax.
Part of the work JavaScript bundlers do (
[webpack](https://webpack.js.org/), 
[rollup](https://rollupjs.org/), 
[parcel](https://parceljs.org/), etc.),
is to change the syntax of the written JavaScript code to older versions
(which are supported by more browsers).

We could imagine something similar with Vapour/R; we could have had the
pipe (`|>`) years ago and have the transpiler convert it back to 
magrittr's `%>%`.

## Refactoring

TLDR; try [Go](https://go.dev), it'll change your life.

With all of the above mentioned improvements one discovers refactoring.

> I'm very confident of the statements that follow, I have seen developers
far more skilled and experienced than I am approach the problem in the same
manner, it's not a skill issue, it's caused by the language.

In dynamically typed languages like R we approach refactoring from the
outside in: we see a piece of code at the core of the project that needs
some serious refactoring but no one dares touch it.
Instead of going straight to the piece of code in question we nibble on the
edges, approaching the problem from the outside because doing it the other
way around (the correct way) is bound to lead to errors.

As a result we approach refactoring in steps that are inefficient, stressful,
and need to be carried iteratively as a complete refactor can never truly 
be achieved this way, and at every lengthy iteration we hope 
that the tests we have not written pass...

In a strongly typed language like Go the developer approaches the problem 
the other way around:
you see something you don't like and you just rip it out.
The editor will then light up like a Christmas tree highlighting all
the things that broken, and we can simply start refactoring; going from 
one diagnostic to the next until all is well again.
As a result refactoring becomes exciting, and fun 
rather than a chore to worry about.

Why ramble abour refactoring?

If you add up all the time you have spent writing code and compare
it against the amount time you have spent glancing, reading, analysing, and
refactoring or fixing bugs you will notice that we spend very little
time "writing" code: refactoring (re-writing) is what we do most of the time.

## Conclusion

Vapour aims at tackling these issues.
It's admittedly very young and thus may not do a perfect job of it but
we'll work things out to mature the language and ecosystem.

If you have any feedback, questions, or concern, please open Github
issues, all are welcome to do so.
