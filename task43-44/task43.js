  var mixphoto_1 = new Mixphoto({
    containerSelector: '.mixphotoContainer-1'
  })
  var mixphoto_2 = new Mixphoto({
    containerSelector: '.mixphotoContainer-2'
  })
  var mixphoto_3 = new Mixphoto({
    containerSelector: '.mixphotoContainer-3'
  })
  var mixphoto_4 = new Mixphoto({
    containerSelector: '.mixphotoContainer-4'
  })
  var mixphoto_5 = new Mixphoto({
    containerSelector: '.mixphotoContainer-5'
  })
  var mixphoto_6 = new Mixphoto({
    containerSelector: '.mixphotoContainer-6'
  })
  
  
  
  var Mixphoto = function() {
      
      
      
      
  }
  
  Mixphoto.prototype = 
      
      
      
      
/**
  *
  * Mixphoto v0.0.1
  * desciption, by StevenYu.
  * Use with mixphoto.css
  * @author StevenYu
  */

/**
  *
  * Mixphoto v0.0.1
  * description, by StoneTsang.
  * Use with mixphoto.css
  * @author StoneTsang
  */
      
;(function (foot,factory) {
    if(typeof define ==="function" && define.amd ){
        define([],factory);
    } else if( typeof module ==="object" && module.exports) {
        module.exports = factory();
    } else {
        //Browser globals (root is window)
        root.Mixphoto = factory();
    }
}(this,function() {
    
    'use strict';
    
    /**
      *
      * @param {Object} opts - options used in plugin
      * @constructor
      */
    
    var Mixphoto =function(opts) {
        opts =  opts|| {};// 如果不存在则设置为对象
        var containerSelector = opts.containerSelector || ".photoContaienr";
        var boxSelector = opts.boxSelector || '.photoBox';
        var boxes = document.querySelector(containerSelector).querySelectorAll(boxSelector);
        this.container = document.querySelector(containerSelector);
        
        // a square for the number 2 images when the length is 3 or 5
        if(boxes.length===3) {
            this.setSquare = function() {
                var sideLength = parseFloat(this.container.clientHeight) /2;
                boxes[0].style.width = (this.container.clientWidth-sideLength) +'px';
                boxes[1].style.height = sideLength +'px';
                boxes[1].style.width = sideLength +'px';
                boxes[2].style.height = sideLength +'px';
                boxes[2].style.width = sideLength +'px';  
            };
        }  else if(boxes.length===5) {
            this.setSquare = function() {
                var sideLength = parseFloat(this.container.clientWidth /3 ) ;
                boxes[0].style.width = (sideLength * 2) +'px';
                boxes[1].style.width = sideLength +'px';
                boxes[1].style.height = sideLength + 'px';
                boxes[2].style.width = sideLength +'px';
                boxes[2].style.height = parseFloat(this.container.clientHeight-sideLength) +'px';   
            };
        }
        
         this.init(boxes.length);
        
        
        
    }
    
    Mixphoto.prototype = {
        
        /*
         *
         * @param {number} imageNum
         */
        //如果是3、5以外的📚则不存在setSquare
        
        init: function(imageNum) {
            this.container.className  += " photo-" +imageNum;
            if(this.setSquare) this.setSquare();
        }
        
    };
    return Mixphoto;
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}));