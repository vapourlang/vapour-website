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

```r
type user: object {
  id: int,
  name: char
}
```

Now we can define a function that will create a `user`.

```r
func create_user(id: int): user {
  stopifnot(!missing(id))
  return user(id = id)
}
```

Now we can define our methods on the `user` object, we'll define
two methods to update the `id` and the `name` of a user.

__Set ID__

```r
func set_id(x: user, id: int, ...: any): person {
  UseMethod("set_id")
}

#' @export
func (x: user) set_id(id: int, ...: any): user {
  stopifnot(!missing(id))
  x$id = id
  return x
}
```

__Set name__

```r
func set_name(x: user, name: char, ...: any): person {
  UseMethod("set_name")
}

#' @export
func (x: user) set_name(name: char, ...: any): user {
  stopifnot(!missing(name))
  x$name = name
  return x
}
```

With the methods created we can now used them!

```r
let john: user = create_user(1)

john = set_name(john, "John")
```
