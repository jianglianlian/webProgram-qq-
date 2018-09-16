// 搜索框点击事件
var oqq_input_text = document.getElementsByClassName('qq_input_text')[0];
var oqq_search_hotword = document.getElementsByClassName('qq_search_hotword')[0];
oqq_input_text.onclick = function () {
    oqq_search_hotword.style.display = 'block';
}
document.onclick = function (event) {
    // 兼容ie和非ie的event
    var e=event || window.event;
    // 兼容ie和非ie的事件源
    var aim=e.srcElement || e.target;
    if(e.srcElement){
        var aim = e.srcElement;
        if(aim != oqq_input_text && aim != oqq_search_hotword){
            oqq_search_hotword.style.display= 'none';
        }
        else {
            var aim = e.target;
            if(aim != oqq_input_text && aim != oqq_search_hotword){
                oqq_search_hotword.style.display = 'none';
            }
        }
    }
}
// 选项卡事件
var otab = document.getElementsByClassName('list_tab_item');
var oplay = document.getElementsByClassName('song_list_listen');
for(var i = 0;i < otab.length;i++){
    otab[i].index = i;
    otab[i].onclick = function () {
        for(var i = 0;i < otab.length;i++){
            otab[i].className = "list_tab_item";
        }
        this.className = "list_tab_item list_tab_active";
        for(var j = 0;j < oplay.length;j++){
            oplay[j].className = "song_list_listen listen_hide";
        }
        oplay[this.index].className = "song_list_listen listen_active"
    }
}
// 小圆点轮播
var ocircle = document.getElementsByClassName('circle');
var olist_tab = document.getElementsByClassName('list_tab');
var otab_list = document.getElementsByClassName('tab_list')[0];
for(var i = 0;i < ocircle.length;i++){
    ocircle[i].index = i;
    ocircle[i].onclick = function () {
        for(var i = 0;i < ocircle.length;i++){
            ocircle[i].className = "circle";
        }
        this.className = "circle switch_active";
        var num = this.index * -1200;
        console.log(num);
        otab_list.style.marginLeft = num + 'px';
    }
}