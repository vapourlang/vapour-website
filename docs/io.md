# Import and Export types

How to export and import types from other packages.

## Export

Types are actually automatically exported when writing an R
package using Vapour.
When transpiling the Vapour code for a package Vapour will
produce a `inst/types.vp` file which contains all the types
from your package.

This file is used by Vapour to find the types from packages
installed on your machine.

## Import

You don't explicitly import types with Vapour.

You can use types from other packages like you use functions
from other packages: using the namespace.

```vapour
let x: aPkg::theType = aPkg::theType(x = 1)
```

Vapour will then perform the same standard checks as with your 
custom types.
