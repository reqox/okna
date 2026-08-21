<script setup>
defineProps({
  as: { type: String, default: 'button' },
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' }, // primary | ghost
});
</script>

<template>
  <a v-if="as === 'a'" :href="href" class="app-btn" :class="variant">
    <span><slot /></span>
  </a>
  <button v-else class="app-btn" :class="variant">
    <span><slot /></span>
  </button>
</template>

<style scoped>
.app-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 100px;
  border: none;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transition:
    transform var(--dur-s) var(--ease-out),
    box-shadow var(--dur-s) var(--ease-out);
}

.app-btn.primary {
  background: var(--c-accent);
  color: #fff;
  box-shadow: 0 8px 24px rgba(224, 124, 46, 0.35);
}
.app-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(224, 124, 46, 0.45);
}

.app-btn.ghost {
  background: transparent;
  color: var(--c-primary);
  border: 1.5px solid var(--c-line-strong);
}
.app-btn.ghost:hover {
  border-color: var(--c-primary);
  transform: translateY(-2px);
}
</style>
