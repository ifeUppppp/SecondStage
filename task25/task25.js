


//被点击元素折叠与展开
//strong

var strongs = document.getElementsByTagName("strong");
for(var i=0;i<strongs.length;i++) {
    
    strongs[i].onclick = function(e) {
        
        toggleClass(e.target.parentNode,"hide","show");
        
        
    }
}

var list=[];//循环递归保存
var lis = document.getElementsByTagName('li');
var selected = null;//被点击的LI元素
var root = document.getElementsByClassName("list")[0];
var delBtn = document.getElementById("delBtn");
var addBtn = document.getElementById("addBtn");
var searchBtn = document.getElementById("searchBtn");
var searchFlag = 0;
var keyword ="";

delBtn.onclick = function() {
    selected.parentNode.removeChild(selected);
}
addBtn.onclick = function() {
    var addtext = document.getElementById("add").value;
    selected.parentNode.innerHTML += "<li>"+addtext +"</li>";
}

//对点击的节点加样式
root.onclick = function(e){
    reset();
    if(e.target && e.target.nodeName=="LI") {
        e.target.className += " selected";
        selected = e.target;
    }
}

searchBtn.onclick =function(){
    keyword = document.getElementById('search').value;
    searchFlag = 0;
    reset();
    search(root);
    if(searchFlag==0) {
        alert('找不到这个噢');
    }else {
        dosomething
    }
}
function search(node) {
    if(!(node===null)) {
        if(node.nodeName =="STRONG") {
            if(node.innerHTML== keyword) {
                searchFlag=1;
                node.parentNode.className += " selected";
                return;
            }
        }
        if(node.nodeName=="LI") {
            if(node.innerHTML== keyword) {
                searchFlag=1;
                node.className +=' selected';
                return;
            }
        }
        list.push(node);
        var childs = node.children;
        for(var i=0;i<childs.length;i++){
            if(searchFlag==0) {
                search(childs[i]);
            }
        }
    }
}

function reset()    {
    list=[];
    var lis = document.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++){
        removeClass(lis[i],"selected");
    }
}

function toggleClass(node,Aclass,Bclass) {

        var classname = node.className;
        if(classname) {
            var classes = classname.split(" ");
            for(var i=0;i<classes.length;i++) {
                if(classes[i]==Aclass) {
                    classes[i] =Bclass;
                    node.className = classes.join(" ");
                    break;
                }
                if(classes[i]==Bclass) {
                    classes[i] = Aclass;
                    node.className = classes.join(" ");
                    break;
                }
            }
        }
}


function removeClass(node,Aclass) {
        var classname = node.className;
        if(classname) {
            var classes = classname.split(" ");
            for(var i=0;i<classes.length;i++) {
                if(classes[i]==Aclass) {
                    classes[i] ="";
                    node.className = classes.join(" ");
                    break;
                }
            }
        }
}

//增加和删除节点



//节点查找   
//找到特殊显示
//记得把父元素展开