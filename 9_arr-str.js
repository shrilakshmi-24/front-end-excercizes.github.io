"use strict";
const ps=require("prompt-sync");
const prompt=ps();
const n=prompt("Enter No.of elements in Array");
console.log(n);
var len=0;
const names=[];

console.log("Enter names");
for(let i=0;i<n;i++){
    names[i]=prompt();
    var k=names[i].length;
    if(k>len){
        len=k;
    }
}
console.log(len);
console.log("*".repeat((len+4)));
for(let m=0;m<n;m++){
    for(let j=0;j<n;j++){
        // console.log(m);
        var x=names[m].length;
        // console.log(i);
    }
    console.log("* "+names[m]+" ".repeat(len-x+1)+"*");
    // console.log("\n");
}
console.log("*".repeat((len+4)));


