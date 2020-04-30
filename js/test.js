var arr = [];
arr.push(["1","2","3"]);
arr.push(["4","5","6"]);
arr.push(["7","8","9"]);

arr[1][1] = "7";

for(var i in arr){
    console.log(`${arr[i][0]} ${arr[i][1]} ${arr[i][2]}`)
}

// process.stdout.write("hello ");
// process.stdout.write("world.");
