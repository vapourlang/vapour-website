import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Functions & Methods

## Introduction

In Vapour functions are declared much differently than they are in R,
methods even more so.
This is both to make it more readable and easier to parse, R has some
oddities with how methods are declared.

In R functions are declared like so:

```r
foo <- function(x) {
  x + 1
}
```

Whilst this works great for functions it becomes confusing
when declaring methods, e.g.:

```r
foo.data.frame <- function(x) {}
```

In the above, it is actually impossible to tell whether we 
are declaring:

- A function called `foo.data.frame`
- A method `foo` on `data.frame`
- A method `foo.data` on `frame`

Either method declarations should have been done differently, 
or R should not have allowed `.` in function names, and other
identifiers.

Hence, Vapour changes the way functions and methods are declared.
The way functions and methods are declared is taken from
[Go](https://go.dev/).
This is because the way methods are declared and dispatched in Go
is very similar to R.

## Return

In Vapour `return` is a keyword rather than a function and is
mandatory.
Inplicitely returning the last the last line is confusing.

Take for instance the function below, it's very hard for anyone
to guess what it actually returns.

```r
foo <- function(){
  x <- list()
  x$name <- 2
}
```

The above actually returns `2`.
Confusion only increases when the function makes use of branching.

```r
foo <- function(x = FALSE){
  x <- list()
  if(!x) {
    x$valid <- 1
  } else {
    x$valid <- "hello"
  }
}
```

Therefore, we make the `return` keyword mandatory in Vapour.

## Functions

Functions are declared with the `func` keyword,
we indicate the types of each argument as well as the type 
the function returns.

:::info

In Vapour `return` is a keyword and is mandatory, this is what
the language uses to know what is returned by functions.

:::

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
func add(x: int, y: int): int {
  return x + y
}
```

</TabItem>
<TabItem value="r" label="R">

```r
add = function(x, y) {
  return(x + y)
}
```

</TabItem>
</Tabs>

In R functions always return something there is no `void`,
so use `null` instead.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
func add(x: char): null {
  print(x)
}
```

</TabItem>
<TabItem value="r" label="R">

```r
add = function(x) {
  return(x)
}
```

</TabItem>
</Tabs>

## Anonymous Functions

Anonymous functions are declared as shown below, inspired from Javascript,
unlike Javascript Vapour expects curly braces (`{}`).

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
lapply(1..10, (x: int): int => {
  return x + 1
})
```

</TabItem>
<TabItem value="r" label="R">

```r
lapply(1:10, function(x) {
  return(x + 1)
})
```

</TabItem>
</Tabs>

## Methods

You can define methods on your custom types.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
type car struct {
  int,
  name: char
}

func (c: char) print(name: char): car {
  c$name = 1
}
```

</TabItem>
<TabItem value="r" label="R">

```r
add = function(x) {
  return(x)
}
```

</TabItem>
</Tabs>

### Class Decorator

You can use the decorator `@class` to customise the class assigned to your
object if you are not happy with the above.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
@class(a, thing, on, wheels)
type vehicle: struct {
  bool,
  name: char
}

let train: vehicle = vehicle(
  false,
  name = "tchoo tchoo"
)
```

</TabItem>
<TabItem value="r" label="R">

```r
train = structure(
  FALSE,
  name = "tchoo tchoo",
  class = c("a", "thing", "on", "wheels")
)
```

</TabItem>
</Tabs>

### Generic Decorator

You can use the decorator `@generic` to define a generic

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
type user: object {
  id: int,
  name: char
}

@generic
func (u: any) set_id(id: int): any

func (u: user) set_id(id: int): user {
  u$id = id
  return u
}
```

</TabItem>
<TabItem value="r" label="R">

```r
set_id <- function(u, id) {
  UseMethod("set_id")
}

set_id.user <- function(u, id) {
  u$id = id
  return(user)
}
```

</TabItem>
</Tabs>
