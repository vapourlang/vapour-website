import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Basic Example

This is a very basic example of using Vapour in the hope it helps
you get started, We'll create a function to create the 
Fibonacci sequence.

Create a directory and place a `script.vp` file in it.

```vapour
func fibonacci(n: int): int {
  let a: int = 0
  let b: int = 1
  let sequence: int = ()
  
  for(let i:int in 1..n) {
    sequence <- c(sequence, a)
    let next_num: int = a + b 
    a = b
    b = next_num
  }

  return sequence
}
```

- We declare the function with the `func` keyword.
- We give parameter `n` the `int` type (integer)
- We indicate that the function returns a vector of integers.
- We indicate that the function returns a vector of integers.
- We declare `sequence` as an empty vector with `()`
- We range over with `..` where in R we do it with `:`

:::info

If you typed the above in your editor you will have noticed a
warning already.

:::

You can then call the function once it's declared.

```vapour
# ... function declaration
fibonacci(10)
```

Once that done we are ready to run the script!
Run the command below from the terminal, 
the `-run-only` flag has Vapour run the script and not
generate the corresponding R file (we'll do that later).


```bash
vapour -infile=script.vp -run-only
```

```bash
[HINT]	file vapour.vp, line 6, character 24: `n` might be missing
[INFO]	file vapour.vp, line 6, character 10: `i` is never used
```

Running the command display an `INFO` and a `HINT`, indeed the `i`
variable declared in the `for` loop is never used but importantly
the `n` variable (the function variable) might be missing since it
has no default value.

Running the code below will fail because `n` is missing.

```vapour
fibonacci()
```

We can easily fix that issue, either add a check for `missing`
or give the function a default value.

<Tabs>
<TabItem value="default" label="Default value">

```vapour
func fibonacci(n: int = 5): int {
  let a: int = 0
  let b: int = 1
  let sequence: int = ()
  
  for(let i:int in 1..n) {
    sequence <- c(sequence, a)
    let next_num: int = a + b 
    a = b
    b = next_num
  }

  return sequence
}
```

</TabItem>
<TabItem value="missing" label="Missing check">

```r
func fibonacci(n: int): int {
  stopifnot(!missing(n))

  let a: int = 0
  let b: int = 1
  let sequence: int = ()
  
  for(let i:int in 1..n) {
    sequence <- c(sequence, a)
    let next_num: int = a + b 
    a = b
    b = next_num
  }

  return sequence
}
```

</TabItem>
</Tabs>

