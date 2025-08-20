(function(){
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.classList.add('light');
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
  const hireBtn = document.querySelector('.hire-btn');
  if (hireBtn) {
    hireBtn.addEventListener('click', () => {
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({behavior: 'smooth'});
    });
  }
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.sidebar nav a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.sidebar nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
})();
