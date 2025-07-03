

//



let i=1;

for(i;i<=5;i++)
{

 let j_limit=6;
 let sapace_limit=1

       if (i<=6)
     {
     j_limit=10;
     sapace_limit=5;
     }

   
     
    for(space=1;space<=i-sapace_limit;space++)
    {
      process.stdout.write(" ");
    }


  
    for(j=1;j<=j_limit-i;j++)
    {
        process.stdout.write(j+" ");
    }

    console.log("")
   
}