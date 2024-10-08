# Get Started

Get Started with Vapour, it's easy as pie!

## Install

First, [install](/install) the language, it's available for:

- Linux
- Mac
- Windows

Grab the latest release from [here](/install).

## Setup your editor

There are plugins for:

- [Vscode](https://github.com/vapourlang/vapour-vscode)
- [Neovim](https://github.com/vapourlang/vapour-nvim)
- [Vim](https://github.com/vapourlang/vapour-vim)

The plugins will provide syntax highlighting as well as the LSP.

## Your first program

With the language installed and your editor set up, you are ready to go!

Vapour's syntax is somewhat different from that of R, you can see all the 
way in which it differs [here](/docs/syntax).

Vapour's extension is `.vp`, create your first script.

```vapour
func hello(what: char): char {
  return sprintf("Hello, %s", what)
}

hello("Vapour")
```

With your first script written you are ready to run the Vapour code.

```bash
vapour -infile=script.vp --run-only
```

If you are happy with your code and wish to generate the corresponding R
code rerun the above command, omitting the `-run-only` flag.

```bash
vapour -infile=script.vp
```
