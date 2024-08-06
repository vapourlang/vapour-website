---
sidebar_position: 2
Title: Types
---

# Types

## Built-in Types

- `int` - integer
- `num` - numeric
- `char` - character
- `factor` - factor
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

```r
type userId: int

type person list {
  name: char,
  age: int
}
```

## Struct

```r
type person struct {
  list,
  name: char,
  age: int
}
```
