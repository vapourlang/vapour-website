---
sidebar_position: 1
title: Variables
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Variables

In vapour you need to declare your variables before you can use them
There are two ways to declare variables.

## Let

__Mutable__ variables are declared with the `let` keyword.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
let x: int = 1
```

</TabItem>
<TabItem value="r" label="R">

```r
x = 1
```

</TabItem>
</Tabs>

Mutable variables can be declared without assigning a value to them.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
let x: int # no value assigned
x = 1
```

</TabItem>
<TabItem value="r" label="R">

```r
x = 1
```

</TabItem>
</Tabs>

## Const

__Immutable__ variables are declared with the `const` keyword.

Note that there are no constants in R (perhaps with `lockBinding`),
this is only checked in Vapour.

<Tabs>
<TabItem value="vp" label="Vapour">

```r
const x: int = 1
```

</TabItem>
<TabItem value="r" label="R">

```r
x = 1
```

</TabItem>
</Tabs>
