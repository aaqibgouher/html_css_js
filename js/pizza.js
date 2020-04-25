class Pizza{
    constructor(name){

    }

    // this will take item object and add in a cart array
    add_item(item){

    }

    // this will take item name and remove the item from cart
    remove_item(name){

    }

    // this will print the invoice detail
    get_cart(){

    }
}

var p = new Pizza("nazish");
p.add_item({
    name: "margaritha",
    qty: 2,
    price: 100
});
p.add_item({
    name: "corn",
    qty: 1,
    price: 200
});
p.add_item({
    name: "chichen barbeque",
    qty: 3,
    price: 300
});
p.get_cart();
p.remove_item("margaritha");
p.get_cart();

// login by nazish

// item added - margaritha | 2 | 100 | 200
// item added - corn | 1 | 200 | 200
// item added - chichen barbeque | 3 | 300 | 900

// invoice
// item | qty | price | amount
// margaritha | 2 | 100 | 200
// corn | 1 | 200 | 200
// chichen barbeque | 3 | 300 | 900
// total amount => 1300

// item removed

// invoice
// item | qty | price | amount
// corn | 1 | 200 | 200
// chichen barbeque | 3 | 300 | 900
// total amount => 1100