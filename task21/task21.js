//事件兼容函数
/*function addEventhandler(ele,event,handler){
    if(ele.addEventListener) {
        ele.addEventListener(event,handler,false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event,handler);
    } else {
        ele["on"+event] = handler;
    }
}*/
//hobbyBtn = document.getElementsByTagName('button')[0];

var tag = [];
var hobby = [];

function init(){
    var taglis = document.getElementById('showTag').getElementsByTagName('li');
    for(var i=0;i<taglis.length;i++){
       tag.push(taglis[i].innerHTML);
     }
    var hobbylis = document.getElementById('showHobby').getElementsByTagName('li');
    for(var i=0;i<hobbylis.length;i++) {
        hobby.push(hobbylis[i].innerHTML);
    }
    var tagInput = document.getElementById('tag');
    var tagList = document.getElementById('showTag');
    var hobbyBtn = document.getElementById('hobbyBtn');
    tagInput.onkeyup = doTag;
    hobbyBtn.onclick = doHobby;
    tagList.onmouseover = function(e){
        if(e.target && e.target.nodeName=="LI") {   
            e.target.innerHTML = "点击删除: " + e.target.innerHTML;
        }
    };
    tagList.onmouseout = function(e) {
        if(e.target && e.target.nodeName=="LI") {
            e.target.innerHTML = e.target.innerHTML.replace("点击删除: ",'');
        }
    };
    tagList.onclick = function(e) {
        if(e.target && e.target.nodeName=="LI") {
            document.getElementById("showTag").removeChild(e.target);
        }
    };
}

window.onload = init;


function doTag() { 
    if(/[,\s\n]+/.test(document.getElementById('tag').value)){
        var input = document.getElementById('tag').value.trim().match(/(^[^,\， ]*)/)[0];
        //清空输入栏
        document.getElementById('tag').value= '';
        
        if(tag.indexOf(input) == -1) {
            if(tag.length ==10) {
                tag.shift();
            }
            tag.push(input);
            showTag();
        } 
    }
}

function doHobby() {
    //获得hobby输入
    
    var hobb = document.getElementById('hobby').value.trim().split(/[^\u4e00-\u9fa5\w]+/g).filter(function(e){ return e.length!==0;});
    
    document.getElementById('hobby').value='';
    //查重
    for(var i=0;i<hobb.length;i++){
        if (hobby.indexOf(hobb[i])==-1) {
            if(hobby.length == 10) {
                 hobby.shift();
              }
            hobby.push(hobb[i]);
            showHobby();
        }
    }
}

function showTag() {
    var text ='';
    text = tag.map(function(e){
        return "<li>"+e+"</li>";
    }).join('');
    document.getElementById('showTag').innerHTML = text;
}

function showHobby(){
    var text ='';
    text = hobby.map(function(e){
        return "<li>"+e+"</li>";
    }).join('');
    document.getElementById('showHobby').innerHTML = text;
}


    
    
    
    
    