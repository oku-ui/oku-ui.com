---
title: Avatar
description: An image element with a fallback for representing the user.
datePublished: 2022-12-07
dateModified: 2022-12-07
readingTime: 3
version: 0.4.0
---

::ContentTabs
#preview
:ContentPreview{src="/primitives/OkuAvatar/index.vue"}
#vue
<!-- Autodocs{src="/primitives/OkuAvatar/index.vue" lang="vue"} -->
::


## Features

- Automatic and manual control over when the image renders.
- Fallback part accepts any children.
- Optionally delay fallback rendering to avoid content flashing.

## Installation

Install the component from your command line.

```bash
pnpm install @oku-ui/avatar
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import { OkuAvatar, OkuAvatarFallback, OkuAvatarImage } from '@oku-ui/avatar'
</script>

<template>
  <OkuAvatar>
    <OkuAvatarImage />
    <OkuAvatarFallback />
  </OkuAvatar>
</template>
```

## API Reference

### OkuAvatar
Contains all the parts of an avatar.
| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |

### OkuAvatarImage
The image to render. By default it will only render when it has loaded. You can use the `onLoadingStatusChange` handler if you need more control.
| Prop | Type | Default |
| --- | --- | --- |
| <div class="code">asChild</div> | <div class="code">boolean</div> | <div class="code">false</div> |
| <div class="code">onLoadingStatusChange</div> | <div class="code">(status: "idle" | "loading" | "loaded" | "error") => void</div> | <div class="code">-</div> |

### OkuAvatarFallback
An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delay-ms` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `onLoadingStatusChange` handler on `OkuAvatarImage`.