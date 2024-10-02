---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Requirements

The only requirement is to have the [R programming language](https://www.r-project.org/)
installed on your machine.
We currently call R during transpilation to check on some built-in R functions.
We intend on removing this requirement in the long-term.

# Install

Install the CLI in any way you prefer.

## Go

If you have go installed you can install it directly from Github.

Requirements:

- Go >= 1.21.0
- Your `GOPATH` added to your `PATH`

For more information see [Go installation page](https://go.dev/doc/install).

```bash
go install github.com/vapourlang/vapour@latest
```

## Download

### Linux

Prebuilt binaries.

<Tabs>
<TabItem value="linux" label="Linux">

See the [latest release](https://github.com/vapourlang/vapour/releases/latest) for 
`.deb`, `.rpm`, `.apk`, `.ipk`, and Archlinux packages.

- [x86](https://github.com/vapourlang/vapour/releases/latest/download/vapour_Linux_x86_64.tar.gz)
- [arm64](https://github.com/vapourlang/vapour/releases/latest/download/vapour_Linux_arm64.tar.gz)

1. Untar
2. Add `vapour` to your `PATH`

</TabItem>
<TabItem value="mac" label="Mac Os">

- [x86](https://github.com/vapourlang/vapour/releases/latest/download/vapour_Darwin_x86_64.tar.gz)
- [arm64](https://github.com/vapourlang/vapour/releases/latest/download/vapour_Darwin_arm64.tar.gz)

1. Untar
2. Add `vapour` to your `PATH`

</TabItem>

<TabItem value="meh" label="Windows">

- [x86](https://github.com/vapourlang/vapour/releases/latest/download/vapour_Windows_x86_64.zip)
- [arm64](https://github.com/vapourlang/vapour/releases/latest/download/vapour_Windows_arm64.zip)

Unzip and install the `.exe`

</TabItem>
</Tabs>
