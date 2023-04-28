// ==UserScript==
// @name        ratokeshi useless userscript 4 tokeshi.com
// @namespace   https://tokeshi.com/
// @description Changes the background color of the web page and add line
// @include     https://tokeshi.com/*
// @version     2023.04.28.1616
// @grant       GM_notification
// ==/UserScript==

(function() {
    'use strict';
    
    // Check if the script has been updated
    var currentVersion = GM_info.script.version;
    var lastVersion = GM_getValue('lastVersion');
    if (currentVersion != lastVersion) {
        GM_notification('ratokeshi useless userscript has been updated to version ' + currentVersion, 'info');
        GM_setValue('lastVersion', currentVersion);
    }

    // Change background color
    document.body.style.backgroundColor = 'yellow';
    
    // Add text line
    var div = document.createElement('div');
    div.innerHTML = 'ratokeshi useless userscript has been updated.';
    document.body.insertBefore(div, document.body.firstChild);
})();