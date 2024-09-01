---
toc_min_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Syntax

## Vectors

In Vapour vectors are declared with parenthesis, without the need for `c` prefix.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
let x: int = (1, 2, 3)
```

</TabItem>
<TabItem value="r" label="R">

```r
x = c(1, 2, 3)
```

</TabItem>
</Tabs>

## Range

The `:` is used to define types in Vapour, so we use `..` for ranges.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
let x: int = 1..10
```

</TabItem>
<TabItem value="r" label="R">

```r
x = 1:10
```

</TabItem>
</Tabs>

## For loop

The iterator needs to be declared with `let`.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
for(let i: int in 1..10) {
  print(i)
}
```

</TabItem>
<TabItem value="r" label="R">

```r
for(i in 1:10) {
  print(i)
}
```

</TabItem>
</Tabs>

## Return

In Vapour `return` is a keywork, not a function.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
func addOne(x: int): int {
  return x + 1
}
```

</TabItem>
<TabItem value="r" label="R">

```r
printIt <- function(x) {
  return(x + 1)
}
```

</TabItem>
</Tabs>

## Defer

Vapour adds the `defer` keyword which translates to `on.exit`,
`defer` expects an anonymous function.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
func addOne(x: int): int {
  defer (): null => {
    print("second!")
  }

  print("first")
  return x + 1
}
```

</TabItem>
<TabItem value="r" label="R">

```r
addOne <- function(x) {
  on.exit((function(){
    print("second!")
  })())

  print("first")
  return x + 1
}
```

</TabItem>
</Tabs>

## Declaration & assignment

In Vapour assignment is always done with the `=` sign,
`<-` is used for something else (see next section).

You also have to declare mutable variables with `let`, this 
avoids shooting yourself in the foot overriding variables
that you should not.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
let x: char = "hello"
```

</TabItem>
<TabItem value="r" label="R">

```r
x = "hello"
```

</TabItem>
</Tabs>

## Assign parent

In Vapour `<-` is used to assign to a parent variable,
where one would use `<<-` in R.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
let x: char = "hello"

if(x == "world") {
  x <- "it's world!"
}
```

</TabItem>
<TabItem value="r" label="R">

```r
x = "hello"

if(x == "world") {
  x <<- "it's world!"
}
```

</TabItem>
</Tabs>

## Constants 

We have constants!

:::info

This is only checked in Vapour, we do not lock the
binding in the transpiled code.

:::

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
const x: char = "a constant!"
```

</TabItem>
<TabItem value="r" label="R">

```r
x = "a constant!"
```

</TabItem>
</Tabs>

## Booleans

Booleans are denoted with `true` and `false`.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
const x: bool = true
```

</TabItem>
<TabItem value="r" label="R">

```r
x = TRUE
```

</TabItem>
</Tabs>

## Assignments

Vapour supports addition (`+=`) and substitution assignments (`-=`).

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
let x: int = 40
x += 2
```

</TabItem>
<TabItem value="r" label="R">

```r
x = 40
x = x + 2
```

</TabItem>
</Tabs>
