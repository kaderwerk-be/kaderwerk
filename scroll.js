// Progressive enhancement scroll reveal
// Step 1: hide elements via JS (so they stay visible if JS doesn't load)
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  el.style.opacity = '0';
  if (el.classList.contains('reveal-left'))  el.style.transform = 'translateX(-28px)';
  else if (el.classList.contains('reveal-right')) el.style.transform = 'translateX(28px)';
  else el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .65s ease, transform .65s ease';
});

// Step 2: observe and reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  .forEach(el => observer.observe(el));
