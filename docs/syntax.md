import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Syntax

## Vectors

In Vapour vectors are declared with parenthesis, without the need for `c` prefix.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
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

```r
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

```r
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

```r
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

## Declaration 

Declare your variables before you used them.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
let x: int
x = 1
```
</TabItem>
<TabItem value="r" label="R">

```r
x = 1
```

</TabItem>
</Tabs>

## Assignment

In Vapour assignment is always done with the `=` sign,
`<-` is used for something else (see next section).

<Tabs>
<TabItem value="vp" label="Vapour">

```r
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

```r
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

<Tabs>
<TabItem value="vp" label="Vapour">

```r
const x: char = "a constant!"
```

</TabItem>
<TabItem value="r" label="R">

```r
x = "a constant!"
```

</TabItem>
</Tabs>
