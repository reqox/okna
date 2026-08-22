export function loadImages(glob, alt) {
  return Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => ({ src: mod.default ?? mod, alt }));
}
