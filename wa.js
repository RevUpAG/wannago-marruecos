// WhatsApp flotante: se presenta con un saludo, se sacude cada tanto y vuelve a saludar
(() => {
  const wa = document.querySelector('.wa-float');
  if (!wa || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const greet = (ms = 5000) => { wa.classList.add('open'); setTimeout(() => wa.classList.remove('open'), ms); };
  const shake = () => { wa.classList.remove('shake'); void wa.offsetWidth; wa.classList.add('shake'); };
  setTimeout(() => { shake(); greet(); }, 4000);
  setInterval(shake, 7000);
  setInterval(() => greet(4000), 25000);
  wa.addEventListener('click', () => wa.classList.add('seen'));
})();
