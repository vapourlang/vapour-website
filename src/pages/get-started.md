# Get Started

## Install

First, [install](/install) the language, it's available for:

- Linux
- Mac
- Windows

## Setup your editor

There are plugins for:

- Vscode
- Neovim
- Vim 

The plugins will provide syntax highlighting as well as the LSP.

## Your first program

With the language installed and your editor set up, you are ready to go!

Vapour's syntax is somewhat different from that of R, you can see all the 
way in which it differs [here](http://localhost:3000/docs/syntax).

Vapour's extension is `.vp`, create your first script.

```r
func hello(what: char): char {
  return sprintf("Hello, %s", what)
}

hello("Vapour")
```

With your first scipt written you are ready to run the Vapour code.

```bash
vapour -infile=script.vp -outfile=script.R --run-only
```

If you are happy with your code and wish to generate the corresponding R
code rerun the above command, ommitting the `-run-only` flag.

```bash
vapour -infile=script.vp -outfile=script.R
```
