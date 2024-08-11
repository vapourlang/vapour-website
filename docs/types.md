---
sidebar_position: 1
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
- `bool` - bool
- `any` - any
- `na` - any
- `null` - null

Complex:
- `dataframe` - data.frame
- `matrix` - matrix
- `list` - list
- `struct` - structure
- `object` - named list 

:::info

Infering types for base R and other packages is on the roadmap but likely
will take quite some time to achieve.

:::

## Usage 

Types are __always preceded__ by a colon (`:`), e.g.: 

```r
let x: int = 1
```

## Any

:::warning

Use type `any` as little as possible as it defeats the purpose of 
a typed language.

:::

You can use any if you cannot know the actual type,
`any` means that any type is accepted.

```r
let x: any = sum(1, 2, 3)
```

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

## Multiple types 

You can declare a variable with multiple types.

```r
let x: int | na = 1

x = NA

x = NULL
```

## Custom types

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

### Multiple  

An object can be one of multiple types, separate the types with `|`.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
let x: int | na

x = na
```

</TabItem>
<TabItem value="r" label="R">

```r
x = na
```

</TabItem>
</Tabs>

### Complex

You can define complex types such as `dataframe`, `list`, and `struct`.

#### List

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

#### Dataframes

The `dataframe` type creates a `data.frame`, it expects named, typed,
vectors.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
type dataset: dataframe {
  id: num,
  name: char
}

let x = dataset(
  id = 1..10,
  name: "John"
)
```

</TabItem>
<TabItem value="r" label="R">

```r
x = data.frame(
  id = 1:10,
  name = "John"
)
```

</TabItem>
</Tabs>

#### Object

The `object` is essentially a named list.

:::info

All attributes must be named in an `object`.

:::

<Tabs>
<TabItem value="vp" label="Vapour">

```r
type thing: object {
  id: num,
  name: char
}

let x = thing(
  id = 1..10,
  name: "John"
)
```

</TabItem>
<TabItem value="r" label="R">

```r
x = list(
  id = 1:10,
  name = "John"
)
```

</TabItem>
</Tabs>

#### Structs

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
