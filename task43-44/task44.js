var Waterfall = function(opts) {
    
    var opts = opts || {};
    var containerSelector = opts.containerSelector || 'waterfallContainer';
    var boxSelector = opts.boxSelector || 'waterfallBox';
    this.column = opts.column || 1;
    this.container = document.querySelector(containerSelector);
    this.boxes = this.container? this.container.querySelectorAll(boxSelector):[];
    
    this.compose(); //init
    
    var that = this;
    window.onload = function() {
        that.compose(true);
    }
}

Warerfall.prototype = {
    
    initColumn: function(columnNum ){
        
        this.columns =[];
        for(var i=0;i<columnNum;i++ ){
            var div = document.createElement('div');
            div.style.width = (100/columnNum) +'%';
            div.setAttribute('class','waterfallColumn');
            //data update
            this.columns.push(div);
            //html update
            this.container.appendChild(div);
        }
    },
    
    getMinHeightIndex: function() {
        var min = this.columns[0].clientHeight;
        var index = 0;
        for(var i=0;i<this.columns.length;i++){
            if(this.columns[i].clientHeight<min) {
                min = this.columns[i].clientHeight;
                index = i;
            }
        }
        return index;
        
    },
    
    
    compose:function(force) {
        if(force) {
            for(var i=0;i<this.columns.length;i++) {
                this.columns[i].remove();
            }
        }//全部清空后重新装入
        
        //调整为新列数
        this.initColumn();
        //compose 
        
        for(var i=0,l = this.boxes.length;i<l;i++){
            var box = this.boxes[i];
            this.addBox(box);
        }
    },
    
    addBox: function(ele) {
        var index = this.getMinHeightIndex();
        var column = this.columns[column];
        column.appendChild(ele);
    }
    
    return Waterfall;
}