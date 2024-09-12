# LSP

The language server protocol can be launched with `vapour -lsp`.
Note that the LSP only runs on save (live diagnostics are obnoxious).

:::info

The LSP currently only provides diagnostics: feedback on your 
code, type checking, etc. but does not provide autocompletion.

:::

## Integrations

## Vim

Install the Vim integration to get syntax highlighting as well as LSP diagnostics.

```vim
Plug 'vapourlang/vapour-vim'
```

## Neovim

Install the Neovim integration to get syntax highlighting as well as LSP diagnostics.

```vim
Plug 'vapourlang/vapour-nvim'
```

## Vscode

Install the [extension](https://marketplace.visualstudio.com/items?itemName=Vapour.vapour-vscode) 
to get syntax highlighting as well as LSP diagnostics.

## Customise

You can customise the LSP by creating a `.vapour` file in your
home directory.

```js
{
  lsp: {
      "when": ["open", "save", "close", "change"],
      "severity": ["fatal", "warn", "hint, "info"]
    }
}
```

### When

Defines when the LSP runs:

- `open`: when a vapour file is opened
- `save`: when a vapour file is saved
- `close`: when a vapour file is closed
- `change`: when a vapour file is changed

You can remove any of these to disable that behaviour,
e.g.: you can remove `change` to not have the LSP interrupt
you as you write code.

### Severity

Customise what errors are displayed:

- `fatal`: fatal errors that result in the code not being transpiled to R
- `warn`: severe warnings that result in the code not being transpiled to R
- `hint`: hints to improve code
- `info`: informational messages

Remove a severity to not have messages of that severity shown in your editor.
