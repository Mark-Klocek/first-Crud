
const express = require('express')
const app = express()
const connectString = 'mongodb+srv://markklocek:Lolwat123@cluster0.yd0mb8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const MongoClient = require('mongodb').MongoClient


MongoClient.connect(connectString)
    .then(
    console.log('Connected to Database'))
    .catch(err=>console.error(err))
app.use(express.urlencoded({extended:true}))


app.listen(8000,function(){
    console.log('listening on 8000')
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/quotes',(req,res)=>{
    console.log(req.body)
})