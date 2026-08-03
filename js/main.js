// Pestañas de categoría — modelos.html
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.category-section');

  if (!tabs.length || !sections.length) return;

  // Click en una pestaña -> scroll suave a su sección
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.target);
      if (!target) return;
      const offset = 132; // deja espacio para header + tabs pegajosos
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Resalta la pestaña activa según la sección visible al hacer scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          tabs.forEach((t) => t.classList.toggle('active', t.dataset.target === id));
        }
      });
    },
    { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
});
