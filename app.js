var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
const routes=require('./routes/route');

var app=express();
require('./models/login');
require('./models/result');
require('./models/user');


mongoose.connect('mongodb://localhost:27017/clgproject');
mongoose.connection.on('connected',()=>{
    console.log("connected to db");
});
mongoose.connection.on('error',(err)=>{
console.log("Some error occured while connecting with db:"+err);
});



const port=8001;
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/api',routes);
// app.get('/',(req,res)=>{
// res.send("hahahaha");
// });

app.listen(port,()=>{
console.log("server started at port:",port);
});