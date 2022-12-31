// var a=[1,5,4,6,8];
// var value=3;
// // var a=a.sort();
// for( let i=0;i<a.length;i++){
//     if(a[i]>value){
//         console.log("The nearest large value of "+value+ "is "+a[i]);
//         break;
//     }
// }
let arr = [1,4,3,2,5,7]
let Pos = 999;
let Value = 0;
let Current = 0;
let x = 7;
for(let i=0;i<arr.length;i++){
    if(x===arr[i]){
        Current = i
    }
    
}

for(let i=0;i<arr.length;i++){
    if((arr[i]>x) && (Current!==i) ){
        if(Math.abs(Pos-Current) >=Math.abs(i-Current)){
            Value = arr[i]
            maxPos = i
        }
    }
        
}
if(Value==0){
    console.log("There is no larger no. than " +x+ " in the array")
}
else{
    console.log(Value)
}
