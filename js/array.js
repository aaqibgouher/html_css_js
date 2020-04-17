var fruits = ["apple", "mango", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits.push("orange"));
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("kkk"));

for(i=0;i<fruits.length;i++){
    console.log(i + " " + fruits[i]);
}

fruits.forEach(function(value, index){
    console.log([value, index]);
})

console.log(fruits.sort());

var arr = [1,2,3,4,5];
arr_square = arr.map(function(value){
    return value * value;
});
console.log(arr_square);

arr_filter = arr.filter(function(value){
    return value >= 3;
});
console.log(arr_filter);

arr_reduce = arr.reduce(function(prev, current){
    return prev + current;
});
console.log(arr_reduce);