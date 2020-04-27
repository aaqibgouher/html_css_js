class Auth{
    constructor(){

    }

    // email should be valid
    // password length should be atleast 6 to atmost 12 and only alphanumeric
    // full_name should be max 20 char
    register(email, password, full_name){

    }

    // email should be valid
    // password length should be atleast 6 to atmost 12 and only alphanumeric
    login(email, password){

    }

    // password length should be atleast 6 to atmost 12 and only alphanumeric
    change_password(old_password, new_password){

    }

    logout(){
        
    }
}

var auth = new Auth();
auth.login("", "");
// email is required
auth.login("nfraz007@gmail.com", "123456");
// user does not exist
auth.change_password("123456", "123456789");
// user is not logged in
auth.register("nfraz007@gmail.com", "123456", "Nazish Fraz");
// successfully registed
auth.login("nfraz007@gmail.com", "sdsdsdsd");
// incorrect password
auth.login("nfraz007@gmail.com", "123456");
// successfully logged in
auth.change_password("123456", "123456789");
// successfully changed the password
auth.logout();
// successfully logged out