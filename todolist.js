const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = inputBox.value;

    const span = document.createElement('span');
    span.innerHTML = '&times;'; // Cross icon
    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = ''; // Clear input field
    saveData(); // Save data to local storage
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData(); // Save data to local storage
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Remove the task
        saveData(); // Save data to local storage
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem('data') || '';
}

showList(); // Show tasks on page load