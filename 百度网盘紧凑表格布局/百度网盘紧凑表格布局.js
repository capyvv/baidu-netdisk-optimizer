// ==UserScript==
// @name         Baidu Pan Compact Table Layout (Pure Filename)
// @name:zh-CN   百度网盘视图布局优化 (纯净文件名版)
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  Maximum space for filenames. Hides "Size" and "Type" columns completely.
// @description:zh-CN  彻底隐藏“大小”和“类型”列，仅保留修改时间，为长文件名提供最大化显示空间。
// @author       Your Name (Refactored)
// @match        https://pan.baidu.com/disk/*
// @match        https://yun.baidu.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // ========== 配置区 (已调整为默认隐藏大小) ==========
    const CONFIG = {
        // ★ 核心开关：是否显示文件大小？ (已设为 false 隐藏)
        showSizeColumn: false,

        // 仅保留的时间列宽度
        dateColumnWidth: '90px',

        // 布局参数
        rowHeight: '28px',
        enableSidebarToggle: true,
        buttonPosition: { top: '60px', leftVisible: '200px', leftHidden: '20px' }
    };

    // ========== CSS 样式构建 ==========
    // 根据配置决定是否生成大小列的 CSS
    const SIZE_COLUMN_STYLE = CONFIG.showSizeColumn ?
        `width: 60px!important;` :
        `display: none!important; width: 0!important;`;

    const CSS_STYLES = `
        /* =========================== 1. 表格布局强制重置 =========================== */
        .wp-s-pan-table__header-table,
        .wp-s-pan-table__body-table {
            table-layout: fixed!important;
            width: 100%!important;
        }

        /* 允许所有列无限收缩 */
        col, th, td { min-width: 0!important; }

        /* =========================== 2. 各列精确控制 =========================== */

        /* [第1列] 选择框 (保持固定) */
        .wp-s-pan-table__header-table col:nth-child(1),
        .wp-s-pan-table__body-table col:nth-child(1),
        .wp-s-pan-table__body-row td:nth-child(1) {
            width: 40px!important;
        }

        /* [第2列] ★★★ 文件名 (霸占所有剩余空间) ★★★ */
        .wp-s-pan-table__header-table col:nth-child(2),
        .wp-s-pan-table__body-table col:nth-child(2) {
            width: auto!important;
        }

        /* [第3列] 大小 (根据配置隐藏，当前为隐藏) */
        .wp-s-pan-table__header-table col:nth-child(3),
        .wp-s-pan-table__body-table col:nth-child(3),
        .wp-s-pan-table__header-row th:nth-child(3),
        .wp-s-pan-table__body-row td:nth-child(3) {
            ${SIZE_COLUMN_STYLE}
        }

        /* [第4列] 类型 (永远隐藏) */
        .wp-s-pan-table__header-table col:nth-child(4),
        .wp-s-pan-table__body-table col:nth-child(4),
        .wp-s-pan-table__header-row th:nth-child(4),
        .wp-s-pan-table__body-row td:nth-child(4) {
            display: none!important;
            width: 0!important;
        }

        /* [第5列] 修改时间 (极窄模式) */
        .wp-s-pan-table__header-table col:nth-child(5),
        .wp-s-pan-table__body-table col:nth-child(5),
        .wp-s-pan-table__header-row th:nth-child(5),
        .wp-s-pan-table__body-row td:nth-child(5) {
            width: ${CONFIG.dateColumnWidth}!important;
        }

        /* =========================== 3. 视觉优化 =========================== */

        /* 表头文字缩小 */
        .wp-s-pan-table__header-row th {
            font-size: 12px!important;
            padding: 0 4px!important;
            color: #999!important;
        }

        /* 时间列字体优化 */
        .wp-s-pan-table__body-row td:nth-child(5) {
            font-size: 12px!important;
            font-family: Consolas, monospace!important;
            color: #aaa!important;
            letter-spacing: -0.5px!important;
            padding: 0 2px!important;
        }

        /* 文件名文字大小 */
        .wp-s-pan-table__body-row-name span,
        .wp-s-file-list-drag-copy__item-title-text span {
            font-size: 13px!important;
        }

        /* 行高紧凑 */
        .wp-s-pan-table__body-row, .wp-s-table-skin-hoc__tr {
            height: ${CONFIG.rowHeight}!important;
            line-height: ${CONFIG.rowHeight}!important;
        }
        .wp-s-pan-table__body-row td {
            height: ${CONFIG.rowHeight}!important;
            padding-top: 0!important; padding-bottom: 0!important;
        }

        /* =========================== 4. 侧边栏按钮 =========================== */
        .sidebar-toggle-btn {
            position: fixed!important;
            top: ${CONFIG.buttonPosition.top}!important;
            left: ${CONFIG.buttonPosition.leftVisible}!important;
            z-index: 99999;
            background: rgba(24, 144, 255, 0.8)!important;
            color: white!important;
            border: none; border-radius: 4px;
            padding: 2px 8px!important;
            font-size: 11px!important;
            cursor: pointer;
            transition: left 0.3s ease;
        }
        .sidebar-toggle-btn:hover { background: #1890ff!important; }

        .sidebar-hidden .wp-s-aside-nav, .sidebar-hidden .nd-main-layout__sider, .sidebar-hidden .wp-s-core-pan__aside {
            width: 0!important; flex: 0 0 0!important; opacity: 0!important; overflow: hidden!important;
        }
        .sidebar-hidden .nd-main-layout__body, .sidebar-hidden .wp-s-core-pan, .sidebar-hidden .wp-s-core-pan__body {
            width: 100%!important; flex: 1 1 auto!important;
        }
        .sidebar-hidden .sidebar-toggle-btn { left: ${CONFIG.buttonPosition.leftHidden}!important; }
        .sidebar-visible .sidebar-toggle-btn { left: ${CONFIG.buttonPosition.leftVisible}!important; }
    `;

    // ========== 初始化逻辑 ==========
    const addStyle = (css) => {
        if (typeof GM_addStyle === 'function') GM_addStyle(css);
        else {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        }
    };

    const init = () => {
        addStyle(CSS_STYLES);

        if (!CONFIG.enableSidebarToggle) return;

        const getStoredState = () => localStorage.getItem('baidu-pan-sidebar-hidden') === 'true';
        const setStoredState = (v) => localStorage.setItem('baidu-pan-sidebar-hidden', v);

        document.body.classList.add(getStoredState() ? 'sidebar-hidden' : 'sidebar-visible');

        let btn = null;
        const createBtn = () => {
            if (document.querySelector('.sidebar-toggle-btn')) return;
            btn = document.createElement('button');
            btn.className = 'sidebar-toggle-btn';
            btn.textContent = document.body.classList.contains('sidebar-hidden') ? 'Show' : 'Hide';

            btn.onclick = (e) => {
                e.stopPropagation();
                const isHidden = document.body.classList.contains('sidebar-hidden');
                document.body.classList.toggle('sidebar-hidden', !isHidden);
                document.body.classList.toggle('sidebar-visible', isHidden);
                btn.textContent = !isHidden ? 'Show' : 'Hide';
                setStoredState(!isHidden);
            };
            document.body.appendChild(btn);
        };

        // 使用 MutationObserver 确保按钮在动态加载后依然存在
        const observer = new MutationObserver(() => {
            if (document.querySelector('.nd-main-layout__sider') || document.querySelector('.wp-s-aside-nav')) {
                createBtn();
                if(btn) btn.style.display = 'block';
            } else {
                if(btn) btn.style.display = 'none';
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };

    init();
})();
