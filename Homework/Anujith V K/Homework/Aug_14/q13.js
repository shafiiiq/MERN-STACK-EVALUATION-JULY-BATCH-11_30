function diff(a=[])
{
var array=a.sort((x,y)=>x-y)
var lowest=a[0]
var heighest=a[a.length-1]
dif=heighest-lowest
console.log(dif);
}
diff(n=[10,20,50,70,5,80])