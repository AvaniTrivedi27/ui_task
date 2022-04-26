var mongoose = require('mongoose')
var express = require('express')
var bodyParser =require('body-parser')
var route = require('./routes')


mongoose.connect('mongodb://localhost:27017/myapp').then(()=>{
    console.log('connected')

    app = express();
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    app.listen((process.env.PORT||3000),()=>{
        console.log('server started')
    })
}).catch((e)=>{
    console.log(e.toString())
})

