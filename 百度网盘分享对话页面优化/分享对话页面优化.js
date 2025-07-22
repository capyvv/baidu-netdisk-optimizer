// ==UserScript==
// @name         Baidu Pan Share Dialog Optimization
// @name:zh-CN   百度网盘分享对话页面优化
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Optimizes Baidu Pan share dialog file library page with fixed button, disabled back navigation, and expanded display area.
// @description:zh-CN  优化百度网盘分享对话框文件库页面，添加固定按钮、禁用页面返回、扩大显示区域。
// @author       Enhanced Version
// @match        https://pan.baidu.com/disk/*
// @match        https://pan.baidu.com/s/*
// @match        https://pan.baidu.com/share/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // ========== 可配置参数 ==========
    const CONFIG = {
        // 表格布局配置
        sizeColumnWidth: '90px',        // "大小"列的宽度
        typeColumnWidth: '90px',        // "类型"列的宽度
        dateColumnWidth: '140px',       // "修改时间"列的宽度
        rowHeight: '28px',              // 表格行高度

        // 功能开关
        enableFixedButton: true,        // 是否启用固定按钮
        enableBackNavBlock: true,       // 是否禁用页面返回
        enableDisplayOptimization: true, // 是否启用显示区域优化

        // 固定按钮配置
        fixedButton: {
            position: {
                bottom: '30px',         // 距离底部距离
                right: '30px'           // 距离右侧距离
            },
            size: '56px',               // 按钮大小
            backgroundColor: '#1890ff', // 背景颜色
            hoverColor: '#40a9ff'       // 悬停颜色
        },

        // 显示区域优化配置
        displayOptimization: {
            removeMargins: true,        // 移除不必要边距
            expandContentArea: true,    // 扩展内容区域
            optimizeSpacing: true       // 优化间距
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

        /* =========================== 显示区域优化样式 =========================== */

        /* 移除不必要的边距和间距 */
        .wp-s-core-pan,
        .wp-s-core-pan__body,
        .nd-main-layout__body {
            margin: 0!important;
            padding: 0!important;
        }

        /* 扩展主内容区域 */
        .wp-s-core-pan__body {
            width: 100%!important;
            max-width: none!important;
            min-width: 0!important;
        }

        /* 优化表格容器 */
        .wp-s-pan-table,
        .wp-s-pan-table__wrapper,
        .wp-s-pan-table__container {
            width: 100%!important;
            max-width: none!important;
            margin: 0!important;
            padding: 0 8px!important;
        }

        /* 优化头部区域间距 */
        .wp-s-agile-tool-bar,
        .wp-s-agile-tool-bar__header {
            padding: 8px 16px!important;
            margin: 0!important;
        }

        /* 优化底部区域 */
        .wp-s-core-pan__footer {
            padding: 8px 16px!important;
            margin: 0!important;
        }

        /* =========================== 固定按钮样式 =========================== */

        /* 固定按钮容器 */
        .share-dialog-fixed-button {
            position: fixed!important;
            bottom: ${CONFIG.fixedButton.position.bottom}!important;
            right: ${CONFIG.fixedButton.position.right}!important;
            z-index: 9999!important;
            width: ${CONFIG.fixedButton.size}!important;
            height: ${CONFIG.fixedButton.size}!important;
            background: ${CONFIG.fixedButton.backgroundColor}!important;
            border: none!important;
            border-radius: 50%!important;
            cursor: pointer!important;
            box-shadow: 0 4px 20px rgba(24,144,255,0.3)!important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)!important;
            display: flex!important;
            align-items: center!important;
            justify-content: center!important;
            backdrop-filter: blur(8px)!important;
            user-select: none!important;
        }

        .share-dialog-fixed-button:hover {
            background: ${CONFIG.fixedButton.hoverColor}!important;
            transform: translateY(-2px) scale(1.05)!important;
            box-shadow: 0 6px 25px rgba(24,144,255,0.4)!important;
        }

        .share-dialog-fixed-button:active {
            transform: translateY(0) scale(0.95)!important;
        }

        /* 按钮图标 */
        .share-dialog-fixed-button-icon {
            width: 24px!important;
            height: 24px!important;
            fill: white!important;
            stroke: white!important;
            stroke-width: 2!important;
        }

        /* 按钮菜单 */
        .share-dialog-button-menu {
            position: absolute!important;
            bottom: 70px!important;
            right: 0!important;
            background: white!important;
            border-radius: 12px!important;
            box-shadow: 0 8px 32px rgba(0,0,0,0.15)!important;
            padding: 8px!important;
            min-width: 200px!important;
            opacity: 0!important;
            visibility: hidden!important;
            transform: translateY(10px) scale(0.95)!important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)!important;
            border: 1px solid rgba(0,0,0,0.1)!important;
        }

        .share-dialog-button-menu.show {
            opacity: 1!important;
            visibility: visible!important;
            transform: translateY(0) scale(1)!important;
        }

        .share-dialog-menu-item {
            display: flex!important;
            align-items: center!important;
            padding: 12px 16px!important;
            border-radius: 8px!important;
            cursor: pointer!important;
            transition: background-color 0.2s ease!important;
            font-size: 14px!important;
            color: #333!important;
            border: none!important;
            background: none!important;
            width: 100%!important;
            text-align: left!important;
        }

        .share-dialog-menu-item:hover {
            background-color: #f5f5f5!important;
        }

        .share-dialog-menu-item-icon {
            width: 16px!important;
            height: 16px!important;
            margin-right: 12px!important;
            fill: #666!important;
        }

        /* =========================== 页面返回阻止样式 =========================== */

        /* 阻止页面返回的提示信息 */
        .back-nav-blocked-notice {
            position: fixed!important;
            top: 20px!important;
            left: 50%!important;
            transform: translateX(-50%)!important;
            background: #ff4d4f!important;
            color: white!important;
            padding: 8px 16px!important;
            border-radius: 6px!important;
            font-size: 12px!important;
            z-index: 10000!important;
            opacity: 0!important;
            visibility: hidden!important;
            transition: all 0.3s ease!important;
        }

        .back-nav-blocked-notice.show {
            opacity: 1!important;
            visibility: visible!important;
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

            .share-dialog-fixed-button {
                width: 48px!important;
                height: 48px!important;
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

            .share-dialog-fixed-button {
                bottom: 20px!important;
                right: 20px!important;
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
     * 检查是否在分享对话框页面
     */
    const isShareDialogPage = () => {
        const url = window.location.href;
        return url.includes('/s/') || url.includes('/share/') ||
            document.querySelector('.share-dialog') ||
            document.querySelector('[class*="share"]');
    };

    /**
     * 显示临时通知
     */
    const showNotice = (message, type = 'info', duration = 3000) => {
        const notice = document.createElement('div');
        notice.className = `back-nav-blocked-notice ${type}`;
        notice.textContent = message;
        notice.classList.add('show');

        document.body.appendChild(notice);

        setTimeout(() => {
            notice.classList.remove('show');
            setTimeout(() => {
                if (notice.parentNode) {
                    notice.parentNode.removeChild(notice);
                }
            }, 300);
        }, duration);
    };

    /**
     * 创建SVG图标
     */
    const createSVGIcon = (iconType) => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.className = 'share-dialog-fixed-button-icon';
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');

        let path = '';
        switch (iconType) {
            case 'menu':
                path = '<circle cx="12" cy="12" r="3"></circle><circle cx="12" cy="5" r="3"></circle><circle cx="12" cy="19" r="3"></circle>';
                break;
            case 'tools':
                path = '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>';
                break;
            default:
                path = '<circle cx="12" cy="12" r="3"></circle><circle cx="12" cy="5" r="3"></circle><circle cx="12" cy="19" r="3"></circle>';
        }

        svg.innerHTML = path;
        return svg;
    };

    /**
     * 创建菜单项图标
     */
    const createMenuIcon = (iconType) => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.className = 'share-dialog-menu-item-icon';
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'currentColor');

        let path = '';
        switch (iconType) {
            case 'refresh':
                path = '<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>';
                break;
            case 'expand':
                path = '<path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>';
                break;
            case 'compact':
                path = '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
                break;
            case 'settings':
                path = '<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>';
                break;
            default:
                path = '<circle cx="12" cy="12" r="3"></circle>';
        }

        svg.innerHTML = `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${path}"></path>`;
        return svg;
    };

    // ========== 页面返回阻止功能 ==========

    /**
     * 初始化页面返回阻止功能
     */
    const initBackNavBlock = () => {
        if (!CONFIG.enableBackNavBlock) return;

        // 阻止浏览器后退按钮
        const blockBackNavigation = (e) => {
            e.preventDefault();
            e.stopPropagation();
            showNotice('页面返回已被禁用，防止意外离开文件库页面', 'warning', 2000);
            return false;
        };

        // 监听 popstate 事件（浏览器后退/前进）
        window.addEventListener('popstate', blockBackNavigation, true);

        // 监听键盘快捷键
        document.addEventListener('keydown', (e) => {
            // Alt + 左箭头 (后退)
            if (e.altKey && e.key === 'ArrowLeft') {
                e.preventDefault();
                e.stopPropagation();
                showNotice('键盘后退快捷键已被禁用', 'warning', 2000);
                return false;
            }

            // Backspace 键（在某些浏览器中可能触发后退）
            if (e.key === 'Backspace' &&
                !['INPUT', 'TEXTAREA'].includes(e.target.tagName) &&
                !e.target.isContentEditable) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true);

        // 添加历史记录条目，防止后退
        const addHistoryEntry = () => {
            const currentUrl = window.location.href;
            window.history.pushState({ preventBack: true }, '', currentUrl);
        };

        // 初始添加历史记录
        addHistoryEntry();

        // 定期检查并添加历史记录
        setInterval(addHistoryEntry, 1000);

        console.log('[分享对话页面优化] 页面返回阻止功能已启用');
    };

    // ========== 固定按钮功能 ==========

    /**
     * 创建固定按钮
     */
    const createFixedButton = () => {
        const button = document.createElement('button');
        button.className = 'share-dialog-fixed-button';
        button.setAttribute('aria-label', 'Page Tools');
        button.setAttribute('title', '页面工具');

        // 添加图标
        const icon = createSVGIcon('tools');
        button.appendChild(icon);

        // 创建菜单
        const menu = createButtonMenu();
        button.appendChild(menu);

        // 点击事件
        let menuVisible = false;
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            menuVisible = !menuVisible;
            menu.classList.toggle('show', menuVisible);
        });

        // 点击其他地方关闭菜单
        document.addEventListener('click', (e) => {
            if (!button.contains(e.target)) {
                menuVisible = false;
                menu.classList.remove('show');
            }
        });

        return button;
    };

    /**
     * 创建按钮菜单
     */
    const createButtonMenu = () => {
        const menu = document.createElement('div');
        menu.className = 'share-dialog-button-menu';

        const menuItems = [
            {
                icon: 'refresh',
                text: '刷新页面',
                action: () => {
                    window.location.reload();
                }
            },
            {
                icon: 'expand',
                text: '全屏显示',
                action: () => {
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    } else {
                        document.documentElement.requestFullscreen();
                    }
                }
            },
            {
                icon: 'compact',
                text: '紧凑模式',
                action: () => {
                    document.body.classList.toggle('compact-mode');
                    showNotice('紧凑模式已切换', 'info', 1500);
                }
            },
            {
                icon: 'settings',
                text: '重置布局',
                action: () => {
                    // 移除所有自定义类
                    document.body.classList.remove('compact-mode');
                    showNotice('布局已重置', 'info', 1500);
                }
            }
        ];

        menuItems.forEach(item => {
            const menuItem = document.createElement('button');
            menuItem.className = 'share-dialog-menu-item';

            const icon = createMenuIcon(item.icon);
            const text = document.createElement('span');
            text.textContent = item.text;

            menuItem.appendChild(icon);
            menuItem.appendChild(text);

            menuItem.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                item.action();
                menu.classList.remove('show');
            });

            menu.appendChild(menuItem);
        });

        return menu;
    };

    /**
     * 初始化固定按钮
     */
    const initFixedButton = () => {
        if (!CONFIG.enableFixedButton) return;

        const button = createFixedButton();
        document.body.appendChild(button);

        console.log('[分享对话页面优化] 固定按钮已创建');
    };
