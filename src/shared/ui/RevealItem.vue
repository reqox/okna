<script setup>
import { useReveal } from '../lib/useReveal.js'

defineProps({
  delay: { type: Number, default: 0 },
  tag: { type: String, default: 'div' }
})

const el = useReveal()
</script>

<template>
  <component :is="tag" ref="el" class="reveal" :style="{ transitionDelay: delay + 'ms' }">
    <slot />
  </component>
</template>
