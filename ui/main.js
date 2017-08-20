var button = document.getElementById("counter");

button.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE)  
      {
          if(request.status === 200)
          {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }
    };
    request.open("GET","http://deepakbht67.imad.hasura-app.io",true);
    request.send(null);
};

var request = new XMLHttpRequest();
request.onreadystatechange = function(){
if (request.readyState === XMLHttpRequest.DONE) {
//Take Some Action
if (request.status === 200) { 
var counter = request.responseText; 
var span = document.getElementById('count');
span.innerHTML = counter.toString();
} 
} 
}; 
request.open("GET", "http://sethu18rr.imad.hasura-app.io/counter", true);
request.send(); 
console.log('finished');
}