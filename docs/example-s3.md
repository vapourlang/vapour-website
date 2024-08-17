# S3 Methods

This is probably a crucial example as it demonstrates one great way to use
Vapour.
R's S3 dispatch methods are very common in R and in fact somewhat resembles
the idea of "types:" dispatching methods based on an object class.

Assume we're working with a simple database, we need to fetch users from the
database, update the users table, etc (CRUD).
We should probably define a user `object` that would allow us to ensure
we always work with the right structure, and expected types.

We define a `user` type.

```vapour
type user: object {
  id: int,
  name: char
}
```

Now we can define a function that will create a `user`.

```vapour
func create_user(): user {
  return user()
}
```

Now we can define our methods on the `user` object, we'll define
two methods to update the `id` and the `name` of a user.

__Set ID__

```vapour
@generic
func (x: any) set_id(id: int, ...: any): user

#' @export
func (x: user) set_id(id: int, ...: any): user {
  stopifnot(!missing(id))
  x$id = id
  return x
}
```

__Set name__

```vapour
@generic
func (x: any) set_name(id: int, ...: any): user

#' @export
func (x: user) set_name(name: char, ...: any): user {
  stopifnot(!missing(name))
  x$name = name
  return x
}
```

With the methods created we can now used them!

```vapour
let john: user = create_user() |>
  set_id(1) |>
  set_name("John")
```
