var go = document.getElementById("do");
var chess = document.getElementById('flat').getElementsByTagName('div');
var direction = ['top','right','bottom','left'];
var refresh = document.getElementById('refresh');
//初始数据
var now = chess[46];
var nowDirect = 0;
var pos = {x:7,y:5};
var nextDirect = nowDirect;//temp direction

function get() {
    
    var what = document.getElementById('what').value;
    var todolist = what.split(/\n/g);
    for(var i=0;i<todolist.length;i++){
        var times = todolist[i].replace(/[^0-9]/ig,"");
        var todo = todolist[i].replace(/[^A-Z\s]/ig,"").trim();
        
        alert(times);
        alert(todo);
        if(times=="") {
            wheretogo(todo);
        } else{
                for(var j=0;j<times;j++) {
                wheretogo(todo);
            }
        }

    }
}


function wheretogo(what){
    switch(what){
        case "GO":
            gogogo(now);
            break;
        case "TUN LEF":
            if(nowDirect-1==-1) {
                nowDirect = 3;
            } else {
                nowDirect -= 1;
            }
            now.className = direction[nowDirect];
            break;
        case "TUN RIG":
            if(nowDirect+1 == 4) {
                nowDirect = 0;
            } else {
                nowDirect += 1;
            }
            now.className = direction[nowDirect];
            break;
        case "TUN BAC":
            switch(nowDirect) {
                case 0:
                    nowDirect = 2;
                    break;
                case 1:
                    nowDirect = 3;
                    break;
                case 2:
                    nowDirect = 0;
                    break;
                case 3:
                    nowDirect = 1;
            }
            now.className = direction[nowDirect];
            break;
            
            
        case "TRA LEF":
            nextDirect = 3;
            gogogo(now);
            nextDirect = nowDirect;
            break;
            
        case "TRA TOP":
            nextDirect = 0;
            gogogo(now);
            nextDirect = nowDirect;
            break;
            
        case "TRA RIG":
            nextDirect = 1;
            gogogo(now);
            nextDirect = nowDirect;
            break;
            
        case "TRA BOT":
            nextDirect = 2;
            gogogo(now);
            nextDirect = nowDirect;
            break;
            
            
        case "MOV LEF":
            nowDirect = 3;
            now.className =direction[nowDirect];
            gogogo(now);
            break;
        case "MOV RIG":
            nowDirect = 1;
            now.className =direction[nowDirect];
            gogogo(now);
            break;
        case "MOV TOP":
             nowDirect = 0;
            now.className =direction[nowDirect];
            gogogo(now);
            break;
        case "MOV BOT":
            nowDirect = 2;
            now.className =direction[nowDirect];
            gogogo(now);
            break;
    }
}

function gogogo(node){
    
    var index = pos.y*10+pos.x-11;

    switch(nextDirect) {
            
        case 3:
            if(pos.x!==1){
                pos.x--;
                node.className="";
                chess[index-1].className = direction[nowDirect];
                now = chess[index-1];
            }
            break;
        case 1:
            if(pos.x!=10){
                pos.x++;
                node.className="";
                chess[index+1].className = direction[nowDirect];
                now = chess[index+1];
            }
            break;
        case 0:
            if(pos.y!==1){
                pos.y--;
                node.className="";
                chess[index-10].className = direction[nowDirect];
                now = chess[index-10];
            }
            break;
        case 2:
            if(pos.y!=10){
                pos.y++;
                node.className ="";
                chess[index+10].className = direction[nowDirect];
                now = chess[index+10];
            }
    }
}

function addEvent(ele,event,func) {
    if(ele.addEventListener) {
        ele.addEventListener(event,func,false);
    } else if(ele.attachEvent){
        ele.addEventListener('on'+event,func);
    } else {
        ele['on'+event] = func;
    }
}

addEvent(go,'click',get);
refresh.onclick = function(){
    document.getElementById("what").value = "";
}