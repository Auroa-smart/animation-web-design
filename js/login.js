function login(){
    var user=new Array();
    var form=document.getElementById("login-form");
    var targetElements=form.getElementsByTagName("input");
    for(var i=0;i<targetElements.length;i++){
        user.push(targetElements[i]);
    }
   var name=user[0].value;
   var pwd=user[1].value;
   if(name==0){
    alert("请输入用户名！");
   }else if(pwd==0){
    alert("请输入密码！");
   }else{ 
    names.findIndex()
        
              alert(name+"欢迎登录！");
         window.location.href="../index.html";
       
   }  
}
function sign(){
    var user=new Array();
    var form=document.getElementById("sign-form");
    var targetElements=form.getElementsByTagName("input");
    for(var i=0;i<targetElements.length;i++){
        user.push(targetElements[i]);
    }
   var name=user[0].value;
   var pwd=user[1].value;
   if(name==0){
    alert("请输入用户名！");
   }else if(pwd==0){
    alert("请输入密码！");
   }else{
    alert(name+"注册成功！");
    window.location.href="login.html";
   }
} 