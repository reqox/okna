<script setup>
defineProps({
  eyebrow: String,
  title: String,
  text: String
})
</script>

<template>
  <div class="section-head">
    <div v-if="eyebrow" class="dim-eyebrow">{{ eyebrow }}</div>
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </div>
</template>
