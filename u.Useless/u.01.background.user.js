// ==UserScript==
// @name        ratokeshi useless userscript 4 tokeshi
// @namespace   https://tokeshi.com/
// @description Changes the background color of the web page and add line
// @include     https://*.tokeshi.com/*
// @downloadURL https://github.com/ratokeshi/userscript-playground/raw/main/u.Useless/u.01.background.user.js
// @updateURL   https://github.com/ratokeshi/userscript-playground/raw/main/u.Useless/u.01.background.user.js
// @version     304.28.93
// @grant       GM_notification
// ==/UserScript==

(function() {
    'use strict';
    
    // Check if the script has been updated
    var currentVersion = GM_info.script.version;
    var lastVersion = GM_getValue('lastVersion');
    //if (currentVersion != lastVersion) {
    //    GM_notification('ratokeshi useless userscript has been updated to version ' + currentVersion, 'info');
    //    GM_setValue('lastVersion', currentVersion);
    //}

    // Change background color
    document.body.style.backgroundColor = 'red';
    
    // Add text line
    var div = document.createElement('div');
    div.innerHTML = 'ratokeshi useless userscript was here added by the userscript.';
    document.body.insertBefore(div, document.body.firstChild);

    // Get the current date and time
    var now = new Date();
    var dateTime = now.toLocaleString();

    //// Create a div element to hold the date and time
    //var div = document.createElement('div');
    //div.style.backgroundColor = '#f2f2f2';
    //div.style.padding = '10px';
    //div.style.fontWeight = 'bold';
    //div.innerHTML = 'Current date and time: ' + dateTime;

    //// Add the div element to the top of the page
    //var body = document.getElementsByTagName('body')[0];
    //body.insertBefore(div, body.firstChild);
})();