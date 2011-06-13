javascript:

function makespot (X1,Y1,X2,Y2,X3,Y3,X4,Y4,ctx) {

var x1 = X1;
var y1 = Y1;
var f1= X2-X1;
var g1= Y2-Y1;

var x2 = X3;
var y2 = Y3;
var f2 = X4-X3;
var g2 = Y4-Y3;

var det = f2*g1 - f1*g2;
if(det == 0) return;
var dx = x2 - x1;
var dy = y2 - y1;
var t1 = (f2*dy - g2*dx)/det;
var t2 = (f1*dy - g1*dx)/det;
var x = x1 + f1*t1;
var y = y1 + g1*t1;
 
ctx.strokeStyle = 'rgba(255, 255, 0, 0.7)';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(Math.round(x), Math.round(y), 10, 0, Math.PI*2,false);
ctx.stroke();

}

(
function () {
var width = window.innerWidth;
var height = window.innerHeight;

var w3 = Math.round(width/3);
var h3 = Math.round(height/3);

var canvas=document.createElement("canvas");
    if(!canvas.getContext){return false;}
canvas.setAttribute('height', height);
canvas.setAttribute('width', width);

canvas.style.cssText = 'position: fixed;' + 'top: 0;' + 'left: 0;' + 'z-index: 255;';
document.body.appendChild(canvas);


var ctx = canvas.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(255, 0, 0, 0.7)';

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(width, height);
ctx.closePath();

ctx.moveTo(width, 0);
ctx.lineTo(0, height);
ctx.closePath();
 
ctx.moveTo(w3, 0);
ctx.lineTo(w3, height);
ctx.closePath();
 
ctx.moveTo(w3*2, 0);
ctx.lineTo(w3*2, height);
ctx.closePath();
 
ctx.moveTo(0, h3);
ctx.lineTo(width, h3);
ctx.closePath();
 
ctx.moveTo(0, h3*2);
ctx.lineTo(width, h3*2);
ctx.closePath();

ctx.stroke();
 
ctx.strokeStyle = 'rgba(0, 0, 255, 0.7)';
ctx.beginPath();

ctx.moveTo(0, Math.round(height/2));
ctx.lineTo(width, Math.round(height/2));
ctx.closePath();

ctx.moveTo(Math.round(width/2), 0);
ctx.lineTo(Math.round(width/2), height);
ctx.closePath();
ctx.stroke();
 
ctx.strokeStyle = 'rgba(0, 255, 0, 0.7)';
ctx.beginPath();
var wparam = Math.round(height*height/width);
ctx.moveTo(0,0);
ctx.lineTo(wparam, height);
ctx.closePath();

ctx.moveTo(width,height);
ctx.lineTo(width - wparam, 0);
ctx.stroke();

ctx.moveTo(0,height);
ctx.lineTo(wparam, 0);
ctx.stroke();

ctx.moveTo(width,0);
ctx.lineTo(width -wparam , height);
ctx.stroke();

ctx.strokeStyle = 'rgba(255, 255, 0, 0.7)';
ctx.beginPath();
ctx.moveTo(Math.round(width/2.618), 0);
ctx.lineTo(Math.round(width/2.618), height);
ctx.stroke();

ctx.moveTo(width - Math.round(width/2.618), 0);
ctx.lineTo(width - Math.round(width/2.618), height);
ctx.stroke();

ctx.moveTo(0, Math.round(height/2.618));
ctx.lineTo(width, Math.round(height/2.618));
ctx.stroke();

ctx.moveTo(0, height - Math.round(height/2.618));
ctx.lineTo(width, height - Math.round(height/2.618));
ctx.stroke();

makespot(0,0,width,height,0,height,wparam,0,ctx);
makespot(0,0,width,height,width,0,width-wparam,height,ctx);
makespot(0,height,width,0,0,0,wparam,height,ctx);
makespot(0,height,width,0,width,height,width-wparam,0,ctx);
}
)();

