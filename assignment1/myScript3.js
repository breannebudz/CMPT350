function validateForm() {

          x = document.forms["myForm"]["firstandlastname"].value;
          if (x == null || x == "") {
              alert("Complete your information.");
              return false;
          }
	  x = document.forms["myForm"]["emailaddress"].value;
          if (x == null || x == "") {
              alert("Complete your information.");
              return false;
          }
          x = document.forms["myForm"]["phonenumber"].value;
          if (x == null || x == "") {
              alert("Complete your information.");
              return false;
          }
          x = document.forms["myForm"]["dateinput"].value;
          if (x == null || x == "") {
              alert("Complete your information.");
              return false;
          }
          x = document.forms["myForm"]["message"].value;
          if (x == null || x == "") {
              alert("Complete your information.");
              return false;
          }
         
          alert("Your information is correct.");
     }