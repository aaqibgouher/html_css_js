class TikTacToe{
    constructor(){

    }

    start(){

    }

    restart(){

    }

    // x and y are tik tac toe cordinates 1-index
    // there is a 3x3 matrix (or array 2d) but i will pas x an y as index 1
    turn(x, y){

    }
}

var t = TikTacToe();

t.start();
// game started

t.turn(9, 9);
// index is invalid

t.turn(2,2);
// - - -
// - X -
// - - -

t.turn(1,1);
// O - -
// - X -
// - - -

t.turn(1,1);
// already filled

t.turn(3,1);
// O - -
// - X -
// X - -

t.turn(1,2);
// O O -
// - X -
// X - -

t.turn(1,3);
// O O X
// - X -
// X - -
// player X won

t.turn(1,3);
// game over please restart

t.restart();
// game started