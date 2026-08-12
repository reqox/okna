<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { contacts, navPages } from '../../../shared/config/contacts.js';

const route = useRoute();
const scrolled = ref(false);
const menuOpen = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 12;
}
onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container bar">
      <router-link to="/" class="logo" @click="menuOpen = false">
        <svg class="logo-mark" viewBox="0 0 28 28" fill="none">
          <rect
            x="2"
            y="2"
            width="24"
            height="24"
            rx="3"
            stroke="currentColor"
            stroke-width="2"
          />
          <line
            x1="14"
            y1="2"
            x2="14"
            y2="26"
            stroke="var(--c-accent)"
            stroke-width="2"
          />
          <line
            x1="2"
            y1="14"
            x2="26"
            y2="14"
            stroke="var(--c-accent)"
            stroke-width="2"
          />
        </svg>
        <span>МастерСервис</span>
      </router-link>

      <nav class="nav" :class="{ open: menuOpen }">
        <router-link
          v-for="p in navPages"
          :key="p.path"
          :to="p.path"
          class="nav-link"
          :class="{ active: route.path === p.path }"
          @click="menuOpen = false"
          >{{ p.label }}</router-link
        >
      </nav>

      <div class="contacts">
        <a :href="contacts.phoneHref" class="phone">{{ contacts.phone }}</a>
        <div class="social">
          <a
            :href="contacts.whatsapp"
            class="social-btn wa"
            aria-label="WhatsApp"
            >💬</a
          >
          <a
            :href="contacts.telegram"
            class="social-btn tg"
            aria-label="Telegram"
            >✈️</a
          >
        </div>
      </div>

      <button
        class="burger"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Меню"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(244, 247, 248, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition:
    border-color var(--dur-s),
    box-shadow var(--dur-s);
}
.header.scrolled {
  border-color: var(--c-line);
  box-shadow: 0 4px 20px rgba(16, 34, 46, 0.05);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--c-primary);
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}
.logo-mark {
  width: 30px;
  height: auto;
  color: var(--c-primary);
}

.nav {
  display: flex;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--c-ink-soft);
  font-weight: 600;
  font-size: 14.5px;
  padding: 9px 16px;
  border-radius: 100px;
  transition:
    color var(--dur-s),
    background var(--dur-s);
  white-space: nowrap;
}
.nav-link:hover {
  color: var(--c-primary);
  background: rgba(27, 75, 102, 0.06);
}
.nav-link.active {
  color: #fff;
  background: var(--c-primary);
}

.contacts {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}
.phone {
  text-decoration: none;
  color: var(--c-ink);
  font-weight: 700;
  font-size: 15.5px;
  transition: color var(--dur-s);
}
.phone:hover {
  color: var(--c-accent);
}

.social {
  display: flex;
  gap: 8px;
}
.social-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  font-size: 16px;
  transition: transform var(--dur-s);
}
.social-btn.wa {
  background: #25d366;
}
.social-btn.tg {
  background: #0088cc;
}
.social-btn:hover {
  transform: scale(1.12);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  width: 22px;
  height: 2px;
  background: var(--c-primary);
  border-radius: 2px;
}

@media (max-width: 900px) {
  .contacts .phone {
    display: none;
  }
  .nav {
    position: fixed;
    inset: 62px 0 auto 0;
    flex-direction: column;
    background: var(--c-surface);
    padding: 10px 20px 20px;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition:
      opacity var(--dur-s),
      transform var(--dur-s);
    border-bottom: 1px solid var(--c-line);
  }
  .nav.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  .nav-link {
    text-align: center;
    padding: 12px;
  }
  .burger {
    display: flex;
  }
}
</style>
