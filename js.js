var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var tips = document.getElementById('tip');
var index = 1;
var timer;
var isMoving = false;
//轮播下一张
function next(){
	if (!isMoving) {
		isMoving = true;
		index++;
		navChange();
		animate(slider,{left:-1200*index},function(){
		if (index === 6) {
			slider.style.left = "-1200px";
			index = 1;
		}
		isMoving = false;
	});
}

}
function back(){
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navChange();
	animate(slider,{left:-1200*index},function(){
		if (index === 0) {
			slider.style.left = "-6000px";
			index = 5;
		}
		isMoving = false;
	});
}
var timer = setInterval(next,3000);
//鼠标划入
box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
//鼠标划出
box.onmouseout = function(){
animate(left,{opacity:0});
animate(right,{opacity:0});
timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = back;
for(var i=0;i<oNavlist.length;i++){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index + 1;
		navChange();
		animate(slider,{left:-1200*index});
	}
}	
//按钮颜色改变
function navChange(){
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].id = '';
	}
	if (index === 6) {
		oNavlist[0].id = "active";
	}else if(index === 0){
		oNavlist[4].id = "active";
	}else{
		oNavlist[index-1].id = "active";
	}
}
//滚动条
window.onload = function timing(){
	var times = setInterval(function(){
		var now = parseInt(getStyle(tips,'left'));
		var speed = -2;
		if (now == -300) {
			tips.style.left = 1000 + 'px';
		}
		else
			tips.style.left = now + speed + 'px';
	},30);
}