/**
 * @fileoverview Alist 自定义脚本，由 imsyy 创作
 * @version 1.0.4
 * @description 无侵入式修改 Alist，提供额外的样式和视觉增强效果
 *
 * @license MIT
 *
 * @author imsyy
 * @created 2023-06-28
 * @updated 2023-07-04
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
      el.innerHTML = `<div class="custom-footer"><p><a href="//www.ncc17039.eu.org" target= "_blank">主站</a> | <a href="/@login" target= "_blank">登录 </a> | <a href="/@manage" target= "_blank">后台 </a> | <a href="mailto:Maxwell448844@outlook.com" target= "_blank">联系 </a> | <a href="https://docs.ncc17039.eu.org/data/policy-cn" target= "_blank">政策 </a> | <a href="https://docs.ncc17039.eu.org/data/Infringement-cn" target= "_blank">侵权反馈 </a></p><p><?xml version="1.0" encoding="UTF-8"?><svg width="5%" height="5%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.5 7L29.5 14.5C28.5 13.9684 26.5 12.9999 24 12.9999C18 12.9999 13 17.9999 13 23.4999C13 28.9999 17 35.0006 24 35.0006C29.6 35.0006 33.5 31.0005 33.5 28.0005H24V21.0002C31 21.0003 44 20.9999 44 20.9999C44.5 28.5002 42.2896 32.9004 39.5 36.5C35.3242 41.8881 29.1712 44.0002 24 44.0002C14 44.0002 4 36.0006 4 23.4999C4 11.5 14.7237 4 23 4C31.2763 4 34.5 7 34.5 7Z" fill="none"/><path d="M29.5 14.5L28.5612 16.266C29.4687 16.7484 30.594 16.4645 31.1641 15.6094L29.5 14.5ZM34.5 7L36.1641 8.1094C36.708 7.2936 36.5802 6.20383 35.8625 5.53589L34.5 7ZM44 20.9999L45.9956 20.8669C45.9255 19.8163 45.0529 18.9999 43.9999 18.9999L44 20.9999ZM24 21.0002L24 19.0002C23.4696 19.0002 22.9609 19.2109 22.5858 19.586C22.2107 19.961 22 20.4698 22 21.0002H24ZM24 28.0005H22C22 29.105 22.8954 30.0005 24 30.0005V28.0005ZM33.5 28.0005H35.5C35.5 26.8959 34.6046 26.0005 33.5 26.0005V28.0005ZM39.5 36.5L37.9192 35.2749V35.2749L39.5 36.5ZM31.1641 15.6094L36.1641 8.1094L32.8359 5.8906L27.8359 13.3906L31.1641 15.6094ZM34.5 7C35.8625 5.53589 35.8616 5.53503 35.8606 5.53416C35.8603 5.53385 35.8593 5.53296 35.8587 5.53235C35.8574 5.53112 35.856 5.52985 35.8545 5.52853C35.8517 5.5259 35.8486 5.52309 35.8453 5.5201C35.8388 5.51412 35.8314 5.50743 35.8231 5.50007C35.8067 5.48533 35.7868 5.46787 35.7634 5.44787C35.7168 5.40786 35.6563 5.35772 35.5816 5.29897C35.4322 5.18145 35.2258 5.02961 34.959 4.85569C34.4248 4.50754 33.6506 4.0726 32.6083 3.64788C30.5184 2.79622 27.3861 2 23 2V6C26.8902 6 29.5079 6.70378 31.0989 7.35212C31.8971 7.6774 32.4461 7.99246 32.775 8.20681C32.9396 8.31414 33.0498 8.39667 33.109 8.44321C33.1386 8.4665 33.1555 8.48081 33.1601 8.48475C33.1624 8.48672 33.1616 8.4861 33.1579 8.48272C33.156 8.48103 33.1533 8.47865 33.1499 8.47555C33.1482 8.47401 33.1463 8.47228 33.1443 8.47037C33.1432 8.46942 33.1422 8.46842 33.141 8.46738C33.1405 8.46685 33.1396 8.46604 33.1393 8.46578C33.1384 8.46495 33.1375 8.46411 34.5 7ZM23 2C18.3065 2 13.0898 4.10146 9.05165 7.76958C4.97769 11.4702 2 16.8614 2 23.4999H6C6 18.1386 8.38418 13.7798 11.7412 10.7304C15.1339 7.64854 19.4172 6 23 6V2ZM2 23.4999C2 37.2006 12.9933 46.0002 24 46.0002V42.0002C15.0067 42.0002 6 34.8006 6 23.4999H2ZM44 20.9999C43.9999 18.9999 43.9999 18.9999 43.9998 18.9999C43.9997 18.9999 43.9995 18.9999 43.9993 18.9999C43.999 18.9999 43.9984 18.9999 43.9976 18.9999C43.996 18.9999 43.9936 18.9999 43.9905 18.9999C43.9842 18.9999 43.9748 18.9999 43.9624 18.9999C43.9376 18.9999 43.9007 18.9999 43.8522 18.9999C43.7553 18.9999 43.6122 18.9999 43.4277 18.9999C43.0585 19 42.5234 19 41.8593 19C40.5312 19 38.6875 19.0001 36.625 19.0001C32.5 19.0002 27.5 19.0003 24 19.0002L24 23.0002C27.5 23.0003 32.5 23.0002 36.625 23.0001C38.6875 23.0001 40.5313 23 41.8594 23C42.5235 23 43.0587 23 43.4278 22.9999C43.6124 22.9999 43.7554 22.9999 43.8524 22.9999C43.9008 22.9999 43.9377 22.9999 43.9626 22.9999C43.975 22.9999 43.9843 22.9999 43.9906 22.9999C43.9937 22.9999 43.9961 22.9999 43.9977 22.9999C43.9985 22.9999 43.9991 22.9999 43.9995 22.9999C43.9997 22.9999 43.9998 22.9999 43.9999 22.9999C44 22.9999 44.0001 22.9999 44 20.9999ZM22 21.0002V28.0005H26V21.0002H22ZM24 30.0005H33.5V26.0005H24V30.0005ZM31.5 28.0005C31.5 28.6975 30.9784 29.9325 29.581 31.0797C28.2481 32.1739 26.3174 33.0006 24 33.0006V37.0006C27.2826 37.0006 30.1019 35.8273 32.119 34.1714C34.0716 32.5685 35.5 30.3034 35.5 28.0005H31.5ZM24 33.0006C18.3828 33.0006 15 28.1959 15 23.4999H11C11 29.804 15.6172 37.0006 24 37.0006V33.0006ZM15 23.4999C15 19.1639 19.0442 14.9999 24 14.9999V10.9999C16.9558 10.9999 11 16.836 11 23.4999H15ZM24 14.9999C26.0003 14.9999 27.6453 15.779 28.5612 16.266L30.4388 12.734C29.3547 12.1577 26.9997 10.9999 24 10.9999V14.9999ZM24 46.0002C29.6725 46.0002 36.4599 43.6877 41.0808 37.7251L37.9192 35.2749C34.1886 40.0886 28.6698 42.0002 24 42.0002V46.0002ZM41.0808 37.7251C44.1179 33.8063 46.5334 28.9344 45.9956 20.8669L42.0044 21.133C42.4666 28.066 40.4614 31.9945 37.9192 35.2749L41.0808 37.7251Z" fill="#333"/></svg>由谷歌云提供服务 | <?xml version="1.0" encoding="UTF-8"?><svg width="5%" height="5%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 29H4V42H44V29Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z" fill="#333"/><path d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M19.006 16.0259C16.8635 16.0259 15 17.5124 15 19.5128C15 21.9998 17.0947 22.9998 19.6973 22.9998C20.1437 22.9998 20.5567 22.9998 20.9768 22.9998" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.007 16.0259C31.1039 16.0259 33 16.9994 33 19.5128C33 21.9998 30.8902 22.9998 28.2877 22.9998C27.8412 22.9998 27.4013 22.9998 26.9871 22.9998" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.0069 16.0261C29.0069 13.0423 27.0231 11 23.9998 11C20.9766 11 19.0059 12.9927 19.0059 16.0261" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 23H28" stroke="#333" stroke-width="4"/></svg><a href="//www.ds07.eu.org" target= "_blank">由NCC-17039的NOS对象存储提供支持</a></p></div>`;
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
      const newLogo = `<a href="/" class="left-all"><span class="name">NCC-17039的存储库</span></a>`;
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
