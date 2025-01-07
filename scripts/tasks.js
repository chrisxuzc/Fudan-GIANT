async function fetchTasks() {
    try {
        // 从 issues.json 加载任务
        const response = await fetch("tasks.json");
        if (!response.ok) throw new Error("无法加载任务列表");
        const issues = await response.json();
        renderTasks(issues);
    } catch (error) {
        document.getElementById("task-list").innerHTML = `<p>${error.message}</p>`;
    }
}

function renderTasks(issues) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // 清空加载提示

    issues.forEach(issue => {
        const lastUpdated = new Date(issue.updated_at);
        const created = new Date(issue.created_at);

        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        taskDiv.innerHTML = `
            <h3>${issue.title}</h3>
            <p>${issue.body || "没有详细描述"}</p>
            <p><strong>任务创建时间：</strong> ${created.toLocaleDateString()}</p>
            <p><strong>最近更新：</strong> ${lastUpdated.toLocaleDateString()} (${Math.floor((new Date() - lastUpdated) / (1000 * 60 * 60 * 24))} 天前)</p>
            <a href="${issue.html_url}" target="_blank">查看详情</a>
        `;
        taskList.appendChild(taskDiv);
    });
}

// 页面加载时获取任务
fetchTasks();
