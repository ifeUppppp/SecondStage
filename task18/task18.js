var list = document.getElementById("numList");
function getInput() {
    var val = document.getElementById('input').value;
    if(!val.match(/^\d+$/)) {
        alert('请输入整数！');
        return false;
    }
    return val;
}

function removeElement(ele) {
    var parent = ele.parentNode;
    if(parent) {
        parent.removeChild(ele);
    }
}

document.getElementById('leftin').onclick = function(){
    if(getInput()){
        var insrt = document.createElement('li');
        insrt.innerHTML = getInput();
        list.insertBefore(insrt,list.children[0]);
    }

}
document.getElementById('rightin').onclick = function(){
    if(getInput()){
        var insrt = document.createElement('li');
        insrt.innerHTML = getInput();
        list.appendChild(insrt);
    }

}
document.getElementById('leftout').onclick = function(){
    var list = document.getElementById("numList");
    list.removeChild(list.firstChild);
    list.removeChild(list.firstChild);
}
document.getElementById('rightout').onclick = function(){
    var list = document.getElementById("numList");
    list.removeChild(list.lastChild);
    list.removeChild(list.lastChild);    
}