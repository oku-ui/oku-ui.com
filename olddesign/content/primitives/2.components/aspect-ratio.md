---
title: Aspect Ratio
description: Displays content within a desired ratio.
datePublished: 2022-12-07
dateModified: 2022-12-07
readingTime: 3
version: 0.4.0
componentName: OkuAspectRatio
image: 'https://oku-ui.com/og/oku-aspect-ratio.jpg'
---

# Aspect Ratio
Displays content within a desired ratio.


::ContentDesignTabs
#oku
::ContentTabs
#preview
:ContentPreview{src="/primitives/OkuAspectRatio/index.vue"}
#vue
<!-- Autodocs{src="/primitives/OkuAspectRatio/index.vue" lang="vue"} -->
::
#radix
::ContentTabs
#preview
:ContentPreview{src="/primitives/OkuAspectRatio/radix.vue" design="radix"}
#vue
<!-- Autodocs{src="/primitives/OkuAspectRatio/radix.vue" lang="vue"} -->
::
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

### OkuAspectRatio
Contains the content you want to constrain to a given ratio.


::OkuTable
---
data:
  - name: asChild
    required: false
    type: boolean
    default: false
    description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.'
  - name: ratio
    type: number
    default: 1
    description: The desired ratio
---
::