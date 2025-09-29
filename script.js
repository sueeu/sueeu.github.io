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
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // 默认显示第一个内容区域（如果有的话）
    if (contentSections.length > 0) {
        contentSections[0].classList.add('active');
    }
    // 默认激活第一个导航链接
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止链接默认跳转行为

            // 移除所有导航链接的 'active' 类
            navLinks.forEach(nav => nav.classList.remove('active'));
            // 给当前点击的导航链接添加 'active' 类
            this.classList.add('active');

            const targetId = this.dataset.target; // 获取 data-target 属性的值

            // 隐藏所有内容区域
            contentSections.forEach(section => section.classList.remove('active'));

            // 显示目标内容区域
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});
