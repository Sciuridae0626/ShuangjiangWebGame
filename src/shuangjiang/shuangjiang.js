/**
*@module Where to Go for Shuangjiang
*@author Ye Rui
*@description 霜降游戏
*@version 2.0
*/
var BG = new Image();
var BG_persimmon = new Image();
var BG_chrysanthemum = new Image();
var Xiaohong = new Image();
var index = 0;
var i = 0;
var j = 0;
var k = 0;
var temp = 0;
var v = 100;
var f = 0;
var index = 0;
var textNum = 0;
var optionNum = 0;
var str = text[0];
var score = 0;
context.font = '20px 黑体';
//functions
function next(){
	v = 100;
	context.drawImage(BG, 0, 0, 700 ,500);
	context.drawImage(Xiaohong, 0, 20, 400, 480);
	context.save();
	context.globalAlpha=0.5;
	context.fillStyle = "white";
	context.fillRect(30, 330, 640, 160)
	context.restore();
	drawText(strNum[textNum]);
	document.onkeyup = onMouseDown;
	canvas.onmousedown = onMouseDown;
}
function drawText(num){
	i = 0;
	j = 0;
	index = 0;
	optionNum = 0;
	while(index < textNum){
		optionNum = optionNum + strNum[index];
		index++;
	}
	str = text[textNum];
	textNum++;
	temp = num;
	setTimeout(drawStr, v);
}

function drawStr(){
	context.fillText(str.substring(j * 30 + i, j * 30 + i + 1), i * 20 + 50, 350 + j * 20);
	i++;
	if(i >= 30){
		i = 0;
		j++;
	}
	if (j * 30 + i >= str.length){
		k = 0;
		while(k < temp){
			k++;
			context.fillText(option[optionNum + k - 1], 70, 370 + (j + k) * 20);
		}
		if(k == 0) context.fillText("（按任意键继续）", 510, 480);
		else context.fillText("（按选项键继续）", 510, 480);
		document.onkeyup = onCanvasKeyUp;
		return;
	}
	setTimeout(drawStr, v);
}
function onCanvasKeyUp(e){
	console.log(textNum);
	if(e.keyCode == 65 && textNum == 4){
		BG = BG_persimmon;
		next();
	}
	else if(e.keyCode == 66 && textNum == 4){
		textNum = 15;
		BG = BG_chrysanthemum;
		next();
	}
	else if(e.keyCode == 67 && textNum == 4){
		textNum = 26;
		next();
	}
	else if(e.keyCode == 65 && textNum == 9) next();
	else if(e.keyCode == 66 && textNum == 9){
		textNum = 12;
		next();
	}
	else if(e.keyCode == 65 && textNum == 10){
		game1();
	}
	else if(e.keyCode == 65 && textNum == 13){
		game1();
	}
	else if(e.keyCode == 65 && textNum == 18){
		if(f == 0) textNum = 27;
		score = 0;
		next();
	}
	else if(e.keyCode == 65 && textNum == 19) next();
	else if(e.keyCode == 66 && textNum == 19){
		textNum = 23;
		next();
	}
	else if(e.keyCode == 65 && textNum == 27){
		textNum = 4;
		BG = BG_persimmon;
		next();
	}
	else if(e.keyCode == 66 && textNum == 27){
		textNum = 15;
		BG = BG_chrysanthemum;
		next();
	}
	else if(e.keyCode == 66 && textNum == 28){
		score = score + 1;
		next();
	}
	else if(e.keyCode == 67 && textNum == 29){
		score = score + 1;
		next();
	}
	else if(e.keyCode == 65 && textNum == 30){
		score = score + 1;
		next();
	}
	else if(e.keyCode == 66 && textNum == 31){
		score = score + 1;
		next();
	}
	else if(e.keyCode >= 0 && textNum == 32){
		if(score == 4) next();
		else{
			textNum = 33;
			next();
		}
	}
	else if(e.keyCode >= 0 && textNum == 33){
		f = 1;
		textNum = 18;
		next();
	}
	else if(e.keyCode >= 0 && textNum == 34){
		f = 1;
		textNum = 18;
		next();
	}
	else if(textNum == 4 || textNum == 9 || textNum == 10 || textNum == 12 || textNum == 13 || textNum == 15 || textNum == 18 || textNum == 19 || textNum == 23 || textNum == 26 || textNum == 27) return;
	else if(e.keyCode >= 0) next();
	document.onkeyup = onMouseDown;
}
function onMouseDown(e){
	v = 0;
}
//init
BG.src = "static/images/BG_home.jpg";
Xiaohong.src = "static/images/Xiaohong.png";
BG_persimmon.src = "static/images/BG_persimmon.jpg";
BG_chrysanthemum.src = "static/images/BG_chrysanthemum.jpg"
BG.onload = next;