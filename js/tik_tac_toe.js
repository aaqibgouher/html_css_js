class TikTacToe{
    constructor(){
        this.arr = [];
        this.arr.push(["-","-","-"]);
        this.arr.push(["-","-","-"]);
        this.arr.push(["-","-","-"]);
        this.row = null;
        this.column = null;
    }

    print(){
         for(var i in this.arr){
            console.log(`${this.arr[i][0]} ${this.arr[i][1]} ${this.arr[i][2]}`)
        }
    }

    insert(){
        this.arr[this.row-1][this.column-1] = "x";
        this.print();
    }

    start(){
        console.log("Game Started ..");
        // for(var i in this.arr){
        //     console.log(`${this.arr[i][0]} ${this.arr[i][1]} ${this.arr[i][2]}`)
        // }
    }

    restart(){

    }

    // x and y are tik tac toe cordinates 1-index
    // there is a 3x3 matrix (or array 2d) but i will pas x an y as index 1
    turn(x, y){
        if(x <= 3 && y <= 3){
            this.row = x;
            this.column = y;
            this.insert();
        }
        else{
            console.log("Index is Invalid..");
        }
    }
}

var t = new TikTacToe();

t.start();
// game started

t.turn(9, 9);
// index is invalid

t.turn(2,2);
// - - -
// - X -
// - - -

t.turn(1,1);
// // O - -
// // - X -
// // - - -

// t.turn(1,1);
// // already filled

// t.turn(3,1);
// // O - -
// // - X -
// // X - -

// t.turn(1,2);
// // O O -
// // - X -
// // X - -

// t.turn(1,3);
// // O O X
// // - X -
// // X - -
// // player X won

// t.turn(1,3);
// // game over please restart

// t.restart();
// // game started