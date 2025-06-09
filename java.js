const checkB = document.getElementById("check");
const number = document.getElementById('number');
const goalList = document.getElementById('goalList');
const addListB = document.getElementById('addList');
const UList = document.getElementById('list')

checkB.addEventListener('click', ()=>{
  const random = Math.floor( Math.random() * 10000000) +1;
  number.textContent = random;
})

addListB.addEventListener('click' ,() => {
  const task = goalList.value.trim();

  if (task === '' ) return;
  
  const newList = document.createElement('li');
  newList.textContent = task;
  UList.appendChild(newList);
  goalList.value = " ";
})