

var nameinput = document.getElementById("name");
var password = document.getElementById("password");
var password2 = document.getElementById('password2');
var email = document.getElementById('email');
var phone = document.getElementById('phone');

var info = [
            {id:"name",yes:"名称格式正确",no:"姓名不能为空",flag:false},
            {id:"password",yes:"密码可用",no:"密码格式错误",flag:false},
            {id:"password2",yes:"密码输入一致",no:"密码输入不一致",flag:false},
            {id:"email",yes:"格式正确",no:"邮箱格式错误",flag:false},
            {id:"phone",yes:"格式正确",no:"格式错误",flag:false}];


window.onload = function(){
    password.onblur = function(){ validate(info[1].id,info[1].yes,info[1].no);};
    nameinput.onblur = function(){validate(info[0].id,info[0].yes,info[0].no);};
    password2.onblur = function() {validate(info[2].id,info[2].yes,info[2].no);};
    email.onblur = function(){validate(info[3].id,info[3].yes,info[3].no);};
    phone.onblur = function(){validate(info[4].id,info[4].yes,info[4].no);};
};

function validate(id,yesword,noword) {
    var input = document.getElementById(id);
    var value = input.value;
    var span = document.getElementById(id+'_tip');
    var flag =false;
    switch(id){
        
        case "password":
            flag=/^\S{4,16}$/.test(value);
            info[1].flag = flag;
            break;
        case "name":
            if(countLength(value)>=4 && countLength(value)<=16 ) {
                flag = true;
            }
            info[0].flag = flag;
            break;
        case "password2":
            flag=(document.getElementById("password").value==value);
            info[2].flag = flag;
            break;
        case "email":
            flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
            info[3].flag = flag;
            break;
        case "phone":
            flag=/^[1][0-9]{10}$/.test(value);
            info[4].flag = flag;
            break;
    }
    if(flag) {
        span.innerHTML = yesword;
        input.className = "green";
        span.className = "green";
    } else {
        span.innerHTML = noword;
        input.className = "red";
        span.className = "red";
    }
}



document.getElementById('submit').onclick = function(e) {
    e.preventDefault();
    var flag = true;
    for(var i=0;i<5;i++){
        if(!info[i].flag)  {
            flag = false;
        }
    }
    if(flag) {
        alert('提交成功');
    } else {
        alert('提交失败');
    }
};


function countLength(str) {
    var len = 0;
    for(var i=0;i<str.length;i++) {
        var code = str.charCodeAt(i);
        if(code>=0 && code <=128) {
            len +=1;
        } else {
            len +=2;
        }
    }
    return len;
};