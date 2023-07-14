---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---


::app-code-example
#preview
:package-progress-demo
#code
codegen{src="components/package/progress/Demo.vue" lang="vue"}
::

## Features
- Provides context for assistive technology to read the progress of a task.



## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/progress
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import { OkuProgress, OkuProgressIndicator } from '@oku-ui/progress'
</script>

<template>
  <OkuProgress>
    <OkuProgressIndicator />
  </OkuProgress>
</template>
```

## API Reference

### Root component
Contains all of the progress parts.
| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">value</div> | <div class="code">number \| null</div> | <div class="code">-</div> |
| <div class="code">max</div> | <div class="code">number</div> | <div class="code">-</div> |
| <div class="code">getValueLabel</div> | <div class="code">function</div> | <div class="code">-</div> |
| Data Attribute | Values |
| --- | --- |
| <div class="code">data-state</div> | <div class="code">"complete" \| "indeterminate" \| "loading"</div> |
| <div class="code">data-value</div> | <div class="code">The current value</div> |
| <div class="code">data-max</div> | <div class="code">The max value</div> |


### Indicator
Used to show the progress visually. It also makes progress accessible to assistive technologies.

| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| Data Attribute | Values |
| --- | --- |
| <div class="code">data-state</div> | <div class="code">"complete" \| "indeterminate" \| "loading"</div> |
| <div class="code">data-value</div> | <div class="code">The current value</div> |
| <div class="code">data-max</div> | <div class="code">The max value</div> |

## Accessibility
Adheres to the `progressbar` [role requirements.](https://www.w3.org/WAI/ARIA/apg/patterns/meter/)

