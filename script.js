(()=>{
const buttons=[...document.querySelectorAll('[data-lang]')];
function setLanguage(lang){if(!['ja','en'].includes(lang))lang='ja';document.documentElement.lang=lang;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.title=(lang==='ja'?'宿泊のしおり':'Guest Guide')+' | SUNSET DOG CAMP 2026';try{localStorage.setItem('sdc-guide-language',lang)}catch{} }
let initial=new URLSearchParams(location.search).get('lang');if(!initial){try{initial=localStorage.getItem('sdc-guide-language')}catch{}}setLanguage(initial||'ja');buttons.forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
const links=[...document.querySelectorAll('.toc a')];if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}}},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('.content>section[id]').forEach(s=>observer.observe(s))}
})();
