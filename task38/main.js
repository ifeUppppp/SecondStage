var scoreData = {
    '大娃': randomScore(3),
    '二娃': randomScore(3),
    '三娃': randomScore(3),
    '四娃': randomScore(3),
    '五娃': randomScore(3),
    '六娃': randomScore(3),
    '七娃': randomScore(3),
    '八娃': randomScore(3),
    '九娃': randomScore(3),
    '十娃': randomScore(3),
    '十一娃': randomScore(3),
    '十二娃': randomScore(3),
    '十三娃': randomScore(3),
    '十四娃': randomScore(3),
}

function randomScore(n) {
    var arr=[];
    var sum =0;
    for(var i=0;i<n;i++){
        var num = Math.floor(Math.random()*101);
        sum+= num;
        arr.push(num);
    }
    arr.push(sum);
    return arr;
}
var names=['姓名','语文','数学','英语','总分'];

var getSortFns = function(name) {
    if(name==names[0]) return;
    return function(d1,d2){
        return d2-d1;
    }
}

var tablele = document.getElementById('tableScore');

//构造器
var table = new SortableTable(tablele, scoreData, names, getSortFns);


var SortableTable = function(tableEle,scoreData,names,fnGetSort) {
    this.tableEle = tableEle;
    this.data = scoreData;
    this.names = names;
    this.fnGetSort = fnGetSort;
    this.curOrder=null;
    
    this.init();
}

SortableTable.prototype = {
    init: function(){
        this.curOrder= [];
        for(var key in this.data) {
            this.curOrder.push(key);
            //用名字作索引说明排序顺序
        }
        
        this.render();
    },
    
    render: function(){
        function fn(d){
            return "<td>"+d+"</td>";
        }
        var items = "<tr>";
        items += this.names.map(fn).join("");
        items += "</tr>";
        
        for(var i=0;i<this.curOrder.length;i++) {
            var name = this.curOrder[i];
            items += "<tr><td>"+name+"</td>";
            items += this.data[name].map(fn).join("");
            items += "</tr>";
        }
        
        this.tableEle.innerHTML = items;
        
        this.addSortEle();
    },
    
    addSortEle: function(){
        var self = this;
        
        function addArrowCom(index) {
            var div = document.createElement("div");
            div.style.cssText = "display:inline;width:12px;height 0px;";
            
            for(var i=0;i<2;i++){
                var divArrow = document.createElement('div');
                divArrow.style.cssText="display:inline-block;width:0;height:0;"+
                    "border-left:5px solid transparent; border-right:5px solid transparent;"
                divArrow.style.cssText += (i==0? 
                                          'border-bottom:10px solid pink':
                                          'border-top:10px solidpink;');
                div.appendChild(divArrow);
            }
            
            var td = self.tableEle.children[0].children[0].children[index];
            td.appendChild(div);
            
            var fn = self.fnGetSort(self.names[index]);
            
            div.children[0].onclick = function(e){
                self.curOrder.sort(function(d1,d2){
                    return -fn(self.data[d1][index-1],self.data[d2][index-1]);
                })
                self.render();
            }
            
                        
            div.children[1].onclick = function(e){
                self.curOrder.sort(function(d1,d2){
                    return fn(self.data[d1][index-1],self.data[d2][index-1]);
                
                })
                self.render();
            }
            return div;
        }
        
        for(var i=0;i<this.names.length;i++) {
            var name = this.names[i];
            var fn = this.fnGetSort(name);
            
            if(fn) {
                var ele = addArrowCom(i);
            }
        }
    }
    
    
    
    
}