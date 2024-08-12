function hello(){
    div1=document.getElementById("cont1");
    div2=document.getElementById("cont2");
if(div2.style.display==="none")
{
    div2.style.display="flex";
    div1.style.display="none";

}
else{
    div2.style.display="none";
    div1.style.display="flex";
    
}

}

