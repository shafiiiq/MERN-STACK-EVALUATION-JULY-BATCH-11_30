let sim = document.getElementById('hs');
let t = document.getElementById('hr');
let u = document.getElementById('hl');
t.addEventListener("click", () => {
    sim.style.scrollBehavior="smooth"
    sim.scrollLeft+=1000
    t.style.display='none'
    u.style.display='block'
});

u.addEventListener("click", () => {
    sim.style.scrollBehavior="smooth"
    sim.scrollLeft-=1000
    u.style.display='none';
    t.style.display='block'
});

