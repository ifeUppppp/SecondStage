var list = document.getElementById("numList");
var lcount = 6;
var height = [];
function getInput() {
    var val = document.getElementById('input').value;
    if(!val.match(/^\d+$/)) {
        alert('请输入整数！');
        return false;
    }
    if(Number(val)>100 || Number(val)<10) {
        alert('请输入10-100的数字');
        return false;
    }
    if(lcount>=60) {
        alert('队列元素最多为60个');
        return false;
    }
    return val;
}
/*
function removeElement(ele) {
    var parent = ele.parentNode;
    if(parent) {
        parent.removeChild(ele);
    }
}*/
function getHeight() {
    var ul = document.getElementById('numList');
    var lis = document.getElementsByTagName('li');
    for(var i=0;i<lis.length;i++){
        height.push(Number(lis[i].innerHTML));
    }
}

var exchange = [];
        
function BubbleSort() {
    var len = document.getElementById('numList').length;
    var temp = 0;
    for(var i=0;i<len-1;i++) {
        for(var j=0;j<len-i;j++) {
            if(height[j]>height[j+1]) {
                exchange[i] = j;
                temp = height[j];
                height[j] = height[j+1];
                height[j+1] = temp;
            }
        }
    }
}

//解决办法是  先排好序然后每次渲染一次？？？
//通过querySelector控制第几个柱子的颜色
//动画方法：通过改变.style.height +.title
function showSort(){
    var list = document.getElementById('numList');
    for(var i=0;i<exchange.length;i++){
        var t = exchange[i];
        var insert = list.
        list.insertBefore()
    }
}
document.getElementById('leftin').onclick = function(){
  var valin = getInput();
    if(valin){
        var text = '<li style="height:'+valin*3+'px;">+'+valin+'</li>';
        list.innerHTML = text + list.innerHTML;
    }
    lcount++;
}
document.getElementById('rightin').onclick = function(){
    var valin = getInput();
    if(valin){
        var text = '<li style="height:'+valin*3+'px;">'+valin+'</li>';
        list.innerHTML += text;
    }
    lcount++;
}
document.getElementById('leftout').onclick = function(){
    var list = document.getElementById("numList");
    list.removeChild(list.firstChild);
    list.removeChild(list.firstChild);
    lcount--;
}
document.getElementById('rightout').onclick = function(){
    var list = document.getElementById("numList");
    list.removeChild(list.lastChild);
    list.removeChild(list.lastChild);    
    lcount--;
}