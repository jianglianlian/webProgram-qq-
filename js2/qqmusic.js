window.onload=function(){
    var div1=document.getElementById('div1');
    var oImg=div1.getElementsByTagName('img')[0];
    var oImg1=div1.getElementsByTagName('img')[1];
    var spanL=document.getElementById('L');
    var spanR=document.getElementById('R');
    var oUl=document.getElementById('ul');
    var oLi=oUl.getElementsByTagName('li');
    var arrImg=['images2/1.jpg','images2/2.jpg','images2/3.jpg','images2/4.jpg','images2/5.jpg','images2/6.jpg','images2/7.jpg','images2/8.jpg'];
    var num=0;
    var oldLi=0;
    function fn(num) {
        oImg.src=arrImg[num];
        oImg1.src=arrImg[num+1];
    }
    fn(0);
    function fnLi(num){
        oLi[oldLi].className='';
        oLi[num].className='active';
        oldLi=num;
    }
    fnLi(0);
    /*点击左右span图片切换*/
    /*点击左右span时li切换*/
    spanL.onclick=function(){
        if (num<1) {
            num=arrImg.length/2-1;
            fn(num*2);
            fnLi(num);
        }else{
            num--;
            fnLi(num);
            fn(num*2);
        }
    }
    spanR.onclick=function(){
        if (num==arrImg.length/2-1) {
            num=0;
            fn(num*2);
            fnLi(num);
        }else{
            num++;
            fnLi(num);
            fn(num*2);
        }
    }
    /*点击li实现图片切换*/
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index=i*2;
        oLi[i].indexli=i;
        oLi[i].onclick=function(){
            fn(this.index);
            fnLi(this.indexli);
        }
    }
}