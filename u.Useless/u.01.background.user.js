// ==UserScript==
// @name        Change Background Color
// @namespace   https://example.com/
// @description Changes the background color of the web page
// @include     https://tokeshi.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.backgroundColor = 'yellow';


    // Add text line
    var div = document.createElement('div');
    div.innerHTML = 'This is a text line added by the userscript.';
    document.body.insertBefore(div, document.body.firstChild);
})();
