$(document).ready(function(){
    $("#btn").click(function(){
        
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
            var id = $("#input2").val();
            var pass = $("#input4").val();

            if(!id) throw "Email is Required.";
            if(!pass) throw "Passwors is Requried.";

        }
        catch(e){
            alert(e)
        }

    })
    
})