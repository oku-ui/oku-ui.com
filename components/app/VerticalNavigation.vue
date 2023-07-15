<script setup lang="ts">
import { omit } from 'lodash-es'

// import UIcon from '../elements/Icon.vue'
// import UAvatar from '../elements/Avatar.vue'
// import ULinkCustom from '../elements/LinkCustom.vue'
// import type { Link } from '../../types/vertical-navigation'

import type { RouteLocationRaw } from 'vue-router'

export interface Link {
  to?: string | RouteLocationRaw
  exact?: boolean
  label: string
  icon?: string
  iconClass?: string
  // avatar?: Partial<Avatar>
  click?: Function
  badge?: string | number
}

interface Props {
  links: Link[]
  ui: {
    wrapper?: string
    base?: string
    padding?: string
    width?: string
    ring?: string
    rounded?: string
    font?: string
    size?: string
    active?: string
    inactive?: string
    label?: string
    icon?: {
      base?: string
      active?: string
      inactive?: string
    }
    avatar?: {
      size?: string
      base?: string
    }
    badge?: {
      base?: string
      active?: string
      inactive?: string
    }
  }
}

defineProps<Props>()

// const appConfig = useAppConfig()
</script>

<template>
  <nav :class="ui.wrapper">
    <LinkCustom
      v-for="(link, index) of links" v-slot="{ isActive }" :key="index"
      v-bind="omit(link, ['label', 'icon', 'iconClass', 'avatar', 'badge', 'click'])"
      :class="[ui.base, ui.padding, ui.width, ui.ring, ui.rounded, ui.font, ui.size]" :active-class="ui.active"
      :inactive-class="ui.inactive" @click="link.click" @keyup.enter="$event.target.blur()"
    >
      <slot name="avatar" :link="link">
        <!-- <UAvatar v-if="link.avatar" v-bind="{ size: ui.avatar.size, ...link.avatar }" :class="[ui.avatar.base]" /> -->
      </slot>
      <slot name="icon" :link="link" :is-active="isActive">
        <!-- <UIcon
          v-if="link.icon" :name="link.icon"
          :class="[ui.icon.base, isActive ? ui.icon.active : ui.icon.inactive, link.iconClass]"
        /> -->
      </slot>
      <slot :link="link">
        <span v-if="link.label" :class="ui.label">{{ link.label }}</span>
      </slot>
      <slot name="badge" :link="link" :is-active="isActive">
        <!-- TODO: Add badge -->
        <!-- <span v-if="link.badge" :class="[ui.badge.base, isActive ? ui.badge.active : ui.badge.inactive]">
          {{ link.badge }}
        </span> -->
      </slot>
    </LinkCustom>
  </nav>
</template>
