/**
 * @fileoverview Alist 自定义脚本，由 imsyy 创作，NCC-17039修改
 * @version 1.0.4
 * @description 无侵入式修改 Alist，提供额外的样式和视觉增强效果
 *
 * @license MIT
 *
 *
 */

/**
 * 观察元素是否发生改变并触发回调函数
 * @param {string} selector - 要观察的元素的 ID 或类名
 * @param {Function | Function[]} callbacks - 元素发生改变时要执行的回调函数或回调函数列表
 * @param {Boolean} isStop - 是否在改变后停止观察
 * @returns {void}
 */
const observeElementChanges = (selector, callbacks, isStop = true) => {
  try {
    const target = document.querySelector("#root");
    if (!target) {
      console.error(`未查找到 #root 元素`);
      return;
    }
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          const matchedElement = target.querySelector(selector);
          if (matchedElement) {
            if (Array.isArray(callbacks)) {
              callbacks.forEach((callback) => {
                if (typeof callback === "function") {
                  callback(matchedElement);
                }
              });
            } else if (typeof callbacks === "function") {
              callbacks(matchedElement);
            }
            // 停止观察
            if (isStop) observer.disconnect();
          }
        }
      }
    });
    const config = { childList: true, subtree: true };
    observer.observe(target, config);
  } catch (error) {
    console.error("在观察元素更改时发生错误：", error);
  }
};

/**
 * 页脚自定义
 * @returns {void}
 */
const customFooter = (el) => {
  try {
    if (el !== null) {
      el.innerHTML = `<div class="custom-footer"><p><a href="//project.ncc17039.eu.org" target= "_blank">分站</a> | <a href="/@login" target= "_blank">登录 </a> | <a href="/@manage" target= "_blank">后台 </a> | <a href="mailto:ncc-17039@foxmail.com" target= "_blank">联系 </a> | <a href="https://cdn.ncc17039.eu.org/data/" target= "_blank">政策 </a> <p> <span>本站已稳定运行 <span id="sitetime" style="color: #0196e3;"></span></p> </p><p><b>版权所有 © 2021-2023 NCC-17039</b></p></div>`;
    }
  } catch (error) {
    console.error("页脚自定义出现问题：" + error);
  }
};

/**
 * Logo 自定义
 * @returns {void}
 */
const customLogo = (el) => {
  try {
    if (el !== null) {
      const parentElement = el.parentNode;
      // 移除原有的元素
      el.remove();
      // 创建新的父元素
      const newParentElement = document.createElement("div");
      newParentElement.classList.add("header-left-custom");
      // 在原有元素的父元素内部前面插入新的父元素
      parentElement.insertBefore(newParentElement, parentElement.firstChild);
      // 设置新元素的内容
      const newLogo = `<a href="/" class="left-all"><span class="name">Spacemy 存储库</span></a>`;
      // 使用innerHTML设置新元素的内容
      newParentElement.innerHTML = newLogo;
    }
  } catch (error) {
    console.error("Logo 自定义时出现问题：" + error);
  }
};

// 执行观察
observeElementChanges(".footer", customFooter);
observeElementChanges(".header-left", customLogo);
