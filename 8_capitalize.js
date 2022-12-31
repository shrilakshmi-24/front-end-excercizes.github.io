var arr = ["shrilakshmi","shenoy", "from","kedinje","karkala"];

function capitalizeFirstLetter(word) {

  return word.toUpperCase();

}

var newArr = arr.map(capitalizeFirstLetter);

console.log(newArr);
