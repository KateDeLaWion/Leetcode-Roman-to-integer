var romanToInt = function(s){

let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
let sum = 0;
s.split(""). forEach((item, i) =>{
if( map[item] < map[s[i+1]])
sum -= map[item];
else sum += map[item];
});
return sum;

};