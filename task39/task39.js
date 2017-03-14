var TableTool = (function(){
    function init(opts) {
        var instance = new table(opts);
        return instance;
    }
    
    function table(opts){
        this.setOpts(opts);
        this.renderTable();
        this.setTable();
        this.bindEvent();
    }
    table.prototype = {
        
        defaultOpts:{
            append: $("body"),
            data:{
                thead:[],
                sortSwitch:[],
                tbody:{
                }
            },
            isSort:true,
            isFrozen:true,
            headColor:'defaultColor'
        },
        
        setOpts:function(opts){
            if(typeof opts == "object") {
                this.opts = $.extend({},this.defaultOpts,opts);
            }
        },
        
        renderTable:function(){
            var tableDataThead = this.opts.data.thead;
            var tableDataTbody = this.opts.data.tbody;
            var theadstr = '',
                tbodystr = '',
                tpl = '';
            //表头数据添加
            for(var i=0;i<tableDataThead.length;i++){
                var temHeadStr = '',
                    temHeadStr = '<th>'+tableDataThead[i]+'<span></span></th>';
                
            }
            //表身数据添加
            
            this.$table = $(tpl);
            $(this.opts.append).html("");
            $(this.opts.append).append(this.$table);
        },
        setTable:function() {
            if(!this.opts.isSort) {
                this.$table.find('span').hide();
            } else {
                for(var i=0;i<this.opts.data.sortSwitch.length;i++) {
                    if(this.opts.data.sortSwitch[i]==0) {
                        this.$table.find('span').eq(i).hide();
                    }
                }
            }
            if(this.opts.isFrozen) {
                this.frozenTable();
            }
            
            if(this.opts.headColor !='defaultColor') {
                this.$table.find('th').css({
                    background:this.opts.headColor
                });
            } 
        },
        bindEvent: function() {
            var self = this,
                spanList = this.$table.find('.real-head span'),
                sortFlag = {};
            this.sortFlag = sortFlag;
            for(var i=0;i<this.opts.data.thead.length;i++){
                this.sortFlag[i] = true;
            }
            spanList.on('click',function(e){
                var target = e.target,
                    indexSpan ;
                if(self.opts.isFrozen) {
                    indexSpan = spanList.index(target)-self.opts.data.thead.length;
                } else {
                    indexSpan = spanList.index(target);
                }
                console.log(spanList);
                console.log(indexSpan);
                if(self.sortFlag[indexSpan] ==true)  {
                    self.sortUpTable(indexSpan);
                    self.renderTable();
                    self.setTable();
                    self.bindEvent();
                    self.sortFlag[indexSpan] = false;
                } else {
                    self.sortDownTable(indexSpan);
                    self.renderTable();
                    self.setTable();
                    self.bindEvent();
                    self.sortFlag[indexSpan] = true;
                }
                
            })
        },
        frozenTable:function() {
            var $table = this.$table,
                $tableHead = $table.find('thead'),
                tableH = $table.height(),
                headW = $tableHead.width(),
                headStyle = $tableHead.attr('style'),
                headOffsetTop =$tableHead.offset().top,
                headOffsetLeft = $tableHead.offset().left;
            var $headClone = $tableHead.clone()
                            .css('opacity',0)
                            .insertBefore($tableHead)
                            .hide();
            var self  =  this;
            this.$headClone = $headClone;
            
            if(document.body.scrollTop>=(headOffsetTop +tableH)) {
                if(!!$tableHead.attr('data-fixed')) {
                    $tableHead.removeAttr('data-fixed')
                            .removeAttr('style')
                            .attr('style',headStyle);
                    $headClone.hide();
                }
                else if(document.body.scrollTop> headOffsetTop) {
                    if(!!!$tableHead.attr('data-fixed')) {
                        $tableHead.attr('data-fixed',true) 
                                    .css({  
                            position:'fixed',
                            top:0,
                        })
                        $headClone.show();
                    }
                }
            }
        }
        
    }
})
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        