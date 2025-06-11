const checkB = document.getElementById("check");
const number = document.getElementById('number');
const goalList = document.getElementById('goalList');
const addListB = document.getElementById('addList');
const UList = document.getElementById('list')

checkB.addEventListener('click', (e)=>{
  e.preventDefault(); 
  const random = Math.floor( Math.random() * 10000000) +1;
  number.textContent = random;
})

let savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
savedGoals.forEach(goal => {
  displayGoal(goal);
});

document.getElementById('right').addEventListener('submit', (e) => {
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

  li.appendChild(checkbox);
  li.appendChild(label);
  UList.appendChild(li);
}

