---
title: Slider
description: A two-state button that can be either on or off.
datePublished: 2022-12-07
dateModified: 2022-12-07
readingTime: 3
version: 0.4.0
---

::ContentTabs
#preview
:ContentPreview{src="/primitives/OkuSlider/index.vue"}
#vue
<!-- Autodocs{src="/primitives/OkuSlider/index.vue" lang="vue"} -->
::


## Features
- Full keyboard navigation.
- Can be controlled or uncontrolled.



## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/toggle
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import { OkuToggle } from '@oku-ui/toggle'
</script>

<template>
  <OkuToggle />
</template>
```

## API Reference

### Root
The toggle.
| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">defaultPressed</div> | <div class="code">boolean</div> | <div class="code">-</div> |
| <div class="code">pressed</div> | <div class="code">boolean</div> | <div class="code">-</div> |
| <div class="code">onPressedChange</div> | <div class="code">function</div> | <div class="code">-</div> |
| <div class="code">disabled</div> | <div class="code">boolean</div> | <div class="code">-</div> |
| Data Attribute | Values |
| --- | --- |
| <div class="code">[data-state]</div> | <div class="code">"on" | "off"</div> |
| <div class="code">[data-disabled]</div> | <div class="code">Present when disabled</div> |

## Accessibility

| Key | Description |
| --- | --- |
| <div class="code">Space</div> | <div class="code">Activates/deactivates the toggle.</div> |
| <div class="code">Enter</div> | <div class="code">Activates/deactivates the toggle.</div> |