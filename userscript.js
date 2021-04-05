// ==UserScript==
// @name         Remix Dark Purple
// @namespace    https://github.com/neetcapital/remix-dark-purple
// @version      0.1
// @description  try to take over the world!
// @author       Slip1244
// @match        *://remix.ethereum.org*
// @resource     REMOTE_CSS https://raw.githubusercontent.com/neetcapital/remix-dark-purple/main/theme.css
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // Load remote CSS
  const myCss = GM_getResourceText("REMOTE_CSS");
  GM_addStyle(myCss);

})()