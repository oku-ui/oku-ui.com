---
title: Checkbox
description: Renders an accessible checkbox associated with controls.
icon: i-ph-triangle-thin
---


::app-code-example
#preview
:package-checkbox-demo
#code
codegen{src="components/package/checkbox/Demo.vue" lang="vue"}
::

## Features

- Supports indeterminate state.
- Full keyboard navigation.
- Can be controlled or uncontrolled.



## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/checkbox
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import type { CheckboxRef } from '@oku-ui/checkbox'
import { OkuCheckbox, OkuCheckboxIndicator } from '@oku-ui/checkbox'
import { onMounted, ref } from 'vue'

const refV = ref<CheckboxRef>()

onMounted(() => {
  console.log(refV.value?.innerRef)
})
</script>

<template>
  <div class="flex items-center justify-center">
    <OkuCheckbox ref="refV">
      <OkuCheckboxIndicator />
    </OkuCheckbox>
  </div>
</template>
```

## API Reference

### Root
Contains all the parts of a checkbox. An input will also render when used within a form to ensure events propagate correctly.

| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">defaultChecked</div> | <div class="code">boolean</div> |  |
| <div class="code">checked</div> | <div class="code">boolean</div> |  |
| <div class="code">onCheckedChange</div> | <div class="code">function</div>  |  |
| <div class="code">disabled</div> | <div class="code">boolean</div> |  |
| <div class="code">required</div> | <div class="code">boolean</div> |  |
| <div class="code">name</div> | <div class="code">string</div> |  |
| <div class="code">value</div> | <div class="code">string</div> | <div class="code">'on'</div> |
| Data attributes | Values | |
| <div class="code">[data-state]</div> | <div class="code">'checked' &#124; 'unchecked' &#124; 'indeterminate'</div> |  |
| <div class="code">[data-disabled]</div> | <div class="code">Present when disabled</div> |  |



### Indicator
Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">forceMount</div> | <div class="code">boolean</div> |  |
| Data attributes | Values | |
| <div class="code">[data-state]</div> | <div class="code">'checked' &#124; 'unchecked' &#124; 'indeterminate'</div> |  |
| <div class="code">[data-disabled]</div> | <div class="code">Present when disabled</div> |  |


## Accessibility

Adheres to the [tri-state Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox).

### Keyboard Interactions

| Keys | Description |
| --- | --- |
| <div class="code">Space</div> | Checks/unchecks the checkbox. |