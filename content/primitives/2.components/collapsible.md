---
title: Collapsible
description: An interactive component which expands/collapses a panel.
---

# Collapsible
An interactive component which expands/collapses a panel.


::code-group{file="primitives/OkuCollapsible"}
#preview
 ::oku-collapsible
::

## Features
- Full keyboard navigation.
- Can be controlled or uncontrolled.



## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/collapsible
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import { OkuToggle } from '@oku-ui/toggle'
</script>

<template>
  <OkuCollapse>
    <OkuCollapsibleTrigger />
    <OkuCollapsibleContent />
  </OkuCollapse>
</template>
```

## API Reference

### OkuCollapse
The toggle.
| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">defaultOpen</div> | <div class="code">boolean</div> | <div class="code">-</div> |
| <div class="code">open</div> | <div class="code">boolean</div> | <div class="code">-</div> |
| <div class="code">onOpenChange</div> | <div class="code">function</div> | <div class="code">-</div> |
| <div class="code">disabled</div> | <div class="code">boolean</div> | <div class="code">-</div> |
| Data Attribute | Values |
| --- | --- |
| <div class="code">[data-state]</div> | <div class="code">"open" | "close"</div> |
| <div class="code">[data-disabled]</div> | <div class="code">Present when disabled</div> |

## OkuCollapsibleTrigger

| Key | Description |
| --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| Data Attribute | Values |
| --- | --- |
| <div class="code">[data-state]</div> | <div class="code">"open" | "close"</div> |
| <div class="code">[data-disabled]</div> | <div class="code">Present when disabled</div> |

## OkuCollapsibleContent

| Key | Description |
| --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">forceMount</div> | <div class="code">boolean</div> | <div class="code">-</div> |
| Data Attribute | Values |
| --- | --- |
| <div class="code">[data-state]</div> | <div class="code">"open" | "close"</div> |
| <div class="code">[data-disabled]</div> | <div class="code">Present when disabled</div> |
| CSS Variable | Values |
| --- | --- |
| --oku-collapsible-content-height | The height of the content when it opens/closes
| --oku-collapsible-content-width | The width of the content when it opens/closes

## Accessibility

Adheres to the [Disclosure WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
| Key | Description |
| --- | --- |
| Space | Opens/closes the collapsible. |
| Enter | Opens/closes the collapsible. |
