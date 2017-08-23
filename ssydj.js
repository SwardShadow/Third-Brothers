//  common
function my(id){
    return document.getElementById(id);
}
//获取任意一个元素的某个属性
function getStyle(element,attr) {
    return window.getComputedStyle?window.getComputedStyle(element,null)[attr]:element.currentStyle[attr];
}
//缓动动画函数
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//判断是否所有的属性都到达指定目标
        for(var attr in json){
            //透明度
            if(attr=="opacity"){
                var current=getStyle(element,attr)*100;
                var target=json[attr]*100;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//层级
                element.style[attr]=json[attr];
            }else{//正常的样式属性
                var current=parseInt(getStyle(element,attr));
                var target=json[attr];
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.timeId);//清理定时器
            if(fn){
                fn();
            }
        }
        console.log("目标位置是:"+target+"px,当前位置是:"+current+"px,每次移动步数:"+step);
    },20);
}
//顶部
//图片旋转
var d=0;
function setTime(){
    d+=10;
my("an").style.transform="rotateX("+d+"deg)";
}
setInterval(setTime,50);
//下载游戏
my("jra").onmouseover= function () {//注册鼠标进入事件函数  进入官网
    this.style.backgroundImage="url(images/index_z_3bb5786.png)" ;
    this.style.backgroundPosition="-179px";
    this.style.backgroundPositionY="0";
};
my("jra").onmouseout= function () {//注册鼠标离开事件函数
  this.style.background="url(images/index_z_3bb5786.png) "
};
my("pga").onmouseover= function () {//注册鼠标进入事件函数  苹果下载
    this.style.background="url(images/index_z_3bb5786.png) -358px -45px ";
};
my("pga").onmouseout= function () {//注册鼠标离开事件函数
    this.style.background="url(images/index_z_3bb5786.png) no-repeat 0px -290px"
};
my("aza").onmouseover= function () {//注册鼠标进入事件函数  安卓下载
    this.style.background="url(images/index_z_3bb5786.png) -358px 2px"
};
my("aza").onmouseout= function () {
    this.style.background="url(images/index_z_3bb5786.png) -140px -288px"
};
//查看详情
my("bj").onmouseover= function () {//注册鼠标进入事件函数  宝剑
    my("bxq").style.color="#4155bd";
    animate(my("bji"),{"width":169,"height":188});
};
my("bj").onmouseout= function () {//注册鼠标进入事件函数
    my("bxq").style.color="#102d5b";
    animate(my("bji"),{"width":154,"height":173});
};
my("fd").onmouseover= function () {//注册鼠标进入事件函数  飞刀
    my("fxq").style.color="#4155bd";
    animate(my("fdi"),{"width":165,"height":165});
};
my("fd").onmouseout= function () {//注册鼠标进入事件函数
    my("fxq").style.color="#102d5b";
    animate(my("fdi"),{"width":155,"height":155});
};
my("dz").onmouseover= function () {//注册鼠标进入事件函数  打坐
    my("dxq").style.color="#fff";
    animate(my("dzi"),{"width":165,"height":165});
};
my("dz").onmouseout= function () {//注册鼠标进入事件函数
    my("dxq").style.color="#ced0d7";
    animate(my("dzi"),{"width":155,"height":155});
};
my("mj").onmouseover= function () {//注册鼠标进入事件函数  秘籍
    my("mxq").style.color="#fff";
    animate(my("mji"),{"width":165,"height":165});
};
my("mj").onmouseout= function () {//注册鼠标进入事件函数
    my("mxq").style.color="#ced0d7";
    animate(my("mji"),{"width":155,"height":155});
};
//轮播图
function csh(){
    bg0=my("hj").style.background = "url(images/nav_banner_472eefe.png) ";
    bg1=my("zd").style.background = "url(images/nav_banner_472eefe.png) 0 -103px";
    bg2=my("jx").style.background = "url(images/nav_banner_472eefe.png) 0 -206px";
    bg3=my("qz").style.background = "url(images/nav_banner_472eefe.png) 0 -309px";

    my("lj").opacity="0";
    my("jj").style.left="-100px";
    my("jj").opacity="0";
    my("rw").style.right="-240px";
    my("rw").opacity="0";
}
function dt(){
    animate(my("lj"),{"left":220,"opacity":1});
    animate(my("jj"),{"left":70,"opacity":1});
    animate(my("rw"),{"right":0,"opacity":1});
}
//var bg0=my("hj").style.background = "url(images/nav_banner_472eefe.png) ";
var bg1=my("zd").style.background = "url(images/nav_banner_472eefe.png) 0 -103px";
var bg2=my("jx").style.background = "url(images/nav_banner_472eefe.png) 0 -206px";
var bg3=my("qz").style.background = "url(images/nav_banner_472eefe.png) 0 -309px";
my("hj").addEventListener("mouseover",function () {  //注册鼠标进入事件函数  华山论剑
    this.style.background = "url(images/nav_banner_472eefe.png) -110px 0px";
},false);
var i;
my("hj").addEventListener("click",function () {  //点击
    if(i!=this.id){
        csh();
        my("lj").style.left="900px";
        bg0=this.style.background = "url(images/nav_banner_472eefe.png) -110px 0px";
        my("lj").style.backgroundImage="url(images/title1_dd0ab90.png)";
        my("jj").style.backgroundImage="url(images/bg1_a7d8fc0.png)";
        my("rw").style.backgroundImage="url(images/person1_a0947b9.png)";
        my("rw").style.backgroundPosition="-750px 0";
        dt();
        i=this.id;
    }

},false);
my("hj").addEventListener("mouseout",function () {  //离开
    this.style.background = bg0;
},false);
my("zd").addEventListener("mouseover",function () {  //注册鼠标进入事件函数  紫禁之巅
    this.style.background = "url(images/nav_banner_472eefe.png) -110px -103px";
},false);
backgroundImage="url(image)"
my("zd").addEventListener("click",function () {  //点击
    if (i != this.id) {
        csh();
        my("lj").style.left = "-400px";
        bg1 = this.style.background = "url(images/nav_banner_472eefe.png) -110px -103px";
        my("lj").style.backgroundImage = "url(images/title2_aa6997b.png)";
        my("jj").style.backgroundImage = "url(images/bg2_86c003c.png)";
        my("rw").style.backgroundImage = "url(images/person2_b9d9b30.png)";
        my("rw").style.backgroundPosition = "-650px 0";
        dt();
        i=this.id;
    }
},false);
my("zd").addEventListener("mouseout",function () {  //离开
    this.style.background = bg1;
},false);
my("jx").addEventListener("mouseover",function () {  //注册鼠标进入事件函数  绝招新修
    this.style.background = "url(images/nav_banner_472eefe.png) -110px -206px";
},false);

