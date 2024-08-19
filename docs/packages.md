import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Packages

How to write packages with Vapour.

## 1. Create an R package

Create an R package as you normally would.

```r
usethis::create_package("vapour.pkg")
```

## 2. Setup vapour

First, create a new directory to host the Vapour code.

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

## 3. Inst

Second, create the `inst` directory, this is where Vapour will
output a file containing your custom types.

<Tabs>
<TabItem value="bash" label="bash">

```bash
mkdir inst
```

</TabItem>
<TabItem value="r" label="R">

```r
dir.create("inst")
```

</TabItem>
</Tabs>

## 4. Write 

Write some vapour code in the created `vp` directory.

```vapour
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

:::info

In Vapour the order of the files matter, do not use a variable 
declared in `b.vp` in `a.vp`.

:::

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

:::info

Vapour does not read or parse roxygen2 `@import` or `@importFrom`,
it is thus necessary to use the namespace `::` when calling functions
from other packages.

:::
