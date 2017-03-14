/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */


var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    /////////验证处理
    var city = document.getElementById('aqi-city-input').value.trim();
    var val = document.getElementById('aqi-value-input').value.trim();
    if( !city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名称必须为中英文o(∩_∩)o");
        return;
    }
    if( !val.match(/^\d+$/)) {
        alert("空气质量必须为整数o(∩_∩)o");
        return;
    }
    aqiData[city] = val;
    

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    document.getElementById('aqi-table').innerHTML = "";
    var text = "<td>城市</td><td>空气质量</td><td>操作</td>";
    for(var city in aqiData){
        var temp = '<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button>删除</button></td></tr>';
        text += temp;
    }
    document.getElementById('aqi-table').innerHTML = text;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
  // do sth.
    var tr = target.parentElement.parentElement;
    var city = tr.children[0].innerHTML;//城市td元素
    delete aqiData[city];
    renderAqiList();
}

function init() {



  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick = addBtnHandle;
    

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var table = document.getElementById('aqi-table');
    var arrBtnDel = table.getElementsByClassName("del-btn");
    
    table.addEventListener("click",function(event){
        if(event.target && event.target.nodeName=="BUTTON") {
            delBtnHandle(event.target);
        }
    })   
}

init();