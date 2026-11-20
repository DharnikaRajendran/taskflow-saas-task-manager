const main = document.getElementById("mainContent");

let tasks = JSON.parse(localStorage.getItem("taskflow_tasks")) || [];

let currentUser = localStorage.getItem("taskflow_user");

function saveTasks() {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
}

function login() {
    const name = document.getElementById("userName").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    currentUser = name;
    localStorage.setItem("taskflow_user", name);
    renderDashboard();
}

function logout() {
    localStorage.removeItem("taskflow_user");
    currentUser = null;
    renderLogin();
}

function renderLogin() {
    main.innerHTML = `
        <section class="login-box">
            <h2>Welcome to TaskFlow</h2>
            <p>Sign in to manage your tasks.</p>
            <input id="userName" type="text" placeholder="Enter your name">
            <button onclick="login()">Continue</button>
        </section>
    `;
}

function addTask() {
    const title = document.getElementById("taskTitle").value.trim();
    const category = document.getElementById("taskCategory").value;

    if (!title) {
        alert("Please enter a task title.");
        return;
    }

    tasks.push({
        id: Date.now(),
        title,
        category,
        completed: false
    });

    saveTasks();
    renderDashboard();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    renderDashboard();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderDashboard();
}

function renderDashboard() {
    const completed = tasks.filter(task => task.completed).length;

    main.innerHTML = `
        <section class="dashboard">
            <div class="top-bar">
                <div>
                    <h2>Hello, ${escapeHTML(currentUser)}!</h2>
                    <p>Here's your productivity overview.</p>
                </div>
                <button onclick="logout()">Logout</button>
            </div>

            <div class="stats">
                <div class="stat-card">
                    <h3>${tasks.length}</h3>
                    <p>Total Tasks</p>
                </div>
                <div class="stat-card">
                    <h3>${completed}</h3>
                    <p>Completed</p>
                </div>
                <div class="stat-card">
                    <h3>${tasks.length - completed}</h3>
                    <p>Pending</p>
                </div>
            </div>

            <section class="task-form">
                <h3>Create New Task</h3>
                <input id="taskTitle" placeholder="Enter task title">
                <select id="taskCategory">
                    <option>Work</option>
                    <option>Study</option>
                    <option>Personal</option>
                </select>
                <button onclick="addTask()">Add Task</button>
            </section>

            <section class="task-section">
                <h3>My Tasks</h3>
                <input id="searchTask" placeholder="Search tasks..." oninput="filterTasks()">
                <div id="taskList"></div>
            </section>
        </section>
    `;

    displayTasks(tasks);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function displayTasks(list) {
    const taskList = document.getElementById("taskList");

    if (list.length === 0) {
        taskList.textContent = "No tasks found. Add your first task!";
        return;
    }

    taskList.innerHTML = list.map(task => `
        <article class="task-card">
            <div>
                <h4>${escapeHTML(task.title)}</h4>
                <p>${escapeHTML(task.category)}</p>
                <span>${task.completed ? "Completed" : "Pending"}</span>
            </div>
            <div class="task-actions">
                <button onclick="toggleTask(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        </article>
    `).join("");
}

function filterTasks() {
    const query = document.getElementById("searchTask").value.toLowerCase();

    const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(query) ||
        task.category.toLowerCase().includes(query)
    );

    displayTasks(filtered);
}

if (currentUser) {
    renderDashboard();
} else {
    renderLogin();
}