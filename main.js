canvas=document.getElementById("canvas1");

ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth= 4;
ctx.rect(180, 200, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=6;
ctx.arc(295, 265, 40, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=6;
ctx.arc(342, 310, 40, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=6;
ctx.arc(390, 265, 40, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=6;
ctx.arc(438, 310, 40, 0, 2*Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=6 ;
ctx.arc(485, 265, 40, 0, 2*Math.PI);
ctx.stroke();