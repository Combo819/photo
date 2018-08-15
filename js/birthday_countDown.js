// JavaScript Document


window.onload = function () {
    //屏幕宽高
    "use strict";
    var screenW = document.documentElement.clientWidth;
    var screenH = document.documentElement.clientHeight;
    var body = document.getElementsByTagName('body')[0];

    for (var i = 0; i < 150; i++) {
        var span = document.createElement('span');
        span.innerHTML = '<img src="images/1.png" />';
        body.appendChild(span);

        var x = parseInt(Math.random() * screenW);
        var y = parseInt(Math.random() * screenH);

        span.style.left = x + "px";
        span.style.top = y + "px";


        span.style.animationDelay = Math.random() + "s";

        var scale = Math.random() + 0.2;
        //注意下面代表css的scale要变成字符串，不然js会把这当成js函数之类的
        span.style.transform = 'scale(' + scale + ', ' + scale + ')';
    }

    setInterval(function () {
        var date = new Date();
        var currentTime = date.getTime();
        var nextDate = new Date('2018/10/27 0:0:0');
        var nextTime = nextDate.getTime();

        var allTime = nextTime - currentTime;

        // 7. 把毫秒转成秒
        var allSecond = parseInt(allTime / 1000);

        // 8.转化
        var d = size(parseInt(allSecond / 3600 / 24));
        var h = size(parseInt(allSecond / 3600 % 24));
        var m = size(parseInt(allSecond / 60 % 60));
        var s = size(parseInt(allSecond % 60));

        var span = document.getElementById('sp');
        span.innerText = d + '天' + h + '小时' + m + '分钟' + s + '秒';
    }, 1000);

    function size(num) {
        return num >= 10 ? num : '0' + num;
    }

    var ps = document.getElementById('ps');
    console.log(ps);

    //添加图片
    for (var j = 0; j < 13; j++) {
        //创建li标签
        var li = document.createElement('li');
        ps.appendChild(li);

        //创建img标签
        var img = document.createElement('img');
        img.src = 'images/' + (j + 1) + '.jpg';//斜杠不需要转义？

        //将img接到li上面去
        li.appendChild(img);
    }

    //照片墙宽度
    var picW = screenW;
    //照片墙高度
    var picH = screenH - 378;



    var allLis = ps.children;

    for (var i = 0; i < allLis.length; i++) {
        //获取所有li
        var li = allLis[i];
        
        //需要的位移
        var picX = Math.random() * picW;
        picX = parseInt(picX);
        var picY = (Math.random() * picH) + 218;
        picY = parseInt(picY);

        //偏移
        li.style.left = picX + 'px';
        li.style.top = picY + 'px';

        //旋转
        li.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
        li.style.transition = 'all 1s';
        
        //点击后放大居中
        li.onclick = function(){
            //排他思想
            for(var k = 0; k<allLis.length; k++){
                allLis[k].className = '';
            }
            this.className = 'selected';
            this.onclick = function(){
                this.className = 'us';
            };
        }
    }
    


};
