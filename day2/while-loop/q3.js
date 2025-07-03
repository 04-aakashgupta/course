//Qdisplay 5 table 

let i=1;
let add=true;

while(i<=20)
{

 console.log(i);
    if(add)
    {
        i=i+3;
      add=false;
       
    }

    else
    {
         i--;
  
          add=true;

    }

    console.log(",");

}