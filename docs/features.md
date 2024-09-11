---
toc_min_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Features

## Type checking

Vapour checks for types (where it can), ensuring that your code is consistent
and that you do not get caught by `NA`s, or `NULL`s, etc.

```vapour
let x: int = 1

# will fail, x is an int
x = "hello"

let y: int | char = 1

# this will work
y = "hello"
y = 1
```

## Variable, type, and function declaration

With variables declaration via `let` and `const` we can check
that variables are only declared once.

```vapour
let x: int = 1

# will fail, x is already declared
let x: char = 2

func foo(): null {
  print("hello")
}

# will fail, foo is already defined
func foo(): null {
  print("world")
}

type userid: int

# will fail, type userid is already defined
type userid: num

let x: userid = 1.1
# will fail, cannot use access operator on num
x$inaccessible = 1

type person: struct {
  name: char
}

let p: person = person()

# will fail, no x attribute on person
print(p$x)

# will fail, name is of wrong type
p$x = 2
```

## Constants

Vapour comes with constants so you can avoid squashing them on accident.

```vapour
const x: int = 1

# will fail, it's a constant
x = 2
```
## Variables existence

Vapour will check that you only reference variables that do exist.

```vapour
# will warn that x does not exist
print(x)
```

## Packages & functions

Vapour will warn you if you are using a package that is not installed
or if you are using a function that is not exported by the package
you call it from.

```vapour
# will warn that the package is not installed
nonExistentPackge::foo()

# will warn that the function is not exported by that pacakge
dplyr::some_function()
```

## Variables & types used

Vapour will check that you use all the variables and types you declare.

```vapour
let x: int = 1

let total: int = x + 2

# will warn that y is never used
let y: int = 1

# will warn that userid is never used
type userid: int
```

## Missing check

Vapour will warn you if variables used within functions might be missing.

```vapour
# will warn that x can be missing
func add(x: int): int {
  return x + 1
}

# no warning
func add(x: int): int {
  stopifnot(!missing(x))
  return x + 1
}
```

## Decorators

### Generic

Vapour lets you define a generic with a decorator.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
@generic
func (x: any) my_method(...: any): any
```

</TabItem>
<TabItem value="r" label="R">

```r
my_method <- function(x, ...) {
  UseMethod("my_method")
}
```

</TabItem>
</Tabs>

### Default

Vapour lets you define a default method with a decorator.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
@default
func (x: any) my_method(...: any): any {
  stop("Not implemented")
}
```

</TabItem>
<TabItem value="r" label="R">

```r
my_method.default <- function(x, ...) {
  stop("Not implemented")
}
```

</TabItem>
</Tabs>

### Matrix

You can customise how matrices are created with `@matrix`,
this is making the type very strict.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
@matrix(nrow = 2, ncol = 2)
type mat: matrix { int }

mat(1..4)
```

</TabItem>
<TabItem value="r" label="R">

```r
structure(
  matrix(
    1:4,
    nrow = 2,
    ncol = 2
  ),
  class = c("mat", "matrix")
)
```

</TabItem>
</Tabs>

### Factor 

You can customise how factors are created with `@factor`,
this is making the type very strict.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
@factor(levels = ("a", "b"))
type fct: matrix { char }

fct(("a", "b", "a"))
```

</TabItem>
<TabItem value="r" label="R">

```r
structure(
  factor(
    c("a", "b", "a")
    levels = c("a", "b")
  ),
  class = c("fct", "matrix")
)
```

</TabItem>
</Tabs>

