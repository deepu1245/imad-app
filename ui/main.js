var button = document.getElementById("counter");

button.onclick = function() {
    
    var request = new xmlHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState === xmlHttpRequest.DONE)  
      {
          if(request.status == 200)
          {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }
    };
    request.open('GET','deepakbht67.imad.hasura-app.io',true);
    request.send(null);
};