my("jx").addEventListener("click",function () {  //点击
    if(i!=this.id) {
        csh();
        my("lj").style.left = "900px";
        bg2 = this.style.background = "url(images/nav_banner_472eefe.png) -110px -206px";
        my("lj").style.backgroundImage = "url(images/title3_b7d7543.png)";
        my("jj").style.backgroundImage = "url(images/bg3_05787d2.png)";
        my("rw").style.backgroundImage = "url(images/person3_a9a2163.png)";
        my("rw").style.backgroundPosition = "-750px 0";
        dt();
        i=this.id;
    }
},false);
my("jx").addEventListener("mouseout",function () {  //离开
    this.style.background = bg2;
},false);

my("qz").addEventListener("mouseover",function () {  //注册鼠标进入事件函数  全新时装
    this.style.background = "url(images/nav_banner_472eefe.png) -110px -309px";
},false);
my("qz").addEventListener("click",function () {  //点击
    if(i!=this.id) {
        csh();
        my("lj").style.left = "-400px";
        bg3 = this.style.background = "url(images/nav_banner_472eefe.png) -110px -309px";
        my("lj").style.backgroundImage = "url(images/title4_38cd383.png)";
        my("jj").style.backgroundImage = "url(images/bg4_5992bf8.png)";
        my("rw").style.backgroundImage = "url(images/person4_bdf9786.png)";
        my("rw").style.backgroundPosition = "-640px 0";
        dt();
        i=this.id;
    }
},false);
my("qz").addEventListener("mouseout",function () {  //离开
    this.style.background = bg3;
},false);
//分享
my("wxa").onmouseover= function () {  //  微信 鼠标进入
    this.children[0].src="images/wxl1.png";
};
my("wxa").onmouseout= function () {  // 鼠标离开
    this.children[0].src="images/wxa1.png"
};
my("yxa").onmouseover= function () {     //易信 鼠标进入
    this.children[0].src="images/yxl1.png";
};
my("yxa").onmouseout= function () {   // 鼠标离开
    this.children[0].src="images/yxa1.png"
};
my("wba").onmouseover= function () {   //微博  鼠标进入
    this.children[0].src="images/wbl1.png";
};
my("wba").onmouseout= function () {   //  鼠标离开
    this.children[0].src="images/wba1.png"
};
my("kja").onmouseover= function () {  //  空间  鼠标进入
    this.children[0].src="images/kjl1.png";
};
my("kja").onmouseout= function () {  //  鼠标离开
    this.children[0].src="images/kja1.png"
};
//  公司简介
var lis=my("uu").children;
for(var i=0;i<lis.length;i++){
    if(lis[i].children[0]){
        var as=lis[i].children[0];
        as.onmouseover= function () {
            this.style.textDecoration="underline";
        };
        as.onmouseout= function () {
            this.style.textDecoration="none";
        };
    }
}
//家长监护
my("jz").onmouseover= function () {
    this.style.textDecoration="underline";
};
my("jz").onmouseout= function () {
    this.style.textDecoration="none";
}