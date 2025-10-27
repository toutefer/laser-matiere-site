
// Smooth scroll
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    document.getElementById('navLinks')?.classList.remove('show');
  }
});
// Mobile menu
document.getElementById('menuBtn')?.addEventListener('click', ()=>{
  document.getElementById('navLinks')?.classList.toggle('show');
});
