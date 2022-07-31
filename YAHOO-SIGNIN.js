/*
m=document.querySelector(".icon.mail");
m.click();

window.onload = function() {       
    setTimeout(function(){
        //Your function here
    },5000); 
}

*/
//m=document.querySelector("#persistent");
//m.click();
let sp=0,a=0;
function login()
{
     m=document.getElementById("login-landing").getElementsByTagName("input");
     
     console.log(m)
     
     for(var i=0;i<m.length;i++)
       {
          console.log(m[i].id )
         
         if((m[i].id==="persistent"))
              {
                 console.log(" id found")
                      m[i].value="n";
              }
         
         if(m[i].id==="login-username")
              {
                 console.log(" id found")
                      m[i].value="TEST-ID";
              }
         
         if(m[i].id==="login-signin")
              {
                 console.log(" id found")
                      m[i].click();
              }
       }
}

function slp() {
  a=(a+1);
   if (a>(5)) {
        clearInterval(slpv);
     a=0;
    }
   else
     {
       console.log(a)
     }
}

m=document.querySelector(".icon.mail");
m.click();
slpv=setInterval(slp,3000);
login();
