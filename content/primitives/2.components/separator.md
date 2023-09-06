---
title: Separator
description: Visually or semantically separates content.
datePublished: 2022-12-07
dateModified: 2022-12-07
readingTime: 3
version: 0.4.0
componentName: OkuSeparator
---

::ContentTabs
#preview
:ContentPreview{src="/primitives/OkuSeparator/index.vue"}
#vue
<!-- Autodocs{src="/primitives/OkuSeparator/index.vue" lang="vue"} -->
::

## Features
- Supports horizontal and vertical orientations.


## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/separator
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import { OkuSeparator } from '@oku-ui/separator'
</script>

<template>
  <OkuSeparator />
</template>
```

## API Reference

### Root
The separator.

::OkuTable
---
data:
  - name: asChild
    required: false
    type: boolean
    default: false
    description: |
      Change the default rendered element for the one passed as a child,
      merging their props and behavior.
      <br />
      <br />
      Read our [Composition](../guides/composition) guide for more details.
  - name: orientation
    type: '"horizontal" | "vertical"'
    default: "horizontal"
    description: The orientation of the separator.
  - name: decorative
    type: boolean
    description: |
      When `true`, signifies that it is purely visual, carries no
      semantic meaning, and ensures it is not present in the accessibility
      tree.
---
::

::OkuAttributesTable
---
data:
  - attribute: '[data-orientation]'
    values: ['vertical', 'horizontal']
---
::

## Accessibility

Adheres to the [separator role requirements.](https://www.w3.org/TR/wai-aria-1.2/#separator)