---
sidebar_position: 2
Title: Types
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Types

## Built-in Types

Simple:
- `int` - integer
- `num` - numeric
- `char` - character
- `factor` - factor

Complex:
- `dataframe` - data.frame
- `list` - list
- `struct` - structure

## Declaration

Types are __always preceded__ by a colon (`:`), e.g.: 

```r
let x: int = 1
```

## Custom Types

You can declare your own custom types with the `type` keyword.

### Simple

You can define simple types such as below, these can seem 
underwhelming at first but quickly become interesting.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
type userId: int

let john: userId = 1
```

</TabItem>
<TabItem value="r" label="R">

```r
john = 1
```

</TabItem>
</Tabs>

### Complex

You can define complex types such as `dataframe`, `list`, and `struct`.

## List

<Tabs>
<TabItem value="vp" label="Vapour">

```r
type person list {
  name: char,
  age: int
}

let john: person = person(
  name = "John",
  age = 36
)
```

</TabItem>
<TabItem value="r" label="R">

```r
john = list(
  name = "John",
  age = 36
)
```

</TabItem>
</Tabs>

### Structs

A `struct` creates an R `structure`, the name of the struct is used as `class`.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
type userId: int

type person struct {
  userId,
  name: char,
  age: int
}

let john: person = person(
  0,
  name = "John",
  age = 36
)
```

</TabItem>
<TabItem value="r" label="R">

```r
john = structure(
  0,
  name = "John",
  age = 36,
  class = "person"
)
```

</TabItem>
</Tabs>

#### Decorator

You can use the decorator `@class` to customise the class assigned to your
object if you are not happy with the above.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
@class(a, thing, on, wheels)
type vehicle list {
  wheels: bool
}

let train: vehicle = vehicle(wheels = false)
```

</TabItem>
<TabItem value="r" label="R">

```r
train = list(
  wheels = FALSE,
  class = c("a", "thing", "on", "wheels")
)
```

</TabItem>
</Tabs>
