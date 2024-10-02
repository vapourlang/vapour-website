# Callbacks

You can of course use callbacks in Vapour but you can make
them more robust by setting custom types for callbacks
so that functions that accept callbacks will check for the
signature of callbacks passed to them.

:::note

This is the only place in Vapour where types are not
preceded by a colon `:`

:::

We can thus define a type for a function signature below:
it expects an `int` as argument and must return an `int`

```vapour
type math: func(int, int) int
```

With the type define we can reference that type in other
functions where we want to use a function of that signature
as callback.
This ensures that we only pass functions that corresponds
to our predefined expectations.

```vapour
func vectorise_math(x: int, y: int, cb: math): int {
  return cb(x, y)
}
```

We can then use the function defined above

```vapour
vectorise_math(1, 2, (x: int, y: int): int => {
  return x * y
})

vectorise_math(1, 2, (x: int, y: int): int => {
  return x + y
})
```

This ensures that we catch instances where we pass
functions that do not have the right signature,
as shown below where the callback returns a `num`
instead of an `int`.

```vapour
# will fail, callback is of the wrong signature.
vectorise_math(1, 2, (x: int): num => {
  return x / 2
})
```
