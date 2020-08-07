var reverseString = function(s) {
   for(let i = 0; i < s.length / 2; i++){
      [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
   }
};

var reverseString = function(s) {
   const len = s.length;
   for (let i = 0; i < len / 2; i++) {
       temp = s[i];
       s[i] = s[len - 1 - i];
       s[len - 1 - i] = temp;
   }
};

/* js reverse API
var reverseString = function(s) {
  s.reverse()
};

*/
