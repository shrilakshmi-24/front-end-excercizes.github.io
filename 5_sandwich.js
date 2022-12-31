const sandwichCalculator=bread=>{
    if(bread<=1){
       console.log("Sandwich cannot be prepared");
   }
   else{
   console.log("total sandwiches are "+parseInt(bread/2)+ " and "+ bread%2+ " bread is left");
       
   }
}

const sandwichCalculator_cheese=(bread,cheese)=>{
   if(bread<=1|cheese<1){
       console.log("Sandwich cannot be prepared");
   }
   else{
        var count=0;
   while( bread >1 && cheese>0){
       bread-=2;
       cheese-=1;
       count+=1;
   }
  
       
   }
   console.log("Total Sandwiches with cheese are "+ count);
}
sandwichCalculator(3);
sandwichCalculator_cheese(10,2);
