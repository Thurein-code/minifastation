const btn = document.getElementById("check");
const number = document.getElementById('number');

btn.addEventListener('click', ()=>{
  const random = Math.floor( Math.random() * 10000000) +1;
  number.textContent = random;
})