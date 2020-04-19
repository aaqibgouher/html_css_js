var students = [
    {
        first_name : "nazish",
        last_name : "fraz",
        age : 25
    },
    {
        first_name : "aaqib",
        last_name : "gouher",
        age : 19
    }
];

console.log(students);
console.log(students[1]);
console.log(students[1]["first_name"]);
console.log(students[1].first_name);

students.forEach(function(value, index){
    console.log(value);
    for(obj in value){
        console.log([obj, value[obj]]);
    }
})