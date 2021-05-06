function ui()
{
    x=document.getElementById("jo");
    // x.type="text";
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    

}





function l()

{





    io=document.getElementById("jo");
    ao=document.getElementById("na");

    if(io.value!=""&& ao.value!="")
    {

      location.href = "index.html";
    
    }

    else{
        location.reload();
    }
}


function si()
{
      location.href = "fisign.html";
    
  }


function yu()
{
  location.href = "index1.html";
}