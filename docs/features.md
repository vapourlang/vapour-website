# Features

## Type checking

Vapour checks for types (where it can), ensuring that your code is consistent
and that you do not get caught by `NA`s, or `NULL`s, etc.

```r
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

```r
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
print(x)
```

## Packages & functions

Vapour will warn you if you are using a package that is not installed
or if you are using a function that is not exported by the package
you call it from.

```r
# will warn that the package is not installed
nonExistentPackge::foo()

# will warn that the function is not exported by that pacakge
dplyr::some_function()
```

## Variables, types, and functions used

Vapour will check that you use all the variables, types, and functions you declare.

```r
let x: int = 1

let total: int = x + 2

# will warn that y is never used
let y: int = 1

# will warn that foo is never called
func foo(): null {
  print("something")
}

# will warn that userid is never used
type userid: int
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
