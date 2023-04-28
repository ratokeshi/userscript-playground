// ==UserScript==
// @name        ratokeshi useless userscript 4 tokeshi
// @namespace   https://tokeshi.com/
// @description Changes the background color of the web page and add line
// @include     https://tokeshi.com/*
// @version     304.28.5
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
    document.body.style.backgroundColor = 'green';
    
    // Add text line
    var div = document.createElement('div');
    div.innerHTML = 'ratokeshi usless userscript was here added by the userscript.';
    document.body.insertBefore(div, document.body.firstChild);
})();