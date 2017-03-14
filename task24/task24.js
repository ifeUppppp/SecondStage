var list = [];
var root = document.getElementById("super");
var timer = null;//setInterval
var keyword ='';
var foundNode = null;
var flag = 0;
var selected = null;

function init() {
    document.getElementById("super").onclick = function(e) {
        reset();
        if(e.target && e.target.nodeName=="DIV") {
            e.target.className +=" click";
            selected = e.target;
        }
        if(e.target && e.target.nodeName=="SPAN") {
            e.target.parentNode.className +=" click";
            selected = e.target.parentNode;
        }
    }
    document.getElementById("delBtn").onclick = function(){
        selected.innerHTML ="";
        selected.parentNode.removeChild(selected);
    }
    document.getElementById("addBtn").onclick = function() {
        var add = document.getElementById("add").value;
        var text = "<div><span>"+add+"</span></div>";
        selected.innerHTML += text;
    }
    
    
    
    document.getElementById("preorder").onclick = function() {
        reset();
        preorder(root);
        changeColor();
    }
    document.getElementById("postorder").onclick = function() {
        reset();
        postorder(root);
        changeColor();
    }
    document.getElementById("search").onclick = function() {
        keyword = document.getElementById("keyword").value;
        flag = 0;
        reset();
        search(root);
        if(flag==0){
            alert("Sorry,I can't find it.");
        } else {
            changeColor();
        }
    }
}


function search(node) {
    
    if( !(node===null)) {
        if(node.nodeName == "SPAN") {
            if(node.innerHTML==keyword) {
                flag = 1;
                foundNode = node;
            }
        }
        list.push(node);
        var childs = node.children;
        for(var i=0;i<childs.length;i++){
            if(flag==0) {
                search(childs[i]);
            }
        }
    }
}
function preorder(node){
    if( !(node===null || node.nodeName=="SPAN")) {
        list.push(node);
        var childs = node.children;
        for(var i=0;i<childs.length;i++){
            preorder(childs[i]);
        }
    }
}
function postorder(node) {
    if( !(node===null || node.nodeName=="SPAN")) {
        var childs = node.children;
        for(var i=0;i<childs.length;i++){
            postorder(childs[i]);
        }
        list.push(node);
    }
}

function reset() {
    clearInterval(timer);
    var divs = document.getElementsByTagName('div');
    for(var i=0;i<divs.length;i++){
        divs[i].className="blank";
    }
    list=[];
}
function changeColor() {
    var i=0;
    list[i].className="selected";
    timer = setInterval(function(){
        i++;
        if(i<list.length) {
            list[i-1].className="blank";
            list[i].className="selected";
        } else {
            clearInterval(timer);
            if(flag==0){
                alert("0");
                list[list.length-1].className="blank";  
            } else {
                foundNode.parentNode.className= "selected";
            }
        }
    },100);
}

window.onload = init;
