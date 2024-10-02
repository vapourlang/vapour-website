# Introduction

Vapour is a typed superset of R.

Vapour code is bound to be different from R and will likely be
more verbose. The aim of the language is to make (R) code more readable,
maintainable, and robust.

If you were to add up all the time spent writing code, glancing, 
reading, and parsing code to
fix bugs or refactor, you will notice that 
the amount of time spent writing the code s in
fact almost significant. 

> Vapour makes you write more code so you
can read it faster, easily find bugs, actually enjoy refactoring code,
and reduce runtime errors.

The language is written in files with the `.vp` extension, it
then transpiles (transforms) the Vapour code from the `.vp` code to
valid R code. This means that, in the very unfortunate event that
you do not like Vapour, you can always go back to writing
R code for a project written in Vapour since it is still available.

This also means that Vapour adds a "build step" to your programs;
a step between the code you write and the code that will run.
This step enables pre-processing the written code to flag flagrant
errors, warn of potential issues, or simply hint at things that could
be improved.

Thanks to the [Language Server Protocol](/lsp) you can have all these
checks in your IDE as you write the code, make sure you have your editor
setup correctly to enjoy these features.
