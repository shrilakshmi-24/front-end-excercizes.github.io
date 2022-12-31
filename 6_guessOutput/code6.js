var a = 10;
(function() {
 var a = 15;
 x = function() {
   console.log(a);
 }
})();
x();
//outputs 15