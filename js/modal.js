
            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("myBtnSearch");
    
            // Get the <span> element that closes the modal
            var clos = document.getElementsByClassName("close")[0];
    
            // When the user clicks on the button, open the modal
            btn.onclick = function() {
            modal.style.display = "block";
            }
    
            // When the user clicks on <span> (x), close the modal
            clos.onclick = function() {
            modal.style.display = "none";
            }
    
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
             // Get the modal
             var modalLogin = document.getElementById("myModalLogin");
            // Get the <span> element that closes the modal
            var spanClose = document.getElementsByClassName("close")[1];
    
            // Get the button that opens the modal
            var btnLogin = document.getElementById("myBtnLogin");

            var btnLoginSignUP = document.getElementById("signup");
    
            // When the user clicks on the button, open the modal
            btnLogin.onclick = function() {
            modalLogin.style.display = "block";
            }
    
            // When the user clicks on <span> (x), close the modal
            spanClose.onclick = function() {
               modalLogin.style.display = "none";
            }

            btnLoginSignUP.onclick = function(){
               modalLogin.style.display = "none";
               modalSignup.style.display = "block";
            }
    
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modalLogin) {
                modalLogin.style.display = "none";
              }
            }

            // Get the modal
            var modalSignup = document.getElementById("myModalSignUp");
            // Get the <span> element that closes the modal
            let signUpClose = document.getElementsByClassName("close2")[0];

            var btnLoginSignIn = document.getElementById("signin");
      
              // When the user clicks on <span> (x), close the modal
              signUpClose.onclick = function(){
                 modalSignup.style.display = "none";
              }

              btnLoginSignIn.onclick = function(){
                modalSignup.style.display = "none";
                modalLogin.style.display = "block";
             }
      
              // When the user clicks anywhere outside of the modal, close it
              window.onclick = function(event) {
              if (event.target == modalSignup) {
                  modalSignup.style.display = "none";
                }
              }