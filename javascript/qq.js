var change = document.getElementsByClassName('new-music')[0];
var button = change.getElementsByClassName('div');
var view = document.getElementsByClassName('li-look')[0];
var mf = view.style.marginLeft;

button[0].onclick = function () {
    if (mf < -3600) {
        mf = 0;
    }
    mf -= 1200;
    view.style.marginLeft = mf + 'px';
    view.style.transitionDuration=0.5+'s';
}
button[1].onclick = function () {
    if (mf > -1200) {
        mf = -4800;
    }
    mf += 1200;
    view.style.marginLeft = mf + 'px';
    view.style.transitionDuration=0.5+'s';
}