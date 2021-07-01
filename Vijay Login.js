function result(e)
{
   var username=document.getElementById("username").value;
   var password=document.getElementById("password").value; 
   if(username ==="VIJAY" && password ==="5194") 
   {
      document.location.href= "D:/HTML/Quizapp.html";
   }
   else
   {
       console.log("Invalid Credentials");
   }

   e.preventDefault();
}
result();
