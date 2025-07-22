// ==UserScript==
// @name         Baidu Pan Compact Table Layout
// @name:zh-CN   百度网盘视图布局优化
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Adjusts the Baidu Pan file list for a more compact layout, providing more space for filenames. Based on table structure with responsive sidebar toggle.
// @description:zh-CN  调整百度网盘文件列表的表格布局，使其更加紧凑，为文件名提供更多显示空间。支持响应式侧边栏切换。
// @author       Your Name (Refactored)
// @match        https://pan.baidu.com/disk/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // ========== 可配置参数 ==========
    const CONFIG = {
        sizeColumnWidth: '90px',        // "大小"列的宽度
        typeColumnWidth: '90px',        // "类型"列的宽度
        dateColumnWidth: '140px',       // "修改时间"列的宽度
        enableSidebarToggle: true,      // 是否启用侧边栏隐藏功能
        rowHeight: '28px',              // 表格行高度
        buttonPosition: {               // 切换按钮位置
            top: '60px',
            leftVisible: '240px',       // 侧边栏显示时的按钮位置
            leftHidden: '20px'          // 侧边栏隐藏时的按钮位置
        }
    };

    // ========== CSS样式定义 ==========
    const CSS_STYLES = `
        /* =========================== 表格紧凑布局样式 =========================== */

        /* 强制表格使用固定布局算法，精确控制列宽 */
        .wp-s-pan-table__header-table,
        .wp-s-pan-table__body-table {
            table-layout: fixed!important;
            width: 100%!important;
        }

        /* 定义各列宽度 */
        /* 选择框列 (第1列) - 固定宽度 */
        .wp-s-pan-table__header-table col:nth-child(1),
        .wp-s-pan-table__body-table col:nth-child(1),
        .wp-s-pan-table__header-row th:nth-child(1),
        .wp-s-pan-table__body-row td:nth-child(1) {
            width: 40px!important;
            min-width: 40px!important;
            max-width: 40px!important;
        }

        /* 文件名列 (第2列) - 自动填充剩余空间 */
        .wp-s-pan-table__header-table col:nth-child(2),
        .wp-s-pan-table__body-table col:nth-child(2) {
            width: auto!important;
            min-width: 250px!important;
        }

        /* 大小列 (第3列) */
        .wp-s-pan-table__header-table col:nth-child(3),
        .wp-s-pan-table__body-table col:nth-child(3),
        .wp-s-pan-table__header-row th:nth-child(3),
        .wp-s-pan-table__body-row td:nth-child(3) {
            width: ${CONFIG.sizeColumnWidth}!important;
            min-width: 70px!important;
        }

        /* 类型列 (第4列) */
        .wp-s-pan-table__header-table col:nth-child(4),
        .wp-s-pan-table__body-table col:nth-child(4),
        .wp-s-pan-table__header-row th:nth-child(4),
        .wp-s-pan-table__body-row td:nth-child(4) {
            width: ${CONFIG.typeColumnWidth}!important;
            min-width: 70px!important;
        }

        /* 修改时间列 (第5列) */
        .wp-s-pan-table__header-table col:nth-child(5),
        .wp-s-pan-table__body-table col:nth-child(5),
        .wp-s-pan-table__header-row th:nth-child(5),
        .wp-s-pan-table__body-row td:nth-child(5) {
            width: ${CONFIG.dateColumnWidth}!important;
            min-width: 110px!important;
        }

        /* 文件名显示优化 */
        .wp-s-pan-table__body-row-name,
        .wp-s-file-list-drag-copy,
        .wp-s-file-list-drag-copy__item-title-text {
            display: flex!important;
            align-items: center!important;
            white-space: nowrap!important;
            flex-direction: row!important;
            width: 100%!important;
        }

        /* 文件图标样式 */
        .wp-s-file-list-drag-copy__item-title-icon,
        .wp-s-pan-table__body-row-name img {
            display: inline-flex!important;
            align-items: center!important;
            margin-right: 8px!important;
            flex-shrink: 0!important;
            vertical-align: middle!important;
            max-width: 24px!important;
            max-height: 24px!important;
        }

        /* 文件名文本样式 */
        .wp-s-file-list-drag-copy__item-title-text span,
        .wp-s-pan-table__body-row-name span {
            display: block!important;
            white-space: nowrap!important;
            overflow: hidden!important;
            text-overflow: ellipsis!important;
            max-width: 100%!important;
            flex: 1!important;
            min-width: 0!important;
        }

        /* 表格行高度紧凑化 */
        .wp-s-pan-table__body-row,
        .wp-s-table-skin-hoc__tr,
        tr.wp-s-table-skin-hoc__tr.wp-s-pan-table__body-row {
            height: ${CONFIG.rowHeight}!important;
            min-height: ${CONFIG.rowHeight}!important;
            max-height: ${CONFIG.rowHeight}!important;
            line-height: ${CONFIG.rowHeight}!important;
        }

        .wp-s-pan-table__body-row td,
        .wp-s-table-skin-hoc__tr td,
        .wp-s-pan-table__td,
        td.wp-s-pan-table__td {
            padding-top: 2px!important;
            padding-bottom: 2px!important;
            vertical-align: middle!important;
            height: ${CONFIG.rowHeight}!important;
            line-height: calc(${CONFIG.rowHeight} - 4px)!important;
        }

        /* 选择框列样式 */
        .wp-s-pan-table__body-row td:first-child {
            padding-left: 8px!important;
            text-align: center!important;
        }

        /* =========================== 侧边栏切换功能样式 =========================== */

        /* 切换按钮样式 */
        .sidebar-toggle-btn {
            position: fixed!important;
            top: ${CONFIG.buttonPosition.top}!important;
            left: ${CONFIG.buttonPosition.leftVisible}!important;
            z-index: 9999!important;
            background: #1890ff!important;
            color: white!important;
            border: none!important;
            border-radius: 8px!important;
            padding: 8px 12px!important;
            cursor: pointer!important;
            font-size: 12px!important;
            font-weight: 500!important;
            box-shadow: 0 2px 12px rgba(24,144,255,0.3)!important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)!important;
            min-width: 70px!important;
            backdrop-filter: blur(8px)!important;
            border: 1px solid rgba(255,255,255,0.2)!important;
            user-select: none!important;
        }

        .sidebar-toggle-btn:hover {
            background: #40a9ff!important;
            transform: translateY(-2px) scale(1.02)!important;
            box-shadow: 0 4px 20px rgba(24,144,255,0.4)!important;
        }

        .sidebar-toggle-btn:active {
            transform: translateY(0) scale(0.98)!important;
        }

        /* =========================== 侧边栏隐藏状态布局 =========================== */

        /* 核心策略：使用flex比例控制而非固定宽度 */

        /* 隐藏侧边栏本身 */
        .sidebar-hidden .wp-s-aside-nav,
        .sidebar-hidden .nd-main-layout__sider,
        .sidebar-hidden .wp-s-core-pan__aside {
            flex: 0 0 0!important;
            width: 0!important;
            min-width: 0!important;
            max-width: 0!important;
            overflow: hidden!important;
            opacity: 0!important;
            margin: 0!important;
            padding: 0!important;
            border: none!important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        /* 确保主布局容器使用flex */
        .nd-main-layout {
            display: flex!important;
        }

        /* 主内容区域扩展 - 关键：使用flex比例 */
        .sidebar-hidden .nd-main-layout__body {
            flex: 1 1 auto!important;
            width: 100%!important;
            max-width: none!important;
            min-width: 0!important;
            margin-left: 0!important;
            padding-left: 0!important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        /* 确保主内容容器完全扩展 */
        .sidebar-hidden .wp-s-core-pan {
            flex: 1 1 auto!important;
            width: 100%!important;
            max-width: none!important;
            min-width: 0!important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        /* 处理可能存在的其他主内容容器 */
        .sidebar-hidden .nd-main-list,
        .sidebar-hidden .nd-main-layout__content {
            flex: 1 1 auto!important;
            width: 100%!important;
            max-width: none!important;
            min-width: 0!important;
            margin-left: 0!important;
            padding-left: 0!important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        /* 核心修复：确保主内容体容器完全扩展 */
        .sidebar-hidden .wp-s-core-pan__body {
            flex: 1 1 auto!important;
            width: 100%!important;
            max-width: none!important;
            min-width: 0!important;
            margin-left: 0!important;
            padding-left: 0!important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        /* 确保底部容器也正确扩展 */
        .sidebar-hidden .wp-s-core-pan__footer {
            flex: 1 1 auto!important;
            width: 100%!important;
            max-width: none!important;
            min-width: 0!important;
            margin-left: 0!important;
            padding-left: 0!important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        /* 表格容器扩展 */
        .sidebar-hidden .wp-s-pan-table,
        .sidebar-hidden .wp-s-pan-table__wrapper,
        .sidebar-hidden .wp-s-pan-table__container,
        .sidebar-hidden .wp-s-pan-table__header,
        .sidebar-hidden .wp-s-pan-table__body {
            width: 100%!important;
            max-width: none!important;
            min-width: 0!important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        /* 确保表格本身也能扩展 */
        .sidebar-hidden .wp-s-pan-table__header-table,
        .sidebar-hidden .wp-s-pan-table__body-table {
            width: 100%!important;
            max-width: none!important;
            table-layout: fixed!important;
        }

        /* 按钮位置调整 */
        .sidebar-hidden .sidebar-toggle-btn {
            left: ${CONFIG.buttonPosition.leftHidden}!important;
        }

        /* =========================== 侧边栏显示状态 =========================== */

        .sidebar-visible .wp-s-aside-nav,
        .sidebar-visible .nd-main-layout__sider,
        .sidebar-visible .wp-s-core-pan__aside {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        .sidebar-visible .nd-main-layout__body,
        .sidebar-visible .wp-s-core-pan,
        .sidebar-visible .wp-s-core-pan__body,
        .sidebar-visible .wp-s-core-pan__footer {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)!important;
        }

        .sidebar-visible .sidebar-toggle-btn {
            left: ${CONFIG.buttonPosition.leftVisible}!important;
        }

        /* =========================== 响应式布局 =========================== */

        @media screen and (max-width: 1200px) {
            .wp-s-pan-table__header-table col:nth-child(3),
            .wp-s-pan-table__body-table col:nth-child(3),
            .wp-s-pan-table__header-row th:nth-child(3),
            .wp-s-pan-table__body-row td:nth-child(3) {
                width: 70px!important;
            }
            .wp-s-pan-table__header-table col:nth-child(4),
            .wp-s-pan-table__body-table col:nth-child(4),
            .wp-s-pan-table__header-row th:nth-child(4),
            .wp-s-pan-table__body-row td:nth-child(4) {
                width: 70px!important;
            }
            .wp-s-pan-table__header-table col:nth-child(5),
            .wp-s-pan-table__body-table col:nth-child(5),
            .wp-s-pan-table__header-row th:nth-child(5),
            .wp-s-pan-table__body-row td:nth-child(5) {
                width: 110px!important;
            }
        }

        @media screen and (max-width: 900px) {
            .wp-s-pan-table__header-table col:nth-child(4),
            .wp-s-pan-table__body-table col:nth-child(4),
            .wp-s-pan-table__header-row th:nth-child(4),
            .wp-s-pan-table__body-row td:nth-child(4) {
                display: none!important;
            }
        }

        @media screen and (max-width: 700px) {
            .wp-s-pan-table__header-table col:nth-child(5),
            .wp-s-pan-table__body-table col:nth-child(5),
            .wp-s-pan-table__header-row th:nth-child(5),
            .wp-s-pan-table__body-row td:nth-child(5) {
                display: none!important;
            }
        }

        @media screen and (max-width: 500px) {
            .wp-s-pan-table__header-table col:nth-child(3),
            .wp-s-pan-table__body-table col:nth-child(3),
            .wp-s-pan-table__header-row th:nth-child(3),
            .wp-s-pan-table__body-row td:nth-child(3) {
                display: none!important;
            }
        }
    `;

    // ========== 工具函数 ==========

    /**
     * 兼容性函数，确保 GM_addStyle 可用
     */
    const addStyle = (css) => {
        if (typeof GM_addStyle === 'function') {
            GM_addStyle(css);
        } else {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.textContent = css;
            document.head.appendChild(style);
        }
    };

    /**
     * 获取本地存储的侧边栏状态
     */
    const getSidebarState = () => {
        return localStorage.getItem('baidu-pan-sidebar-hidden') === 'true';
    };

    /**
     * 保存侧边栏状态到本地存储
     */
    const setSidebarState = (isHidden) => {
        localStorage.setItem('baidu-pan-sidebar-hidden', isHidden.toString());
    };

    /**
     * 检查侧边栏是否存在
     */
    const checkSidebarExists = () => {
        const selectors = ['.nd-main-layout__sider', '.wp-s-aside-nav', '.wp-s-core-pan__aside'];
        return selectors.some(selector => document.querySelector(selector));
    };

    /**
     * 更新页面布局状态
     */
    const updateLayoutState = (isHidden) => {
        const body = document.body;

        if (isHidden) {
            body.classList.remove('sidebar-visible');
            body.classList.add('sidebar-hidden');
        } else {
            body.classList.remove('sidebar-hidden');
            body.classList.add('sidebar-visible');
        }
    };

    /**
     * 更新切换按钮文本
     */
    const updateButtonText = (button, isHidden) => {
        button.textContent = isHidden ? 'Show Sidebar' : 'Hide Sidebar';
        button.title = isHidden ? '点击显示侧边栏' : '点击隐藏侧边栏';
    };

    // ========== 侧边栏切换功能 ==========

    /**
     * 初始化侧边栏切换功能
     */
    const initSidebarToggle = () => {
        if (!CONFIG.enableSidebarToggle) return;

        // 创建切换按钮
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'sidebar-toggle-btn';
        toggleBtn.setAttribute('aria-label', 'Toggle Sidebar');

        // 获取保存的状态
        const isHidden = getSidebarState();

        // 设置初始状态
        updateLayoutState(isHidden);
        updateButtonText(toggleBtn, isHidden);

        // 点击事件处理
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const currentlyHidden = document.body.classList.contains('sidebar-hidden');
            const newHiddenState = !currentlyHidden;

            // 更新状态
            updateLayoutState(newHiddenState);
            updateButtonText(toggleBtn, newHiddenState);
            setSidebarState(newHiddenState);

            console.log(`[侧边栏切换] ${newHiddenState ? '隐藏' : '显示'}侧边栏`);
        });

        // 添加到页面
        document.body.appendChild(toggleBtn);

        // 检查侧边栏存在性
        const checkAndToggleButton = () => {
            const sidebarExists = checkSidebarExists();
            toggleBtn.style.display = sidebarExists ? 'block' : 'none';

            if (sidebarExists) {
                console.log('[侧边栏切换] 侧边栏检测成功，按钮已显示');
            } else {
                console.log('[侧边栏切换] 未检测到侧边栏，按钮已隐藏');
            }
        };

        // 初始检查
        setTimeout(checkAndToggleButton, 1000);

        // 定期检查侧边栏存在性
        const checkInterval = setInterval(() => {
            checkAndToggleButton();
        }, 5000);

        // 页面卸载时清理定时器
        window.addEventListener('beforeunload', () => {
            clearInterval(checkInterval);
        });

        return toggleBtn;
    };

    // ========== 主初始化函数 ==========

    /**
     * 主初始化函数
     */
    const init = () => {
        try {
            // 注入CSS样式
            addStyle(CSS_STYLES);
            console.log('[百度网盘紧凑布局] CSS样式已注入');

            // 初始化侧边栏切换功能
            if (CONFIG.enableSidebarToggle) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', initSidebarToggle);
                } else {
                    setTimeout(initSidebarToggle, 1000);
                }
            }

            console.log('[百度网盘紧凑布局] 脚本初始化完成');
        } catch (error) {
            console.error('[百度网盘紧凑布局] 初始化失败:', error);
        }
    };

    // ========== 脚本启动 ==========

    // 立即执行初始化
    init();

})();
