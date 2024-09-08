# Contribute

Vapour is still in its very early stages, contributing is probably
not easy but certainly welcome, thank you for even considering it!

This document only meant to guide anyone who would want to contribute,
it gives an overview of how the project is structured.

## Internals

This is just briefly going over the internals as it may help you contribute.

Vapour is written in Go, solely using the standard library, at the
exception of the Language Server Protocol which uses [glsp](https://github.com/tliron/glsp).

It's structured as most such languages (probably) are:

1. lexer
2. parser
3. (tree) walker
4. transpiler

### Lexer

The lexer follows the model shared by [Rob Pike](https://www.youtube.com/watch?v=HxaD_trXwRE).
We tokenise token by token, but instead of the usual large switch statement to check and emit
tokens, we use a "state function."

The lexer is finite state machine that always tracks state via a function,
The lexer enters and switches state via function as each function simply
scans and emits tokens, advancing through the input string and itself 
returning a state function, thereby always staying in a state, until
the EOF token is reached.

### Parser

The parser is very much inspired from Thorsten Ball's
[interpreter book](https://interpreterbook.com/) (a recommended read).

It's a Pratt parser, a recursive parser that uses the idea of precedence
to correctly build the AST. I do not want to explain it here so as not 
to confuse you with my own misunderstandings, but all things considered it's 
a far more readable and clear parser than the alternatives I experimented with.

### Walker

Once the input code is lexed and parsed it is passed to a (tree) walker which
recursively goes through the AST and whose job it is to check for types,
consistency, variable usage, etc.

The walker emits:

- errors (fatal)
- warnings
- info
- hints

These follow the LSP standards where they are resurfaced.

#### Transpiler

The transpiler does a very similar job to the walker but emits R code:
it transforms the input Vapour code into (hopefully) valid R code.
