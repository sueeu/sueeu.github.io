// 在页面加载时检查登录状态
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        // 如果未登录，则跳转到登录页面
        window.location.href = "login.html";
    }
    // 如果已登录，则继续显示 index.html 内容
});

// 简单的交互示例
document.addEventListener("DOMContentLoaded", function() {
    alert("欢迎访问我的个人主页！");

});

// 导航功能
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.getElementById('main-content');
    const contentPath = 'pages/'; // 假设内容文件在 'pages/' 文件夹中

    // index标签里target与加载文件的映射关系
    const fileMap = {
        'home': 'home.html',
        'algo': 'algorithm-summary.html',
        'qiuzhao': 'qiuzhao.html', // 这里将 'projects' 映射到 'A.html'
        'meiyong': 'meiyong.html'
    };

    // 加载内容的函数
    async function loadContent(target) {
        const fileName = fileMap[target]; // 根据 target 获取对应的文件名
        if (!fileName) {
            console.error(`未找到 ${target} 对应的文件名。`);
            mainContent.innerHTML = `<p>加载内容失败，请稍后再试。</p>`;
            return;
        }

        try {
            const response = await fetch(`${contentPath}${fileName}`); // 使用映射后的文件名
            if (!response.ok) {
                throw new Error(`无法加载 ${target} 内容: ${response.statusText}`);
            }
            const html = await response.text();
            mainContent.innerHTML = html;
        } catch (error) {
            console.error('加载内容失败:', error);
            mainContent.innerHTML = `<p>加载内容失败，请稍后再试。</p>`;
        }
    }

    // 处理导航点击事件 (此部分不变)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');

            const target = e.target.dataset.target;
            loadContent(target);
        });
    });

    // 页面加载时默认加载首页内容
    loadContent('home');
});

