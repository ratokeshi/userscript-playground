// ==UserScript==
// @name        ratokeshi useless noupdate
// @namespace   https://tokeshi.com/
// @description Changes the background color of the web page and add line
// @include     https://*.tokeshi.com/*
// @downloadURL https://github.com/ratokeshi/userscript-playground/raw/main/u.Useless/u.01.background.user.js
// @updateURL   https://github.com/ratokeshi/userscript-playground/raw/main/u.Useless/u.01.background.user.js
// @version     304.28.13
// @grant       GM_notification
// ==/UserScript==

(function() {
    'use strict';
    
    //// Check if the script has been updated
    //var currentVersion = GM_info.script.version;
    //var lastVersion = GM_getValue('lastVersion');
    //if (currentVersion != lastVersion) {
    //    GM_notification('ratokeshi useless userscript has been updated to version ' + currentVersion, 'info');
    //    GM_setValue('lastVersion', currentVersion);
    //}

    // Change background color
    document.body.style.backgroundColor = 'green';
    
    // Add text line
    var div = document.createElement('div');
    div.innerHTML = 'ratokeshi useless noupdate userscript was here added by the userscript.';
    document.body.insertBefore(div, document.body.firstChild);
})();