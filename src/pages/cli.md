---
sidebar_position: 2
---

# CLI

Basics of the CLI.

## Help

You can get help with `vapour -h`

```bash
Usage of vapour:
  -check-only
    	Run type checker
  -help
    	Get help on commands
  -indir string
    	Directory of vapour files to process
  -infile string
    	Vapour file to process
  -lsp
    	Run the language server protocol
  -outdir dir
    	Directory where to place transpiled files from dir (defaults to R) (default "R")
  -outfile infile
    	Name of R file to where to palce transpiled infile. (defaults to vapour.R) (default "vapour.R")
  -port string
    	Port on which to run the language server protocol, only used if -tcp flag is passed (defaults to 3000) (default "3000")
  -repl
    	Run the REPL
  -run-only
    	Run the transpiled vapour files
  -tcp
    	Run the language server protocol on TCP
  -types string
    	Path where to generate the type files, only applies if passing a directory with -indir (default "inst/types.vp")
  -version
    	Retrieve vapour version
```

## Transpile

### Transpile Directory

The example command below will transpile all `.vp` files from the `vp`
directory (`indir` flag), and palce the resulting R code in the `R`
directory (`ourdir` flag which defaults to R)

```bash
vapour -indir=vp -outdir=R
```

### Transpile File

Transpiles the `script.vp` to R creating the `script.R` file

```bash
vapour -infile=script.vp -outfile=script.R
```

## Misc

### Check

You can use any of the commands above but add the `-check-only` flag
to---not transpile the file---and instead just run the type checker.

```bash
vapour -indir=vp -outdir=R -check-only

vapour -infile=script.vp -outfile=script.R -check-only
```

### Run

You can use any of the transpile commands above but add the `-run-only` flag
to&mdash;not transpile the file&mdash;and instead run them in R directly
(not generating the transpiled R code).

```bash
vapour -infile=script.vp -run-only
```

### LSP

This is to launch the Language Server Protocol and should not be run manually.
This is only useful if you want to integrate Vapour with another editor.

By default the LSP will use stdin and stdout.

```bash
vapour -lsp
```

You can serve it on a TCP server with:

```bash
vapour -lsp -tcp -port=3000
```

### Version

Retrieve the current vapour version.

```bash
vapour -version
```
