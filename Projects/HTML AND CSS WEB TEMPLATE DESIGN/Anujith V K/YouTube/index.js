var l=document.getElementById('ss2');
var j = document.getElementById('s2');
var i = document.getElementById('s1');
var k = document.getElementById('ss1');
var m = document.getElementById('t1');
var n = document.getElementById('ll');
var p = document.getElementById('sm')
var q = document.getElementById('sm2')
var r =document.getElementById('mm')
function hide() {
    if (i.style.display === 'flex') 
        {
        k.style.gridTemplateColumns = 'repeat(3,1fr)';
        i.style.display = 'none';
        j.style.display = 'flex';
        q.style.gridTemplateColumns = 'repeat(3,1fr)';
        q.style.gridTemplateRows = 'repeat(3, 1fr)'; 

    } else {
        k.style.gridTemplateColumns = 'repeat(4, 1fr)'; 
        k.style.gridTemplateRows = 'repeat(2, 1fr)';
        i.style.display = 'flex';
        j.style.display = 'none';
        q.style.gridTemplateColumns = 'repeat(4,1fr)';
        q.style.gridTemplateRows = 'repeat(2, 1fr)'; 

    }
}


function h(){
    
    if(k.style.display === 'none')
    {
        k.style.display = 'grid';
        l.style.display = 'none';
        t1.style.display = 'flex';
        ll.style.display = 'none';
        p.style.display = 'none'
        r.style.display ='none'
        
    }
    else
    {
        k.style.display ='grid';
        l.style.display = 'none';
        t1.style.display = 'flex';
        ll.style.display = 'none';
        p.style.display = 'none'
        r.style.display ='none'
    }

}

function s(){
    if(l.style.display === 'none')
    {
        l.style.display = 'flex';
        k.style.display = 'none';
        t1.style.display = 'none';
        ll.style.display = 'none';
        p.style.display = 'none'
        r.style.display ='none'
    }
    else{
        l.style.display = 'flex';
        k.style.display = 'none';
        t1.style.display = 'none';
        ll.style.display = 'none';
        p.style.display = 'none'
        r.style.display ='none'
    }

}

function liked(){
    if(ll.style.display === 'none')
    {
        ll.style.display = 'flex';
        l.style.display = 'none';
        k.style.display = 'none';
        t1.style.display = 'none';
        p.style.display = 'none'
        r.style.display ='none'
    }
    else{
        ll.style.display = 'flex';
        l.style.display = 'none';
        k.style.display = 'none';
        t1.style.display = 'none';
        p.style.display = 'none'
        r.style.display ='none'
    }
}

 function sub(){
    if(p.style.display === 'none')
        {
            k.style.display = 'none';
            l.style.display = 'none';
            t1.style.display = 'none';
            ll.style.display = 'none';
            p.style.display = 'flex'
            r.style.display ='none'
        }
        else
        {
            k.style.display ='none';
            l.style.display = 'none';
            t1.style.display = 'none';
            ll.style.display = 'none';
            p.style.display = 'flex'
            r.style.display ='none'
        }
    }

    function uh(){
        if(mm === 'none')
        {
            r.style.display ='flex'
            k.style.display ='none';
            l.style.display = 'none';
            t1.style.display = 'none';
            ll.style.display = 'none';
            p.style.display = 'none';
        }
        else{
            r.style.display ='flex'
            k.style.display ='none';
            l.style.display = 'none';
            t1.style.display = 'none';
            ll.style.display = 'none';
            p.style.display = 'none';
        }
    }


