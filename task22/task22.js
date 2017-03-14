
var list = [];
var timer = null;// for interval 

var root = document.getElementById('root');

document.getElementById('preOrder').onclick = function() {
    reset();
    preorder(root);
    changeColor();
}

document.getElementById('inOrder').onclick = function() {
    reset();
    inorder(root);
    changeColor();
}

document.getElementById('postOrder').onclick = function() {
    reset();
    postorder(root);
    changeColor();
}
function reset() {
    list =[];
    clearInterval(timer);
    var divs = document.getElementsByTagName("div");
    for(var i=0,len = divs.length;i<len;i++) {
        //divs[i].style.backgroundColor="white";
        divs[i].className="blank";
    }
}


function interval() {
        i++;
        if(i<list.length) {
            list[i-1].className="blank";
            list[i].className="selected";

            //list[i-1].style.backgroundColor='white';
            //list[i].style.backgroundColor='#ff6363';
        } else {
            clearInterval(timer); 
            //list[list.length-1].style.backgroundColor = 'white';
            list[list.length-1].className="blank";
            i=0;
        }
}

var i=0;

function changeColor(){
    list[i].className = "selected";
    //list[i].style.backgroundColor = "#ff6363";
    timer = setInterval(interval,300);
}
function preorder(node) {
    if(!(node === null)) {
        list.push(node);
        preorder(node.firstElementChild);
        preorder(node.lastElementChild);
    }
}

function inorder(node) {
    if(!(node===null)) {
        inorder(node.firstElementChild);
        list.push(node);
        inorder(node.lastElementChild);
    }

}
function postorder(node) {
    if(!(node=== null)) {
        postorder(node.firstElementChild);
        postorder(node.lastElementChild);
        list.push(node);
    }
}


