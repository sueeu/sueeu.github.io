// 简单的交互示例
document.addEventListener("DOMContentLoaded", function() {
    alert("欢迎访问我的个人主页！");

});
// 在页面加载时检查登录状态
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        // 如果未登录，则跳转到登录页面
        window.location.href = "login.html";
    }
    // 如果已登录，则继续显示 index.html 内容
});

// 你可以在这里添加一个注销功能（可选）
function logout() {
    localStorage.removeItem("isLoggedIn"); // 移除登录标志
    window.location.href = "login.html"; // 跳转回登录页面
}
