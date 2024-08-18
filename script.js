const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  let am_pm = 'AM';
  
    if (h >= 12) {
        h -= 12; 
        am_pm = "PM";
    };
    if (h == 0) {
        h = 12;
        am_pm = "AM";
    };
  
  const html = `
  <span>${h}</span> : 
  <span>${m}</span> : 
  <span>${s}</span> 
  <span class="ampm">${am_pm}</span>
  `; 

clock.innerHTML = html;
};

setInterval(tick, 1000);