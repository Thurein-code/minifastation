const checkB = document.getElementById("check");
const number = document.getElementById('number');
const goalList = document.getElementById('goalList');
const addListB = document.getElementById('addList');
const UList = document.getElementById('list')

const saveNumber = localStorage.getItem('balance');
if(saveNumber){
  number.textContent = `${Number(saveNumber).toLocaleString()} $`;
}

checkB.addEventListener('click', (e)=>{
  e.preventDefault();
  const checkBoxes = document.querySelectorAll('#list input[type = "checkbox"]') //select all  checkBoxs
  const totalCheckBox = checkBoxes.length;
  if(totalCheckBox === 0){
    number.textContent = 0;
    localStorage.setItem('balance', 0);
    return;
  }const checked = Array.from(checkBoxes).filter(cb => cb.checked).length;
  const percent = checked / totalCheckBox;
  const maxValue = 200000000;
  const calculate = Math.floor(percent * maxValue);
  number.textContent = `${calculate.toLocaleString()}  $`;
  localStorage.setItem('balance', calculate);
})

let savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
savedGoals.forEach(goal => {
  displayGoal(goal);
});

document.getElementById('right').addEventListener('click', (e) => {
  e.preventDefault();
  text = goalList.value.trim()
  if (text === ''){
    return;
  }

  const goal ={
    id:Date.now(),
    text:text,
    done:false
  };

  savedGoals.push(goal);
  localStorage.setItem('goals',JSON.stringify(savedGoals));
  displayGoal(goal)
  goalList.value = '';
})

function displayGoal(goal) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'task-' + goal.id;
  checkbox.checked = goal.done; // ✅ Restore checkbox state

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = goal.text;

  // ✅ When checkbox is changed, update localStorage
  checkbox.addEventListener('change', () => {
    goal.done = checkbox.checked;
    localStorage.setItem('goals', JSON.stringify(savedGoals));
  });

  label.addEventListener('click', () => {
    li.remove();
    savedGoals = savedGoals.filter(g => g.id !== goal.id);
    localStorage.setItem('goals', JSON.stringify(savedGoals));
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  UList.appendChild(li);
}

