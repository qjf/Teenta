function clicked(){
        var user = document.getElementById('parentusername');
        var pass = document.getElementById('parentpass');

        var coruser = "kathy";
        var corpass = "123";

        if(user.value == coruser){
            if(pass.value == corpass){
              
                window.open("http://qijingfan.com/Teenta/index.html")
            }else {

                alert(" Incorrect username or password");
            }
       
        } else{
            alert(" Incorrect username or password");
        
        }
    
    }