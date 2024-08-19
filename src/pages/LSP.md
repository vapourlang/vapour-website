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

Install the [extension](https://github.com/vapourlang/vapour-vscode) 
to get syntax highlighting as well as LSP diagnostics.

