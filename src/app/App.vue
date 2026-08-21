<script setup>
import AppHeader from '../widgets/header/ui/AppHeader.vue';
import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

useHead({
  title: computed(() => route.meta.title),
  meta: [
    {
      name: 'description',
      content: computed(() => route.meta.description),
    },
  ],
});
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity var(--dur-m) var(--ease-out),
    transform var(--dur-m) var(--ease-out);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
}
</style>
