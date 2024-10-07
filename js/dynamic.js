function music(){
    var music=new Audio("../resource/audio/music2.mp3");
    music.play();
    //   music.pause();
}
function show_time(){
    var time=new Date();
    var hour=time.getHours();
    hour=hour<10?"0"+hour:hour;
    var min=time.getMinutes();
    min=min<10?"0"+min:min;
    var sec=time.getSeconds();
    sec=sec<10?"0"+sec:sec;
    var timestr=hour+":"+min+":"+sec;
    document.time_form.time.value=timestr;
    setTimeout("show_time()",1000);
}
show_time();
// setInterval("show_time()",1000);


// 主题筛选
function change_type( value){
    var ele1=document.getElementById("pic_1");
    var ele2=document.getElementById("pic_2");
    var ele3=document.getElementById("pic_3");
    var ele4=document.getElementById("pic_4");
    var ele5=document.getElementById("pic_5");
   if(value=="现实主义"){
      ele1.src="resource/images/movie1.jpg";
      ele2.src="resource/images/movie2.jpg";
      ele3.src="resource/images/movie3.jpg";
      ele4.src="resource/images/movie4.jpg";
      ele5.src="resource/images/movie6.jpg";

   }else if(value=="温暖治愈"){
      ele1.src="resource/images/movie4.jpg";
      ele2.src="resource/images/movie3.jpg";
      ele3.src="resource/images/movie2.jpg";
      ele4.src="resource/images/movie6.jpg";
      ele5.src="resource/images/movie1.jpg";
   }else if(value=="人生思考"){
      ele1.src="resource/images/movie2.jpg";
      ele2.src="resource/images/movie1.jpg";
      ele3.src="resource/images/movie6.jpg";
      ele4.src="resource/images/movie3.jpg";
      ele5.src="resource/images/movie4.jpg";
   }
}


var flag3=1;
function change_color(){
    if(flag3==1){
       document.body.style.backgroundColor="#fff3b0";
        flag3=2;
    }else if(flag3==2){
       document.body.style.backgroundColor="#f27265";
       flag3=3;
    }else if(flag3==3){
       document.body.style.backgroundColor="pink";
       flag3=4;
    }else if(flag3==4){
       document.body.style.backgroundColor="#eeeeee";
       flag3=1;
    }
}








