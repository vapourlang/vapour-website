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

Expressions:
- `dataframe` - data.frame
- `matrix` - matrix
- `list` - list
- `struct` - structure
- `object` - named list 
- `fn` - function

:::info

Infering types for base R and other packages is on the roadmap but likely
will take quite some time to achieve.

:::

## Usage 

Types are __always preceded__ by a colon (`:`), e.g.: 

```r
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

```r
let x: any = sum(1, 2, 3)
```

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

### Expressions

You can define complex types such as `dataframe`, `list`, `object`, and `struct`.

#### List 

In Vapour a `list` is like a `list` in R but __cannot contained named objects,__
see the `object` type for that effect.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
type lst: list {int | na}

let counts: lst = lst(1, 2, 3, 4)
```

</TabItem>
<TabItem value="r" label="R">

```r
counts = lst(1, 2, 3, 4)
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

The `object` is a a named list.

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

#### Decorator

You can use the decorator `@class` to customise the class assigned to your
object if you are not happy with the above.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
@class(a, thing, on, wheels)
type vehicle: struct {
  bool,
  name: char
}

let train: vehicle = vehicle(
  FALSE,
  wheels = false
)
```

</TabItem>
<TabItem value="r" label="R">

```r
train = structure(
  FALSE,
  class = c("a", "thing", "on", "wheels")
)
```

</TabItem>
</Tabs>

#### List

You can define lists of objects by preceding your type with `[]`.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
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
group = list(
  list(name = "John", age = 36),
  list(name = "Jane", age = 35)
)
```

</TabItem>
</Tabs>

#### Functions

You can define functions signatures to ensure you use
the correct callback (generally) where needed.

Note that the definition includes the parameter names but
does not check for that, it will only check for the types
of the arguments

<Tabs>
<TabItem value="vp" label="Vapour">

```r
type callback: func(x: int, y: int): int

func foo(x: int, cb: callback): int {
  return callback(x, 1)
}

# this is valid because the callback
# has the same signature as the given type
# accepts 2 ints and returns an int
foo(2, (x: int, y: int): int => {
  return x + y 
})
```

</TabItem>
<TabItem value="r" label="R">

```r
foo <- function(x, cb) {
  return cb(x, 1) 
}

foo(2, function(x, y) {
  return x + y
})
```

</TabItem>
</Tabs>
