# 百度网盘界面增强套件 (BaiduPan UI Enhancer)

> 🚀 优化百度网盘文件列表显示，提供更紧凑的表格布局、灵活的侧边栏控制以及分享对话框体验优化。

## ✨ 主要特性

*   **📊 紧凑表格布局**：隐藏冗余列（类型、大小），将最大空间留给文件名。
*   **🔄 智能侧边栏**：一键折叠/展开左侧导航栏，配合悬浮按钮，最大化工作区。
*   **🖱️ 分享对话框优化**：支持拖拽调整分享弹窗大小，增强面包屑导航交互。
*   **📱 响应式设计**：自适应不同屏幕尺寸，移动端友好。
*   **⚡ 性能优化**：硬件加速动画，流畅的用户体验。

## 🚀 快速开始

### 1. 安装
1.  安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展。
2.  创建一个新脚本，将 `BaiduPan-UI-Enhancer.js` (或 `百度网盘全能优化.js`) 的内容复制进去。
3.  保存并启用脚本。

### 2. 使用
访问 [百度网盘](https://pan.baidu.com/disk/home)，脚本将自动生效：
*   **列表页**：表格布局自动变紧凑，左上角出现侧边栏切换按钮。
*   **分享页**：分享文件的弹窗可以修改大小，且面包屑可点击。

## 🔧 配置选项 (Configuration)

脚本头部包含 `CONFIG` 对象，可根据需求修改：

```javascript
const CONFIG = {
    // 布局设置
    tableLayout: {
        enable: true,               // 总开关
        showSizeColumn: false,      // 是否显示"大小"列
        dateColumnWidth: '90px',    // "修改时间"列宽
        enableSidebarToggle: true,  // 启用侧边栏切换
        // ...
    },
    // 分享弹窗设置
    shareDialog: {
        enable: true,
        features: {
            resizable: true,        // 允许拖拽弹窗大小
            disableBack: true       // 禁用浏览器后退(防误触)
        }
    }
};
```

## 🛠️ 高级功能 (API)

脚本提供全局对象 `window.BaiduPanCompactLayout` 用于高级控制：

```javascript
// 侧边栏控制
window.BaiduPanCompactLayout.sidebar.toggle()  // 切换显示/隐藏
window.BaiduPanCompactLayout.sidebar.show()    // 强制显示
window.BaiduPanCompactLayout.sidebar.hide()    // 强制隐藏

// 调试模式
window.BaiduPanCompactLayout.debug.enable()    // 开启调试日志
window.BaiduPanCompactLayout.debug.info()      // 查看当前DOM状态
```

## 🐛 故障排除

*   **脚本不生效？**：请确认 URL 匹配 `https://pan.baidu.com/disk/*`，并尝试刷新页面。
*   **按钮未显示？**：开启调试模式 `window.BaiduPanCompactLayout.debug.enable()` 查看控制台报错。
*   **样式错乱？**：可能是百度网盘更新了 DOM 结构，请提交 Issue 反馈。

## 📜 许可证

MIT License
