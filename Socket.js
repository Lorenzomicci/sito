var websock = require('ws').Server,
wss = new websock({  //istanzio l'oggetto
 port:3001
 });
 
 var utenti = new Array();
 var stringanick = "#"
 var http = require('http');
 var server = http.createServer(function(req,res){
   res.end("server on");
   console.log(req);
   
});//server

server.listen(3000);


   wss.on('connection',function(ws){
     console.log("utente connesso");
     
      ws.on('message', function(message){
           if(message.indexOf(stringanick) != -1){
              utenti.push(message);
              console.log(utenti[0]);
           }
      });

  });
     
   
/*
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE "html">");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(80);

--------------------------------------------------------
if(str.indexOf(substr) > -1) {

}

*/



































































