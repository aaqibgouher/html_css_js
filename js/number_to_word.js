function str_reverse(n){
    return n.split("").reverse().join("");
}

function get_array(n){
    var arr = [];
    n = str_reverse(n);
    for(var i=0;i<n.length;i++){
        if(i!=2){
            arr.push(str_reverse([n[i], n[i+1]].join("")));
            i++;
        }else{
            arr.push(n[i]);
        }
    }
    return arr.reverse();
}

function convert_to_word(n){
    var words = {
        0: "zero", 1: "one",  2: "two",  3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
        11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninty"
    };

    if(n == 0) return "";
    else{
        if(n[0] == 0) n=n[1];
        
        if(n in words){
            return words[n];
        }else{
            var x = `${n[0]}0`;
            var y = n[1];
            return [words[x], words[y]].join(" ");
        }
    }
}

function add_placer(word, i, n){
    var placer = ["", "hundred", "thousand", "lakh", "crore"];

    return (placer[n-i-1] && word) ? [word, placer[n-i-1]].join(" ") : word;
}

function convert(n){
    n = n.toString();
    var num = get_array(n);
    console.log(num);
    for(i in num){
        word = convert_to_word(num[i]);
        word = add_placer(word, i, num.length);
        num[i] = word;
    };
    console.log(num);
    num = num.filter((value) => {
        return value;
    })
    console.log(num);
    return num.join(" ");
}

// console.log(convert(12345));
console.log(convert(101500));
// console.log(convert(59));
// console.log(convert(2));
// console.log(convert(10));
// console.log(convert(13));
// console.log(convert(19));
// console.log(convert(20));
// console.log(convert(50));
// console.log(convert(55));
// console.log(convert(33));
// console.log(convert(99));
// console.log(convert(100));