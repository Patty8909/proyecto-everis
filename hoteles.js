var mongojs = require("mongojs");
var db = mongojs("mongodb://localhost:27017/proyectos_generales",["proyectos"]);

db.proyectos.find({},function(err,docs){
if(err){
console.log("Ocurrió un error al ejecutar la consulta",err);
}else{
console.log(docs);
}
});

var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('hello express');

});

app.listen(4000, function() {
    console.log('server express Listo!')
});









// var express = require('express');
// var app = express();
// var utilsDB  = require('./db/utils');

// var bodyParser = require('body-parser');
// var cors = require('cors');

// var corsOptions = {
//     origin: true,
//     credentials: true
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use('/public', express.static(_dirname + '/public'));

// utilsDB.connectDB(function(err,db){
//     if(err) {
//         console.log('error de conecion al BD')
//     } else {
//         var routes = require('./routes/routes');
//         routes.assignRoutes(app);

//         app.listen(3000);
//         console.log('servidor activo en el puerto: 3000');
//     }
// })
