---
title: Separator
description: Visually or semantically separates content.
icon: i-ph-triangle-thin
---


::app-code-example
#preview
:package-separator-demo
#code
codegen{src="components/package/separator/Demo.vue" lang="vue"}
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

| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">orientation</div> | <div class="code">enum</div> | <div class="code">"horizontal"</div> |
| <div class="code">decorative</div> | <div class="code">boolean</div> | - |
| Data Attribute | Values |
| <div class="code">[data-orientation]</div> | <div class="code">"vertical" | "horizontal"</div> |


## Accessibility

Adheres to the [separator role requirements.](https://www.w3.org/TR/wai-aria-1.2/#separator)