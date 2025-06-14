let todos = [];
let isEditing = false;
let editId = null;
const titleInput = document.getElementById('title');
const descInput = document.getElementById('description');
const addBtn = document.getElementById('addBtn');
const listDiv = document.getElementById('todoList');
addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    if (!title)
        return;
    if (isEditing && editId !== null) {
        const todo = todos.find(t => t.id === editId);
        if (todo) {
            todo.title = title;
            todo.description = description;
        }
        isEditing = false;
        editId = null;
        addBtn.textContent = "Add";
    }
    else {
        todos.push({
            id: Date.now(),
            title,
            description,
            completed: false
        });
    }
    titleInput.value = "";
    descInput.value = "";
    renderTodos();
});
function renderTodos() {
    listDiv.innerHTML = "";
    todos.forEach(todo => {
        const div = document.createElement('div');
        div.className = 'todo' + (todo.completed ? ' done' : '');
        div.innerHTML = `
      <div>
        <strong>${todo.title}</strong><br/>
        <small>${todo.description}</small>
      </div>
    `;
        const buttonContainer = document.createElement('div');
        const completeBtn = document.createElement('button');
        completeBtn.textContent = "✔️";
        completeBtn.addEventListener("click", () => toggleComplete(todo.id));
        const editBtn = document.createElement('button');
        editBtn.textContent = "✏️";
        editBtn.addEventListener("click", () => startEdit(todo.id));
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "🗑️";
        deleteBtn.addEventListener("click", () => deleteTodo(todo.id));
        buttonContainer.append(completeBtn, editBtn, deleteBtn);
        div.appendChild(buttonContainer);
        listDiv.appendChild(div);
    });
}
function toggleComplete(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}
function startEdit(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        titleInput.value = todo.title;
        descInput.value = todo.description;
        addBtn.textContent = "Update";
        isEditing = true;
        editId = id;
    }
}
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}
