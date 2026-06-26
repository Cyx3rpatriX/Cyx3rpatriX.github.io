alert("Still in production !")

/* ---- Custom Cursor ---- */
const cur = document.getElementById('cur');
const crng   = document.getElementById('crng');
let mx = -100, my = -100, rx = -100, ry = -100;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
;(function loop() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
  crng.style.left   = rx + 'px';
  crng.style.top    = ry + 'px';
  requestAnimationFrame(loop);
})();

/* ---- Matrix Rain ---- */
const canvas  = document.getElementById('matrix-canvas');
const ctx     = canvas.getContext('2d');
const chars   = 'アイウエオカキクケコサシスセソ01アBCDEFGHIJKLMN0PQRST!@#$%^&';
let cols, drops;
function initMatrix() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const fs  = 13;
  cols  = Math.floor(canvas.width / fs);
  drops = Array.from({length: cols}, () => Math.random() * -50);
}
initMatrix();
window.addEventListener('resize', initMatrix);
function drawMatrix() {
  ctx.fillStyle = 'rgba(5,10,5,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#1F51FF';
  ctx.font = '13px Share Tech Mono, monospace';
  for (let i = 0; i < cols; i++) {
    const c = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(c, i * 13, drops[i] * 13);
    if (drops[i] * 13 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 60);

/* ---- Navbar scroll ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('sc', window.scrollY > 40);
});

/* ---- Mobile Nav ---- */
const mobileNav = document.getElementById('mnav');
const hamburger = document.getElementById('hamburger');
const mclose = document.getElementById('mclose');
    
hamburger.addEventListener('click', () => {
  mobileNav.classList.add('open');
  hamburger.style.display="none";
  mclose.style.display="flex";
});
mclose.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  hamburger.style.display="flex";
  mclose.style.display="none";
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.style.display="flex";
    mclose.style.display="none";
  });
});
        
        
        
     
