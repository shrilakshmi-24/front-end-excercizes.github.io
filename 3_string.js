// const greeting="Hello";
// const name="World";
// console.log(greeting+" "+ name);
// console.log((greeting+name).replaceAll('l','1'));
// str=str.replace(/l/g,'1').replace(/o/g,'0');
// reversed=(greeting+name).split("").reverse();
// console.log(reversed);
// //joint=reversed.join("");
// //console.log(joint);
// newstring=greeting+" "+name;
// console.log(newstring.toUpperCase())


greet="hello ";
name1="world";
str=greet+name1;
str1=str.replace(/l/g,'1').replace(/o/g,'0');
console.log(str1);
var newstr=str.split('').reverse().join('');
console.log(newstr); 
console.log(str.toUpperCase());