/**
*@module Where to Go for Shuangjiang
*@author Zheng Zixiao
*@description 霜降游戏
*@version 2.0
*/
function mountain(){var v = document.getElementById("video1");
var c = document.getElementById("myCanvas");
	ctx = c.getContext('2d');
	//每20毫秒画一次图
	v.addEventListener('play', function() {
		var i = window.setInterval(function() {
			ctx.drawImage(v, 0, 0, 700, 500);
			//打印当前视频的播放时间
			console.log(v.currentTime);
			//当视频结束的时候去掉循环
			if(v.ended){
			   clearInterval(i)
		   }
		}, 20);
	}, false);
	//将视频暂停，然后观察canvas里面的效果
	setTimeout(function(){
	   v.pause();
	},4000);
	//将视频播放，然后观察canvas里面的效果
	setTimeout(function(){
	   v.play();
	},7000);}
