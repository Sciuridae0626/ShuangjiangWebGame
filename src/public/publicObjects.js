var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
/**
 * 常用对象定义
 * @for 圆对象定义
 * @property {Number} x 圆心横坐标
 * @property {Number} y 圆心纵坐标
 * @property {Number} r 圆半径
 * @property {Number} startAngle 起始弧度
 * @property {Number} endAngle 终止弧度
 * @property {Boolean} clockwise 顺时针（默认值）
 */
var circle={
	x:canvas.width/2,
	y:canvas.height/2,
	r:canvas.width/4,
    startAngle:0,
    endAngle:Math.PI*2,
	clockwise:false ,   //顺时针画圆
};
/**
 * 
 */
var style={
		fillColor:"black",
		strokeColor:"black",
		fontSize:20,
		textAlign:"center",
		textBaseline:"middle",
		fontName:"黑体",
		lineWidth:1,
    };
/**
 * 
 */
var line={
		startPointX:canvas.width/2,
		startPointY:canvas.height/2,
		endPointX:0,
		endPointY:0,
		};
/**
 * @author zjvivi
 * @description 点对象
 */
var point={
	x:canvas.width/2,
	y:canvas.height/2,
};

/**
 * @author zjvivi
 * @description 矩形对象
 */
var rect={
	x:0,
	y:0,
	width:10,
	height:10,
}