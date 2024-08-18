import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# S3 Methods

This is probably a crucial example as it demonstrates one great way to use
Vapour.
R's S3 dispatch methods are very common in R and in fact somewhat resembles
the idea of "types:" dispatching methods based on an object class.

Assume we're working with a simple database, we need to fetch users from the
database, update the users table, etc (CRUD).
We should probably define a user `object` that would allow us to ensure
we always work with the right structure, and expected types.

:::note

Here we assume this is created within an R package.

:::

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

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
@generic
func (x: any) set_id(id: int, ...: any): any

#' @export
func (x: user) set_id(id: int, ...: any): user {
  stopifnot(!missing(id))
  x$id = id
  return x
}
```

</TabItem>
<TabItem value="r" label="R">

```r
set_id <- function(x, id, ...) {
  UseMethod("set_id")
}

set_id.user <- function(x, id, ...) {
  stopifnot(!missing(id))
  x$id <- id
  return(x)
}
```

</TabItem>
</Tabs>

__Set name__

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
@generic
func (x: any) set_name(name: char, ...: any): any

#' @export
func (x: user) set_name(name: char, ...: any): user {
  stopifnot(!missing(name))
  x$name = name
  return x
}
```

</TabItem>
<TabItem value="r" label="R">

```r
set_name <- function(x, id, ...) {
  UseMethod("set_name")
}

set_name.user <- function(x, id, ...) {
  stopifnot(!missing(id))
  x$id <- id
  return(x)
}
```

</TabItem>
</Tabs>

With the methods created we can now used them!

<Tabs>
<TabItem value="vp" label="Vapour">

```vapour
let john: user = create_user() |>
  set_id(1) |>
  set_name("John")
```

</TabItem>
<TabItem value="r" label="R">

```r
john = create_user() |>
  set_id(1) |>
  set_name("John")
```

</TabItem>
</Tabs>

Finally, you can transpile the code.

```bash
vapour -indir=vp
```
