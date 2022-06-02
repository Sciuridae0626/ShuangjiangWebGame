/**
*@module Where to Go for Shuangjiang
*@author Zheng Zixiao
*@description 霜降游戏
*@version 2.0
*/
var p=0; 
var imgshizi=new Image();
var imgshizi2=new Image();
var imgHand=new Image();
var i2=0,j2=0,count=10,id=0;
var shizi_num=0;
var TARGET=4 //找到目标烂柿子数目
var pos=new Point();
var movePos=new Point();
var randPos=new Point();
var flag=false;
var shiziWidth=0,shiziHeight=0;
var divCountdown=document.getElementById("countdown");
var bgSound=document.getElementById("bgSound");

var offscreenCanvas=document.createElement("canvas");
var offscreenContext=offscreenCanvas.getContext("2d");


var shizi_SIZE=0.7;
var shizi_NUMS=8;
var INTERVALS=10;
var FAIL_INFO="游戏结束";
var START_INFO="START";
var WIN_INFO="+1";
var INFO_FONT_SIZE=100;
var shizi_INTERVAL=1000/2400;
var RESTART_INTERVAL=1000;

//==========functions=================================



function saveContext(){
	offscreenContext.clearRect(0, 0, canvas.width, canvas.height);
	offscreenContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);
}

function restoreContext(){
    context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height);
}
function drawRole(img,context,scale,pos){
    var imgWidth=img.width*scale;
    var imgHeight=img.height*scale;
    context.drawImage(img, pos.x, pos.y,imgWidth,imgHeight);
}


function drawCurrentRect(rect){
    style.strokeColor="bule";
    style.lineWidth=2;
    drawRect(context,rect,style,1,2);
}


function drawInfo(text){
   
    point.x=canvas.width/2;
    point.y=canvas.height/2;

    drawText2(context,text,style,point,0);

}

function isCatchshizi(sPos,dPos){
    var result=false;
    if(Math.round(sPos.x,1)==Math.round(dPos.x*shiziWidth,1) && 
    Math.round(sPos.y,1)==Math.round(dPos.y*shiziHeight,1))
        result=true;
    return result;
}

function onMouseDown2(e){
    restoreContext();
   
    flag=true;
    
    canvas.onmousedown=null;
    document.onkeyup=onCanvasKeyUp2;

    drawCurrentRect(rect);
    
    setTimeout(onCountdownTimeout,1000);
    onSoundPlay();
}
function onKeyDown(e){
    if(e.keyCode==37||e.keyCode==38||e.keyCode==39||e.keyCode==40){
        onMouseDown2();
        document.onkeydown=null;
    }
}

function onCanvasKeyUp2(e){
    if(flag){
        restoreContext();

        if(e.keyCode==37){
            rect.x-=rect.width;
            if(rect.x<0) rect.x=0;
        }else if(e.keyCode==39){
            rect.x+=rect.width;
            if(rect.x>=canvas.width) rect.x=canvas.width-rect.width;
        }else if(e.keyCode==38){
            rect.y-=rect.height;
            if(rect.y<0) rect.y=0;
        }else if(e.keyCode==40){
            rect.y+=rect.height;
            if(rect.y>=canvas.height) rect.y=canvas.height-rect.height;
        }

        drawCurrentRect(rect);
        movePos.x=rect.x;
        movePos.y=rect.y;
        if(isCatchshizi(movePos,randPos)){
            clearTimeout(id);
            document.onkeyup=null;
            flag=false;
            drawInfo(WIN_INFO);
            shizi_num++;
            onSoundPause();
            setTimeout(initGame,RESTART_INTERVAL);

        }
    }
    
    
}

function onCountdownTimeout(){
    count--;
    divCountdown.innerText=count;
    if(count>0){
        id=setTimeout(onCountdownTimeout,1000);
    }else{
        flag=false;
        
        movePos.x=rect.x;
        movePos.y=rect.y;
        if(!isCatchshizi(movePos,randPos)){
            if(shizi_num>=TARGET)
            drawInfo('游戏结束，你剔除了所有的坏柿子');
            else
            drawInfo('游戏结束，你没能找到所有坏柿子')
        }
        else{
            drawInfo(WIN_INFO);
            
        }
        document.onkeyup=null;
        onSoundPause();
    canvas.width=700;
    canvas.height=500;
       context.font = '20px 黑体';
		setTimeout(next,1000);
       
    }
}

function onTimeout(){
    
    pos.setPoint(i2,j2);
    
    
    if(isCatchshizi(pos,randPos)){
        drawRole(imgshizi2,context,shizi_SIZE,pos);
    }else{
        if(p%5==0||p%11==0)
        drawRole(imgshizi,context,shizi_SIZE,pos);
    }
    p++
    i2+=shiziWidth;
    if(pos.x+shiziWidth>canvas.width){
        j2+=shiziHeight;
        i2=0;
    } 
    if(j2<=canvas.height)  
        id=setTimeout(onTimeout,shizi_INTERVAL);
    else{
        saveContext(); 
        setTimeout(addStartListener,500);  
        
    }
        
}

function addStartListener(){
    drawInfo('游戏开始,上下左右键操控手,找到坏掉的柿子');
    canvas.onmousedown=onMouseDown;
    document.onkeydown=onKeyDown;
}



function onImgshiziLoad(){  
    
    shiziWidth=imgshizi.width*shizi_SIZE;
    shiziHeight=imgshizi.height*shizi_SIZE;

    canvas.width=shiziWidth*shizi_NUMS;
    canvas.height=shiziHeight*shizi_NUMS;
    
    offscreenCanvas.width=canvas.width;
    offscreenCanvas.height=canvas.height;
   
    rect.width=shiziWidth;
    rect.height=shiziHeight;

    initGame();
}

function initGame(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    randPos.setPoint(parseInt(Math.random()*shizi_NUMS),parseInt(Math.random()*shizi_NUMS));
    divCountdown.innerText=count;

    i2=0;
    j2=0;
    rect.x=0;
    rect.y=0;

    onTimeout();
}
function onSoundPlay(){
}

function onSoundPause(){
}
function drawText2(context,strText,style,point,isFill){
	
	context.font=style.font;
	context.textAlign=style.textAlign;
	context.textBaseline=style.textBaseline;
	if(isFill==true){
		context.fillStyle=style.color;
		context.fillText(strText, point.x, point.y);
	}
	else{
		context.strokeStyle=style.color;
		context.strokeText(strText, point.x, point.y);
	};
}
//===========init=================================
imgshizi.src="static/images/Shizi.jpg";
imgshizi2.src="static/images/Shizi2.jpg";
imgHand.src="static/images/Hand.jpg";
function game1(){
//bgSound.loop=true;
divCountdown.innerText=0;
onImgshiziLoad();
}