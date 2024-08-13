---
sidebar_position: 5
---

# Packages

How to write packages with Vapour.

## 1. Create an R package

Create an R package as you normally would.

```r
usethis::create_package("vapour.pkg")
```

## 2. Setup vapour

Simply create a new directory to host the Vapour code.

<Tabs>
<TabItem value="bash" label="bash">

```bash
mkdir vp
```

</TabItem>
<TabItem value="r" label="R">

```r
dir.create("vp")
```

</TabItem>
</Tabs>

## 4. Write 

Write some vapour code in the created `vp` directory.

```r
#' Add one
#' 
#' @param x An integer
#' 
#' @export
func addOne(x: int): int {
  stopifnot(!missing(x))
  return x + 1
}
```

## 5. Transpile

Transpile the code to R.

```bash
vapour -indir=vp
```

And you're done! You can now document, check, and install your package.

```r
devtools::document()
devtools::check()
devtools::install()
```
