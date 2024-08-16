import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Functions & Methods

In Vapour functions are declared much differently than they are in R,
methods even more so.
This is both to make it more readable and easier to parse, R has some
oddities with how methods are declared.

The way functions and methods are declared is taken from
[Go](https://go.dev/).

:::info

In Vapour `return` is a keyword and is mandatory, this is what
the language uses to know what is returned by functions.

:::

## Functions

Functions are declared with the `func` keyword,
we indicate the the types of each argument as well as the type 
the function returns.

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
