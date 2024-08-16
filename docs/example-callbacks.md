# Callbacks

You can of course use callbacks in Vapourm but you can make
them more robust by setting custom types for callbacks
so that functions that accept callbacks will check for the
signature of callbacks passed to them.

```r
type math: func(x: int): int

func apply_math(vector: int, cb: math): int {
  return cb(vector) + 1
}

apply_math((1, 2, 3), (x: int): int => {
  return x * 3
})
```
