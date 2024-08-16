# Callbacks

You can of course use callbacks in Vapourm but you can make
them more robust by setting custom types for callbacks
so that functions that accept callbacks will check for the
signature of callbacks passed to them.

We can thus define a type for a function signature below:
it expects an `int` as argument and must return an `int`

```vapour
type math: func(x: int): int
```

With the type define we can reference that type in other
functions where we want to use a function of that signature
as callback.
This ensures that we only pass functions that corresponds
to our predefined expectations.

```vapour
func vectorise_math(vector: int, cb: math): int {
  return sapply(vector, cb)
}
```

We can then use the function defined above

```vapour
vectorise_math((1, 2, 3), (x: int): int => {
  return x * 3
})

vectorise_math((1, 2, 3), (x: int): int => {
  return x + 4
})
```

This ensures that we catch instances where we pass
functions that do not have the right signature,
as shown below where the callback returns a `num`
instead of an `int`.

```vapour
# will fail, callback is of the wrong signature.
vectorise_math((1, 2, 3), (x: int): num => {
  return x / 2
})
```
