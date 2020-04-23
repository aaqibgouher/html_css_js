function reverse_num(str){ 
    return str.split('').reverse().join('') 
 }

function new_num(rev_num_str,i){
    if(i == rev_num_str.length-1) return rev_num_str[i]; 
    else return reverse_num(rev_num_str[i].concat(rev_num_str[i+1]));
}

function break_num(num_str){
    var break_arr = [],i=0;
    rev_num_str = reverse_num(num_str);
    
    for(i=0;i<rev_num_str.length;i++){
        if(i != 2){
            break_arr.push(new_num(rev_num_str,i));
            i++;
        }
        else{
            break_arr.push(rev_num_str[i]);
        }
    }
    return break_arr.reverse();
    // console.log(break_arr);
}


function count_digit(n){
    var str = n.toString();
    return str.length;
}

function to_word(n){
    var ones = {0:"zero",1:"one", 2:"two", 3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"};
    var tens = {10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen",15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen",20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy",80:"eighty", 90:"ninty"}
    var hundred = {100:"Hundred"};
    var i=0,j=0,str = "",x = 0,y = 0,str_1 = "",str_2 = "";
    
        if(count_digit(n) == 1){
            return ones[n];
        }
        else if(count_digit(n) == 2){
            i = 0;
            for(i in tens){
                if(i == n){
                    return tens[i];
                    break;
                }
                else{
                    i = 0;
                    str = n.toString();
                    x = +(str[1]);
                    y = +(str) - x;
    
                    for(i in tens){
                        if(y == i){
                            str_1 = tens[i];
                            break;
                        }
                    }
    
                    for(j in ones){
                        if(x == j){
                            str_2 = ones[j];
                        }
                    }
    
                    return str_1.concat(" ",str_2);
    
                }
            }
        }
        else{
            i = 0;
            for(i in hundred){
                if(n == i){
                    return hundred[i];
                    break;
                }
            }
        }
        
}
    
    // n = 99;
    // var count = count_digit(n);
    // var word = to_word(n);
    


var obj = {0:"zero",1:"one", 2:"two", 3:"three",4:"four",5:"five",6:"six",7:"seven",       8:"eight",9:"nine",10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen", 20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninty", 100:"hundred",1000:"thousand"};

var no_Of_zero = {
     3 : "thousand",2 : "hundred"
};

var num = 77512,i=0;
var num_str = num.toString();

var after_break = break_num(num_str);
// console.log(after_break);  [ '12', '3', '45' ]
var final = {};
var count = 0;

for(i=0;i<after_break.length;i++){
    // count = count_digit(+(after_break[i]));
    final[i] = to_word(+(after_break[i]));
    console.log(final);
}

// console.log(final);