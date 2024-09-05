---
toc_min_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Types

## Built-in Types

Vectors:
- `int` - integer
- `num` - numeric
- `char` - character
- `factor` - factor
- `bool` - logical
- `any` - any
- `na` - NA
- `null` - NULL

Objects:
- `dataframe` - data.frame
- `matrix` - matrix
- `list` - list
- `struct` - structure
- `object` - named list 
- `func` - function

:::info

Infering types for base R and other packages is on the roadmap but likely
will take quite some time to achieve.

:::

## Usage 

Types are __always preceded__ by a colon (`:`), e.g.: 

```vapour
let x: int = 1
```

Note that R has no scalar, therefore where you might expect `let x: int`
to declare a scalar it actually declares a vector.

## Any

:::warning

Use type `any` as little as possible as it defeats the purpose of 
a typed language.

:::

You can use any if you cannot know the actual type,
`any` means that any type is accepted.

```vapour
let x: any = sum(1, 2, 3)
```

## Multiple  

An object can be one of multiple types, separate the types with `|`.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
let x: int | na

x = NA
```

</TabItem>
<TabItem value="r" label="R">

```r
x = c(NA)
```

</TabItem>
</Tabs>

## Custom types

You can declare your own custom types with the `type` keyword.

### Vectors 

You can define simple types such as below, these can seem 
underwhelming at first but quickly become interesting.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
type userId: int

let john: userId = 1
```

</TabItem>
<TabItem value="r" label="R">

```r
john = c(1)
```

</TabItem>
</Tabs>

### Objects 

You can define complex types such as `dataframe`, `list`, `object`, and `struct`.

#### List 

In Vapour a `list` is like a `list` in R but __cannot contained named objects,__
see the `object` type for that effect.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
type lst: list { int | na }

let counts: lst = lst(1, NA, 3, 4)
```

</TabItem>
<TabItem value="r" label="R">

```r
counts = structure(
  list(1, 2, 3, 4),
  class = c("lst", "list")
)
```

</TabItem>
</Tabs>

#### Dataframes

The `dataframe` type creates a `data.frame`, it expects named, typed,
vectors.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
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
x = structure(
  data.frame(
    id = 1:10,
    name = "John"
  ),
  class = c("dataset", "data.frame"),
  names = c("id", "name")
)
```

</TabItem>
</Tabs>

#### Object

The `object` is a named `list`.

:::info

All attributes must be named in an `object`.

:::

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
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
x = structure(
  list(
    id = 1:10,
    name = "John"
  ),
  class = c("thing", "list")
)
```

</TabItem>
</Tabs>

#### Structs

A `struct` creates an R `structure`, the name of the struct is used as `class`.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
type userId: int

type person: struct {
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

#### Implied lists

You can define lists of objects by preceding your type with `[]`.

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
type person: object {
  name: char,
  age: in
}

type people: []person

let group: people = people(
  person(name = "John", age = 36),
  person(name = "Jane", age = 35)
)
```

</TabItem>
<TabItem value="r" label="R">

```r
group = structure(
  list(
    structure(list(name="John"), class = c("person","list")), 
    structure(list(name="Jane"), class = c("person","list"))
  ), 
  class = c("people","list")
)
```

</TabItem>
</Tabs>
