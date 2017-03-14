//录入words
var words = [];



function show(){
    var text ='';
    text = words.map(function(e){
        return "<li>"+e+"</li>";
    }).join("");
    document.getElementById('numList').innerHTML = text;
}

function getInput() {
    var arr = document.getElementById('input').value.split(/[^\u4e00-\u9fa5\w]+/g).filter(function(e){
        return e.length != 0;}); 
    return arr;
}

function  search(){
    var keyword = document.getElementById('search').value;
    if(keyword.length ===0) return;
    var reg = new RegExp(keyword);
    var highlight = [];
    var lis = document.getElementsByTagName('li');
    for(var i=0;i<words.length;i++){
        if(words[i].match(reg)) {
            highlight.push(i);
        }
    }
    show();
    showHigh(highlight);
}

function showHigh(arr) {
    var lis = document.getElementsByTagName('li');
    while(arr.length>0) {
        lis[arr.pop()].className +=" mark";
    }
}

function leftin(){
    var data = getInput();
    if(data){
        for(var i=data.length-1;i>=0;i--) {
            words.unshift(data[i]);
        }        
    }
    show();
}

function rightin(){
    var data = getInput();
    if(data){
        for(var i=0;i<data.length;i++) {
            words.push(data[i]);
        }        
    }
    show();
}

function leftout(){
    if(words.length>0) {
        alert('移除左侧：'+words.shift());
    } else {
        alert('没法移除了哦0w0');
    }
    show();
}

function rightout(){
    if(words.length>0) {
        alert('移除右侧：'+words.pop());
    } else {
        alert('没法移除了哦0w0');
    }
    show();
}

function init(){
    var lis = document.getElementsByTagName('li');
    for(var i=0;i<lis.length;i++){
       words.push(lis[i].innerHTML);
     }
    document.getElementById('searchBtn').onclick = search;
    document.getElementById('leftin').onclick = leftin;
    document.getElementById('rightin').onclick = rightin;
    document.getElementById('leftout').onclick = leftout;
    document.getElementById('rightout').onclick = rightout;
    show();
}
window.onload = init;