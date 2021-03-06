$(document).ready(function(){
    
    if (localStorage.getItem('checkout') == null) {  
        localStorage.setItem('checkout',0);
    }
    $("#checkout" ).html(localStorage.getItem('checkout'));

    var loggedin=localStorage.getItem('loggedIn'); 

      
    if (loggedin==1) {
        $("#loginlogout" ).html("Logout" );
        $( "#accountdetails" ).removeClass( "d-none" );   
         $( "#accountdetails" ).removeClass( "show" ); 
        
    } else{
        $( "#accountdetails" ).addClass( "d-none" );
        $( "#loginlogout" ).html("Login" );
        $("#loginlogout" ).prop("href", "login.html");
    } 

        
    if (localStorage.getItem('userdetails') === null) {  
        var userDetails = {firstName:"Shayaan", lastName:"Khan", dob:"2000-08-26",address1:"Kevinsfort Heath", address2:"Strandhill Road", address3:"Co. Sligo"};
        localStorage.setItem('userdetails',JSON.stringify(userDetails));
    } else {
        userDetails=JSON.parse(localStorage.getItem('userdetails'));
    }

    if ($('#udetails').length > 0) {
        $('input[name="firstname"]').val(userDetails.firstName);         
        $('input[name="lastname"]').val(userDetails.lastName);
        $('input[name="dob"]').val(userDetails.dob);
        $('input[name="address1"]').val(userDetails.address1);
        $('input[name="address2"]').val(userDetails.address2);
        $('input[name="address3"]').val(userDetails.address3);
    }
      
    $("#loginlogout").button().click(function(){
        if (loggedin==1) {
            localStorage.setItem('loggedIn',0);
            window.location.href = "login.html";
        }  else 
            window.location.href = "login.html";

    });       
      
      
    $('form[name="login"]' ).submit(function( event ) {
        var email=$('input[name="email"]').val();
        var password =$('input[name="password"]').val();
        if (email=="S.Khan@email.com" && password=="thegamefactory")  {   
            localStorage.setItem('loggedIn',1);    
            window.location.href = "shop.html";
        }
        else {
            localStorage.setItem('loggedIn',0);
            $( "#loginerror" ).addClass( "d-block" );
        }
        return false;
    });     


    $('form[name="userdetails"]' ).submit(function( event ) {
        userDetails.firstName=$('input[name="firstname"]').val();
        userDetails.lastName=$('input[name="lastname"]').val();
        userDetails.address1=$('input[name="address1"]').val(); 
        userDetails.address2=$('input[name="address2"]').val();   
        userDetails.address3=$('input[name="address3"]').val();    

        localStorage.setItem('userdetails',JSON.stringify(userDetails));
        return false;
    }); 

    $('form[name="paymentdetails"]' ).submit(function( event ) {
        var cardnumber=$('input[name="cardnumber"]').val();
        if (cardnumber=="1234 5678 8765 4321") {
            $( "#payment-failure" ).addClass( "d-none" );
            $( "#payment-success" ).removeClass( "d-none" );
            $( "#buy-button" ).addClass( "d-none" );
            var total=0;
            localStorage.setItem('checkout',total);
            $( "#checkout" ).html(total);
            
        } else {
            $( "#payment-failure" ).removeClass( "d-none" );
        }
        return false;
    }); 
      

    $(".addtocart").click(function(){
        var total=localStorage.getItem('checkout');
        total++;
        localStorage.setItem('checkout',total);
        $("#checkout" ).html(total );
    });
    
   $('.carousel').carousel({
  interval: 2000
});
});