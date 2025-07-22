// ==UserScript==
// @name         百度网盘批量重命名-精简版
// @namespace    vite-plugin-monkey
// @version      1.0.0
// @author       a1mersnow (修改版)
// @description  批量重命名百度网盘里的文件
// @license      GPL
// @icon         data:image/jpeg;base64,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
// @source       https://github.com/a1mersnow/drive-rename
// @match        https://pan.baidu.com/disk/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js
// @require      https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js
// @grant        none
// ==/UserScript==

(function(vue) {
  "use strict";
  
  // 添加CSS样式
  (t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const a=document.createElement("style");a.textContent=t,document.head.append(a)})(`
  .custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar{width:6px}.custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar-track{--un-bg-opacity:1;background-color:rgb(222 232 255 / var(--un-bg-opacity))}.custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar-thumb{border-radius:9999px;--un-bg-opacity:1;background-color:rgb(112 136 255 / var(--un-bg-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar-thumb:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}.clip-enter-from,.clip-leave-to{clip-path:inset(0 100% 100% 0 round 8px)}.clip-enter-to,.clip-leave-from{clip-path:inset(0 0 0 0 round 8px)}.clip-enter-active,.clip-leave-active{transition:clip-path .3s ease}.fade-left-enter-from,.fade-left-leave-to{opacity:0;transform:translate(10%)}.fade-left-enter-to,.fade-left-leave-from{opacity:1;transform:none}.fade-left-enter-active,.fade-left-leave-active{transition:opacity .3s,transform .3s ease}.fade-enter-from,.fade-leave-to{opacity:0}.fade-enter-to,.fade-leave-from{opacity:1}.fade-enter-active,.fade-leave-active{transition:opacity .3s}:where(.drive-rename-root) :is(*,*:before,*:after){box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:where(.drive-rename-root) :is(*:before,*:after){--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}:where(.drive-rename-root) hr{height:0;color:inherit;border-top-width:1px}:where(.drive-rename-root) abbr:where([title]){text-decoration:underline dotted}:where(.drive-rename-root) :is(h1,h2,h3,h4,h5,h6){font-size:inherit;font-weight:inherit}:where(.drive-rename-root) a{color:inherit;text-decoration:inherit}:where(.drive-rename-root) :is(b,strong){font-weight:bolder}:where(.drive-rename-root) :is(code,kbd,samp,pre){font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}:where(.drive-rename-root) small{font-size:80%}:where(.drive-rename-root) :is(sub,sup){font-size:75%;line-height:0;position:relative;vertical-align:baseline}:where(.drive-rename-root) sub{bottom:-.25em}:where(.drive-rename-root) sup{top:-.5em}:where(.drive-rename-root) table{text-indent:0;border-color:inherit;border-collapse:collapse}:where(.drive-rename-root) :is(button,input,optgroup,select,textarea){font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}:where(.drive-rename-root) :is(button,select){text-transform:none}:where(.drive-rename-root) :is(button,[type=button],[type=reset],[type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:where(.drive-rename-root) :-moz-focusring{outline:auto}:where(.drive-rename-root) :-moz-ui-invalid{box-shadow:none}:where(.drive-rename-root) progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}:where(.drive-rename-root) [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:where(.drive-rename-root) ::-webkit-search-decoration{-webkit-appearance:none}:where(.drive-rename-root) ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(.drive-rename-root) summary{display:list-item}:where(.drive-rename-root) :is(blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre){margin:0}:where(.drive-rename-root) fieldset{margin:0;padding:0}:where(.drive-rename-root) legend{padding:0}:where(.drive-rename-root) :is(ol,ul,menu){list-style:none;margin:0;padding:0}:where(.drive-rename-root) dialog{padding:0}:where(.drive-rename-root) textarea{resize:vertical}:where(.drive-rename-root) :is(input::placeholder,textarea::placeholder){opacity:1;color:#9ca3af}:where(.drive-rename-root) :is(button,[role=button]){cursor:pointer}:where(.drive-rename-root) :disabled{cursor:default}:where(.drive-rename-root) :is(img,svg,video,canvas,audio,iframe,embed,object){display:block;vertical-align:middle}:where(.drive-rename-root) :is(img,video){max-width:100%;height:auto}:where(.drive-rename-root) [hidden]:where(:not([hidden=until-found])){display:none}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthSQBK6PYK3EXw.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRR232RmYJp8I5zzw.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRSW32RmYJp8I5.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0vrx52jJ3Q.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0vrx52g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.i-carbon\:arrow-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:arrows-horizontal{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11.41 26.59L7.83 23H28v-2H7.83l3.58-3.59L10 16l-6 6l6 6zM28 10l-6-6l-1.41 1.41L24.17 9H4v2h20.17l-3.58 3.59L22 16z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:batch-job{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M32 26v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 26 20.101V18h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 20.101 24H18v2h2.101c.13.637.384 1.229.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V32h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 29.899 26zm-7 2c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m-5-11h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2m-8-2h8V4h-8z'/%3E%3Cpath fill='currentColor' d='M17 21H8a2 2 0 0 1-2-2V7h2v12h9z'/%3E%3Cpath fill='currentColor' d='M13 25H4c-1.103 0-2-.897-2-2V11h2v12h9z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:checkbox{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:checkbox-checked-filled{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3Cpath fill='none' d='m14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:circle-packing{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.5 7a3.5 3.5 0 1 1-3.5 3.5A3.504 3.504 0 0 1 23.5 9m.435-1.978A6 6 0 0 0 23.5 7a5.48 5.48 0 0 0-4.132 1.878A8.01 8.01 0 0 0 13.8 4.211a11.86 11.86 0 0 1 10.134 2.811M16 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-4-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m-8-2a12 12 0 0 1 .211-2.199a7.99 7.99 0 0 0 7.346 6.176a5.96 5.96 0 0 0-.89 6.757A12 12 0 0 1 4 16m17.333 10.734a5.983 5.983 0 0 0-4.179-8.62a8 8 0 0 0 1.913-2.368a5.488 5.488 0 0 0 8.917-.068c.003.108.016.214.016.322a12 12 0 0 1-6.667 10.734'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:contour-finding{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cdefs/%3E%3Cpath d='M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z' fill='currentColor'/%3E%3Cpath d='M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z' fill='currentColor'/%3E%3Cpath d='M2.7 20.4a14.403 14.403 0 0 0 2 3.9l1.6-1.2a12.887 12.887 0 0 1-1.7-3.3z' fill='currentColor'/%3E%3Cpath d='M7.8 27.3a14.403 14.403 0 0 0 3.9 2l.6-1.9A12.887 12.887 0 0 1 9 25.7z' fill='currentColor'/%3E%3Cpath d='M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z' fill='currentColor'/%3E%3Cpath d='M24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.526 11.526 0 0 1-2.7 2.7z' fill='currentColor'/%3E%3Cpath d='M27.4 19.7l1.9.6A15.475 15.475 0 0 0 30 16h-2a11.476 11.476 0 0 1-.6 3.7z' fill='currentColor'/%3E%3Cpath d='M29.2 11.6a14.403 14.403 0 0 0-2-3.9l-1.6 1.2a12.887 12.887 0 0 1 1.7 3.3z' fill='currentColor'/%3E%3Cpath d='M24.1 4.6a14.403 14.403 0 0 0-3.9-2l-.6 1.9a12.887 12.887 0 0 1 3.3 1.7z' fill='currentColor'/%3E%3Cpath d='M20.3 29.3l-.6-1.9a11.476 11.476 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z' fill='currentColor'/%3E%3Cpath d='M16 26a10 10 0 1 1 10-10a10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:pointer-text{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M13.71 12.29L7.41 6H13V4H4v9h2V7.41l6.29 6.3l1.42-1.42z' fill='currentColor'/%3E%3Cpath d='M28 30H12a2 2 0 0 1-2-2V18h2v10h16V12H18v-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z' fill='currentColor'/%3E%3Cpath d='M22 15h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2zm0 8h-4v-2h4z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-ion\:dice{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M440.88 129.37L288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9M256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16m-18 118.81L54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46M96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m266-172.49L274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49M320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.z-app{z-index:100000}.btn{display:inline-block;border-width:1px;border-color:currentColor;border-radius:4px;padding:4px;--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.btn:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.btn:disabled{opacity:.5}.\[vertical-align\:-0\.2em\]{vertical-align:-.2em}.absolute{position:absolute}.fixed{position:fixed}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-2{bottom:8px}.right-0{right:0}.top-2{top:8px}.z-2{z-index:2}.z-99{z-index:99}.grid{display:grid}.grid-cols-\[20px_auto_30px_minmax\(200px\,1fr\)\]{grid-template-columns:20px auto 30px minmax(200px,1fr)}.my5{margin-top:20px;margin-bottom:20px}.mb-1{margin-bottom:4px}.mb-3{margin-bottom:12px}.ml-4{margin-left:16px}.ml-auto{margin-left:auto}.mr-22px,[mr-22px=""]{margin-right:22px}.mr-3,.mr3,[mr-3=""]{margin-right:12px}.mt-2{margin-top:8px}.block{display:block}.inline-block,[inline-block=""]{display:inline-block}.contents{display:contents}.h-30px{height:30px}.h-38px{height:38px}.h-8,.h8{height:32px}.h-9,.h9{height:36px}.min-h-40px{min-height:40px}.min-h-61px{min-height:61px}.min-w-66px{min-width:66px}.w-\[max\(500px\,50vw\)\]{width:max(500px,50vw)}.w-300px{width:300px}.w-5em,[w-5em=""]{width:5em}.w-60px{width:60px}.w-fit{width:fit-content}.w-full{width:100%}.flex{display:flex}.inline-flex{display:inline-flex}.shrink-0{flex-shrink:0}.flex-col{flex-direction:column}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-self-center{justify-self:center}.gap-x-1{column-gap:4px}.gap-x-1px{column-gap:1px}.gap-x-2{column-gap:8px}.gap-x-3{column-gap:12px}.gap-x-4{column-gap:16px}.gap-y-1{row-gap:4px}.gap-y-3{row-gap:12px}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.ws-nowrap{white-space:nowrap}.b,.border,.border-1px,[border~="~"]{border-width:1px}.border-y-3px{border-top-width:3px;border-bottom-width:3px}.border-l-3px{border-left-width:3px}[border~=b]{border-bottom-width:1px}.border-\#1874d3{--un-border-opacity:1;border-color:rgb(24 116 211 / var(--un-border-opacity))}.border-current{border-color:currentColor}.border-primary-600{--un-border-opacity:1;border-color:rgb(61 64 238 / var(--un-border-opacity))}.border-transparent{border-color:transparent}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-md{border-radius:6px}.rounded-sm{border-radius:4px}.border-solid{border-style:solid}.bg-\#1874d3{--un-bg-opacity:1;background-color:rgb(24 116 211 / var(--un-bg-opacity))}.bg-\#f5f5f5{--un-bg-opacity:1;background-color:rgb(245 245 245 / var(--un-bg-opacity))}.bg-\#fff{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-blue-600{--un-bg-opacity:1;background-color:rgb(28 100 242 / var(--un-bg-opacity))}.bg-gray-100{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity))}.bg-gray-50{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity))}.bg-green-100{--un-bg-opacity:1;background-color:rgb(222 247 236 / var(--un-bg-opacity))}.bg-orange-100{--un-bg-opacity:1;background-color:rgb(254 243 199 / var(--un-bg-opacity))}.bg-red-100{--un-bg-opacity:1;background-color:rgb(253 232 232 / var(--un-bg-opacity))}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-opacity-50{--un-bg-opacity:.5}.bg-opacity-80{--un-bg-opacity:.8}.fill-current{fill:currentColor}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.px-2{padding-left:8px;padding-right:8px}.px-3{padding-left:12px;padding-right:12px}.px-4{padding-left:16px;padding-right:16px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:12px}.pl-2{padding-left:8px}.pl-3{padding-left:12px}.pr-2{padding-right:8px}.pt-2{padding-top:8px}.pt-3{padding-top:12px}.text-center{text-align:center}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-\#1874d3{--un-text-opacity:1;color:rgb(24 116 211 / var(--un-text-opacity))}.text-blue-600{--un-text-opacity:1;color:rgb(28 100 242 / var(--un-text-opacity))}.text-blue-700{--un-text-opacity:1;color:rgb(26 86 219 / var(--un-text-opacity))}.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity))}.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity))}.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity))}.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity))}.text-green-700{--un-text-opacity:1;color:rgb(4 108 78 / var(--un-text-opacity))}.text-green-800{--un-text-opacity:1;color:rgb(3 84 63 / var(--un-text-opacity))}.text-orange-700{--un-text-opacity:1;color:rgb(180 83 9 / var(--un-text-opacity))}.text-red-600{--un-text-opacity:1;color:rgb(224 36 36 / var(--un-text-opacity))}.text-red-700{--un-text-opacity:1;color:rgb(200 30 30 / var(--un-text-opacity))}.text-sm{font-size:14px;line-height:20px}.text-xs{font-size:12px;line-height:16px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.leading-5{line-height:20px}.leading-6{line-height:24px}.leading-none{line-height:1}.opacity-50{opacity:.5}.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-1{outline-width:1px}.outline-blue-600{outline-color:#1c64f2}.outline-offset-2{outline-offset:2px}.ring-1{--un-ring-width:1px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.ring-gray-300{--un-ring-opacity:1;--un-ring-color:rgb(209 213 219 / var(--un-ring-opacity))}.filter{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\:bg-blue-700:hover{--un-bg-opacity:1;background-color:rgb(26 86 219 / var(--un-bg-opacity))}.hover\:bg-gray-100:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity))}.hover\:bg-gray-200:hover{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity))}.hover\:bg-gray-50:hover{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity))}.hover\:text-blue-700:hover{--un-text-opacity:1;color:rgb(26 86 219 / var(--un-text-opacity))}.hover\:text-gray-900:hover{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity))}.hover\:underline:hover{text-decoration-line:underline}.focus\:border-blue-500:focus{--un-border-opacity:1;border-color:rgb(63 131 248 / var(--un-border-opacity))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\:ring-4:focus{--un-ring-width:4px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\:ring-blue-300:focus{--un-ring-opacity:1;--un-ring-color:rgb(164 202 254 / var(--un-ring-opacity))}.focus\:ring-blue-500:focus{--un-ring-opacity:1;--un-ring-color:rgb(63 131 248 / var(--un-ring-opacity))}.focus\:ring-gray-200:focus{--un-ring-opacity:1;--un-ring-color:rgb(229 231 235 / var(--un-ring-opacity))}.focus\:ring-opacity-50:focus{--un-ring-opacity:.5}.disabled\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\:opacity-50:disabled{opacity:.5}.disabled\:opacity-75:disabled{opacity:.75}.group:hover .group-hover\:text-blue-700{--un-text-opacity:1;color:rgb(26 86 219 / var(--un-text-opacity))}.group:hover .group-hover\:text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity))}.group:hover .group-hover\:text-gray-900{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity))}.group:hover .group-hover\:underline{text-decoration-line:underline}@media (min-width: 640px){.sm\:flex{display:flex}.sm\:hidden{display:none}.sm\:w-auto{width:auto}.sm\:flex-row{flex-direction:row}.sm\:justify-start{justify-content:flex-start}.sm\:space-x-8 > :not([hidden]) ~ :not([hidden]){--un-space-x-reverse:0;margin-right:calc(32px * var(--un-space-x-reverse));margin-left:calc(32px * calc(1 - var(--un-space-x-reverse)))}.sm\:rounded-lg{border-radius:8px}.sm\:p-8{padding:32px}.sm\:text-sm{font-size:14px;line-height:20px}}@media (min-width: 768px){.md\:inset-0{top:0;right:0;bottom:0;left:0}.md\:h-full{height:100%}.md\:h-auto{height:auto}}@media (min-width: 1024px){.lg\:px-8{padding-left:32px;padding-right:32px}}
  `);
  .custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar{width:6px}.custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar-track{--un-bg-opacity:1;background-color:rgb(222 232 255 / var(--un-bg-opacity))}.custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar-thumb{border-radius:9999px;--un-bg-opacity:1;background-color:rgb(112 136 255 / var(--un-bg-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.custom-scrollbar[data-v-b66f0371]::-webkit-scrollbar-thumb:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}.clip-enter-from,.clip-leave-to{clip-path:inset(0 100% 100% 0 round 8px)}.clip-enter-to,.clip-leave-from{clip-path:inset(0 0 0 0 round 8px)}.clip-enter-active,.clip-leave-active{transition:clip-path .3s ease}.fade-left-enter-from,.fade-left-leave-to{opacity:0;transform:translate(10%)}.fade-left-enter-to,.fade-left-leave-from{opacity:1;transform:none}.fade-left-enter-active,.fade-left-leave-active{transition:opacity .3s,transform .3s ease}.fade-enter-from,.fade-leave-to{opacity:0}.fade-enter-to,.fade-leave-from{opacity:1}.fade-enter-active,.fade-leave-active{transition:opacity .3s}:where(.drive-rename-root) :is(*,*:before,*:after){box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:where(.drive-rename-root) :is(*:before,*:after){--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}:where(.drive-rename-root) hr{height:0;color:inherit;border-top-width:1px}:where(.drive-rename-root) abbr:where([title]){text-decoration:underline dotted}:where(.drive-rename-root) :is(h1,h2,h3,h4,h5,h6){font-size:inherit;font-weight:inherit}:where(.drive-rename-root) a{color:inherit;text-decoration:inherit}:where(.drive-rename-root) :is(b,strong){font-weight:bolder}:where(.drive-rename-root) :is(code,kbd,samp,pre){font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}:where(.drive-rename-root) small{font-size:80%}:where(.drive-rename-root) :is(sub,sup){font-size:75%;line-height:0;position:relative;vertical-align:baseline}:where(.drive-rename-root) sub{bottom:-.25em}:where(.drive-rename-root) sup{top:-.5em}:where(.drive-rename-root) table{text-indent:0;border-color:inherit;border-collapse:collapse}:where(.drive-rename-root) :is(button,input,optgroup,select,textarea){font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}:where(.drive-rename-root) :is(button,select){text-transform:none}:where(.drive-rename-root) :is(button,[type=button],[type=reset],[type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:where(.drive-rename-root) :-moz-focusring{outline:auto}:where(.drive-rename-root) :-moz-ui-invalid{box-shadow:none}:where(.drive-rename-root) progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}:where(.drive-rename-root) [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:where(.drive-rename-root) ::-webkit-search-decoration{-webkit-appearance:none}:where(.drive-rename-root) ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(.drive-rename-root) summary{display:list-item}:where(.drive-rename-root) :is(blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre){margin:0}:where(.drive-rename-root) fieldset{margin:0;padding:0}:where(.drive-rename-root) legend{padding:0}:where(.drive-rename-root) :is(ol,ul,menu){list-style:none;margin:0;padding:0}:where(.drive-rename-root) dialog{padding:0}:where(.drive-rename-root) textarea{resize:vertical}:where(.drive-rename-root) :is(input::placeholder,textarea::placeholder){opacity:1;color:#9ca3af}:where(.drive-rename-root) :is(button,[role=button]){cursor:pointer}:where(.drive-rename-root) :disabled{cursor:default}:where(.drive-rename-root) :is(img,svg,video,canvas,audio,iframe,embed,object){display:block;vertical-align:middle}:where(.drive-rename-root) :is(img,video){max-width:100%;height:auto}:where(.drive-rename-root) [hidden]:where(:not([hidden=until-found])){display:none}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthSQBK6PYK3EXw.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRR232RmYJp8I5zzw.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRSW32RmYJp8I5.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0vrx52jJ3Q.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0vrx52g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.i-carbon\:arrow-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:arrows-horizontal{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11.41 26.59L7.83 23H28v-2H7.83l3.58-3.59L10 16l-6 6l6 6zM28 10l-6-6l-1.41 1.41L24.17 9H4v2h20.17l-3.58 3.59L22 16z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:batch-job{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M32 26v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 26 20.101V18h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 20.101 24H18v2h2.101c.13.637.384 1.229.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V32h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 29.899 26zm-7 2c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m-5-11h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2m-8-2h8V4h-8z'/%3E%3Cpath fill='currentColor' d='M17 21H8a2 2 0 0 1-2-2V7h2v12h9z'/%3E%3Cpath fill='currentColor' d='M13 25H4c-1.103 0-2-.897-2-2V11h2v12h9z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:checkbox{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:checkbox-checked-filled{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3Cpath fill='none' d='m14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:circle-packing{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.5 7a3.5 3.5 0 1 1-3.5 3.5A3.504 3.504 0 0 1 23.5 9m.435-1.978A6 6 0 0 0 23.5 7a5.48 5.48 0 0 0-4.132 1.878A8.01 8.01 0 0 0 13.8 4.211a11.86 11.86 0 0 1 10.134 2.811M16 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-4-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m-8-2a12 12 0 0 1 .211-2.199a7.99 7.99 0 0 0 7.346 6.176a5.96 5.96 0 0 0-.89 6.757A12 12 0 0 1 4 16m17.333 10.734a5.983 5.983 0 0 0-4.179-8.62a8 8 0 0 0 1.913-2.368a5.488 5.488 0 0 0 8.917-.068c.003.108.016.214.016.322a12 12 0 0 1-6.667 10.734'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:contour-finding{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cdefs/%3E%3Cpath d='M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z' fill='currentColor'/%3E%3Cpath d='M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z' fill='currentColor'/%3E%3Cpath d='M2.7 20.4a14.403 14.403 0 0 0 2 3.9l1.6-1.2a12.887 12.887 0 0 1-1.7-3.3z' fill='currentColor'/%3E%3Cpath d='M7.8 27.3a14.403 14.403 0 0 0 3.9 2l.6-1.9A12.887 12.887 0 0 1 9 25.7z' fill='currentColor'/%3E%3Cpath d='M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z' fill='currentColor'/%3E%3Cpath d='M24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.526 11.526 0 0 1-2.7 2.7z' fill='currentColor'/%3E%3Cpath d='M27.4 19.7l1.9.6A15.475 15.475 0 0 0 30 16h-2a11.476 11.476 0 0 1-.6 3.7z' fill='currentColor'/%3E%3Cpath d='M29.2 11.6a14.403 14.403 0 0 0-2-3.9l-1.6 1.2a12.887 12.887 0 0 1 1.7 3.3z' fill='currentColor'/%3E%3Cpath d='M24.1 4.6a14.403 14.403 0 0 0-3.9-2l-.6 1.9a12.887 12.887 0 0 1 3.3 1.7z' fill='currentColor'/%3E%3Cpath d='M20.3 29.3l-.6-1.9a11.476 11.476 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z' fill='currentColor'/%3E%3Cpath d='M16 26a10 10 0 1 1 10-10a10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\:pointer-text{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M13.71 12.29L7.41 6H13V4H4v9h2V7.41l6.29 6.3l1.42-1.42z' fill='currentColor'/%3E%3Cpath d='M28 30H12a2 2 0 0 1-2-2V18h2v10h16V12H18v-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z' fill='currentColor'/%3E%3Cpath d='M22 15h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2zm0 8h-4v-2h4z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-ion\:dice{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M440.88 129.37L288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9M256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16m-18 118.81L54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46M96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m266-172.49L274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49M320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.z-app{z-index:100000}.btn{display:inline-block;border-width:1px;border-color:currentColor;border-radius:4px;padding:4px;--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.btn:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.btn:disabled{opacity:.5}.\[vertical-align\:-0\.2em\]{vertical-align:-.2em}.absolute{position:absolute}.fixed{position:fixed}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-2{bottom:8px}.right-0{right:0}.top-2{top:8px}.z-2{z-index:2}.z-99{z-index:99}.grid{display:grid}.grid-cols-\[20px_auto_30px_minmax\(200px\,1fr\)\]{grid-template-columns:20px auto 30px minmax(200px,1fr)}.my5{margin-top:20px;margin-bottom:20px}.mb-1{margin-bottom:4px}.mb-3{margin-bottom:12px}.ml-4{margin-left:16px}.ml-auto{margin-left:auto}.mr-22px,[mr-22px=""]{margin-right:22px}.mr-3,.mr3,[mr-3=""]{margin-right:12px}.mt-2{margin-top:8px}.block{display:block}.inline-block,[inline-block=""]{display:inline-block}.contents{display:contents}.h-30px{height:30px}.h-38px{height:38px}.h-8,.h8{height:32px}.h-9,.h9{height:36px}.min-h-40px{min-height:40px}.min-h-61px{min-height:61px}.min-w-66px{min-width:66px}.w-\[max\(500px\,50vw\)\]{width:max(500px,50vw)}.w-300px{width:300px}.w-5em,[w-5em=""]{width:5em}.w-60px{width:60px}.w-fit{width:fit-content}.w-full{width:100%}.flex{display:flex}.inline-flex{display:inline-flex}.shrink-0{flex-shrink:0}.flex-col{flex-direction:column}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-self-center{justify-self:center}.gap-x-1{column-gap:4px}.gap-x-1px{column-gap:1px}.gap-x-2{column-gap:8px}.gap-x-3{column-gap:12px}.gap-x-4{column-gap:16px}.gap-y-1{row-gap:4px}.gap-y-3{row-gap:12px}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.ws-nowrap{white-space:nowrap}.b,.border,.border-1px,[border~="~"]{border-width:1px}.border-y-3px{border-top-width:3px;border-bottom-width:3px}.border-l-3px{border-left-width:3px}[border~=b]{border-bottom-width:1px}.border-\#1874d3{--un-border-opacity:1;border-color:rgb(24 116 211 / var(--un-border-opacity))}.border-current{border-color:currentColor}.border-primary-600{--un-border-opacity:1;border-color:rgb(61 64 238 / var(--un-border-opacity))}.border-transparent{border-color:transparent}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-md{border-radius:6px}.rounded-sm{border-radius:4px}.border-solid{border-style:solid}.bg-\#1874d3{--un-bg-opacity:1;background-color:rgb(24 116 211 / var(--un-bg-opacity))}.bg-\#f5f5f5{--un-bg-opacity:1;background-color:rgb(245 245 245 / var(--un-bg-opacity))}.bg-\#fff{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-black\/60{background-color:rgb(0 0 0 / .6)}.bg-primary-100{--un-bg-opacity:1;background-color:rgb(222 232 255 / var(--un-bg-opacity))}.bg-primary-600{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}.bg-red-100{--un-bg-opacity:1;background-color:rgb(254 226 226 / var(--un-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-yellow-100{--un-bg-opacity:1;background-color:rgb(254 249 195 / var(--un-bg-opacity))}.p-1{padding:4px}.p-2{padding:8px}.p-3{padding:12px}.p-4{padding:16px}.p-5{padding:20px}.px-1{padding-left:4px;padding-right:4px}.px-2{padding-left:8px;padding-right:8px}.px-3{padding-left:12px;padding-right:12px}.px-4{padding-left:16px;padding-right:16px}.px-5{padding-left:20px;padding-right:20px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-4{padding-top:16px;padding-bottom:16px}.py-5{padding-top:20px;padding-bottom:20px}.pb-1{padding-bottom:4px}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:12px}.pb-4{padding-bottom:16px}.pb-5{padding-bottom:20px}.pl-1{padding-left:4px}.pl-2{padding-left:8px}.pl-3{padding-left:12px}.pl-4{padding-left:16px}.pl-5{padding-left:20px}.pr-1{padding-right:4px}.pr-2{padding-right:8px}.pr-3{padding-right:12px}.pr-4{padding-right:16px}.pr-5{padding-right:20px}.pt-1{padding-top:4px}.pt-2{padding-top:8px}.pt-3{padding-top:12px}.pt-4{padding-top:16px}.pt-5{padding-top:20px}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-\[0\.8em\]{font-size:.8em}.text-base{font-size:16px}.text-lg{font-size:18px}.text-sm{font-size:14px}.text-xl{font-size:20px}.text-xs{font-size:12px}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.leading-4{line-height:16px}.leading-5{line-height:20px}.leading-6{line-height:24px}.leading-7{line-height:28px}.leading-8{line-height:32px}.leading-9{line-height:36px}.leading-none{line-height:1}.leading-normal{line-height:1.5}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.text-\#1874d3{--un-text-opacity:1;color:rgb(24 116 211 / var(--un-text-opacity))}.text-\#333{--un-text-opacity:1;color:rgb(51 51 51 / var(--un-text-opacity))}.text-\#666{--un-text-opacity:1;color:rgb(102 102 102 / var(--un-text-opacity))}.text-\#999{--un-text-opacity:1;color:rgb(153 153 153 / var(--un-text-opacity))}.text-current{color:currentColor}.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity))}.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity))}.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity))}.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity))}.text-gray-900{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity))}.text-primary-600{--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity))}.text-red-500{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity))}.text-red-600{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity))}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.text-yellow-600{--un-text-opacity:1;color:rgb(202 138 4 / var(--un-text-opacity))}.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-md{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-sm{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / .05));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring-1{--un-ring-width:1px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.ring-gray-300{--un-ring-opacity:1;--un-ring-color:rgb(209 213 219 / var(--un-ring-opacity))}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.hover\:bg-\#1874d3:hover{--un-bg-opacity:1;background-color:rgb(24 116 211 / var(--un-bg-opacity))}.hover\:bg-primary-600:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}.hover\:bg-primary-700:hover{--un-bg-opacity:1;background-color:rgb(29 32 196 / var(--un-bg-opacity))}.hover\:text-\#1874d3:hover{--un-text-opacity:1;color:rgb(24 116 211 / var(--un-text-opacity))}.hover\:text-primary-600:hover{--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity))}.hover\:text-white:hover{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\:ring-2:focus{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.focus\:ring-primary-500:focus{--un-ring-opacity:1;--un-ring-color:rgb(112 136 255 / var(--un-ring-opacity))}.disabled\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\:opacity-50:disabled{opacity:.5}.disabled\:opacity-75:disabled{opacity:.75}.disabled\:opacity-\[0\.75\]:disabled{opacity:.75}.disabled\:hover\:bg-transparent:disabled:hover{background-color:transparent}.disabled\:hover\:text-primary-600:disabled:hover{--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity))}.dark .dark\:border-gray-700{--un-border-opacity:1;border-color:rgb(55 65 81 / var(--un-border-opacity))}.dark .dark\:bg-gray-800{--un-bg-opacity:1;background-color:rgb(31 41 55 / var(--un-bg-opacity))}.dark .dark\:bg-gray-900{--un-bg-opacity:1;background-color:rgb(17 24 39 / var(--un-bg-opacity))}.dark .dark\:text-gray-300{--un-text-opacity:1;color:rgb(209 213 219 / var(--un-text-opacity))}.dark .dark\:text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.dark .dark\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.dark .dark\:hover\:bg-gray-700:hover{--un-bg-opacity:1;background-color:rgb(55 65 81 / var(--un-bg-opacity))}.dark .dark\:hover\:text-white:hover{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.dark .dark\:focus\:ring-gray-700:focus{--un-ring-opacity:1;--un-ring-color:rgb(55 65 81 / var(--un-ring-opacity))}
  `);
  
  // 工具函数
  function getExtFromName(name) {
    const m = name.match(/\.([^.]+)$/);
    return m ? m[1].toLowerCase() : "";
  }
  
  function _export_sfc(sfc, props) {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  }
  
  // 百度网盘按钮组件
  const _sfc_main$6 = {};
  const _hoisted_1$4 = { class: "mr3 inline-block h8 flex items-center justify-center gap-x-1 ws-nowrap rd-full bg-#06a7ff px-4 py-2 text-white transition" };
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("button", _hoisted_1$4, _cache[0] || (_cache[0] = [
      vue.createElementVNode("i", { class: "i-carbon:batch-job shrink-0 text-sm" }, null, -1),
      vue.createElementVNode("span", { class: "text-sm font-bold" }, "重命名", -1)
    ]));
  }
  const ButtonComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2]]);
  
  // 百度网盘相关函数
  let bdstoken = "";
  
  function getDir() {
    const u = getURL(location.href);
    return u.searchParams.get("path") || "/";
  }
  
  async function getFileListOfCurrentDir(parentId = getDir()) {
    if (!bdstoken)
      initToken();
    const listApi = new URL("https://pan.baidu.com/api/list?clienttype=0&app_id=250528&web=1&order=name&desc=0&num=100");
    listApi.searchParams.set("dir", parentId);
    const result = [];
    let page = 1;
    let next = true;
    while (next) {
      listApi.searchParams.set("page", String(page++));
      const { list } = await get(listApi);
      result.push(...list.map((x) => ({
        drive_id: "whocare",
        file_id: String(x.fs_id),
        name: x.server_filename,
        parent_file_id: x.path,
        file_extension: getExtFromName(x.server_filename),
        mime_type: "whocare",
        type: x.isdir === 1 ? "folder" : "file"
      })));
      next = list.length === 100;
    }
    return result;
  }
  
  function setRequestHeader() {
  }
  
  function post(api, payload) {
    return fetch(api, {
      method: "POST",
      headers: {
        "accept": "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-requested-with": "XMLHttpRequest"
      },
      credentials: "include",
      body: new URLSearchParams(payload).toString()
    }).then((res) => {
      if (res.ok)
        return res.json();
      else
        return Promise.reject(new Error("network error"));
    });
  }
  
  function get(api) {
    return fetch(api, {
      method: "GET",
      credentials: "include"
    }).then((res) => {
      if (res.ok)
        return res.json();
      else
        return Promise.reject(new Error("network error"));
    });
  }
  
  function createControledPromise() {
    let _resolve;
    const promise = new Promise((resolve) => {
      _resolve = resolve;
    });
    return {
      promise,
      done: () => {
        _resolve();
      }
    };
  }
  
  let cache = [];
  let timer;
  const BATCH_SIZE = 10;
  
  async function renameOne(resource, newName) {
    const { promise, done } = createControledPromise();
    cache.push({
      id: resource.file_id,
      path: resource.parent_file_id,
      newName,
      done
    });
    if (timer) {
      window.clearTimeout(timer);
      timer = void 0;
    }
    if (cache.length >= BATCH_SIZE) {
      triggerRename(cache);
      cache = [];
    } else {
      timer = window.setTimeout(() => {
        triggerRename(cache);
        cache = [];
      }, 100);
    }
    return promise;
  }
  
  async function triggerRename(list) {
    if (list.length === 0)
      return;
    await post(`https://pan.baidu.com/api/filemanager?async=2&onnest=fail&opera=rename&bdstoken=${bdstoken}&clienttype=0&app_id=250528&web=1`, {
      filelist: JSON.stringify(list.map((x) => ({
        id: +x.id,
        path: x.path,
        newname: x.newName
      })))
    });
    list.forEach((x) => x.done());
  }
  
  async function initToken() {
    const { result } = await get("https://pan.baidu.com/api/gettemplatevariable?clienttype=0&app_id=250528&web=1&fields=[%22bdstoken%22]");
    bdstoken = result.bdstoken;
  }
  
  function getURL(url) {
    const old = new URL(url);
    const hash = old.hash;
    return new URL(old.origin + hash.replace(/^#/, ""));
  }
  
  function shouldShowEntry(url) {
    const fresh = getURL(url);
    // 支持多种百度网盘URL格式
    if (fresh.pathname === "/index" && fresh.searchParams.get("category") === "all") {
      return true;
    }
    // 支持新版百度网盘界面
    if (fresh.pathname === "/disk/main" || fresh.pathname === "/disk/home") {
      return true;
    }
    // 支持其他可能的路径
    if (fresh.pathname.includes("/disk/")) {
      return true;
    }
    return false;
  }
  
  function getContainer() {
    // 尝试多个可能的选择器，以适应百度网盘界面的变化
    const selectors = [
      ".wp-s-agile-tool-bar__header.is-header-tool",
      ".nd-main-list__header",
      ".nd-main-layout__header",
      ".wp-s-core-pan__header"
    ];
    
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el) {
        return {
          el: el,
          style: "",
          front: true
        };
      }
    }
    
    // 如果上述选择器都找不到，尝试找到任何可能的工具栏
    const fallbackEl = document.querySelector(".nd-main-list, .wp-s-core-pan");
    return {
      el: fallbackEl || document.body,
      style: "",
      front: true
    };
  }
  
  // 重命名核心函数
  function getNewNameByExp(oldName, from, to) {
    try {
      if (from === "（五彩教师）") {
        return oldName.replace(from, " ");
      }
      return oldName.replace(new RegExp(from), to);
    } catch {
      return "";
    }
  }
  
  // 主要组件和状态管理
  const defineStore = (id, setup) => {
    const state = setup();
    return () => state;
  };
  
  const createPinia = () => ({});
  
  function useDebounceFn(fn, delay) {
    let timer;
    return function(...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  
  const useMainStore = defineStore("main", () => {
    const uncheckList = vue.reactive(new Set());
    const doneList = vue.reactive(new Set());
    const errorList = vue.reactive(new Set());
    const newNameMap = vue.reactive(new Map());
    const running = vue.ref(false);
    const activeMode = vue.ref("regexp");
    const from = vue.ref("（五彩教师）");
    const to = vue.ref(" ");
    const prefix = vue.ref("");
    const season = vue.ref("");
    const error = vue.ref("");
    const warning = vue.ref("");
    const processData = vue.ref({
      total: 0,
      skip: 0,
      done: 0
    });
    
    const { list, loading: listLoading, refetch } = { list: vue.ref([]), loading: vue.ref(false), refetch: async () => {
      listLoading.value = true;
      try {
        list.value = await getFileListOfCurrentDir();
      } catch (e) {
        console.error(e);
      } finally {
        listLoading.value = false;
      }
    }};
    
    const VideoExts = [
      "mp4", "flv", "f4v", "webm", "m4v", "mov", "cpk", "dirac", "3gp", "3g2", "rm", "rmvb", "wmv",
      "avi", "asf", "mpg", "mpeg", "mpe", "vob", "mkv", "ram", "qt", "fli", "flc", "mod", "iso", "ts"
    ];
    
    const videoList = vue.computed(() => {
      return list.value.filter((x) => x.type === "file" && VideoExts.includes(x.file_extension.toLowerCase()));
    });
    
    const displayList = vue.computed(() => activeMode.value === "extract" ? videoList.value : list.value);
    
    const selectedList = vue.computed(() => displayList.value.filter((x) => !uncheckList.has(x.file_id) && newNameMap.has(x.file_id) && x.name !== newNameMap.get(x.file_id)));
    
    const conflictFileIds = vue.computed(() => {
      const l = selectedList.value.map((x) => [x.file_id, newNameMap.get(x.file_id)]);
      const m = new Map();
      const r = new Set();
      for (const [id, newName] of l) {
        if (m.has(newName)) {
          r.add(m.get(newName));
          r.add(id);
        } else {
          m.set(newName, id);
        }
      }
      return r;
    });
    
    const hasConflict = vue.computed(() => {
      return conflictFileIds.value.size > 0;
    });
    
    const disabled = vue.computed(() => activeMode.value === "regexp" && (!from.value || !to.value) || activeMode.value === "extract" && (!prefix.value || !season.value) || listLoading.value || !selectedList.value.length || hasConflict.value);
    
    const shouldShowEntry = vue.computed(() => shouldShowEntry(window.location.href));
    
    vue.watch(list, () => {
      uncheckList.clear();
      doneList.clear();
      errorList.clear();
      newNameMap.clear();
    });
    
    const debouncedNameGenerator = useDebounceFn(() => {
      if (list.value.length) {
        newNameMap.clear();
        if (activeMode.value === "extract" && prefix.value || activeMode.value === "regexp" && from.value && to.value) {
          for (let i = 0; i < list.value.length; ++i) {
            const item = list.value[i];
            const otherItem = list.value[i === 0 ? 1 : 0];
            newNameMap.set(item.file_id, getNewName(item.name, season.value.trim(), otherItem?.name));
          }
        }
      }
    }, 300);
    
    vue.watch([list, activeMode, prefix, season, from, to], debouncedNameGenerator, { immediate: true });
    
    function initRunState() {
      running.value = false;
      error.value = "";
      processData.value = {
        total: 0,
        skip: 0,
        done: 0
      };
    }
    
    async function run() {
      if (disabled.value || running.value)
        return;
      initRunState();
      running.value = true;
      processData.value.total = displayList.value.length;
      processData.value.skip = displayList.value.length - selectedList.value.length;
      const queue = selectedList.value.slice();
      const totalTodoSize = queue.length;
      while (queue.length) {
        const subQueue = [];
        for (let i = 0; i < 10; i++) {
          const x = queue.shift();
          if (x)
            subQueue.push(x);
          else
            break;
        }
        await Promise.all(subQueue.map(async (item) => {
          const newName = newNameMap.get(item.file_id);
          if (!newName)
            return;
          await renameOne(item, newName).then(() => {
            doneList.add(item.file_id);
          }).catch(() => {
            errorList.add(item.file_id);
          });
          processData.value.done++;
        }));
        await new Promise((r) => setTimeout(r, 0));
      }
      running.value = false;
      {
        const delay = 4000;
        const seconds = Math.floor(delay / 1000);
        warning.value = `即将刷新页面(${seconds}s后)...`;
        setTimeout(() => {
          location.reload();
        }, delay);
      }
    }
    
    function getNewName(oldName, season, refName) {
      return getNewNameByExp(oldName, from.value, to.value);
    }
    
    function clearHelper() {
    }
    
    return {
      list,
      listLoading,
      refetch,
      shouldShowEntry,
      uncheckList,
      videoList,
      displayList,
      selectedList,
      newNameMap,
      errorList,
      doneList,
      hasConflict,
      conflictFileIds,
      disabled,
      activeMode,
      from,
      to,
      prefix,
      season,
      error,
      warning,
      processData,
      run,
      running,
      clearHelper,
      fetchMode: "manual-trigger"
    };
  });
  
  // UI组件
  const _hoisted_1 = { class: "fixed top-0 left-0 right-0 bottom-0 z-app flex items-center justify-center bg-black/50" };
  const _hoisted_2 = { class: "w-[500px] max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg" };
  const _hoisted_3 = { class: "mb-4 flex items-center justify-between" };
  const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("h2", { class: "text-lg font-bold" }, "批量重命名", -1);
  const _hoisted_5 = { class: "flex items-center gap-x-2" };
  const _hoisted_6 = { class: "flex items-center gap-x-2" };
  const _hoisted_7 = ["onClick"];
  const _hoisted_8 = { class: "space-y-4" };
  const _hoisted_9 = ["disabled"];
  const _hoisted_10 = ["disabled"];
  const _hoisted_11 = { class: "mb-1 flex items-center" };
  const _hoisted_12 = ["disabled"];
  const _hoisted_13 = ["disabled"];
  const _hoisted_14 = { class: "mt-2 min-h-[20px]" };
  const _hoisted_15 = { class: "text-xs text-red-500" };
  const _hoisted_16 = { class: "text-xs text-gray-600" };
  const _hoisted_17 = { class: "text-xs text-orange-500" };
  const _hoisted_18 = { class: "mt-4 flex justify-end" };
  const _hoisted_19 = ["disabled"];
  const _hoisted_20 = { class: "i-svg-spinners:180-ring-with-bg animate-spin" };
  
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "ControlPanel",
    setup(__props) {
      const main = useMainStore();
      const modes = [
        { value: "regexp", title: "正则模式" },
        { value: "extract", title: "剧集模式" }
      ];
      function fillRandomPrefix() {
        if (main.videoList.length) {
          const randomIndex = Math.floor(Math.random() * main.videoList.length);
          main.prefix = main.videoList[randomIndex].name.replace(`.${main.videoList[randomIndex].file_extension}`, "");
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createElementVNode("div", _hoisted_3, [
              _hoisted_4,
              vue.createElementVNode("button", {
                class: "text-gray-500 hover:text-gray-700",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
              }, "×")
            ]),
            vue.createElementVNode("div", _hoisted_5, [
              vue.createElementVNode("div", _hoisted_6, [
                (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(modes, (m) => {
                  return vue.createElementVNode("button", {
                    key: m.value,
                    class: vue.normalizeClass(["px-3 py-1 text-sm border rounded", vue.unref(main).activeMode === m.value ? "bg-blue-500 text-white border-blue-500" : "border-gray-300 text-gray-700"]),
                    disabled: vue.unref(main).running,
                    onClick: ($event) => !vue.unref(main).running && (vue.unref(main).activeMode = m.value)
                  }, vue.toDisplayString(m.title), 11, _hoisted_7);
                }), 64))
              ]),
              vue.unref(main).activeMode === "regexp" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createElementVNode("a", {
                  class: "text-xs text-blue-600 font-medium underline",
                  href: "https://regex101.com/",
                  target: "_blank"
                }, " 正则可视化 "),
                vue.createElementVNode("a", {
                  class: "text-xs text-blue-600 font-medium underline",
                  href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
                  target: "_blank"
                }, " 文档 ")
              ], 64)) : vue.createCommentVNode("", true)
            ]),
            vue.createElementVNode("div", _hoisted_8, [
              vue.unref(main).activeMode === "regexp" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createElementVNode("div", null, [
                  vue.createElementVNode("label", { class: "mb-1 block" }, "From"),
                  vue.withDirectives(vue.createElementVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(main).from = $event),
                    disabled: vue.unref(main).running,
                    autofocus: "",
                    placeholder: "正则表达式",
                    class: "h-8 w-full rounded border border-gray-300 px-3 outline-none"
                  }, null, 8, _hoisted_9), [
                    [vue.vModelText, vue.unref(main).from]
                  ])
                ]),
                vue.createElementVNode("div", null, [
                  vue.createElementVNode("label", { class: "mb-1 block" }, "To"),
                  vue.withDirectives(vue.createElementVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(main).to = $event),
                    disabled: vue.unref(main).running,
                    placeholder: "替换表达式",
                    class: "h-8 w-full rounded border border-gray-300 px-3 outline-none"
                  }, null, 8, _hoisted_10), [
                    [vue.vModelText, vue.unref(main).to]
                  ])
                ]),
                vue.createElementVNode("div", { class: "text-xs font-mono" }, [
                  vue.createElementVNode("span", { class: "text-orange-700" }, "原文件名"),
                  vue.createElementVNode("span", { class: "text-gray-500" }, "."),
                  vue.createElementVNode("span", { class: "text-green-700" }, "replace"),
                  vue.createElementVNode("span", { class: "text-blue-600" }, "("),
                  vue.createElementVNode("span", { class: "text-red-600" }, "new"),
                  vue.createElementVNode("span", { class: "text-green-700" }, " RegExp"),
                  vue.createElementVNode("span", { class: "text-green-800" }, "("),
                  vue.createElementVNode("span", { class: "text-orange-700" }, "From"),
                  vue.createElementVNode("span", { class: "text-green-800" }, ")"),
                  vue.createElementVNode("span", { class: "text-gray-500" }, ","),
                  vue.createElementVNode("span", { class: "text-orange-700" }, " To"),
                  vue.createElementVNode("span", { class: "text-blue-600" }, ")")
                ])
              ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createElementVNode("div", null, [
                  vue.createElementVNode("label", _hoisted_11, [
                    vue.createTextVNode(" 剧名 "),
                    vue.createElementVNode("i", {
                      class: vue.normalizeClass(["ml-1 text-sm text-blue-700 cursor-pointer", vue.unref(main).videoList.length ? "" : "opacity-50 cursor-not-allowed"]),
                      title: "随机填充原文件名",
                      onClick: fillRandomPrefix
                    }, "🎲", 2)
                  ]),
                  vue.withDirectives(vue.createElementVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(main).prefix = $event),
                    disabled: vue.unref(main).running,
                    autofocus: "",
                    placeholder: "请输入",
                    class: "h-8 w-full rounded border border-gray-300 px-3 outline-none"
                  }, null, 8, _hoisted_12), [
                    [vue.vModelText, vue.unref(main).prefix]
                  ])
                ]),
                vue.createElementVNode("div", null, [
                  vue.createElementVNode("label", { class: "mb-1 block" }, "季"),
                  vue.withDirectives(vue.createElementVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(main).season = $event),
                    disabled: vue.unref(main).running,
                    placeholder: "0~99",
                    class: "h-8 w-full rounded border border-gray-300 px-3 outline-none"
                  }, null, 8, _hoisted_13), [
                    [vue.vModelText, vue.unref(main).season]
                  ])
                ])
              ], 64)),
              vue.createElementVNode("div", _hoisted_14, [
                vue.unref(main).error ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15, vue.toDisplayString(vue.unref(main).error), 1)) : vue.unref(main).processData.total ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16, [
                  vue.createTextVNode(" 总共 " + vue.toDisplayString(vue.unref(main).processData.total) + " | 跳过 " + vue.toDisplayString(vue.unref(main).processData.skip) + " | 完成 " + vue.toDisplayString(vue.unref(main).processData.done) + " ", 1),
                  vue.unref(main).errorList.size ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    vue.createTextVNode(" (失败 " + vue.toDisplayString(vue.unref(main).errorList.size) + ") ", 1)
                  ], 64)) : vue.createCommentVNode("", true)
                ])) : vue.createCommentVNode("", true),
                vue.unref(main).warning ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_17, vue.toDisplayString(vue.unref(main).warning), 1)) : vue.createCommentVNode("", true)
              ]),
              vue.createElementVNode("div", _hoisted_18, [
                vue.createElementVNode("button", {
                  class: "flex items-center justify-center gap-x-1 bg-blue-600 px-3 py-2 text-xs text-white rounded hover:bg-blue-700",
                  disabled: vue.unref(main).disabled || vue.unref(main).running,
                  onClick: _cache[5] || (_cache[5] = (...args) => vue.unref(main).run && vue.unref(main).run(...args))
                }, [
                  vue.unref(main).running ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_20)) : vue.createCommentVNode("", true),
                  vue.createTextVNode(" Run It! ")
                ], 8, _hoisted_19)
              ])
            ])
          ])
        ]);
      };
    }
  });
  
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const main = useMainStore();
      // 自动设置From为"（五彩教师）"，To为空格
      main.from = "（五彩教师）";
      main.to = " ";
      const popupVisible = vue.ref(false);
      
      vue.onMounted(() => {
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape")
            close();
        });
      });
      
      vue.onUnmounted(() => {
        document.removeEventListener("keydown", (e) => {
          if (e.key === "Escape")
            close();
        });
      });
      
      if (main.fetchMode === "manual-trigger") {
        vue.watch(popupVisible, (visible) => {
          if (visible) {
            main.refetch();
          }
        });
      }
      
      function close() {
        if (main.running)
          return;
        popupVisible.value = false;
        main.clearHelper();
      }
      
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(main).shouldShowEntry ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(ButtonComponent), {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => popupVisible.value = true)
          })) : vue.createCommentVNode("", true),
          vue.createVNode(vue.Transition, { name: "fade" }, {
            default: vue.withCtx(() => [
              vue.unref(popupVisible) ? (vue.openBlock(), vue.createBlock(_sfc_main$1, {
                key: 0,
                onClose: close
              })) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 64);
      };
    }
  });
  
  // 初始化和挂载
  const ENTRY_ID = "baidu_pan_batch_rename";
  const ENTRY_CLASS = "baidu-pan-rename-root";
  
  // 添加调试信息
  let mountAttempts = 0;
  const MAX_MOUNT_ATTEMPTS = 20; // 最多尝试20次
  
  window.setInterval(() => {
    // 如果已经挂载成功或尝试次数过多，则停止尝试
    if (document.querySelector(`#${ENTRY_ID}`) || mountAttempts > MAX_MOUNT_ATTEMPTS) {
      return;
    }
    
    mountAttempts++;
    const { el, front, style } = getContainer();
    if (el) {
      console.log('[百度网盘批量重命名] 找到挂载点:', el);
      init(el, front, style);
    } else {
      console.warn('[百度网盘批量重命名] 未找到挂载点，尝试次数:', mountAttempts);
    }
  }, 500); // 增加间隔时间，减少性能影响
  
  function init(parentEl, front, style) {
    try {
      if (!parentEl.querySelector(`#${ENTRY_ID}`)) {
        console.log('[百度网盘批量重命名] 开始挂载组件');
        const app = vue.createApp(_sfc_main);
        const pinia = createPinia();
        app.use(pinia);
        
        // 创建挂载点
        const appRoot = (() => {
          try {
            if (parentEl && parentEl instanceof HTMLElement) {
              parentEl.style.cssText = parentEl.style.cssText + style;
            }
            const appRoot = document.createElement("div");
            appRoot.style.cssText = "display: inline-block;";
            appRoot.setAttribute("id", ENTRY_ID);
            appRoot.classList.add(ENTRY_CLASS);
            
            // 尝试插入DOM
            if (front && parentEl.firstElementChild) {
              parentEl.insertBefore(appRoot, parentEl.firstElementChild);
            } else {
              parentEl.append(appRoot);
            }
            
            console.log('[百度网盘批量重命名] 挂载点创建成功');
            return appRoot;
          } catch (err) {
            console.error('[百度网盘批量重命名] 创建挂载点失败:', err);
            // 创建一个备用挂载点
            const fallbackRoot = document.createElement("div");
            fallbackRoot.setAttribute("id", ENTRY_ID);
            fallbackRoot.classList.add(ENTRY_CLASS);
            document.body.appendChild(fallbackRoot);
            return fallbackRoot;
          }
        })();
        
        // 挂载Vue应用
        app.mount(appRoot);
        console.log('[百度网盘批量重命名] 组件挂载成功');
      }
    } catch (err) {
      console.error('[百度网盘批量重命名] 初始化失败:', err);
    }
  }
  
  // 添加全局样式
  const style = document.createElement("style");
  style.textContent = `
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
  
})(Vue);