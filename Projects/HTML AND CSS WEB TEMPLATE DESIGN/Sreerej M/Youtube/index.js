var i=document.getElementById('scroll-1');
var j=document.getElementById('scroll-2');
var k=document.getElementById('home');
var l=document.getElementById('shorts');
var m=document.getElementById('likedvideos');
var n=document.getElementById('subcriptions');
var y=document.getElementById('you')




 function scroll_bar() {
  if(j.style.display === 'flex')
  {
    j.style.display='none';
    i.style.display='flex';
    // m.style.display='none';

  }

  else{
    j.style.display='flex';
    i.style.display='none';
    // m.style.display='none';
  }

}

function show() {
 

  if(l.style.display === 'none')
  {
    k.style.display='flex';
    l.style.display='none';
    m.style.display='none';
    n.style.display='none';
    y.style.display='none';
  }

  else
    {
      k.style.display='flex';
      l.style.display='none';
      m.style.display='none';
      n.style.display='none';
      y.style.display='none';
    }
  
}
function showshorts(){
  if(l.style.display === 'none')
  {
    
    l.style.display= 'flex';
    k.style.display= 'none';
    m.style.display='none';
    n.style.display='none';
    y.style.display='none';
    
  }

  else
    {
      l.style.display='flex';
      k.style.display='none';
      m.style.display='none';
      n.style.display='none';
      y.style.display='none';
    }
}

function showlikedvideoes(){
  if(m.style.display ==='none'){
    m.style.display='flex';
    l.style.display='none';
    k.style.display='none';
    n.style.display='none';
    y.style.display='none';
  }

  else{
    m.style.display='flex';
    l.style.display='none';
    k.style.display='none';
    n.style.display='none';
    y.style.display='none';
  }
}

function show_subscription(){
  if(n.style.display ==='none')
  {
    n.style.display='flex';
    m.style.display='none';
    l.style.display='none';
    k.style.display='none';
    y.style.display='none';
  }

  else{
    n.style.display='flex';
    m.style.display='none';
    l.style.display='none';
    k.style.display='none';
    y.style.display='none';
  }
}


function showyou(){
  if(y.style.display ==='none')
  {
    y.style.display='flex';
    n.style.display='none';
    m.style.display='none';
    l.style.display='none';
    k.style.display='none';
  }

  else{
    y.style.display='flex';
    n.style.display='none';
    m.style.display='none';
    l.style.display='none';
    k.style.display='none';
  }
}


