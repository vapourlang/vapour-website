---
sidebar_position: 6
---

# Features

## Type checking

Vapour checks for types (where it can), ensuring that your code is consistent
and that you do not get caught by `NA`s or `NULL`s.

```r
let x: int = 1

# will fail, x is an int
x = "hello"

let y: int | char = 1

# this will work
y = "hello"
```

## Variable declaration

With variables declaration via `let` and `const` we can check
that variables are only declared once.

```r
let x: int = 1

# will fail, x is already declared
let x: char = 2
```

## Constants

Vapour comes with constants so you can avoid squashing them on accident.

```r
const x: int = 1

# will fail, it's a constant
x = 2
```
## Variables existence

Vapour will check that you only reference variables that do exist.

```r
# will warn that x does not exist
x$column
```

## Function is exported

Vapour will check that a function is indeed exported by a package
if that function is called with its `::` namespace.

```r
dplyr::filter(cars, speed > 3)

# will warn
dplyr::wrong_fn()
```

## Variables used

Vapour will check that you used all the variables you declare.

```r
let x: int = 1

# will warn that y is never used
let y: int = 1

let total: int = x + 2
```

## Missing check

Vapour will warn you if variables used within functions might be missing.

```r
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
