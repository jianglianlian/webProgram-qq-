
var btnLeft = byId('pre');
var btnRight = byId('next');
var main = byId('main');
var pics = byId('pics').getElementsByTagName('ul');
var dots = byId('dots').getElementsByTagName('a');
var dots1 = byId('dots').getElementsByTagName('span');
console.log(dots1);
var index = 0;
// 得到id
function byId(id){
	if(typeof(id) === "string"){
		return document.getElementById(id);
	}
	else{
		return id;
	}
}
// 切换图片
function changeImg(){
	for(var i = 0;i < pics.length;i ++){
			pics[i].style.display = 'none';
			dots[i].className = '';
	}
		pics[index].style.display = 'block';
		 dots[index].className = 'active';
}	
btnRight.onclick = function nextPics(){
	index ++;
	console.log(index);
	if(index == pics.length){
		index = 0;
	}
	console.log(index);
	changeImg();
}
btnLeft.onclick = function prePics(){
	index --;
	if(index < 0){
		index = pics.length - 1;
	}
	changeImg();
}
//点击圆点切换图片

	for(var i = 0;i<dots.length;i++){
		dots[i].id = i;
		dots[i].onclick = function () {
			index = this.id;
			//是圆点变成当前图片的圆点
			this.className = 'active';
			//调用changeImg，实现切换图片
			changeImg();
        }
	}
	// slideImg();
	//鼠标移到圆点上时切换颜色
	dots1[0].style.background = 'rgba(0,0,0,.1)';
		for(var i = 0;i < dots1.length;i ++){
			dots1[i].onmouseover = function(){

				for(var i = 0;i < dots1.length;i ++){
					dots1[i].style.background = 'rgba(0,0,0,.1)';
				}
				this.style.background = '#b1b1b1';
			}
		}
	
	// changeColor();