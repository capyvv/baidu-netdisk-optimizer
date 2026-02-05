// ==UserScript==
// @name         BaiduPan-UI-Enhancer
// @name:zh-CN   百度网盘文件列表UI优化
// @namespace    http://tampermonkey.net/
// @version      1.3
// @license      GPL
// @description  Combines compact table layout customization and share dialog optimizations.
// @description:zh-CN  合集：1. 紧凑表格布局（隐藏大小类型列、最大化文件名显示、侧边栏开关）；2. 分享对话框优化（拖拽调整大小、禁用返回、面包屑导航增强）。
// @author       Atom
// @match        https://pan.baidu.com/*
// @match        https://yun.baidu.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // ======================================================================================
    // 1. 全局配置区域
    // ======================================================================================
    const CONFIG = {
        // --- 模块 A: 紧凑表格布局配置 ---
        tableLayout: {
            enable: true,               // 总开关
            showSizeColumn: false,      // 是否显示文件大小列 (默认隐藏)
            dateColumnWidth: '90px',    // 时间列宽度
            rowHeight: '28px',          // 表格行高
            enableSidebarToggle: true,  // 启用侧边栏折叠按钮
            buttonPosition: { top: '60px', leftVisible: '200px', leftHidden: '20px' }
        },

        // --- 模块 B: 分享对话框优化配置 ---
        shareDialog: {
            enable: true,               // 总开关
            dialog: {
                defaultWidth: '85%',
                defaultHeight: '90%',
                minWidth: '600px',
                minHeight: '400px',
                maxWidth: '95%',
                maxHeight: '95%'
            },
            features: {
                resizable: true,        // 启用拖拽调整
                disableBack: true,      // 禁用返回功能
                enhanceBreadcrumb: true // 增强面包屑导航
            }
        }
    };

    // ======================================================================================
    // 2. 通用工具函数
    // ======================================================================================

    // 样式注入 Polyfill (兼容未授予 GM_addStyle 的环境)
    const addGlobalStyle = (css) => {
        if (typeof GM_addStyle === 'function') {
            GM_addStyle(css);
        } else {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        }
    };

    // 等待元素出现
    function waitForElement(selector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                return;
            }

            const observer = new MutationObserver((_, obs) => {
                const element = document.querySelector(selector);
                if (element) {
                    obs.disconnect();
                    resolve(element);
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });

            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`Element ${selector} not found within ${timeout}ms`));
            }, timeout);
        });
    }

    // 检查是否为网盘页面 (用于模块 B)
    function isBaiduPanPage() {
        return window.location.hostname.includes('pan.baidu.com') ||
            window.location.hostname.includes('yun.baidu.com');
    }

    // ======================================================================================
    // 3. 模块 A: 紧凑表格布局逻辑
    // ======================================================================================
    const initTableLayout = () => {
        if (!CONFIG.tableLayout.enable) return;

        const cfg = CONFIG.tableLayout;

        // 根据配置决定是否生成大小列的 CSS
        const sizeColumnStyle = cfg.showSizeColumn ?
            `width: 60px!important;` :
            `display: none!important; width: 0!important;`;

        const cssStyles = `
            /* =========================== 表格布局强制重置 =========================== */
            .wp-s-pan-table__header-table,
            .wp-s-pan-table__body-table {
                table-layout: fixed!important;
                width: 100%!important;
            }
            /* 允许所有列无限收缩 */
            col, th, td { min-width: 0!important; }

            /* =========================== 各列精确控制 =========================== */
            /* [第1列] 选择框 */
            .wp-s-pan-table__header-table col:nth-child(1),
            .wp-s-pan-table__body-table col:nth-child(1),
            .wp-s-pan-table__body-row td:nth-child(1) { width: 40px!important; }

            /* [第2列] ★★★ 文件名 (霸占剩余空间) ★★★ */
            .wp-s-pan-table__header-table col:nth-child(2),
            .wp-s-pan-table__body-table col:nth-child(2) { width: auto!important; }

            /* [第3列] 大小 */
            .wp-s-pan-table__header-table col:nth-child(3),
            .wp-s-pan-table__body-table col:nth-child(3),
            .wp-s-pan-table__header-row th:nth-child(3),
            .wp-s-pan-table__body-row td:nth-child(3) { ${sizeColumnStyle} }

            /* [第4列] 类型 (隐藏) */
            .wp-s-pan-table__header-table col:nth-child(4),
            .wp-s-pan-table__body-table col:nth-child(4),
            .wp-s-pan-table__header-row th:nth-child(4),
            .wp-s-pan-table__body-row td:nth-child(4) { display: none!important; width: 0!important; }

            /* [第5列] 修改时间 */
            .wp-s-pan-table__header-table col:nth-child(5),
            .wp-s-pan-table__body-table col:nth-child(5),
            .wp-s-pan-table__header-row th:nth-child(5),
            .wp-s-pan-table__body-row td:nth-child(5) { width: ${cfg.dateColumnWidth}!important; }

            /* =========================== 视觉优化 =========================== */
            .wp-s-pan-table__header-row th {
                font-size: 12px!important; padding: 0 4px!important; color: #999!important;
            }
            .wp-s-pan-table__body-row td:nth-child(5) {
                font-size: 12px!important; font-family: Consolas, monospace!important;
                color: #aaa!important; letter-spacing: -0.5px!important; padding: 0 2px!important;
            }
            .wp-s-pan-table__body-row-name span,
            .wp-s-file-list-drag-copy__item-title-text span { font-size: 13px!important; }

            /* 行高紧凑 */
            .wp-s-pan-table__body-row, .wp-s-table-skin-hoc__tr {
                height: ${cfg.rowHeight}!important; line-height: ${cfg.rowHeight}!important;
            }
            .wp-s-pan-table__body-row td {
                height: ${cfg.rowHeight}!important;
                padding-top: 0!important; padding-bottom: 0!important;
            }

            /* =========================== 侧边栏按钮 =========================== */
            .sidebar-toggle-btn {
                position: fixed!important;
                top: ${cfg.buttonPosition.top}!important;
                left: ${cfg.buttonPosition.leftVisible}!important;
                z-index: 99999;
                background: rgba(24, 144, 255, 0.8)!important;
                color: white!important; border: none; border-radius: 4px;
                padding: 2px 8px!important; font-size: 11px!important; cursor: pointer;
                transition: left 0.3s ease;
            }
            .sidebar-toggle-btn:hover { background: #1890ff!important; }

            .sidebar-hidden .wp-s-aside-nav, .sidebar-hidden .nd-main-layout__sider, .sidebar-hidden .wp-s-core-pan__aside {
                width: 0!important; flex: 0 0 0!important; opacity: 0!important; overflow: hidden!important;
            }
            .sidebar-hidden .nd-main-layout__body, .sidebar-hidden .wp-s-core-pan, .sidebar-hidden .wp-s-core-pan__body {
                width: 100%!important; flex: 1 1 auto!important;
            }
            .sidebar-hidden .sidebar-toggle-btn { left: ${cfg.buttonPosition.leftHidden}!important; }
            .sidebar-visible .sidebar-toggle-btn { left: ${cfg.buttonPosition.leftVisible}!important; }
        `;

        addGlobalStyle(cssStyles);

        // --- 侧边栏切换逻辑 ---
        if (!cfg.enableSidebarToggle) return;

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

        const observer = new MutationObserver(() => {
            if (document.querySelector('.nd-main-layout__sider') || document.querySelector('.wp-s-aside-nav')) {
                createBtn();
                if (btn) btn.style.display = 'block';
            } else {
                if (btn) btn.style.display = 'none';
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };

    // ======================================================================================
    // 4. 模块 B: 分享对话框优化逻辑
    // ======================================================================================
    const initShareDialogOptimization = () => {
        if (!CONFIG.shareDialog.enable || !isBaiduPanPage()) return;

        const cfg = CONFIG.shareDialog;

        // --- 功能 B1: 扩大对话框尺寸 & 拖拽 ---
        const enhanceDialogSize = () => {
            // CSS 注入
            addGlobalStyle(`
                .u-drawer__wrapper.is-doc { z-index: 2002 !important; }
                .u-drawer__container.u-drawer__open { width: 100% !important; height: 100% !important; }
                .u-drawer.rtl.drawer-doclib {
                    width: ${cfg.dialog.defaultWidth} !important;
                    height: ${cfg.dialog.defaultHeight} !important;
                    min-width: ${cfg.dialog.minWidth} !important;
                    min-height: ${cfg.dialog.minHeight} !important;
                    max-width: ${cfg.dialog.maxWidth} !important;
                    max-height: ${cfg.dialog.maxHeight} !important;
                    left: 50% !important; top: 50% !important;
                    transform: translate(-50%, -50%) !important;
                    position: fixed !important;
                    border-radius: 8px !important;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
                }
                .im-pan-list { height: calc(100vh - 200px) !important; overflow-y: auto !important; }
                .im-pan-table__body { max-height: calc(100vh - 300px) !important; overflow-y: auto !important; }
                /* 文件名列宽度 */
                .im-pan-table__header-table colgroup col:nth-child(2),
                .im-pan-table__body-table colgroup col:nth-child(2) { width: 70% !important; }
                .im-pan-table__header-table colgroup col:nth-child(3),
                .im-pan-table__body-table colgroup col:nth-child(3) { width: 18% !important; }
            `);

            if (cfg.features.resizable) {
                addGlobalStyle(`
                    .u-drawer.rtl.drawer-doclib { resize: both !important; overflow: hidden !important; }
                    .u-drawer.rtl.drawer-doclib::after {
                        content: ''; position: absolute; bottom: 0; right: 0; width: 20px; height: 20px;
                        background: linear-gradient(-45deg, transparent 0%, transparent 40%, #ccc 40%, #ccc 60%, transparent 60%);
                        cursor: nw-resize; z-index: 1000;
                    }
                    .u-drawer.rtl.drawer-doclib:hover::after {
                        background: linear-gradient(-45deg, transparent 0%, transparent 40%, #999 40%, #999 60%, transparent 60%);
                    }
                `);

                waitForElement('.u-drawer.rtl.drawer-doclib').then(dialog => {
                    let isResizing = false;
                    let startX, startY, startWidth, startHeight;

                    dialog.addEventListener('mousedown', (e) => {
                        const rect = dialog.getBoundingClientRect();
                        // 检测右下角区域
                        if (e.clientX > rect.right - 20 && e.clientY > rect.bottom - 20) {
                            isResizing = true;
                            startX = e.clientX; startY = e.clientY;
                            startWidth = parseInt(window.getComputedStyle(dialog).width, 10);
                            startHeight = parseInt(window.getComputedStyle(dialog).height, 10);
                            e.preventDefault();
                        }
                    });

                    document.addEventListener('mousemove', (e) => {
                        if (!isResizing) return;
                        const newWidth = startWidth + (e.clientX - startX);
                        const newHeight = startHeight + (e.clientY - startY);
                        // 应用限制
                        const finalWidth = Math.max(parseInt(cfg.dialog.minWidth), Math.min(window.innerWidth * 0.95, newWidth));
                        const finalHeight = Math.max(parseInt(cfg.dialog.minHeight), Math.min(window.innerHeight * 0.95, newHeight));
                        dialog.style.width = finalWidth + 'px';
                        dialog.style.height = finalHeight + 'px';
                    });

                    document.addEventListener('mouseup', () => { isResizing = false; });
                }).catch(() => { });
            }
        };

        // --- 功能 B2: 禁用返回 ---
        const disableBackNavigation = () => {
            // 禁用浏览器后退按钮
            history.pushState(null, null, location.href);
            window.addEventListener('popstate', function () {
                history.pushState(null, null, location.href);
            });

            document.addEventListener('keydown', (e) => {
                // 阻止 Alt+Left
                if (e.altKey && (e.key === 'ArrowLeft' || e.keyCode === 37)) {
                    e.preventDefault(); e.stopPropagation(); return false;
                }
                // 阻止 Backspace (非输入框)
                if (e.key === 'Backspace' || e.keyCode === 8) {
                    const tag = e.target.tagName.toLowerCase();
                    const isInput = tag === 'input' || tag === 'textarea' || e.target.contentEditable === 'true';
                    if (!isInput) { e.preventDefault(); e.stopPropagation(); return false; }
                }
            }, true);

            // 禁用鼠标侧键
            document.addEventListener('mouseup', function (e) {
                if (e.button === 3 || e.button === 4) {
                    e.preventDefault(); e.stopPropagation(); return false;
                }
            }, true);
        };

        // --- 功能 B3: 增强面包屑 ---
        const enhanceBreadcrumbNavigation = () => {
            addGlobalStyle(`
                .im-file-nav { background: #f8f9fa !important; border-radius: 6px !important; padding: 12px 16px !important; margin-bottom: 16px !important;  border: 1px solid #e9ecef !important; }
                .u-breadcrumb__item { display: inline-flex !important; align-items: center !important; margin-right: 8px !important; }
                .u-breadcrumb__inner { color: #495057 !important; padding: 4px 8px !important; border-radius: 4px !important; transition: all 0.2s ease !important; cursor: pointer !important; max-width: 200px !important; display: inline-block !important; }
                .u-breadcrumb__inner:hover { background-color: #e9ecef !important; color: #007bff !important; transform: translateY(-1px) !important; box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important; }
                .u-breadcrumb__item:last-child .u-breadcrumb__inner { background-color: #007bff !important; color: white !important; font-weight: 500 !important; }
                .u-breadcrumb__item.is-ellip .u-breadcrumb__inner { background-color: #6c757d !important; color: white !important; cursor: help !important; font-weight: bold !important; }
                .im-file-nav__nav-item.text-ellipsis { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; max-width: 180px !important; display: inline-block !important; vertical-align: middle !important; }
            `);

            waitForElement('.im-file-nav__path-nav').then(navContainer => {
                const observer = new MutationObserver((mutations) => {
                    updateBreadcrumbItems(navContainer);
                });
                observer.observe(navContainer, { childList: true, subtree: true, attributes: true, attributeFilter: ['title', 'class'] });
                updateBreadcrumbItems(navContainer);
            }).catch(() => { });
        };

        const updateBreadcrumbItems = (navContainer) => {
            const items = navContainer.querySelectorAll('.u-breadcrumb__item');
            items.forEach((item) => {
                const inner = item.querySelector('.u-breadcrumb__inner');
                const navItem = item.querySelector('.im-file-nav__nav-item');
                if (inner && navItem && !inner.hasAttribute('data-enhanced')) {
                    inner.setAttribute('data-enhanced', 'true');
                    const title = item.getAttribute('title') || navItem.textContent.trim();
                    inner.setAttribute('title', title);

                    if (!item.classList.contains('is-ellip')) {
                        inner.addEventListener('click', (e) => {
                            e.preventDefault(); e.stopPropagation();
                            if (navItem.click) navItem.click();
                        });
                    } else {
                        inner.setAttribute('title', '点击展开完整路径');
                        inner.addEventListener('click', (e) => {
                            e.preventDefault();
                            showFullPath(items);
                        });
                    }
                }
            });
        };

        const showFullPath = (items) => {
            const pathParts = [];
            items.forEach(item => {
                const title = item.getAttribute('title');
                if (title && title !== '...' && title !== '点击展开完整路径') pathParts.push(title);
            });
            if (pathParts.length > 0) showPathTooltip(pathParts.join(' > '));
        };

        const showPathTooltip = (fullPath) => {
            const existingTooltip = document.querySelector('.path-tooltip');
            if (existingTooltip) existingTooltip.remove();

            const tooltip = document.createElement('div');
            tooltip.className = 'path-tooltip';
            tooltip.innerHTML = `
                <div style="padding: 20px; position: relative;">
                    <div style="font-weight: bold; margin-bottom: 10px; color: #333; font-size: 16px;">完整路径</div>
                    <div style="color: #666; line-height: 1.5; word-break: break-all; max-height: 200px; overflow-y: auto;">${fullPath}</div>
                    <button class="path-tooltip-close" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
                </div>
            `;
            // 添加内联或Class样式 (简化起见使用了style)
            Object.assign(tooltip.style, {
                position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                background: 'white', border: '1px solid #ddd', borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)', zIndex: '10000', maxWidth: '80%', maxHeight: '80%'
            });

            document.body.appendChild(tooltip);

            const close = () => tooltip.remove();
            tooltip.querySelector('.path-tooltip-close').addEventListener('click', close);
            const closeOnClickOutside = (e) => { if (!tooltip.contains(e.target)) { close(); document.removeEventListener('click', closeOnClickOutside); } };
            setTimeout(() => document.addEventListener('click', closeOnClickOutside), 100);
            setTimeout(() => { if (tooltip.parentNode) close(); }, 3000);
        };

        // --- 执行 B 模块启用 ---
        console.log('[AllInOne] 初始化分享页优化...');
        if (cfg.features.resizable) enhanceDialogSize();
        if (cfg.features.disableBack) disableBackNavigation();
        if (cfg.features.enhanceBreadcrumb) enhanceBreadcrumbNavigation();
    };


    // ======================================================================================
    // 5. 主入口
    // ======================================================================================
    const main = () => {
        // 先运行表格布局优化
        console.log('[AllInOne] 启动表格布局优化...');
        initTableLayout();

        // 当页面加载可能尚未完成时
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initShareDialogOptimization);
        } else {
            initShareDialogOptimization();
        }
    };

    main();

})();
