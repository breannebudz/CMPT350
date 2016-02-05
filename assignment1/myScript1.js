function onstartRun() {
    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=3&format=json", false );
    xmlHttp.send( null );
    var text= xmlHttp.responseText;

var obj = JSON.parse(text);
    
    window.document.getElementById("frontDescription").innerHTML =
        obj;
 
}

window.onload = onstartRun;