const root = document.documentElement;
const toggler = document.getElementById('mode-toggler');

toggler.addEventListener('change', e => {
  root.style.setProperty('--transition', "left .5s");
  if (!e.target.checked) document.body.classList.replace('light-mode', 'dark-mode');
  else document.body.classList.replace('dark-mode', 'light-mode');
  setTimeout(() => root.style.setProperty('--transition', "all 0.25s ease-in-out"), 1000);
});