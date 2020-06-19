$(document).ready(function(){

    my_arr = [];
    my_obj = {};

    $("#btn4").click(function(){

        function is_email(id){
            var pattern = /^([a-z0-9_\-\.]+)@gmail\.com$/g;
            return pattern.test(id);
        }

        function is_password(password){
            var pattern = /^[0-9_\-\.@]{6,12}$/g;
            return pattern.test(password);
        }

        function is_registered(email){
            var flag = 0;
            for(var i of my_arr){
                if(i.user_email == email) flag = 1;
            }
    
            if(flag) return true;
            else return false;
        }

        try{
            // console.log(my_arr)
            var id = $("#input2").val();
            var pass = $("#input4").val();
            var name = $("#input6").val();
            if(!id) throw "Email is Required.";
            if(!is_email(id)) throw "Correct Email is Required."
            if(is_registered(id)) throw "Email Id has already taken."
            if(!pass) throw "Passwors is Requried.";
            if(!is_password(pass)) throw "Correct Password is Required."
            if(!name) throw "Name is also requried.";
            if(id && pass && name){
                my_obj = {
                    user_email  : id,
                    user_pass : pass,
                    user_name : name 
                }
                my_arr.push(my_obj)
                console.log(my_obj)
                console.log(my_arr)
                $("#input2").val("");
                $("#input4").val("");
                $("#input6").val("");   
                throw "Successfully Registered.";           
            }
            // console.log(my_obj)
            // if(id && pass && name) throw "Successfully Logged-In.";
            
        }
        catch(e){
            alert(e)
        }
    })
})


