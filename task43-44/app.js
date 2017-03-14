var waterfall = new Waterfall({
    containerSelector: '.waterfall',
    boxSelector:'.waterfallBox',
    column:4
});

buttonEvent();
displayImage();
loadMore();


function buttonEvent(){
    var header = document.getElementsByTagName('header')[0];
    header.addEventListener('click',function(e){
        switch(e.target.id) {
            case 'addColumn' :
                waterfall.column++;
                waterfall.compose(true);
                break;
            case 'delColumn' :
                if(waterfall.column>0) {
                    waterfall.column--;
                    waterfall.compose(true);
                }
                break;
            case 'addBox' :
                Waterfall.addBox(newNode()());
                waterfall.boxes.push(newNode()());
                break;
        }
    },false);
}


function loadMore() {
    window.onscroll = function() {
        var screenHeight = document.documentElement.scrollTop||document.body.scrollTop +
            document.documentElement.clientHeight || document.body.clientHeight;
        var container = waterfall.columns[getMinHeightIndex];
        var containerHeight = container.offsetTop+container.offsetHeight;
        if(containerHeight < screenHeight) {
            waterfall.addBox(newNode()());
            waterfall.boxes.push(newNode()());
        }
    }
}


function displayImage(){
    document.getElementsByClassName('waterfall').addEventListener('click',function(e){
        if(e.target.tagName =="IMG") {
            var display = document.getElementById('display');
            var img = display.querySelector('img');
            img.setAttribute('src',e.target.getAttribute('src'));
            display.className ="display";
            display.addEventListener("click",function(){
                display.className = "display hidden";
            });
        }
    },false);
}



















