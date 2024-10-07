var flag2=1;
function change_bg(){
var ele=document.getElementById("p1");//得到首页的大图
if(flag2==1){
ele.src="resource/images/p3.jpg";
flag2=2;
}else if(flag2==2){
    ele.src="resource/images/p5.png";
    flag2=3;
}else if(flag2==3){
    ele.src="resource/images/p4.png";
    flag2=1;
}
setTimeout("change_bg()",10000);
}
change_bg();