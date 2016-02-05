function onstartRun() {
          
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", "https://randomuser.me/api/", false );
          xmlHttp.send( null );
          var text= xmlHttp.responseText;
      
          var obj = JSON.parse(text);
          document.getElementById("photo").innerHTML =
      	'<img src="' + obj.results[0].user.picture.medium 
      	+ '"alt="portrait" width="128" height="128">' ;
      
          document.getElementById("description").innerHTML =
              obj.results[0].user.name.title + " "
              
              + obj.results[0].user.name.first + " "
              
              + obj.results[0].user.name.last + '<br>'
      	+ "Phone: " + obj.results[0].user.phone + '<br>'
      	+ "Cell: " + obj.results[0].user.cell + '<br>'
      	+ obj.results[0].user.email + '<br>'
      	+ obj.results[0].user.location.street + '<br>'
      	+ obj.results[0].user.location.city + ", "
      	+ obj.results[0].user.location.state + '<br>'
      	+ obj.results[0].user.location.zip;
       
      }
      
      window.onload = onstartRun;