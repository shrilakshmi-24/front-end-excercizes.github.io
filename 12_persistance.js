function persistance(num) {
    if (num<10) {
      return 0;
    }
    var mul = 1;
    var str = num.toString().split("");
   
    for (var i = 0; i < str.length; i++) {
      mul *= str[i];       
    }
    return 1+persistance(mul);
}
console.log( persistance(999));