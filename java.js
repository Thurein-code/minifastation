const checkB = document.getElementById("check");
const number = document.getElementById('number');
const goalList = document.getElementById('goalList');
const addListB = 

checkB.addEventListener('click', ()=>{
  const random = Math.floor( Math.random() * 10000000) +1;
  number.textContent = random;
})

goalList.addEventListener
