# 百度网盘紧凑表格布局 v3.0

> 优化百度网盘文件列表显示，提供更紧凑的表格布局和灵活的侧边栏控制功能

## ✨ 主要特性

- 📊 **紧凑表格布局** - 优化列宽分配，为文件名提供更多显示空间
- 🔄 **智能侧边栏切换** - 一键隐藏/显示侧边栏，最大化内容区域
- 📱 **响应式设计** - 自适应不同屏幕尺寸，移动端友好
- ⚡ **性能优化** - 硬件加速动画，流畅的用户体验
- 🛠️ **调试工具** - 完善的调试和监控功能
- 🔧 **高度可配置** - 丰富的配置选项和全局API

## 🚀 快速开始

### 1. 安装
1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 复制 `百度网盘紧凑表格布局.js` 脚本内容
3. 在Tampermonkey中创建新脚本并粘贴内容
4. 保存并启用脚本

### 2. 使用
访问 [百度网盘](https://pan.baidu.com/disk/home)，脚本将自动生效：
- 表格布局自动优化
- 左上角出现侧边栏切换按钮
- 支持键盘操作和响应式布局

## 📸 效果展示

### 表格布局优化
- **选择框列**: 40px 固定宽度
- **文件名列**: 自动填充剩余空间（最小250px）
- **大小列**: 90px（可配置）
- **类型列**: 90px（可配置）
- **修改时间列**: 140px（可配置）

### 侧边栏切换
- 🎯 **精确定位**: 左上角固定位置，不遮挡内容
- 🎨 **美观设计**: 蓝色渐变背景，圆角设计
- ⚡ **流畅动画**: 0.4秒过渡动画，硬件加速
- 💾 **状态保存**: 自动保存显示状态，刷新页面保持

### 响应式适配
| 屏幕宽度 | 显示效果 |
|---------|----------|
| 1200px+ | 显示所有列，文件名列宽度增加 |
| 900-1200px | 所有列显示，列宽适当缩小 |
| 700-900px | 隐藏类型列，按钮尺寸缩小 |
| 500-700px | 隐藏类型和时间列 |
| <500px | 只显示选择框和文件名列 |

## 🔧 配置选项

### 基础配置
```javascript
const CONFIG = {
    sizeColumnWidth: '90px',        // 大小列宽度
    typeColumnWidth: '90px',        // 类型列宽度
    dateColumnWidth: '140px',       // 时间列宽度
    enableSidebarToggle: true,      // 启用侧边栏切换
    rowHeight: '28px',              // 表格行高
    debug: false,                   // 调试模式
    animationDuration: '0.4s',      // 动画时长
    checkInterval: 3000,            // 检查间隔
    maxRetries: 5                   // 最大重试次数
};
```

### 按钮位置
```javascript
buttonPosition: {
    top: '60px',                    // 距离顶部
    leftVisible: '240px',           // 侧边栏显示时位置
    leftHidden: '20px'              // 侧边栏隐藏时位置
}
```

## 🛠️ 高级功能

### 全局API
脚本提供全局API `window.BaiduPanCompactLayout`：

```javascript
// 调试功能
window.BaiduPanCompactLayout.debug.enable()    // 启用调试
window.BaiduPanCompactLayout.debug.disable()   // 禁用调试
window.BaiduPanCompactLayout.debug.info()      // 查看状态

// 侧边栏控制
window.BaiduPanCompactLayout.sidebar.toggle()  // 切换显示
window.BaiduPanCompactLayout.sidebar.show()    // 显示侧边栏
window.BaiduPanCompactLayout.sidebar.hide()    // 隐藏侧边栏
window.BaiduPanCompactLayout.sidebar.isHidden() // 检查状态

// 重新初始化
window.BaiduPanCompactLayout.reinit()          // 重新初始化
```

### 调试模式
启用调试模式后获得：
- 📊 实时调试信息面板
- 📝 详细的控制台日志
- ⚡ 性能监控数据
- 🔍 DOM状态检测

```javascript
// 启用调试模式
window.BaiduPanCompactLayout.debug.enable()
```

## 🔄 版本更新

### v3.0 新特性 (2025-01-22)
- 🚀 **全面重构** - 增强DOM适配性和稳定性
- 🎨 **视觉升级** - 优化按钮设计和动画效果
- 🔧 **调试工具** - 新增完善的调试和监控功能
- 📱 **响应式改进** - 更好的移动端适配
- 🛡️ **错误处理** - 增强的错误捕获和恢复机制
- ⚡ **性能优化** - 硬件加速和性能监控

### 主要改进
1. **DOM选择器增强** - 多层级备用选择器，提高兼容性
2. **性能优化** - 启用硬件加速，优化动画性能
3. **错误处理** - 完善的错误捕获和重试机制
4. **调试支持** - 实时调试面板和详细日志
5. **API接口** - 丰富的全局API和事件支持

## 🐛 故障排除

### 常见问题

**脚本不生效？**
1. 检查Tampermonkey中脚本是否启用
2. 确认页面URL匹配 `https://pan.baidu.com/disk/*`
3. 刷新页面或重启浏览器

**切换按钮不显示？**
1. 启用调试模式：`window.BaiduPanCompactLayout.debug.enable()`
2. 查看控制台日志中的错误信息
3. 检查侧边栏DOM是否加载完成

**动画卡顿？**
1. 启用浏览器硬件加速
2. 关闭其他占用资源的标签页
3. 检查是否有其他脚本冲突

### 调试技巧
```javascript
// 查看详细状态
window.BaiduPanCompactLayout.debug.info()

// 检查性能数据
performance.getEntriesByType('measure')

// 手动重新初始化
window.BaiduPanCompactLayout.reinit()
```

## 📋 兼容性

### 支持的浏览器
- ✅ Chrome 80+
- ✅ Firefox 75+  
- ✅ Edge 80+
- ✅ Safari 13+

### 支持的用户脚本管理器
- ✅ Tampermonkey
- ✅ Greasemonkey 4.0+
- ✅ Violentmonkey

## 📄 文档

- 📖 [详细使用说明](./使用说明.md)
- 🧪 [测试说明文档](./测试说明文档.md)
- 🔧 [配置和故障排除指南](./使用说明.md#故障排除)

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

### 反馈问题
请提供以下信息：
- 浏览器版本和操作系统
- 脚本版本和配置
- 详细的问题描述和复现步骤
- 控制台错误日志

## 📜 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

**让百度网盘使用更高效！** ⚡
