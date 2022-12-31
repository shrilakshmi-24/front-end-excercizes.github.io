
const pizza_topping=toppings=>{
    var message=" A tasty pizza with " ;
    toppings.forEach(element => {
        if (element !=toppings[toppings.length-1]){
         message+=element+" and ";
        }
         
        
    });
    console.log(message+ toppings[3]);
}
var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
pizza_topping(toppings);