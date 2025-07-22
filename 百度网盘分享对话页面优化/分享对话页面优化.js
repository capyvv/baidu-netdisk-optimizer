// ==UserScript==
// @name         Baidu Pan Share Dialog Optimization
// @name:zh-CN   百度网盘分享对话页面优化
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Optimizes Baidu Pan share dialog with resizable interface, disabled back navigation, and enhanced breadcrumb navigation
// @description:zh-CN  优化百度网盘分享对话框：支持界面调整、禁用返回功能、增强面包屑导航
// @author       Enhanced Version
// @match        https://pan.baidu.com/*
// @match        https://yun.baidu.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // 配置参数
    const CONFIG = {
        // 对话框尺寸配置
        dialog: {
            defaultWidth: '85%',        // 默认宽度
            defaultHeight: '90%',       // 默认高度
            minWidth: '600px',          // 最小宽度
            minHeight: '400px',         // 最小高度
            maxWidth: '95%',            // 最大宽度
            maxHeight: '95%'            // 最大高度
        },
        // 是否启用各项功能
        features: {
            resizable: true,            // 启用拖拽调整
            disableBack: true,          // 禁用返回功能
            enhanceBreadcrumb: true     // 增强面包屑导航
        }
    };

    // 工具函数：检查是否为百度网盘分享页面
    function isBaiduPanSharePage() {
        return window.location.hostname.includes('pan.baidu.com') ||
            window.location.hostname.includes('yun.baidu.com');
    }

    // 工具函数：等待元素出现
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

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`Element ${selector} not found within ${timeout}ms`));
            }, timeout);
        });
    }

    // 功能1：扩大文件分享页面的可调整范围
    function enhanceDialogSize() {
        console.log('[百度网盘优化] 开始优化对话框尺寸...');

        // 添加CSS样式来优化对话框尺寸
        GM_addStyle(`
            /* 对话框容器优化 */
            .u-drawer__wrapper.is-doc {
                z-index: 2002 !important;
            }

            .u-drawer__container.u-drawer__open {
                width: 100% !important;
                height: 100% !important;
            }

            .u-drawer.rtl.drawer-doclib {
                width: ${CONFIG.dialog.defaultWidth} !important;
                height: ${CONFIG.dialog.defaultHeight} !important;
                min-width: ${CONFIG.dialog.minWidth} !important;
                min-height: ${CONFIG.dialog.minHeight} !important;
                max-width: ${CONFIG.dialog.maxWidth} !important;
                max-height: ${CONFIG.dialog.maxHeight} !important;
                left: 50% !important;
                top: 50% !important;
                transform: translate(-50%, -50%) !important;
                position: fixed !important;
                border-radius: 8px !important;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
            }

            /* 文件列表区域优化 */
            .im-pan-list {
                height: calc(100vh - 200px) !important;
                overflow-y: auto !important;
            }

            .im-pan-table__body {
                max-height: calc(100vh - 300px) !important;
                overflow-y: auto !important;
            }

            /* 文件名列宽度优化 */
            .im-pan-table__header-table colgroup col:nth-child(2),
            .im-pan-table__body-table colgroup col:nth-child(2) {
                width: 70% !important;
            }

            .im-pan-table__header-table colgroup col:nth-child(3),
            .im-pan-table__body-table colgroup col:nth-child(3) {
                width: 18% !important;
            }
        `);

        // 如果启用拖拽调整功能
        if (CONFIG.features.resizable) {
            addResizableFeature();
        }
    }

    // 添加拖拽调整功能
    function addResizableFeature() {
        GM_addStyle(`
            /* 拖拽调整样式 */
            .u-drawer.rtl.drawer-doclib {
                resize: both !important;
                overflow: hidden !important;
            }

            /* 添加拖拽手柄 */
            .u-drawer.rtl.drawer-doclib::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 20px;
                height: 20px;
                background: linear-gradient(-45deg, transparent 0%, transparent 40%, #ccc 40%, #ccc 60%, transparent 60%);
                cursor: nw-resize;
                z-index: 1000;
            }

            /* 拖拽时的视觉反馈 */
            .u-drawer.rtl.drawer-doclib:hover::after {
                background: linear-gradient(-45deg, transparent 0%, transparent 40%, #999 40%, #999 60%, transparent 60%);
            }
        `);

        // 监听对话框出现并添加拖拽功能
        waitForElement('.u-drawer.rtl.drawer-doclib').then(dialog => {
            console.log('[百度网盘优化] 对话框拖拽调整功能已启用');

            // 添加鼠标拖拽事件监听
            let isResizing = false;
            let startX, startY, startWidth, startHeight;

            dialog.addEventListener('mousedown', (e) => {
                const rect = dialog.getBoundingClientRect();
                const isInResizeArea = (
                    e.clientX > rect.right - 20 &&
                    e.clientY > rect.bottom - 20
                );

                if (isInResizeArea) {
                    isResizing = true;
                    startX = e.clientX;
                    startY = e.clientY;
                    startWidth = parseInt(window.getComputedStyle(dialog).width, 10);
                    startHeight = parseInt(window.getComputedStyle(dialog).height, 10);
                    e.preventDefault();
                }
            });

            document.addEventListener('mousemove', (e) => {
                if (!isResizing) return;

                const newWidth = startWidth + (e.clientX - startX);
                const newHeight = startHeight + (e.clientY - startY);

                // 应用尺寸限制
                const minWidth = parseInt(CONFIG.dialog.minWidth);
                const minHeight = parseInt(CONFIG.dialog.minHeight);
                const maxWidth = window.innerWidth * 0.95;
                const maxHeight = window.innerHeight * 0.95;

                const finalWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
                const finalHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

                dialog.style.width = finalWidth + 'px';
                dialog.style.height = finalHeight + 'px';
            });

            document.addEventListener('mouseup', () => {
                isResizing = false;
            });
        }).catch(err => {
            console.warn('[百度网盘优化] 对话框未找到，跳过拖拽功能:', err.message);
        });
    }

    // 功能2：禁用页面返回功能
    function disableBackNavigation() {
        if (!CONFIG.features.disableBack || !isBaiduPanSharePage()) {
            return;
        }

        console.log('[百度网盘优化] 开始禁用返回功能...');

        // 禁用浏览器后退按钮
        history.pushState(null, null, location.href);
        window.addEventListener('popstate', function () {
            history.pushState(null, null, location.href);
            console.log('[百度网盘优化] 阻止了返回操作');
        });

        // 禁用键盘快捷键返回
        document.addEventListener('keydown', function (e) {
            // 阻止 Alt + 左箭头 (后退)
            if (e.altKey && (e.key === 'ArrowLeft' || e.keyCode === 37)) {
                e.preventDefault();
                e.stopPropagation();
                console.log('[百度网盘优化] 阻止了 Alt+左箭头 返回操作');
                return false;
            }

            // 阻止 Backspace 键返回 (仅在非输入元素上)
            if (e.key === 'Backspace' || e.keyCode === 8) {
                const target = e.target;
                const tagName = target.tagName.toLowerCase();
                const isInput = tagName === 'input' || tagName === 'textarea' || target.contentEditable === 'true';

                if (!isInput) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('[百度网盘优化] 阻止了 Backspace 返回操作');
                    return false;
                }
            }
        }, true);

        // 禁用鼠标手势返回 (监听鼠标事件)
        document.addEventListener('mousedown', function () {
            // 记录鼠标按下事件，用于后续处理
        }, true);

        document.addEventListener('mouseup', function (e) {
            // 检测鼠标侧键点击 (通常用于前进/后退)
            if (e.button === 3 || e.button === 4) {
                e.preventDefault();
                e.stopPropagation();
                console.log('[百度网盘优化] 阻止了鼠标侧键返回操作');
                return false;
            }
        }, true);

        // 禁用触摸屏滑动返回手势
        let touchStartX = 0;
        let touchStartY = 0;

        document.addEventListener('touchstart', function (e) {
            if (e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }
        }, { passive: false });

        document.addEventListener('touchmove', function (e) {
            if (e.touches.length === 1) {
                const touchX = e.touches[0].clientX;
                const touchY = e.touches[0].clientY;
                const deltaX = touchX - touchStartX;
                const deltaY = touchY - touchStartY;

                // 检测从左边缘向右滑动的手势 (通常用于返回)
                if (touchStartX < 50 && deltaX > 100 && Math.abs(deltaY) < 100) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('[百度网盘优化] 阻止了触摸滑动返回操作');
                    return false;
                }
            }
        }, { passive: false });

        console.log('[百度网盘优化] 返回功能禁用完成');
    }

    // 功能3：优化文件索引显示区域（面包屑导航）
    function enhanceBreadcrumbNavigation() {
        if (!CONFIG.features.enhanceBreadcrumb) {
            return;
        }

        console.log('[百度网盘优化] 开始优化面包屑导航...');

        // 添加面包屑导航优化样式
        GM_addStyle(`
            /* 面包屑导航容器优化 */
            .im-file-nav {
                background: #f8f9fa !important;
                border-radius: 6px !important;
                padding: 12px 16px !important;
                margin-bottom: 16px !important;
                border: 1px solid #e9ecef !important;
            }

            .im-file-nav__path-nav {
                width: 100% !important;
            }

            /* 面包屑导航样式优化 */
            .u-breadcrumb {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }

            .u-breadcrumb__item {
                display: inline-flex !important;
                align-items: center !important;
                margin-right: 8px !important;
            }

            /* 面包屑链接样式 */
            .u-breadcrumb__inner {
                color: #495057 !important;
                text-decoration: none !important;
                padding: 4px 8px !important;
                border-radius: 4px !important;
                transition: all 0.2s ease !important;
                cursor: pointer !important;
                max-width: 200px !important;
                display: inline-block !important;
            }

            /* 可点击的面包屑项悬停效果 */
            .u-breadcrumb__inner:hover {
                background-color: #e9ecef !important;
                color: #007bff !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
            }

            /* 当前路径高亮 */
            .u-breadcrumb__item:last-child .u-breadcrumb__inner {
                background-color: #007bff !important;
                color: white !important;
                font-weight: 500 !important;
            }

            .u-breadcrumb__item:last-child .u-breadcrumb__inner:hover {
                background-color: #0056b3 !important;
                color: white !important;
            }

            /* 分隔符样式 */
            .u-breadcrumb__separator {
                color: #6c757d !important;
                margin: 0 4px !important;
                font-size: 12px !important;
            }

            /* 省略号样式优化 */
            .u-breadcrumb__item.is-ellip .u-breadcrumb__inner {
                background-color: #6c757d !important;
                color: white !important;
                cursor: help !important;
                font-weight: bold !important;
            }

            .u-breadcrumb__item.is-ellip .u-breadcrumb__inner:hover {
                background-color: #5a6268 !important;
                transform: scale(1.05) !important;
            }

            /* 文件名文本省略优化 */
            .im-file-nav__nav-item.text-ellipsis {
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                max-width: 180px !important;
                display: inline-block !important;
                vertical-align: middle !important;
            }

            /* 响应式设计 */
            @media (max-width: 768px) {
                .im-file-nav__nav-item.text-ellipsis {
                    max-width: 120px !important;
                }

                .u-breadcrumb__inner {
                    max-width: 150px !important;
                    padding: 3px 6px !important;
                }
            }
        `);

        // 监听面包屑导航出现并增强功能
        waitForElement('.im-file-nav__path-nav').then(navContainer => {
            console.log('[百度网盘优化] 面包屑导航容器已找到，开始增强功能');

            enhanceBreadcrumbInteraction(navContainer);
        }).catch(err => {
            console.warn('[百度网盘优化] 面包屑导航未找到:', err.message);
        });
    }

    // 增强面包屑导航交互功能
    function enhanceBreadcrumbInteraction(navContainer) {
        // 监听面包屑导航变化
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' || mutation.type === 'subtree') {
                    updateBreadcrumbItems();
                }
            });
        });

        observer.observe(navContainer, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['title', 'class']
        });

        // 初始化面包屑项
        updateBreadcrumbItems();

        function updateBreadcrumbItems() {
            const breadcrumbItems = navContainer.querySelectorAll('.u-breadcrumb__item');

            breadcrumbItems.forEach((item) => {
                const inner = item.querySelector('.u-breadcrumb__inner');
                const navItem = item.querySelector('.im-file-nav__nav-item');

                if (inner && navItem) {
                    // 添加点击事件（如果还没有添加）
                    if (!inner.hasAttribute('data-enhanced')) {
                        inner.setAttribute('data-enhanced', 'true');

                        // 为非省略号项添加点击功能
                        if (!item.classList.contains('is-ellip')) {
                            inner.addEventListener('click', function (e) {
                                e.preventDefault();
                                e.stopPropagation();

                                // 触发原有的点击事件
                                if (navItem.click) {
                                    navItem.click();
                                }

                                console.log(`[百度网盘优化] 点击了面包屑: ${navItem.textContent.trim()}`);
                            });
                        }

                        // 添加工具提示
                        const title = item.getAttribute('title') || navItem.textContent.trim();
                        inner.setAttribute('title', title);

                        // 为省略号项添加特殊处理
                        if (item.classList.contains('is-ellip')) {
                            inner.setAttribute('title', '点击展开完整路径');
                            inner.addEventListener('click', function (e) {
                                e.preventDefault();
                                showFullPath(breadcrumbItems);
                            });
                        }
                    }
                }
            });
        }

        // 显示完整路径的功能
        function showFullPath(breadcrumbItems) {
            const pathParts = [];
            breadcrumbItems.forEach(item => {
                const title = item.getAttribute('title');
                if (title && title !== '...' && title !== '点击展开完整路径') {
                    pathParts.push(title);
                }
            });

            if (pathParts.length > 0) {
                const fullPath = pathParts.join(' > ');

                // 创建临时提示框显示完整路径
                showPathTooltip(fullPath);
            }
        }

        // 显示路径提示框
        function showPathTooltip(fullPath) {
            // 移除已存在的提示框
            const existingTooltip = document.querySelector('.path-tooltip');
            if (existingTooltip) {
                existingTooltip.remove();
            }

            // 创建新的提示框
            const tooltip = document.createElement('div');
            tooltip.className = 'path-tooltip';
            tooltip.innerHTML = `
                <div class="path-tooltip-content">
                    <div class="path-tooltip-header">完整路径</div>
                    <div class="path-tooltip-path">${fullPath}</div>
                    <button class="path-tooltip-close">×</button>
                </div>
            `;

            // 添加提示框样式
            GM_addStyle(`
                .path-tooltip {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    z-index: 10000;
                    max-width: 80%;
                    max-height: 80%;
                }

                .path-tooltip-content {
                    padding: 20px;
                    position: relative;
                }

                .path-tooltip-header {
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: #333;
                    font-size: 16px;
                }

                .path-tooltip-path {
                    color: #666;
                    line-height: 1.5;
                    word-break: break-all;
                    max-height: 200px;
                    overflow-y: auto;
                }

                .path-tooltip-close {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: #999;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .path-tooltip-close:hover {
                    color: #333;
                    background-color: #f0f0f0;
                    border-radius: 50%;
                }
            `);

            document.body.appendChild(tooltip);

            // 添加关闭事件
            const closeBtn = tooltip.querySelector('.path-tooltip-close');
            closeBtn.addEventListener('click', () => {
                tooltip.remove();
            });

            // 点击外部关闭
            setTimeout(() => {
                document.addEventListener('click', function closeTooltip(e) {
                    if (!tooltip.contains(e.target)) {
                        tooltip.remove();
                        document.removeEventListener('click', closeTooltip);
                    }
                });
            }, 100);

            // 3秒后自动关闭
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.remove();
                }
            }, 3000);
        }
    }

    // 主初始化函数
    function initialize() {
        console.log('[百度网盘优化] 脚本开始初始化...');

        // 检查是否为百度网盘页面
        if (!isBaiduPanSharePage()) {
            console.log('[百度网盘优化] 非百度网盘页面，脚本退出');
            return;
        }

        // 等待页面加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeFeatures);
        } else {
            initializeFeatures();
        }
    }

    // 初始化各项功能
    function initializeFeatures() {
        console.log('[百度网盘优化] 开始初始化各项功能...');

        try {
            // 功能1：扩大文件分享页面的可调整范围
            if (CONFIG.features.resizable) {
                enhanceDialogSize();
            }

            // 功能2：禁用页面返回功能
            if (CONFIG.features.disableBack) {
                disableBackNavigation();
            }

            // 功能3：优化文件索引显示区域
            if (CONFIG.features.enhanceBreadcrumb) {
                enhanceBreadcrumbNavigation();
            }

            console.log('[百度网盘优化] 所有功能初始化完成');
        } catch (error) {
            console.error('[百度网盘优化] 功能初始化出错:', error);
        }
    }

    // 启动脚本
    initialize();

})();
