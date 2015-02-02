//Module dependencies.
var express = require('express'),    
  http = require('http');
//Aplicación
var app = express();  

app.configure(function(){
//parsear el cuerpo del request para uso del POST.
  app.use(express.bodyParser());  
//middleware que hace posible el soporte de requests tipo PUT o DELETE 
  app.use(express.methodOverride());  
  app.use(app.router);  
});  
  

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

routes = require('./routes/Router')(app);  
   
var port = process.env.PORT || 5050; 

http.createServer(app).listen(port); 

