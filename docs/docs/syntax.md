# Syntax

## Vectors

In Vapour vectors are declared with parenthesis, without the need for `c`.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
let x: int = (1, 2, 3)
```

</TabItem>
<TabItem value="r" label="R">

```r
x = c(1, 2, 3)
```

</TabItem>
</Tabs>

## Range

<Tabs>
<TabItem value="vp" label="Vapour">

```r
let x: int = 1..10
```

</TabItem>
<TabItem value="r" label="R">

```r
x = 1:10
```

</TabItem>
</Tabs>

## For loop

The iterator needs to be declared

<Tabs>
<TabItem value="vp" label="Vapour">

```r
for(let i: int = 1 in 1..10) {
  print(i)
}
```

</TabItem>
<TabItem value="r" label="R">

```r
for(i in 1:10) {
  print(i)
}
```

</TabItem>
</Tabs>
