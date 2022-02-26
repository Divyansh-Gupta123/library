var p;
    function call()
      {bn.innerHTML=`<font size='8' color='red'>${bike.value}</font>`;

       if(bike.value=="hero splender")
       { p=85000;
         bp.innerHTML="<font size='8' color='blue'>85000 /RS</font>";
       }
     else if(bike.value=="ktm")
       { p=215000;
          bp.innerHTML="<font size='8' color='blue'>2,15000 /RS</font>";
       }
    else  if(bike.value=="passion pro")
       { p=99000;
         bp.innerHTML="<font size='8' color='blue'>99000 /RS</font>";
       }
       else  if(bike.value=="apache")
       { p=190000;
         bp.innerHTML="<font size='8' color='blue'>1,90,000 /RS</font>";
       }
       else  if(bike.value=="fz")
       { p=195000;
         bp.innerHTML="<font size='8' color='blue'>1,95,000 /RS</font>";
       }
       else  if(bike.value=="honda shine")
       { p=110000;
         bp.innerHTML="<font size='8' color='blue'>1,10,000 /RS</font>";
       }
       else  if(bike.value=="yamaha mt")
       { p=110000;
         bp.innerHTML="<font size='8' color='blue'>1,10,000 /RS</font>";
       }
       var d=parseInt(p)*2/100;
         bd.innerHTML=`<font color="green" size="8">${d}/RS<font>`;
         bi.src="images.jpg/"+bike.value+".jpg";  
        
        let na= parseInt(p)-parseInt(d);
         net.innerHTML="<font size='9' color='red'>"+na+"/RS</font>"

      }
    