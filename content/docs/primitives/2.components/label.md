---
title: Label
description: Renders an accessible label associated with controls.
icon: i-ph-triangle-thin
---


::app-code-example
#preview
:package-label-demo
#code
codegen{src="components/package/label/Demo.vue" lang="vue"}
::

## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/label
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import Label from '@oku-ui/label'
</script>

<template>
  <OkuLabel
    class="text-black text-2xl border-2 border-gray-500 mb-4"
    for="firstName"
  >
    Label
  </OkuLabel>
</template>
```

## API Reference

Contains the content for the label.

| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| <div class="code">for</div> | <div class="code">false</div> | <div class="code">string</div> | <div class="code">false</div> | The id of the element the label is associated with. |

## Accessibility

This component is based on the native `label` element, it will automatically apply the correct labelling when wrapping controls or using the `for` attribute. For your own custom controls to work correctly, ensure they use native elements such as `button` or `input` as a base.