/**
 * @class Point类
 * @param {Number} x 构造point点的x值
 * @param {Number} y 构造point点的y值
 */
var Point=function(x,y){
    if(x!==undefined) this.x=x;
    if(y!==undefined) this.y=y;
    return this;
};

Point.prototype={
    x:0,
    y:0,

    getPoint:function(){
        return {
            x:this.x,
            y:this.y
        }
    },

    setPoint:function(x,y){
        this.x=x;
        this.y=y; 
    },

    toString:function(){
        return "point's x is " + this.x +
                ",point's y is " + this.y;
    }
}

//=================================================================

/**
 * @class circle类
 * @param {Number} x 圆心x坐标
 * @param {Number} y 圆心y坐标
 * @param {Number} r 半径
 */
var Circle=function(x,y,r){
	if(x!==undefined) this.x=x;
	if(y!==undefined) this.y=y;
	if(r!==undefined) this.r=r;
	return this;
}	

Circle.prototype={
	x:0,
	y:0,
	r:0,

	setCircle:function(x,y,r){
		this.x=x;
		this.y=y;
		this.r=r;
	},

	getCircle:function(){
		return {
			x:this.x,
			y:this.y,
			r:this.r
		}
	},

	drawCircle:function(context){
		context.beginPath();
		context.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		context.stroke();
	}
};

