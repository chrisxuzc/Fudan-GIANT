// 获取 DOM 元素
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// 加载任务数据
fetch('tasks.json')
    .then(response => response.json())
    .then(data => {
        data.tasks.forEach(task => {
            addTaskToDOM(task.name, task.assignee);
        });
    });

// 处理任务表单提交
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskAssignee = document.getElementById('taskAssignee').value;

    // 添加到任务列表
    addTaskToDOM(taskName, taskAssignee);

    // 清空表单
    taskForm.reset();
});

// 将任务添加到 DOM
function addTaskToDOM(taskName, taskAssignee) {
    const taskItem = document.createElement('li');
    taskItem.textContent = `任务：${taskName} - 负责人：${taskAssignee}`;
    taskList.appendChild(taskItem);
}
