'use strict';

var boxtop=200;
var boxleft=200;  
     
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('keydown event\n\n' + 'key: ' + keyName);


if (keyName == "ArrowDown") {
    boxtop = boxtop+10
    document.getElementById("box").style.top = boxtop + "px";
};

if (keyName == "ArrowUp") {
    boxtop = boxtop-10
    document.getElementById("box").style.top = boxtop + "px";
};

if (keyName == "ArrowLeft") {
    boxleft = boxleft-10
    document.getElementById("box").style.left = boxleft + "px";
};

if (keyName == "ArrowRight") {
    boxleft = boxleft+10
    document.getElementById("box").style.left = boxleft + "px";
};

});
