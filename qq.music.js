var playlist = document.getElementsByClassName('playlist');
var bottom = document.getElementsByClassName('bottom')[0];
var lis = bottom.getElementsByTagName('li');
var banner = document.getElementsByClassName('banner')[0]
  var c = 0;
  len = playlist.length;
  // 轮播
  var timer = setInterval(run,1500);

  function run() {
      c ++;
      c = c == 4 ? 0 : c;
      for (var i = 0; i < len; i++){
          playlist[i].style.display = 'none';
          lis[i].style.background = '#ddd';
      }
      playlist[c].style.display = 'block';
      lis[c].style.background = 'gray';
  }
 // 鼠标进入停止轮播
  banner.onmouseenter = function () {
      clearInterval(timer)
  };
  banner.onmouseleave = function () {
      timer = setInterval(run,1500)
  };
  //点击小圆点
  lislen = lis.length;
   for (var i = 0; i < lislen; i++){
       (function (c) {
           lis[c].onclick = function () {
               for (var i = 0; i < len; i++){
                   playlist[i].style.display = 'none';
                   lis[i].style.background = '#ddd';
               }
               playlist[c].style.display = 'block';
               lis[c].style.background = 'gray';
           }
       }(i))
   }

   //字体变色
   var spans = document.getElementsByTagName('span');
   // console.log(spans);
   for (var i = 0; i < spans.length; i++){
       (function (i) {
           spans[i].onmouseenter = function () {
               spans[i].style.color = '#31c27c';
           }
           spans[i].onmouseleave = function () {
               spans[i].style = 'none';
           }
       }(i))
   }
   //  图片效果
   var imgs = document.getElementsByTagName('img');
   // console.log(imgs)
  for (var i = 0; i < imgs.length; i++){
      (function (i) {
          imgs[i].onmouseenter = function () {
              imgs[i].style.boxShadow = '0px 0px 60px 10px #ccc';
          }
          imgs[i].onmouseleave = function () {
              imgs[i].style = 'none';
          }
      }(i))
  }