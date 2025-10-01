---
title: VS Code
description: 'Congiguration VS Code'
slug: vs-code
---

<br/>

Je ne compte pas le nombre de fois où j'ai du retourner sur d'anciens projets. Refaire mes configs, changer de poste devient une corvée.. Et bam ! Voici mes indispensables lorsque je me mets sur un nouveau poste ou que j'initie un projet :

## Config

```json
{
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "trailing",
  "editor.linkedEditing": true,
  "editor.suggest.insertMode": "replace",
  "editor.acceptSuggestionOnCommitCharacter": false,
  "files.autoSave": "onFocusChange",
  "explorer.autoReveal": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "workbench.tree.indent": 15,
  "workbench.tree.renderIndentGuides": "always",
  "workbench.editor.enablePreview": false,
  "emmet.triggerExpansionOnTab": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "editor.fontLigatures": true,
  "editor.fontFamily": "'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace",
  "editor.lineHeight": 20,
  "editor.fontSize": 13,
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.hidesExplorerArrows": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "files.associations": {
    "*.scss": "postcss"
  },
  "prettier.bracketSameLine": true
}
```

## Shorcut

```json
[
  {
    "key": "cmd+[Quote]",
    "command": "workbench.action.terminal.new",
    "when": "terminalProcessSupported || terminalWebExtensionContributedProfile"
  },
  {
    "key": "ctrl+shift+`",
    "command": "-workbench.action.terminal.new",
    "when": "terminalProcessSupported || terminalWebExtensionContributedProfile"
  },
  {
    "key": "cmd+[Quote]",
    "command": "workbench.action.terminal.toggleTerminal",
    "when": "terminal.active"
  },
  {
    "key": "ctrl+`",
    "command": "-workbench.action.terminal.toggleTerminal",
    "when": "terminal.active"
  },
  {
    "key": "cmd+[Comma]",
    "command": "editor.action.quickFix",
    "when": "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
  },
  {
    "key": "shift+cmd+[Comma]",
    "command": "-editor.action.quickFix",
    "when": "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
  },
  {
    "key": "shift+cmd+[Period]",
    "command": "-toggleExplainMode",
    "when": "suggestWidgetVisible"
  },
  {
    "key": "cmd+w",
    "command": "editor.action.smartSelect.expand"
  },
  {
    "key": "cmd+shift+o",
    "command": "revealFileInOS"
  },
  {
    "key": "cmd+r",
    "command": "workbench.action.gotoSymbol",
    "when": "!accessibilityHelpIsShown && !accessibleViewIsShown"
  },
  {
    "key": "shift+cmd+o",
    "command": "-workbench.action.gotoSymbol",
    "when": "!accessibilityHelpIsShown && !accessibleViewIsShown"
  },
  {
    "key": "cmd+n",
    "command": "explorer.newFile"
  },
  {
    "key": "cmd+w",
    "command": "-workbench.action.closeWindow",
    "when": "!editorIsOpen && !multipleEditorGroups"
  },
  {
    "key": "cmd+q",
    "command": "workbench.action.closeActiveEditor"
  },
  {
    "key": "cmd+w",
    "command": "-workbench.action.closeActiveEditor"
  }
]
```

## Prettier

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 120,
  "htmlWhitespaceSensitivity": "ignore"
}
```
