'use strict';

let controlFont = document.getElementById("font-size-control");
controlFont.setAttribute('style', 'margin:20px; display:flex;');

let text = document.getElementById("text");

controlFont.oninput = function() {
    text.style.fontSize = controlFont.value + "px";
};

console.log(controlFont, text);