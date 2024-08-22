var a=[[1,4,2],
       [2,4,3]]
var b=[[2,3],[3,4],[4,7]]

const rowa=a.length
const cola=a[0].length
const rowb=b.length
const colb=b[0].length
var result=[]

if(cola === rowb)
{
  for(i=0;i<rowa;i++)
    {
      result[i]=[]
      for(j=0;j<colb;j++)
      {
        result[i][j]=0
      }
    }
    
    for(i=0;i<rowa;i++)
      {
        for(j=0;j<colb;j++)
        {
          for(k=0;k<rowa;k++)
          {
            result[i][j]=result[i][j]+(a[i][k]*b[k][j])
          }
        }
      }
    
    console.log(result);    
}

else{
  console.log("can't multiply");
  
}
