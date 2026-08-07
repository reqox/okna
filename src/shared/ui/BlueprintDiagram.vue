<script setup>
// Signature element: a self-drawing technical "blueprint" of the product,
// annotated with dimension lines like a real measurement drawing — echoes
// the brand's core promise (free, precise measurement) instead of a stock photo.
defineProps({
  variant: { type: String, default: 'window' } // window | ceiling | service
})
</script>

<template>
  <div class="blueprint" :class="variant">
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" class="bp-svg">
      <defs>
        <linearGradient id="glassFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#CFE6EC" stop-opacity="0.55" />
          <stop offset="1" stop-color="#9FC7D1" stop-opacity="0.25" />
        </linearGradient>
      </defs>

      <!-- WINDOW variant -->
      <template v-if="variant === 'window'">
        <rect x="90" y="50" width="260" height="260" rx="6" class="bp-frame" />
        <rect x="106" y="66" width="228" height="228" rx="3" fill="url(#glassFill)" class="bp-glass" />
        <line x1="220" y1="66" x2="220" y2="294" class="bp-mullion" />
        <line x1="106" y1="180" x2="334" y2="180" class="bp-mullion" />
        <!-- dimension: width -->
        <line x1="90" y1="330" x2="350" y2="330" class="bp-dim" />
        <line x1="90" y1="322" x2="90" y2="338" class="bp-dim" />
        <line x1="350" y1="322" x2="350" y2="338" class="bp-dim" />
        <text x="220" y="352" text-anchor="middle" class="bp-label">1450 мм</text>
        <!-- dimension: height -->
        <line x1="392" y1="50" x2="392" y2="310" class="bp-dim" />
        <line x1="384" y1="50" x2="400" y2="50" class="bp-dim" />
        <line x1="384" y1="310" x2="400" y2="310" class="bp-dim" />
        <text x="420" y="184" text-anchor="middle" class="bp-label" transform="rotate(90 420 184)">1400 мм</text>
      </template>

      <!-- CEILING variant -->
      <template v-else-if="variant === 'ceiling'">
        <rect x="70" y="70" width="300" height="180" rx="4" class="bp-frame" />
        <rect x="82" y="82" width="276" height="156" rx="2" fill="url(#glassFill)" class="bp-glass" />
        <line x1="82" y1="82" x2="358" y2="82" class="bp-mullion" style="opacity:.5" />
        <circle cx="140" cy="120" r="7" class="bp-node" />
        <circle cx="300" cy="120" r="7" class="bp-node" />
        <circle cx="140" cy="200" r="7" class="bp-node" />
        <circle cx="300" cy="200" r="7" class="bp-node" />
        <path d="M70 250 Q220 275 370 250" class="bp-mullion" />
        <line x1="70" y1="300" x2="370" y2="300" class="bp-dim" />
        <line x1="70" y1="292" x2="70" y2="308" class="bp-dim" />
        <line x1="370" y1="292" x2="370" y2="308" class="bp-dim" />
        <text x="220" y="322" text-anchor="middle" class="bp-label">до 30 м² / 1 день</text>
      </template>

      <!-- SERVICE variant: window cross-section + laser level -->
      <template v-else>
        <rect x="90" y="50" width="220" height="260" rx="6" class="bp-frame" />
        <rect x="106" y="66" width="188" height="228" rx="3" fill="url(#glassFill)" class="bp-glass" />
        <line x1="200" y1="66" x2="200" y2="294" class="bp-mullion" />
        <!-- laser level -->
        <line x1="60" y1="180" x2="430" y2="180" class="bp-laser" />
        <rect x="330" y="160" width="60" height="40" rx="4" class="bp-frame" />
        <circle cx="360" cy="180" r="5" class="bp-node" />
        <line x1="90" y1="330" x2="310" y2="330" class="bp-dim" />
        <line x1="90" y1="322" x2="90" y2="338" class="bp-dim" />
        <line x1="310" y1="322" x2="310" y2="338" class="bp-dim" />
        <text x="200" y="352" text-anchor="middle" class="bp-label">Δ 0,0 мм</text>
      </template>
    </svg>
  </div>
</template>

<style scoped>
.blueprint { width: 100%; }
.bp-svg { width: 100%; height: auto; display: block; }

.bp-frame {
  stroke: var(--c-primary);
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: draw 1.4s var(--ease-out) forwards;
}
.bp-glass {
  opacity: 0;
  animation: fadeIn 1s ease 0.9s forwards;
}
.bp-mullion {
  stroke: var(--c-primary);
  stroke-width: 2;
  opacity: 0;
  animation: fadeIn 0.6s ease 1.2s forwards;
}
.bp-dim {
  stroke: var(--c-accent);
  stroke-width: 1.5;
  opacity: 0;
  animation: fadeIn 0.6s ease 1.5s forwards;
}
.bp-label {
  font-family: var(--f-mono);
  font-size: 13px;
  fill: var(--c-accent);
  opacity: 0;
  animation: fadeIn 0.6s ease 1.7s forwards;
}
.bp-node {
  fill: var(--c-accent-soft);
  stroke: var(--c-accent);
  stroke-width: 1.5;
  opacity: 0;
  animation: pop 0.5s var(--ease-out) forwards;
}
.bp-node:nth-of-type(1) { animation-delay: 1.3s; }
.bp-node:nth-of-type(2) { animation-delay: 1.4s; }
.bp-node:nth-of-type(3) { animation-delay: 1.5s; }
.bp-node:nth-of-type(4) { animation-delay: 1.6s; }
.bp-laser {
  stroke: var(--c-accent);
  stroke-width: 1.5;
  stroke-dasharray: 4 4;
  opacity: 0;
  animation: fadeIn 0.6s ease 1.1s forwards, dash 3s linear infinite 1.1s;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
@keyframes fadeIn {
  to { opacity: 1; }
}
@keyframes pop {
  to { opacity: 1; }
}
@keyframes dash {
  to { stroke-dashoffset: -16; }
}

@media (prefers-reduced-motion: reduce) {
  .bp-frame, .bp-glass, .bp-mullion, .bp-dim, .bp-label, .bp-node, .bp-laser {
    animation: none !important;
    opacity: 1 !important;
    stroke-dashoffset: 0 !important;
  }
}
</style>
