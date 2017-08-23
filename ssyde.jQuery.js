//ȫ��

$(".gd").animate({"width":"400px"},2000, function () {
    $("#qj").hide();
    $("#dd").animate({"left":"0px","top":"0px","opacity":0.5,"border-radius": "50%"},1000, function () {
        $(this).css({"width":"1348px","height":"3256px","display":"none","opacity":1,"border-radius": "0%"});
        $("#dd").fadeIn(500);

    });
});
////����
//ͼƬ��ת
var d=0;
function setTime(){
    d+=10;
    $("#an").css("transform","rotateX("+d+"deg)");
}
setInterval(setTime,50);
//������Ϸ
$("#jra").mouseenter(function () {//   �����¼�  �������
    $(this).css({"background":"url(images/index_z_3bb5786.png) -179px 0"});
});
$("#jra").mouseleave(function () {  //�뿪�¼�
    $(this).css({"background":"url(images/index_z_3bb5786.png)"});
});
$("#pga").mouseenter(function () {//   �����¼�  ƻ������
    $(this).css({"background":"url(images/index_z_3bb5786.png) -358px -45px"});
});
$("#pga").mouseleave(function () {  //�뿪�¼�
    $(this).css({"background":"url(images/index_z_3bb5786.png) 0px -290px"});
});
$("#aza").mouseenter(function () {//   �����¼�  ��׿����
    $(this).css({"background":"url(images/index_z_3bb5786.png) -358px 2px"});
});
$("#aza").mouseleave(function () {  //�뿪�¼�
    $(this).css({"background":"url(images/index_z_3bb5786.png) -140px -288px"});
});
//�鿴����
$("#bj").mouseenter(function () {  //�����¼�  ����
    $("#bxq").css("color","#4155bd");
    $("#bji").stop().animate({'width':'169px','height':'188px'},500);

});
$("#bj").mouseleave(function () {  // �뿪�¼�
    $("#bxq").css("color","#102d5b");
    $("#bji").stop().animate({'width':'154px','height':'173px'},500);
});
$("#fd").mouseenter(function () {  //�����¼�  �ɵ�
    $("#fxq").css("color","#4155bd");
    $("#fdi").stop().animate({'width':'165px','height':'165px'},500);

});
$("#fd").mouseleave(function () {  // �뿪�¼�
    $("#fxq").css("color","#102d5b");
    $("#fdi").stop().animate({'width':'155px','height':'155px'},500);
});
$("#dz").mouseenter(function () {  //�����¼�  ����
    $("#dxq").css("color","#fff");
    $("#dzi").stop().animate({'width':'165px','height':'165px'},500);

});
$("#dz").mouseleave(function () {  // �뿪�¼�
    $("#dxq").css("color","#ced0d7");
    $("#dzi").stop().animate({'width':'155px','height':'155px'},500);
});
$("#mj").mouseenter(function () {  //�����¼�  �ؼ�
    $("#mxq").css("color","#fff");
    $("#mji").stop().animate({'width':'165px','height':'165px'},500);

});
$("#mj").mouseleave(function () {  // �뿪�¼�
    $("#mxq").css("color","#ced0d7");
    $("#mji").stop().animate({'width':'155px','height':'155px'},500);
});
//�ֲ�ͼ
//var bg0="url(images/nav_banner_472eefe.png)";
var bg0;
var bg1="url(images/nav_banner_472eefe.png) 0 -103px";
var bg2="url(images/nav_banner_472eefe.png) 0 -206px";
var bg3="url(images/nav_banner_472eefe.png) 0 -309px";
function csh(){
    bg0="url(images/nav_banner_472eefe.png)";
    bg1="url(images/nav_banner_472eefe.png) 0 -103px";
    bg2="url(images/nav_banner_472eefe.png) 0 -206px";
    bg3="url(images/nav_banner_472eefe.png) 0 -309px";
    $("#hj").css("background","url(images/nav_banner_472eefe.png)");
    $("#zd").css("background","url(images/nav_banner_472eefe.png) 0 -103px");
    $("#jx").css("background","url(images/nav_banner_472eefe.png) 0 -206px");
    $("#qz").css("background","url(images/nav_banner_472eefe.png) 0 -309px");
    $("#lj").css({"opacity":0});
    $("#jj").css({"opacity":0,"left":"-100px"});
    $("#rw").css({"opacity":0,"right":"-240px"});
}
function dt(){
    $("#lj").animate({"left":"220px","opacity":1});
    $("#jj").animate({"left":"70px","opacity":1});
    $("#rw").animate({"right":"0px","opacity":1});
}
var i=1;
$("#hj").mouseenter(function () {//�����¼�   ��ɽ�۽�
    $(this).css("background","url(images/nav_banner_472eefe.png) -110px 0px");
});
$("#hj").click(function () {//����¼�
    if(i!=1){
        csh();
        $("#lj").css("left","900px");
        $(this).css("background","url(images/nav_banner_472eefe.png) -110px 0px");
        bg0="url(images/nav_banner_472eefe.png) -110px 0px";
        $("#lj").css("backgroundImage","url(images/title1_dd0ab90.png)");
        $("#jj").css("backgroundImage","url(images/bg1_a7d8fc0.png)");
        $("#rw").css({"background":"url(images/person1_a0947b9.png) -750px 0"});
        dt();
        i=1;
    }

});
$("#hj").mouseleave(function () {// �뿪�¼�
   $(this).css("background",bg0);
});
$("#zd").mouseenter(function () {//�����¼�  �Ͻ�֮��
    $(this).css("background","url(images/nav_banner_472eefe.png) -110px -103px");
});
$("#zd").click(function () {//����¼�
    if(i!=2){
        csh();
        $("#lj").css("left","-400px");
        $(this).css("background","url(images/nav_banner_472eefe.png) -110px -103px");
        bg1="url(images/nav_banner_472eefe.png) -110px -103px";
        $("#lj").css("backgroundImage","url(images/title2_aa6997b.png)");
        $("#jj").css("backgroundImage","url(images/bg2_86c003c.png)");
        $("#rw").css({"background":"url(images/person2_b9d9b30.png) -650px 0"});
        dt();
        i=2;
    }


});
$("#zd").mouseleave(function () {// �뿪�¼�
    $(this).css("background",bg1);
});
$("#jx").mouseenter(function () {//�����¼�  ��������
    $(this).css("background","url(images/nav_banner_472eefe.png) -110px -206px");
});
$("#jx").click(function () {//����¼�
    if(i!=3){
        csh();
        $("#lj").css("left","900px");
        $(this).css("background","url(images/nav_banner_472eefe.png) -110px -206px");
        bg2="url(images/nav_banner_472eefe.png) -110px -206px";
        $("#lj").css("backgroundImage","url(images/title3_b7d7543.png)");
        $("#jj").css("backgroundImage","url(images/bg3_05787d2.png)");
        $("#rw").css({"background":"url(images/person3_a9a2163.png) -750px 0"});
        dt();
        i=3;
    }

});
$("#jx").mouseleave(function () {// �뿪�¼�
    $(this).css("background",bg2);
});
$("#qz").mouseenter(function () {//�����¼�  ȫ��ʱװ
    $(this).css("background","url(images/nav_banner_472eefe.png) -110px -309px");
});
$("#qz").click(function () {//����¼�
    if(i!=4){
        csh();
        $("#lj").css("left","-400px");
        $(this).css("background","url(images/nav_banner_472eefe.png) -110px -309px");
        bg3="url(images/nav_banner_472eefe.png) -110px -309px";
        $("#lj").css("backgroundImage","url(images/title4_38cd383.png)");
        $("#jj").css("backgroundImage","url(images/bg4_5992bf8.png)");
        $("#rw").css({"background":"url(images/person4_bdf9786.png) -640px 0"});
        dt();
        i=4;
    }

});
$("#qz").mouseleave(function () {// �뿪�¼�
    $(this).css("background",bg3);
});
//����
$("#wxa").mouseenter(function () {//΢��  ������
    $(this).find("img").attr("src","images/wxl1.png");
});
$("#wxa").mouseleave(function () {//  ����뿪
    $(this).find("img").attr("src","images/wxa1.png");
});
$("#yxa").mouseenter(function () {//���� ������
    $(this).find("img").attr("src","images/yxl1.png");
});
$("#yxa").mouseleave(function () {//  ����뿪
    $(this).find("img").attr("src","images/yxa1.png");
});
$("#wba").mouseenter(function () {//΢��  ������
    $(this).find("img").attr("src","images/wbl1.png");
});
$("#wba").mouseleave(function () {//  ����뿪
    $(this).find("img").attr("src","images/wba1.png");
});
$("#kja").mouseenter(function () {//�ռ�  ������
    $(this).find("img").attr("src","images/kjl1.png");
});
$("#kja").mouseleave(function () {//  ����뿪
    $(this).find("img").attr("src","images/kja1.png");
});
//��˾���
$("#uu a").mouseenter(function () {// ������
        $(this).css("textDecoration","underline");
});
$("#uu a").mouseleave(function () {//����뿪
    $(this).css("textDecoration","none");
});
//�ҳ��໤
$("#jz").mouseenter(function () {// ������
    $(this).css("textDecoration","underline");
});
$("jz").mouseleave(function () {//����뿪
    $(this).css("textDecoration","none");
});


