const repoOwner = "chrisxuzc"; // 替换为你的 GitHub 用户名
const repoName = "Fudan-GIANT"; // 替换为你的 GitHub 仓库名
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

// 如果需要访问私有仓库，设置 Token（从环境变量中读取）
const token = "fudan_giant"; // 替换为你的 GitHub Personal Access Token

async function fetchTasks() {
    try {
        const headers = token ? { Authorization: `token ${token}` } : {};
        const response = await fetch(apiUrl, { headers });

        if (!response.ok) {
            throw new Error(`无法加载任务列表：${response.status} ${response.statusText}`);
        }

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
