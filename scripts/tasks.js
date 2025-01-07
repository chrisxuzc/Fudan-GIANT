function renderTasks(issues) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // 清空加载提示

    if (!issues || issues.length === 0) {
        taskList.innerHTML = "<p>暂无任务。</p>";
        return;
    }

    issues.forEach(issue => {
        const lastUpdated = new Date(issue.updated_at);
        const created = new Date(issue.created_at);

        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        // 检查 latest_comment 是否存在且内容有效
        let latestComment = "";
        if (issue.latest_comment && issue.latest_comment.body) {
            const commentTime = new Date(issue.latest_comment.created_at);
            latestComment = `
                <p><strong>最新进展：</strong> ${issue.latest_comment.body}</p>
                <p><strong>进展时间：</strong> ${commentTime.toLocaleDateString()} (${Math.floor((new Date() - commentTime) / (1000 * 60 * 60 * 24))} 天前)</p>
            `;
        } else {
            latestComment = "<p><strong>最新进展：</strong> 暂无</p>";
        }

        taskDiv.innerHTML = `
            <h3>${issue.title}</h3>
            <p>${issue.body || "没有详细描述"}</p>
            <p><strong>任务创建时间：</strong> ${created.toLocaleDateString()}</p>
            <p><strong>最近修改时间：</strong> ${lastUpdated.toLocaleDateString()} (${Math.floor((new Date() - lastUpdated) / (1000 * 60 * 60 * 24))} 天前)</p>
            ${latestComment}
            <a href="${issue.html_url}" target="_blank">查看详情</a>
        `;
        taskList.appendChild(taskDiv);
    });
}
