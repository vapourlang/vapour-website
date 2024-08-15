# Introduction

Vapour is a typed superset of R, in other words,
it is somewhat like writing R code but with type declarations
(and some neat other little features).

Vapour code is bound to be different from R and will always be
more verbose. The aim of the language is to make (R) code more readable,
maintainable, and robust.

If you were to add up all the time spent writing code and compare it
to the amount of time spent glancing, reading, and parsing code to
fix bugs or refactor, the amount of time spent writing code would in
fact be almost significant. Vapour makes you write more code so you
can read it faster, easily find bugs, and actually enjoy refactor code.

The language is written in files with the `.vp` extension, the language
then transpiles (transforms) the Vapour code from the `.vp` code to
valid R code. This means that, in the very unfortunate event that
you do not like Vapour, you can always go back to writing
R code for a project written in Vapour.

This also means that Vapour adds a "build step" to your programs;
a step between the code you write and the code that will run.
This step enables pre-processing the written code to flag flagrant
errors, warn of potential issues, or simply hint at things that could
be improved.

Thanks to the [Language Server Protocol](/lsp) you can have all these
checks in your IDE as you write the code, make sure you have your editor
setup correctly to enjoy these features.
