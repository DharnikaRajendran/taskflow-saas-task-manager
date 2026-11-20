\# TaskFlow – SaaS Task Manager



A responsive task management web application designed to help users organise tasks, monitor productivity and manage daily activities.



\## Features



\- \*\*Login Simulation:\*\* Simple name-based login and logout.

\- \*\*Dashboard:\*\* Displays total, completed and pending tasks.

\- \*\*Task Management:\*\* Create, view, complete and delete tasks.

\- \*\*Search:\*\* Dynamically search tasks by title or category.

\- \*\*Category Management:\*\* Organise tasks into Work, Study and Personal.

\- \*\*Persistent Storage:\*\* Uses LocalStorage to retain user and task data.

\- \*\*Responsive Design:\*\* Supports desktop and mobile screens.



\## Technologies Used



\- HTML5

\- CSS3

\- JavaScript ES6+

\- Browser LocalStorage



\## Architecture



```mermaid

flowchart TD

&#x20;   A\[User] --> B\[Login Simulation]

&#x20;   B --> C\[TaskFlow Dashboard]

&#x20;   C --> D\[Task Management]

&#x20;   C --> E\[Search and Filter]

&#x20;   D --> F\[JavaScript Logic]

&#x20;   E --> F

&#x20;   F --> G\[LocalStorage]

&#x20;   G --> F

```



\## Project Structure



```text

Task-6-SaaS-Task-Manager/

├── index.html

├── style.css

├── app.js

└── README.md

```



\## Setup Instructions



1\. Clone or download this repository.

2\. Open the project folder.

3\. Start a local server using:



```bash

python -m http.server 8000

```



4\. Open `http://localhost:8000` in your browser.



\## Future Enhancements



\- Secure user authentication

\- Cloud database integration

\- Task deadlines and reminders

\- Team collaboration



\## Project Type



Production Capstone Project – Internship Task 6
## Live Demo

[View TaskFlow Live](https://taskflow-saas-task-manager.netlify.app/)



\## Author



Dharnika Rajendran

