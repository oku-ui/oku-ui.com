---
title: Aspect Ratio
description: Displays content within a desired ratio.
---


::app-code-example
#preview
:package-aspect-ratio-demo
#code
codegen{src="components/package/AspectRatio/Demo.vue" lang="vue"}
::

## Features

- Accepts any custom ratio.

## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/aspect-ratio
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import { OkuAspectRatio } from '@oku-ui/aspect-ratio'
</script>

<template>
  <OkuAspectRatio :ratio="1 / 2" />
</template>
```

## API Reference

Contains the content you want to constrain to a given ratio.

| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">ratio</div> | <div class="code">number</div> | <div class="code">1</div> |
