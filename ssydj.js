//  common
function my(id){
    return document.getElementById(id);
}
//��ȡ����һ��Ԫ�ص�ĳ������
function getStyle(element,attr) {
    return window.getComputedStyle?window.getComputedStyle(element,null)[attr]:element.currentStyle[attr];
}
//������������
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//�ж��Ƿ����е����Զ�����ָ��Ŀ��
        for(var attr in json){
            //͸����
            if(attr=="opacity"){
                var current=getStyle(element,attr)*100;
                var target=json[attr]*100;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//�㼶
                element.style[attr]=json[attr];
            }else{//��������ʽ����
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
            clearInterval(element.timeId);//����ʱ��
            if(fn){
                fn();
            }
        }
        console.log("Ŀ��λ����:"+target+"px,��ǰλ����:"+current+"px,ÿ���ƶ�����:"+step);
    },20);
}
//����
//ͼƬ��ת
var d=0;
function setTime(){
    d+=10;
my("an").style.transform="rotateX("+d+"deg)";
}
setInterval(setTime,50);
//������Ϸ
my("jra").onmouseover= function () {//ע���������¼�����  �������
    this.style.backgroundImage="url(images/index_z_3bb5786.png)" ;
    this.style.backgroundPosition="-179px";
    this.style.backgroundPositionY="0";
};
my("jra").onmouseout= function () {//ע������뿪�¼�����
  this.style.background="url(images/index_z_3bb5786.png) "
};
my("pga").onmouseover= function () {//ע���������¼�����  ƻ������
    this.style.background="url(images/index_z_3bb5786.png) -358px -45px ";
};
my("pga").onmouseout= function () {//ע������뿪�¼�����
    this.style.background="url(images/index_z_3bb5786.png) no-repeat 0px -290px"
};
my("aza").onmouseover= function () {//ע���������¼�����  ��׿����
    this.style.background="url(images/index_z_3bb5786.png) -358px 2px"
};
my("aza").onmouseout= function () {
    this.style.background="url(images/index_z_3bb5786.png) -140px -288px"
};
//�鿴����
my("bj").onmouseover= function () {//ע���������¼�����  ����
    my("bxq").style.color="#4155bd";
    animate(my("bji"),{"width":169,"height":188});
};
my("bj").onmouseout= function () {//ע���������¼�����
    my("bxq").style.color="#102d5b";
    animate(my("bji"),{"width":154,"height":173});
};
my("fd").onmouseover= function () {//ע���������¼�����  �ɵ�
    my("fxq").style.color="#4155bd";
    animate(my("fdi"),{"width":165,"height":165});
};
my("fd").onmouseout= function () {//ע���������¼�����
    my("fxq").style.color="#102d5b";
    animate(my("fdi"),{"width":155,"height":155});
};
my("dz").onmouseover= function () {//ע���������¼�����  ����
    my("dxq").style.color="#fff";
    animate(my("dzi"),{"width":165,"height":165});
};
my("dz").onmouseout= function () {//ע���������¼�����
    my("dxq").style.color="#ced0d7";
    animate(my("dzi"),{"width":155,"height":155});
};
my("mj").onmouseover= function () {//ע���������¼�����  �ؼ�
    my("mxq").style.color="#fff";
    animate(my("mji"),{"width":165,"height":165});
};
my("mj").onmouseout= function () {//ע���������¼�����
    my("mxq").style.color="#ced0d7";
    animate(my("mji"),{"width":155,"height":155});
};
//�ֲ�ͼ
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
my("hj").addEventListener("mouseover",function () {  //ע���������¼�����  ��ɽ�۽�
    this.style.background = "url(images/nav_banner_472eefe.png) -110px 0px";
},false);
var i;
my("hj").addEventListener("click",function () {  //���
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
my("hj").addEventListener("mouseout",function () {  //�뿪
    this.style.background = bg0;
},false);
my("zd").addEventListener("mouseover",function () {  //ע���������¼�����  �Ͻ�֮��
    this.style.background = "url(images/nav_banner_472eefe.png) -110px -103px";
},false);
backgroundImage="url(image)"
my("zd").addEventListener("click",function () {  //���
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
my("zd").addEventListener("mouseout",function () {  //�뿪
    this.style.background = bg1;
},false);
my("jx").addEventListener("mouseover",function () {  //ע���������¼�����  ��������
    this.style.background = "url(images/nav_banner_472eefe.png) -110px -206px";
},false);

my("jx").addEventListener("click",function () {  //���
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
my("jx").addEventListener("mouseout",function () {  //�뿪
    this.style.background = bg2;
},false);

my("qz").addEventListener("mouseover",function () {  //ע���������¼�����  ȫ��ʱװ
    this.style.background = "url(images/nav_banner_472eefe.png) -110px -309px";
},false);
my("qz").addEventListener("click",function () {  //���
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
my("qz").addEventListener("mouseout",function () {  //�뿪
    this.style.background = bg3;
},false);
//����
my("wxa").onmouseover= function () {  //  ΢�� ������
    this.children[0].src="images/wxl1.png";
};
my("wxa").onmouseout= function () {  // ����뿪
    this.children[0].src="images/wxa1.png"
};
my("yxa").onmouseover= function () {     //���� ������
    this.children[0].src="images/yxl1.png";
};
my("yxa").onmouseout= function () {   // ����뿪
    this.children[0].src="images/yxa1.png"
};
my("wba").onmouseover= function () {   //΢��  ������
    this.children[0].src="images/wbl1.png";
};
my("wba").onmouseout= function () {   //  ����뿪
    this.children[0].src="images/wba1.png"
};
my("kja").onmouseover= function () {  //  �ռ�  ������
    this.children[0].src="images/kjl1.png";
};
my("kja").onmouseout= function () {  //  ����뿪
    this.children[0].src="images/kja1.png"
};
//  ��˾���
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
//�ҳ��໤
my("jz").onmouseover= function () {
    this.style.textDecoration="underline";
};
my("jz").onmouseout= function () {
    this.style.textDecoration="none";
}