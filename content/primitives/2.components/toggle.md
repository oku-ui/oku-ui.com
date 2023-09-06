---
title: Toggle
description: A two-state button that can be either on or off.
datePublished: 2022-12-07
dateModified: 2022-12-07
readingTime: 3
version: 0.4.0
componentName: OkuToggle
image: 'https://oku-ui.com/og/oku-toggle.jpg'
---

# Toggle
A two-state button that can be either on or off.

::ContentTabs
#preview
:ContentPreview{src="/primitives/OkuToggle/index.vue"}
#vue
<!-- Autodocs{src="/primitives/OkuToggle/index.vue" lang="vue"} -->
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

### OkuToggle
The toggle.

::OkuTable
---
data:
  - name: asChild
    required: false
    type: boolean
    default: false
    description: 'Change the default rendered element for the one passed as a child, merging their props and behavior. Read our [Composition](../guides/composition) guide for more details.'
  - name: defaultPressed
    type: boolean
    description: 'The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state.'
  - name: pressed
    type: boolean
    description: 'The controlled pressed state of the toggle. Must be used in conjunction with `onPressedChange`.'
  - name: onPressedChange
    type: '(pressed: boolean) => void'
    typeSimple: function
    description: 'Event handler called when the pressed state of the toggle changes.'
  - name: disabled
    type: boolean
    description: 'When `true`, prevents the user from interacting with the toggle.'
---
::

::OkuAttributesTable
---
data:
  - attribute: '[data-state]'
    values: ['on', 'off']
  - attribute: '[data-disabled]'
    values: 'Present when disabled'
---
::



## Accessibility
### Keyboard Interactions

::OkuKeyboardTable
---
data:
  - keys: ['Space']
    description: 'Activates/deactivates the toggle.'
  - keys: ['Enter']
    description: 'Activates/deactivates the toggle.'
---
::
