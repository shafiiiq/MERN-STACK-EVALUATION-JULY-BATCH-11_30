function Toggle(){
    div1=document.getElementById('sidebar');
    div2=document.getElementById('side');
    div3=document.getElementById('boxes');
    div4=document.getElementById('topp');
    div5=document.getElementById('topslide');
    div8=document.getElementById('likedcontainer');  
    div9=document.getElementById('likebottom');
    div13=document.getElementById('youmain');
    if(div1.style.display==='none'){
        div1.style.display='block';
        div2.style.display='none';
        div4.style.margin="0px 0px 0px 220px";
        div4.style.width="1109px";
       div3.style.margin="100px 0px 0px 220px";
       div3.style.width="100px";
       div8.style.width="1282px";
       div8.style.margin="0px 0px 0px 200px";
       div9.style.width="600px";
       div13.style.margin="0px 0px 0px 240px";
    }
    else{
        div2.style.display='block';
        div1.style.display='none';
        div4.style.margin="0px 0px 0px 62px";
         div4.style.width="1255px";
         div3.style.margin="100px 0px 0px 62px";
         div3.style.width="400px";
         div8.style.margin="0px 0px 0px 62px";
         div9.style.width="800px";
         div13.style.margin="0px 0px 0px 140px";
    }
        
}

function short(){
    div6=document.getElementById('shortsmain');
    div4=document.getElementById('topp');
    div7=document.getElementById('boxes');
    div8=document.getElementById('likedcontainer');    
    div10=document.getElementById('youmain'); 
    if(div6.style.display==='none'){
        div6.style.display='flex';
        div4.style.display='none';
        div7.style.display='none';
        div8.style.display='none';
        div10.style.display='none';
    }
    else{
        div6.style.display='flex';
        div4.style.display='none';
        div7.style.display='none';
        div8.style.display='none';
        div10.style.display='none';
    }
}
function home(){
    div6=document.getElementById('shortsmain');
    div4=document.getElementById('topp');
    div7=document.getElementById('boxes');
    div8=document.getElementById('likedcontainer');
    div10=document.getElementById('youmain'); 
    if(div7.style.display==='none'){
        div6.style.display='none';
        div4.style.display='flex';
        div7.style.display='grid';
        div8.style.display='none';
        div10.style.display='none';
    }else{
        div6.style.display='none';
        div4.style.display='flex';
        div7.style.display='grid';
        div8.style.display='none';
        div10.style.display='none';
    }
}

function likeVideos(){
    div6=document.getElementById('shortsmain');
    div4=document.getElementById('topp');
    div7=document.getElementById('boxes');
    div8=document.getElementById('likedcontainer');
    div10=document.getElementById('youmain'); 
    if(div8.style.display==='none'){
        div8.style.display='flex'
        div6.style.display='none';
        div4.style.display='none';
        div7.style.display='none';
        div10.style.display='none';
        
    }
    else{
        div8.style.display='flex'
        div6.style.display='none';
        div4.style.display='none';
        div7.style.display='none';
        div10.style.display='none';
    }
}

function you(){
    div6=document.getElementById('shortsmain');
    div4=document.getElementById('topp');
    div7=document.getElementById('boxes');
    div8=document.getElementById('likedcontainer');
    div10=document.getElementById('youmain');
    if(div8.style.display==='none'){
        div10.style.display='block'
        div8.style.display='none'
        div6.style.display='none';
        div4.style.display='none';
        div7.style.display='none';
        
    }
    else{
        div10.style.display='block'
        div8.style.display='none'
        div6.style.display='none';
        div4.style.display='none';
        div7.style.display='none';
    }
}

// function Rightslide(){
//     const slide=document.getElementById('topslide');
//     slide.scrollLeft= scrollLeft +20;
// }

/*-------------------------------------------scroll using button--------------------------->*/

let container=document.getElementById('topslide');
let right=document.getElementById('right');
container.addEventListener("sroll" , (e)=>{
    e.preventDefault();
    container.scrollLeft += e.deltaY;
})

right.addEventListener("click", ()=>{
    container.style.scrollBehavior='smooth';
    container.scrollLeft +=90;
})


/*-------------------------------------------scroll using button--------------------------->*/


let histories=document.getElementById('histories');
let histright=document.getElementById('histright');
let histleft=document.getElementById('histleft');

histright.addEventListener("click",()=>{
    histories.style.scrollBehavior="smooth";
    histories.scrollLeft+=120;
    histright.style.display="none";
    histleft.style.display="block";
})
histleft.addEventListener("click",()=>{
    histories.style.scrollBehavior="smooth";
    histories.scrollLeft-=120
    histright.style.display="block";
    histleft.style.display="none";
})

let watchlist=document.getElementById('watchlist');
let watchright=document.getElementById('watchright');
let watchleft=document.getElementById('watchleft');

watchright.addEventListener("click",()=>{
    watchlist.style.scrollBehavior="smooth";
    watchlist.scrollLeft+=120;
    watchright.style.display="none";
    watchleft.style.display="block";
})
watchleft.addEventListener("click",()=>{
    watchlist.style.scrollBehavior="smooth";
    watchlist.scrollLeft-=120
    watchright.style.display="block";
    watchleft.style.display="none";
})