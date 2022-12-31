// let depth = (value) =>{
//     if(Array.isArray(value)){
//         // console.log(value.map(depth));
//         return 1 + Math.max(0, value.map(depth))

//     }
//     else{
//         return 0
//     }
// }
// console.log(depth([[]]))
function findDepth(arr, depth = 1) {
  let maxDepth = depth;
  for (const element of arr) {
    if (Array.isArray(element)) {
      const newDepth = findDepth(element, depth + 1);
      if (newDepth > maxDepth) {
        maxDepth = newDepth;
      }
    }
  }
  return maxDepth;
}
console.log(findDepth([[[[]]]]))