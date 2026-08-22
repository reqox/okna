<template>
  <section class="slider">
    <div class="slider-wrapper">
      <div class="slider-head">
        <div class="slider-head__eyebrow">Портфолио</div>
        <h2 class="slider-head__title">Наше портфолио</h2>
        <p class="slider-head__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, eum et. Quae saepe quos magni ea sunt
          iusto sed ipsum!.
        </p>
      </div>
      <ul class="slider-list">
        <li class="slider-item">
          <img class="slider-image" src="" alt="" width="400" height="600" loading="lazy" />
        </li>
        <li class="slider-item">
          <img class="slider-image" src="" alt="" width="400" height="600" loading="lazy" />
        </li>
        <li class="slider-item">
          <img class="slider-image" src="" alt="" width="400" height="600" loading="lazy" />
        </li>
        <li class="slider-item">
          <img class="slider-image" src="" alt="" width="400" height="600" loading="lazy" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.slider {
  background-color: var(--c-primary-dark);
}

.slider-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 16px;

  max-width: 1920px;
  padding-inline: 32px;
  margin-inline: auto;
}

.slider-head {
  max-width: 25%;
}

.slider-head__title {
  font-size: clamp(26px, 3.4vw, 38px);
  color: #fff;
}

.slider-head__text {
  margin-top: 12px;
  color: var(--c-accent-soft);
  font-size: 16px;
  line-height: 1.6;
}

.slider-head__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--f-mono);
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-accent);
  margin-bottom: 14px;
}

.slider-head__eyebrow::before {
  content: '';
  width: 22px;
  height: 1px;
  background: var(--c-accent);
}

.slider-head__eyebrow::after {
  content: '';
  width: 22px;
  height: 1px;
  background: var(--c-accent);
}

.slider-list {
  display: flex;
  gap: 64px;
  overflow-x: scroll;
}
</style>
