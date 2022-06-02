
/**
 * @function drawLine
 * @description 在canvas的任意位置上绘制指定样式的填充直线/描边直线
 * @for util/drawGraphics
 * @version 1.0
 * @author zjvivi
 * @param {Object} ctx 绘图环境对象
 * @param {Object} style 绘制样式，包括线条样式、线宽等   
 * @param {Object} line 直线对象，存储绘制直线的起始点坐标、终止点坐标等
 * @param {Boolean} isFill 绘制填充/描边直线，1为填充，2为描边, 0为不着色
 * @param {Object} isNewPath  1表示新路径，0表示不开启新路径
 * @param {Object} isClosePath  1表示闭合路径，0表示不闭合路径
 * @returns 
 */

function drawLine(ctx,style,line,isFill,isNewPath,isClosePath){
    ctx.save();
    
    if(isNewPath) ctx.beginPath();
    ctx.moveTo(line.startPointX, line.startPointY);
    ctx.lineTo(line.endPointX, line.endPointY);
    
    
    ctx.fillStyle=style.fillColor;
    ctx.strokeStyle=style.strokeColor;
    ctx.lineWidth=style.lineWidth;
    
    if(isFill==1){
        ctx.fill();
    }
    else if(isFill==2){
        ctx.stroke();
    }

    if(isClosePath) ctx.closePath();
    
    ctx.restore();
}

/**
 * @function drawText
 * @description 在canvas的任意位置上绘制指定样式的填充文本/描边文本
 * @for util/drawGraphics
 * @version 1.0
 * @author zjvivi
 * @param {Object} ctx 绘图环境对象
 * @param {String} text 绘制文本
 * @param {Object} style 绘制样式   
 * @param {Object} point 绘制文本的起始点坐标
 * @param {Boolean} isFill 绘制填充/描边文本，1为填充，2为描边,3为填充加描边
 */

function drawText(ctx,text,style,point,isFill){
    ctx.save(); //保存当前绘图环境
    ctx.font=style.fontSize + 'px ' + style.fontFamily;
    ctx.textAlign=style.textAlign;
    ctx.textBaseline=style.textBaseline;
    ctx.lineWidth=style.lineWidth;
    
    if(isFill==1){
        ctx.fillStyle=style.fillColor;
        ctx.fillText(text, point.x, point.y);
    }
    else if(isFill==2){
        ctx.strokeStyle=style.strokeColor;
        ctx.strokeText(text, point.x, point.y);
    }
    else{
        ctx.fillStyle=style.fillColor;
        ctx.strokeStyle=style.strokeColor;
        ctx.fillText(text, point.x, point.y);
        ctx.strokeText(text, point.x, point.y);
    }
   ctx.restore();   //恢复之前保存的绘图环境
}
/**
 * 
 * @param {Object} ctx 
 * @param {Object} circle 
 * @param {Object} style 
 * @param {Object} isFill  1表示填充，2表示描边，0表示路径
 * @param {Object} isNewPath  1表示新路径，0表示不开启新路径
 * @param {Object} isClosePath  1表示闭合路径，0表示不闭合路径
 */
function drawCircle(ctx,circle,style,isFill,isNewPath,isClosePath){
	ctx.save();   //保存绘图环境，保证此次填充样式、线宽等绘图环境属性不影响其他图形绘制 
    if(isNewPath) ctx.beginPath();   //开启新路径
    
    //绘制圆路径
	ctx.arc(circle.x, circle.y, circle.r, circle.startAngle, circle.endAngle,circle.clockwise);
    
    //设置线宽
	ctx.lineWidth = style.lineWidth;

	if(isFill==1){
        ctx.fillStyle = style.fillColor;
		ctx.fill();
	}		
	else if(isFill==2){
        ctx.strokeStyle = style.strokeColor;
		ctx.stroke();	
	}

	if(isClosePath) ctx.closePath();  //关闭新路径
    ctx.restore();    //还原绘图环境
}

/**
 * 
 * @param {*} ctx 
 * @param {*} circle 
 * @param {*} style 
 * @param {*} isFill 
 */
function drawSector(ctx,circle,style,isFill){
    var linePoint={x:0,y:0};
    
    linePoint.x=circle.x+circle.r*Math.cos(circle.startAngle);
    linePoint.y=circle.y+circle.r*Math.sin(circle.startAngle);

    ctx.beginPath();
    ctx.moveTo(circle.x, circle.y);
    ctx.lineTo(linePoint.x, linePoint.y);
    ctx.arc(circle.x, circle.y, circle.r, circle.startAngle, circle.endAngle, circle.clockwise);
    ctx.closePath();

    ctx.lineWidth=style.lineWidth;
    ctx.fillStyle=style.fillColor;
    ctx.strokeStyle=style.strokeColor;
    if(isFill==1)
        ctx.fill();
    if(isFill==2)
        ctx.stroke();
    if(isFill==3){
        ctx.fill();
        ctx.stroke();
    }
}

/**
 * 
 * @param {*} context 
 * @param {*} rect 
 * @param {*} style 
 * @param {*} isNewPath 
 * @param {*} isFill 
 */
function drawRect(context,rect,style,isNewPath,isFill){
    if(isNewPath) context.beginPath();
    context.rect(rect.x,rect.y,rect.width,rect.height);
    
    context.lineWidth=style.lineWidth;
    context.fillStyle=style.fillColor;
    context.strokeStyle=style.strokeColor;

    if(isFill==1)
        context.fill();
    if(isFill==2)
        context.stroke();
    if(isFill==3){
        context.fill();
        context.stroke();
    }

}