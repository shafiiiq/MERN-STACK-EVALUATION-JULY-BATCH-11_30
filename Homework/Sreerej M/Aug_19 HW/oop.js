
class student{
  constructor(name,age){
    this.name=name
    this.age=age
  }

  display(){
    console.log(this.name,this.age)
    }
  
}

var st1=new student('sreerej',21)
st1.display()