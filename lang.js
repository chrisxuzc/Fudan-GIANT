// 默认语言为英文
let currentLanguage = localStorage.getItem('language') || 'en';

// 更新页面内容
function updateLanguage(language) {
    const elements = {
        "page-title": {
            "en": "Task Management System",
            "zh": "课题组任务管理系统"
        },
        "about-us-link": {
            "en": "About Us",
            "zh": "关于我们"
        },
        "members-link": {
            "en": "Team Members",
            "zh": "课题组成员"
        },
        "activities-link": {
            "en": "Daily Activities",
            "zh": "日常活动"
        },
        "tasks-link": {
            "en": "Task Management",
            "zh": "任务管理"
        },
        "task-list-title": {
            "en": "Task List",
            "zh": "任务列表"
        },
        "footer-text": {
            "en": "&copy; 2025 Task Group",
            "zh": "&copy; 2025 课题组"
        }
    };

    // 更新页面所有文本内容
    for (let id in elements) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = elements[id][language];
        }
    }

    // 保存语言选择
    localStorage.setItem('language', language);
}

// 语言切换处理
document.getElementById('language-switcher').addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateLanguage(currentLanguage);
});

// 初始页面加载时，根据当前语言更新页面
updateLanguage(currentLanguage);
