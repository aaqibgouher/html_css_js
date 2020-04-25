class Name{
    constructor(x,y){
        this.f_name = x;
        this.l_name = y;
    }
    get_full_name(){
        return this.f_name+" "+this.l_name;
    }

}

var obj = new Name("Aaqib","Gouher");
console.log(obj.get_full_name());