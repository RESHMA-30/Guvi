  function myFunction()
  {
    
    if(window.XMLHttpRequest)
    {
        a=new XMLHttpRequest();
        
    }

    else
    {
        a=new ActiveXObject("Microsoft.XMLHTTP");
    }

    a.onreadystatechange=function(){
      if(a.readystate==4 && a.status==200)
      {
        alert(a.responseText);
      }
    }
   
      var name=document.getElementsByClassName("register-input_field-input").value;
      var email=document.getElementsByClassName("register-input_field-input1").value;
      var password=document.getElementsByClassName("register-input_field-input2").value;

      var val="input="+name+"&input1="+email+"&input2"+password;
      a.open("POST","./save_data.php",true);
      a.setRequestHeader("content-type","application/x-www-form-urlencoded");
      a.setRequestHeader("content-length",val.length);
      a.setRequestHeader("connection","close");
      a.send(val);
  }
function home()
{
  window.location.href="home.html";
}
function back()
{
  window.location.href="login.html";
}
